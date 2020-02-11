import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  NavDropdown,
  Navbar,
  Form,
  FormControl,
  Nav,
  Button,
  Table
} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        <img src={logo} className="App-logo" alt="logo" />
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Firnanda</td>
      <td>Pratama</td>
      <td>@nandapratama</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Alan</td>
      <td>Rizky</td>
      <td>@Alanriz</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Daffa</td>
      <td>Akbar</td>
      <td>@Daffak</td>
    </tr>
  </tbody>
</Table>
      </header>
    </div>
  );
}

export default App;
