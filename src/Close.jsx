import React, { useEffect, useState } from "react";
import { Form, Row } from "react-bootstrap";
function Close() {
  const localClose = localStorage.getItem("closet");
  const [close, setClose] = useState(localClose);

  const onchange = (e) => {
    localStorage.setItem("closet", e.target.value);
    setClose(e.target.value);
  };

  return (
    <div>
      <Form>
        <Row>
          <h5>Final step! How do you want to close your letter?</h5>
          <h6 style={{ color: "#b6b4b4", fontWeight: "400" }}>
            It’s normally best to go with a formal closing like "Sincerely
            yours" or "Best regards".
          </h6>

          <Form.Label>Closing</Form.Label>
          <Form.Control
            placeholder="Closing"
            name="closet"
            value={localClose}
            onChange={(e) => onchange(e)}
          />
          <Form.Text className="text-muted">e.g. Yours sincerely</Form.Text>
        </Row>
      </Form>
    </div>
  );
}

export default Close;
