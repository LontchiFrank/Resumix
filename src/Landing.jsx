// import { Button } from "react-bootstrap";
// import React from "react";
// import Navig1 from "./Navig1";
// import rock from "./img/1.png";
// function Landing() {
//   return (
//     <div>
//       <style type="text/css">
//         {`
//     .btn-flat {
//       background-color: #0081a7;
//       color: white;
//       box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
//     }

//     .btn-xxl {
//      width:250px;
//      height:50px;
//      padding-bottom:25px;
//      margin:1em;
//     }
//     `}
//       </style>
//       <div className="container-fluid p-0">
//         <div className="row rowa d-flex justify-content-center align-items-center">
//           <div className="row big-row m-0">
//             <Navig1 />
//           </div>
//           <div className="sac ">
//             <h2>Get Your Dream Job with the help of our Resume Buider</h2>
//           </div>
//         </div>
//         <div className="row rowb ">
//           <div className="col-md-6">
//             <div className=" rowc">
//               <h1>Build a professional and standard Resume for free</h1>
//             </div>
//             <div className=" rowd ">
//               <h3>
//                 Create your resume easily with our free builder and professional
//                 templates.{" "}
//               </h3>
//               <Button variant="flat" size="xxl">
//                 Create Resume
//               </Button>
//             </div>
//           </div>
//           <div className="col-md-6 ">
//             <div className="rowe">
//               <img src={rock} className="rock" alt="" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Landing;

import React from "react";
import Navig1 from "./Navig1";
import { Button } from "react-bootstrap";
import rock from "./img/Group 7.png";
import { Link } from "react-router-dom";
import FirstView from "./FirstView";
function Landing() {
  return (
    <div className="container-fluid main-container p-0 m-0">
      <style type="text/css">
        {`
         .btn-flat {
           background-color: #b5179e;
           color: white;
           box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
         }
    
         .btn-xxl {
          width:250px;
          height:50px;
          padding-bottom:10px;
          margin:1em;
         }
         `}
      </style>
      <div className="row roll m-0">
        <div className="col-xs-12 w-100 f-row">
          <Navig1 />
        </div>
        <div className="container main-box">
          <div className="row s-row">
            <div className="col-md-5">
              <div className="sac mb-3">
                <h2>Get Your Dream Job with the help of our Resume Buider</h2>
              </div>
              <div className=" rowc">
                <h1>Build a professional and standard Resume for free</h1>{" "}
              </div>
              <div className=" rowd ">
                <h3>
                  Create your resume easily with our free builder and
                  professional templates.{" "}
                </h3>
                <Link to="/fill-form">
                  <Button variant="flat" size="xxl">
                    Create Resume
                  </Button>
                </Link>
              </div>
            </div>
            <div className="col-md-7">
              <div className="rowe">
                <img src={rock} className="rock" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
