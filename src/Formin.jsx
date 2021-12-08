import React, { useState, useEffect } from "react";
import { Form, Row, Col } from "react-bootstrap";
function Formin() {
  const localNotes = localStorage.getItem("fname");
  const localName = localStorage.getItem("lname");
  const localAddress = localStorage.getItem("address");
  const localEmail = localStorage.getItem("email");
  const localPhone = localStorage.getItem("phone");
  const [user, setUser] = useState(
    localNotes,
    localName,
    localAddress,
    localEmail,
    localPhone
  );
  //   const { localName, localAddress, localEmail, localPhone } = user;

  const namechange = (e) => {
    localStorage.setItem("fname", e.target.value);
    setUser(e.target.value);
  };
  const lastchange = (e) => {
    localStorage.setItem("lname", e.target.value);
    setUser(e.target.value);
  };
  const addresschange = (e) => {
    localStorage.setItem("address", e.target.value);
    setUser(e.target.value);
  };
  const emailchange = (e) => {
    localStorage.setItem("email", e.target.value);
    setUser(e.target.value);
  };
  const phonechange = (e) => {
    localStorage.setItem("phone", e.target.value);
    setUser(e.target.value);
  };
  //   useEffect(() => {
  //     localStorage.setItem("fname", JSON.stringify(fname));
  //     localStorage.setItem("lname", JSON.stringify(lname));
  //     localStorage.setItem("address", JSON.stringify(address));
  //     localStorage.setItem("email", JSON.stringify(email));
  //     localStorage.setItem("phone", JSON.stringify(phone));
  //   }, [fname, lname, address, email, phone]);
  //   const localNotes = localStorage.getItem("notes");
  //   const [notes, setNotes] = useState(localNotes);

  //   const handleChange = e => {
  //     localStorage.setItem("notes", e.target.value);
  //     setNotes(e.target.value);
  //   };

  //   return (
  //     <form>
  //       <label for="pad">
  //         <span>Add your notes</span>
  //         <textarea
  //           rows="10"
  //           placeholder="Add notes here 📝"
  //           name="pad"
  //           value={notes}
  //           onChange={handleChange}
  //         />
  //       </label>
  //     </form>
  return (
    <div>
      <Form>
        <Row>
          <h5>Firstly, let's add your contact details!</h5>
          <h6 style={{ color: "#b6b4b4", fontWeight: "400" }}>
            Make sure employers know how to get in touch with you to arrange
            interviews.
          </h6>
          <Col>
            <Form.Label>First name</Form.Label>
            <Form.Control
              placeholder="First name"
              name="fname"
              value={localNotes}
              onChange={(e) => namechange(e)}
            />
            <Form.Text className="text-muted">e.g Frank</Form.Text>
          </Col>
          <Col>
            <Form.Label>Last name</Form.Label>
            <Form.Control
              placeholder="Last name"
              name="lname"
              value={localName}
              onChange={(e) => lastchange(e)}
            />
            <Form.Text className="text-muted">e.g Brown</Form.Text>
          </Col>
        </Row>
        <Row className="mb-3"></Row>
        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address </Form.Label>
          <Form.Control
            placeholder="Apartment, studio, or floor"
            name="address"
            value={localAddress}
            onChange={(e) => addresschange(e)}
          />
          <Form.Text className="text-muted">e.g Molyko</Form.Text>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={localEmail}
            onChange={(e) => emailchange(e)}
          />
          <Form.Text className="text-muted">e.g johnDoe@.com</Form.Text>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="e.g 237-698-000-980"
            name="phone"
            value={localPhone}
            onChange={(e) => phonechange(e)}
          />
        </Form.Group>
      </Form>
    </div>
  );
}

export default Formin;
