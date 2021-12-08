import React from "react";
import Navig2 from "./Navig2";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
function Finale() {
  const history = useHistory();
  const container = React.useRef(null);
  const pdfExportComponent = React.useRef(null);
  const handleRoute = () => {
    history.push("/fill-form");
  };
  const exportPDFWithComponent = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };
  const exportPDFWithMethod = () => {
    let element = container.current || document.body;
    savePDF(element, {
      paperSize: "auto",
      margin: 40,
      fileName: `CV Resume ${new Date().getFullYear()}`,
    });
  };
  const name = localStorage.getItem("fname");
  const lastname = localStorage.getItem("lname");
  const location = localStorage.getItem("address");
  const mail = localStorage.getItem("email");
  const num = localStorage.getItem("phone");
  const day = localStorage.getItem("fdate");
  const head = localStorage.getItem("title");
  const headname = localStorage.getItem("fname1");
  const headname1 = localStorage.getItem("lname1");
  const locate = localStorage.getItem("region");
  const citie = localStorage.getItem("city");
  const enterprise = localStorage.getItem("company");
  const Job = localStorage.getItem("Bolot");
  const closing = localStorage.getItem("closet");
  return (
    <div>
      <style type="text/css">
        {`
         .btn-flat {
           background-color: #b5179e;
           color: white;
           box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
         }
         .btn-flat2 {
            background-color: #168aad;
            color: white;
            box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
          }
     
    
         .btn-xl {
          width:170px;
          height:50px;
          padding-bottom:10px;
          margin:1em;
         }
         `}
      </style>
      <div className=" container-fluid final-page m-0 p-0">
        <div className="row line1 m-0">
          <div className="col-xs-12 w-100  row3 m-0">
            <Navig2 />
          </div>
          <div className="row line3 d-flex justify-content-center align-items-center">
            <Button variant="flat" size="xl" onClick={handleRoute}>
              Edit<i class="fas fa-pen" style={{ paddingLeft: "0.5em" }}></i>
            </Button>

            <Button variant="flat2" size="xl" onClick={exportPDFWithMethod}>
              Download PDF{" "}
              <i class="fas fa-download" style={{ paddingLeft: "0.5em" }}></i>
            </Button>
          </div>
          <div className="row d-flex justify-content-center align-items-center line2">
            <PDFExport
              ref={pdfExportComponent}
              paperSize="auto"
              margin={40}
              author="KendoReact Team"
            >
              <div className=" d-flex justify-content-center align-items-center line4">
                <div className="paper-form" ref={container}>
                  <div className="row paperline1 d-flex justify-content-end m-0">
                    <div className="txt-bot  ">
                      <div className="txt d-flex ">
                        <h6 style={{ marginLeft: "3px", color: "#a4133c" }}>
                          {name}
                        </h6>
                        <h6 style={{ marginLeft: "1px", color: "#a4133c" }}>
                          {" "}
                          {lastname}
                        </h6>
                      </div>
                      <div className="other-txt ">
                        <h8 style={{ fontSize: "12px", color: "#495057" }}>
                          {location}{" "}
                        </h8>
                        <br />
                        <h8 style={{ fontSize: "12px", color: "#495057" }}>
                          {num}{" "}
                        </h8>

                        <h8 style={{ fontSize: "12px", color: "#495057" }}>
                          {mail}{" "}
                        </h8>
                      </div>
                    </div>
                  </div>
                  <div className="row paperline2 d-flex justify-content-start ">
                    <div className="txt-bot1">
                      <h8 style={{ fontSize: "12px" }}>{day} </h8>
                      <div className="txt d-flex">
                        <h6 style={{ marginLeft: "3px", color: "#a4133c" }}>
                          {headname}
                        </h6>
                        <h6
                          style={{
                            marginLeft: "3px",
                            color: "#a4133c",
                            paddingBottom: "1.5em",
                          }}
                        >
                          {" "}
                          {headname1}
                        </h6>
                      </div>
                      <div className="other-txt1 ">
                        <h8 style={{ fontSize: "10px", color: "#495057" }}>
                          {head}{" "}
                        </h8>
                        <br />
                        <h8 style={{ fontSize: "10px", color: "#495057" }}>
                          {enterprise}{" "}
                        </h8>
                        <h8 style={{ fontSize: "10px", color: "#495057" }}>
                          {locate}{" "}
                        </h8>
                        <h8 style={{ fontSize: "10px", color: "#495057" }}>
                          {citie}{" "}
                        </h8>
                      </div>
                    </div>
                  </div>
                  <div className="row paperline3 ">
                    <div className="txt1 d-flex">
                      <h6 style={{ fontSize: "15px", fontWeight: "400" }}>
                        {" "}
                        Dear Mr. {headname}
                      </h6>
                    </div>
                    <div className="other-txt2 ">
                      <h8 style={{ fontSize: "14px", color: "#495057" }}>
                        {Job}{" "}
                      </h8>
                    </div>
                  </div>
                  <div className="row paperline4 d-flex flex-direction-column">
                    <div className="txt2 ">
                      <div className="close">
                        <h6
                          style={{
                            fontWeight: "400",
                          }}
                        >
                          {closing}
                        </h6>
                      </div>

                      <div className="close-remark d-flex">
                        <h6
                          style={{
                            marginLeft: "3px",
                          }}
                        >
                          {" "}
                          {name}
                        </h6>
                        <h6
                          style={{
                            marginLeft: "3px",
                          }}
                        >
                          {" "}
                          {lastname}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </PDFExport>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Finale;
