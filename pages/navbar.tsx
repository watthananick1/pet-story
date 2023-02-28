import { useRouter } from "next/router";
import { useAuth } from "../Context/Authcontext";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

const navbarPage = ({ children }: { children: React.ReactNode }) => {
  const { user, logOut } = useAuth();
  const router = useRouter();

  // const menuItems = [
  //   {
  //     id: 1,
  //     name: "Home",
  //     link: "/",
  //   },
  //   {
  //     id: 2,
  //     name: "Login",
  //     link: "/login",
  //   },
  //   {
  //     id: 3,
  //     name: "Sign Up",
  //     link: "/signup",
  //   },
  // ];

  const handleLogout = async () => {
    try {
      await logOut();
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <>
      {!user.uid ? (
      <></>
      ) : (
        <>
          <Navbar bg="light" expand="md" className="mb-3" fixed="top">
            <Container fluid>
              <Navbar.Brand className="Brand" href="/">
                Pet story
              </Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-md`}
                aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Form className="d-flex center">
                      <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                      />
                      <Button variant="outline-success">Search</Button>
                    </Form>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        </>
      )}
      {children}
    </>
  );
};

export default navbarPage;
