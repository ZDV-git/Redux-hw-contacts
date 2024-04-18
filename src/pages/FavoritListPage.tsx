import React, { memo, useEffect, useState } from "react";
import { CommonPageProps } from "./types";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { ContactDto } from "src/types/dto/ContactDto";

export const FavoritListPage = memo<CommonPageProps>(
  ({ allFavoriteContacts, allContacts }) => {
    const [contacts, setContacts] = useState<ContactDto[]>([]);
    useEffect(() => {
      setContacts(() =>
        allContacts.filter(({ id }) => allFavoriteContacts.includes(id))
      );
    }, [allContacts, allFavoriteContacts]);
    return (
      <Row xxl={4} className="g-4">
        {contacts.map((contact) => (
          <Col key={contact.id}>
            <ContactCard contact={contact} withLink />
          </Col>
        ))}
      </Row>
    );
  }
);
