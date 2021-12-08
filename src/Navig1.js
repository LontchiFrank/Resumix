// import React, { useState } from "react";
// import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
// function Navig1() {
//   const [navbar, setNavbar] = useState(false);

//   const changeBackground = () => {
//     if (window.scrollY > 80) {
//       setNavbar(true);
//     } else {
//       setNavbar(false);
//     }
//     // console.log(window.scrollY);
//   };

//   window.addEventListener("scroll", changeBackground);

//   return (
//     <div className="navis">
//       <style type="text/css">
//         {`
//     .color {
//       background-color: red;
//       color: white;
//     }
//     .color.active {
//       background-color: blue;
//       color: white;
//     }

//     .btn-xxl {
//       font-size: 1.5rem;
//     }
//     `}
//       </style>
//       <Navbar
//         collapseOnSelect
//         expand="lg"
//         className={navbar ? "color active" : "color"}
//       >
//         <Container>
//           <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link href="#features">Features</Nav.Link>
//               <Nav.Link href="#pricing">Pricing</Nav.Link>
//               <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2">
//                   Another action
//                 </NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">
//                   Something
//                 </NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action/3.4">
//                   Separated link
//                 </NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//             <Nav>
//               <Nav.Link href="#deets">More deets</Nav.Link>
//               <Nav.Link eventKey={2} href="#memes">
//                 Dank memes
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// }

// export default Navig1;

import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
function Navig1() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
    console.log(window.scrollY);
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <Navbar collapseOnSelect expand="lg" className="nas">
      <Container>
        <Navbar.Brand href="#home">Resumix</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navig1;
