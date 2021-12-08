import React, { useState } from "react";
import Date from "./Date";
import Formin from "./Formin";

function Resu() {
  const [step, setStep] = useState(1);
  const nextStep = () => {
    setStep({
      step: step + 1,
    });
  };

  prevStep = () => {
    setStep({
      step: step - 1,
    });
  };
  switch (step) {
    case 1:
      <Formin />;
      break;
    case 2:
      <Date />;
      break;

    default:
      break;
  }
}

export default Resu;
