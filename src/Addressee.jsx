import React, { useState, useEffect } from "react";
import { Form, Row, Col } from "react-bootstrap";

function Addressee() {
  const localTitle = localStorage.getItem("title");
  const localName1 = localStorage.getItem("fname1");
  const localName2 = localStorage.getItem("lname1");
  const localRegion = localStorage.getItem("region");
  const localCity = localStorage.getItem("city");
  const localCompany = localStorage.getItem("company");
  const [formData, setFormData] = useState(
    localTitle,
    localName1,
    localName2,
    localRegion,
    localCity,
    localCompany
  );
  // const { fname1, lname1, title, company, city, region } = formData;
  const titlechange = (e) => {
    localStorage.setItem("title", e.target.value);
    setFormData(e.target.value);
  };
  const name1change = (e) => {
    localStorage.setItem("fname1", e.target.value);
    setFormData(e.target.value);
  };
  const last1change = (e) => {
    localStorage.setItem("lname1", e.target.value);
    setFormData(e.target.value);
  };
  const regionchange = (e) => {
    localStorage.setItem("region", e.target.value);
    setFormData(e.target.value);
  };
  const citychange = (e) => {
    localStorage.setItem("city", e.target.value);
    setFormData(e.target.value);
  };
  const companychange = (e) => {
    localStorage.setItem("company", e.target.value);
    setFormData(e.target.value);
  };
  // const onchange = (e) => {
  //   e.preventDefault();
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };
  const onsubmit2 = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Form>
        <Row>
          <h5>Who are you sending the letter to?</h5>
          <h6 style={{ color: "#b6b4b4", fontWeight: "400" }}>
            Make sure you enter the details correctly to avoid any awkward
            situations!
          </h6>
          <Col>
            <Form.Label>Title</Form.Label>
            <Form.Control
              placeholder="Title"
              name="title"
              value={localTitle}
              onChange={(e) => titlechange(e)}
            />
            <Form.Text className="text-muted">e.g Mr.</Form.Text>
          </Col>
          <Col>
            <Form.Label>First name</Form.Label>
            <Form.Control
              placeholder="First name"
              name="fname1"
              value={localName1}
              onChange={(e) => name1change(e)}
            />
            <Form.Text className="text-muted">e.g Frank</Form.Text>
          </Col>
          <Col>
            <Form.Label>Last name</Form.Label>
            <Form.Control
              placeholder="Last name"
              name="lname1"
              value={localName2}
              onChange={(e) => last1change(e)}
            />
            <Form.Text className="text-muted">e.g Brown</Form.Text>
          </Col>
        </Row>
        <Row className="mb-3"></Row>
        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>State/Region </Form.Label>
          <Form.Control
            placeholder="State"
            name="region"
            value={localRegion}
            onChange={(e) => regionchange(e)}
          />
          <Form.Text className="text-muted">e.g Molyko</Form.Text>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter city"
            name="city"
            value={localCity}
            onChange={(e) => citychange(e)}
          />
          <Form.Text className="text-muted">e.g SouthWest</Form.Text>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Zip Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="e.g Digital Renter"
            name="company"
            value={localCompany}
            onChange={(e) => companychange(e)}
          />
        </Form.Group>
      </Form>
    </div>
  );
}

export default Addressee;
