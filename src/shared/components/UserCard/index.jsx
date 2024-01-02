import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const UserCard = ({
  name = "user name",
  email = "emai@gmail.coml",
  phone = "055-555-55-55",
  onClick,
}) => {
  return (
    <Card
      style={{
        width: "18rem",
      }}
    >
      <img
        alt="Sample"
        className="p-3"
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
      />
      <CardBody>
        <CardTitle tag="h5">{name}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          <IoMdMail color="green" /> {email}
        </CardSubtitle>
        <CardText>
          <FaPhoneAlt color="red" /> {phone}
        </CardText>
        <Button color="dark" block onClick={onClick}>
          Button
        </Button>
      </CardBody>
    </Card>
  );
};

export default UserCard;
