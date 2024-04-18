import React, { memo, useState } from "react";
import { CommonPageProps } from "./types";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { FilterForm, FilterFormValues } from "src/components/FilterForm";
import { ContactDto } from "src/types/dto/ContactDto";

export const ContactListPage = memo<CommonPageProps>(
  ({ allContacts, allGroupContacts }) => {
    const [contacts, setContacts] = useState<ContactDto[]>(allContacts);
    const onSubmit = (fv: Partial<FilterFormValues>) => {
      let findContacts: ContactDto[] = allContacts;

      if (fv.name) {
        const fvName = fv.name.toLowerCase();
        findContacts = findContacts.filter(
          ({ name }) => name.toLowerCase().indexOf(fvName) > -1
        );
      }

      if (fv.groupId) {
        const groupContacts = allGroupContacts.find(
          ({ id }) => id === fv.groupId
        );

        if (groupContacts) {
          findContacts = findContacts.filter(({ id }) =>
            groupContacts.contactIds.includes(id)
          );
        }
      }

      setContacts(findContacts);
    };

    return (
      <Row xxl={1}>
        <Col className="mb-3">
          <FilterForm
            groupContactsList={allGroupContacts}
            initialValues={{}}
            onSubmit={onSubmit}
          />
        </Col>
        <Col>
          <Row xxl={4} className="g-4">
            {contacts.map((contact) => (
              <Col key={contact.id}>
                <ContactCard contact={contact} withLink />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    );
  }
);
