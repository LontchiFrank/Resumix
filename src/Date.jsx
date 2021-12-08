import React, { useState, useEffect } from "react";
import { Form, Row, Col } from "react-bootstrap";

function Date() {
  const localNotes = localStorage.getItem("fdate");
  const [date, setDate] = useState(localNotes);
  const handleChange = (e) => {
    localStorage.setItem("fdate", e.target.value);
    setDate(e.target.value);
  };

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
  //   useEffect(() => {
  //     localStorage.setItem("fdate", JSON.stringify(fdate));
  //   }, [date]);

  return (
    <div>
      <Form>
        <Row>
          <h5>Now, add the date to your cover letter</h5>
          <h6 style={{ color: "#b6b4b4", fontWeight: "400" }}>
            Use the date you'll actually send the job application to the
            employer
          </h6>
          <Col>
            <Form.Label>Date</Form.Label>
            <Form.Control
              placeholder="Date"
              name="fdate"
              value={date}
              onChange={(e) => handleChange(e)}
            />
            <Form.Text className="text-muted">e.g August 23 2021</Form.Text>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default Date;
