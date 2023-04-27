import React, { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Dropdown from "react-bootstrap/Dropdown";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../App.css";

function UserNav() {
  const user = useSelector((state) => state.user.user);

  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/user" className="nav-item">
            Todo
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Dropdown.Item>
              <Link to="/public" className="nav-item">
                Public
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/image" className="nav-item">
                Image
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/todo" className="nav-item">
                Todo
              </Link>
            </Dropdown.Item>
          </Nav>
          <Nav>

            <Dropdown align="end">
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                <AccountCircleIcon color="inherit" />
                {user.username}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {/* <Dropdown.Item href="#/action-2">Become a Seller</Dropdown.Item> */}
                <Dropdown.Item href="#/action-3">Help & Support</Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/settings">Settings</Link>
                </Dropdown.Item>

                {/* <Dropdown.Item href="settings">Settings</Dropdown.Item> */}
                <Dropdown.Divider />
                <Dropdown.Item>
                  <Link to="/">Log Out</Link>
                </Dropdown.Item>

                {/* <Dropdown.Item href="/">Log Out</Dropdown.Item> */}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default UserNav;
