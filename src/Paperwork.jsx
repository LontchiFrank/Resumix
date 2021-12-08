import React from "react";

function Paperwork() {
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
      <div className="paper-form">
        <div className="row paperline1 d-flex justify-content-end m-0">
          <div className="txt-bot  ">
            <div className="txt d-flex ">
              <h6 style={{ marginLeft: "3px", color: "#a4133c" }}>{name}</h6>
              <h6 style={{ marginLeft: "3px", color: "#a4133c" }}>
                {" "}
                {lastname}
              </h6>
            </div>
            <div className="other-txt ">
              <h8 style={{ fontSize: "12px", color: "#495057" }}>
                {location}{" "}
              </h8>
              <br />
              <h8 style={{ fontSize: "12px", color: "#495057" }}>{num} </h8>

              <h8 style={{ fontSize: "12px", color: "#495057" }}>{mail} </h8>
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
              <h8 style={{ fontSize: "10px", color: "#495057" }}>{head} </h8>
              <br />
              <h8 style={{ fontSize: "10px", color: "#495057" }}>
                {enterprise}{" "}
              </h8>
              <h8 style={{ fontSize: "10px", color: "#495057" }}>{locate} </h8>
              <h8 style={{ fontSize: "10px", color: "#495057" }}>{citie} </h8>
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
            <h8 style={{ fontSize: "14px", color: "#495057" }}>{Job} </h8>
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
  );
}

export default Paperwork;
