import React, { useState, useRef } from "react";
import Navig2 from "./Navig2";
import paps from "./img/24.png";
import Date from "./Date";
import Formin from "./Formin";
import { Button } from "react-bootstrap";
import Landing from "./Landing";
import Addressee from "./Addressee";
import Bestjob from "./Bestjob";
import Close from "./Close";
import { Redirect } from "react-router-dom";
function Fox() {
  const [step, setStep] = useState(1);
  const onsubmit2 = (e) => {
    e.preventDefault();
  };

  let button;
  if (step == 1) {
    button = <Formin />;
  } else if (step == 2) {
    button = <Date />;
  } else if (step == 3) {
    button = <Addressee />;
  } else if (step == 4) {
    button = <Bestjob />;
  } else if (step == 5) {
    button = <Close />;
  }
  const inputRef1 = useRef(null);

  if (step == 0) {
    // inputRef1.current.style.display = "grey";
    return <Redirect to="/landing" />;
  } else if (step == 6) {
    // inputRef1.current.style.display = "grey";
    return <Redirect to="/Final-form" />;
  }
  return (
    <div className="container-fluid main-container1 m-0 p-0">
      <style type="text/css">
        {`
         .btn-flat {
           background-color: #b5179e;
           color: white;
           box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
         }
         .btn-flat1 {
            background-color: #a01a58;
            color: white;
            box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
          }
     
    
         .btn-xl {
          width:150px;
          height:40px;
          padding-bottom:10px;
          margin:1em;
         }
         `}
      </style>
      <div className="row row2 m-0">
        <div className="col-xs-12 w-100  row3 m-0">
          <Navig2 />
        </div>
        <div className="row row4 m-0">
          <div className="col-md-6">
            <div className="container d-flex justify-content-center align-items-center jol">
              <div className="box ">{button}</div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="container d-flex justify-content-center align-items-center vole p-0 ">
              <div className="box1 d-flex justify-content-center align-items-center vole ">
                <img src={paps} alt="" />
              </div>
            </div>
            <div className="round-box  ">
              <div className="box2 d-flex justify-content-center align-items-center">
                <Button
                  variant="flat"
                  size="xl"
                  ref={inputRef1}
                  onClick={() => setStep(step - 1)}
                >
                  Previous
                </Button>
                <Button
                  variant="flat1"
                  size="xl"
                  onClick={() => setStep(step + 1)}
                  type="submit"
                  onSubmit={(e) => onsubmit2(e)}
                >
                  {step == 5 ? <h7>Finish</h7> : <h7>Next</h7>}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fox;
