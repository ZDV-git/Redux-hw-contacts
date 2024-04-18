import { memo } from "react";
import { CommonPageProps } from "./types";
import { Col, Row } from "react-bootstrap";
import { GroupContactsCard } from "src/components/GroupContactsCard";

export const GroupListPage = memo<CommonPageProps>(({ allGroupContacts }) => {
  return (
    <Row xxl={4}>
      {allGroupContacts.map((groupContacts) => (
        <Col key={groupContacts.id}>
          <GroupContactsCard groupContacts={groupContacts} withLink />
        </Col>
      ))}
    </Row>
  );
});
