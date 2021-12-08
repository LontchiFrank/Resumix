import React, { useState } from "react";
import { Form, Row } from "react-bootstrap";

function Bestjob() {
  const localJob = localStorage.getItem("Bolot");
  const [job, setJob] = useState(localJob);
  const onchange = (e) => {
    localStorage.setItem("Bolot", e.target.value);
    setJob(e.target.value);
  };
  return (
    <div>
      <Form>
        <Row>
          <h5>Now, let's work on the main part of the letter!</h5>
          <h6 style={{ color: "#b6b4b4", fontWeight: "400" }}>
            Explain why you're the right person for the job. Sum up your
            motivations, experience, and key skills in 3 or 4 short paragraphs.
          </h6>
        </Row>
        {/* <FloatingLabel controlId="floatingTextarea2" label="Comments"> */}
        <Form.Control
          as="textarea"
          placeholder="Tell Us about You"
          style={{ height: "100px" }}
          name="Bolot"
          value={localJob}
          onChange={(e) => onchange(e)}
        />

        <Form.Text className="text-muted">
          e.g. I have recently been informed of a new position available at your
          company as an Account Administration Assistant and I attach to this
          letter my resume as part of my application for this role. As can be
          seen in my resume, I have years of experience in administration and
          with client relations which I believe are central to any business and
          therefore...
        </Form.Text>
      </Form>
    </div>
  );
}

export default Bestjob;
