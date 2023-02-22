import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import img1 from "./elderly1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import logo from "./logo_img.jpg";
import watch from "./watch.png";
import team from "./team.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  return (
    <div className="App">
      <header>
        <Navbar bg="gray" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src={logo}
                width="50"
                height="50"
                className="d-inline-block align-top img-circle"
                alt="React Bootstrap logo"
              />
              <h5 style={{ color: "#3C90CE" }}>Parkinson Saver</h5>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link
                  href="http://localhost:3000/"
                  style={{ color: "black", marginLeft: 40 }}
                >
                  <h6>Home</h6>
                </Nav.Link>
                <Nav.Link
                  href="#link"
                  style={{ color: "black", marginLeft: 40 }}
                >
                  <h6>Information</h6>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text style={{ color: "black" }}>
                Signed in as: <h6 style={{ color: "black" }}>Mark Otto</h6>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              height={400}
              src={img1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5 style={{ color: "black" }}>
                Handwriting Input Method
              </h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              height={400}
              src={img3}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5 style={{ color: "gray" }}>
                Smart wristband
              </h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              height={400}
              src={team}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5 style={{ color: "black", marginBottom: 60 }}>
                Team of Parkinson Saver
              </h5>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </header>
      <br />
      <div>
        <h4 style={{ color: "#3C90CE" }}>
          <strong>
            Current Tremor Level: <br />
            <img
              src={watch}
              width="120"
              height="120"
              className="d-inline-block align-top img-circle"
              alt="watch"
            />
            <h4 style={{ color: "#c83f49", marginTop: 20 }}>68</h4>
          </strong>
        </h4>
        <h6 style={{ color: "#ff404c" }}>
          ^ <br /> have a risk of getting parkinson
        </h6>
      </div>
      <div style={{ marginBottom: 200, marginTop: 40 }}>
        <h4 style={{ color: "#3C90CE", marginBottom: 30 }}>
          Parkinson Health Record
        </h4>
        <table class="table">
          <thead>
            <tr style={{ color: "#c46e32", fontSize: 18 }}>
              <th scope="col"></th>
              <th scope="col">Name</th>
              <th scope="col">Tremor Level</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark Otto</td>
              <td style={{ color: "#ff404c" }}>68</td>
              <td>20/2/2023</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob Thornton</td>
              <td style={{ color: "green" }}>22</td>
              <td>19/2/2023</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry Lim</td>
              <td style={{ color: "#ff404c" }}>60</td>
              <td>15/2/2023</td>
            </tr>
          </tbody>
        </table>
        <h6 style={{ color: "#ff404c" }}>
          * 50 or more &rarr; Have a risk of getting parkinson
        </h6>
        <h6 style={{ color: "green" }}>Less than 49 &rarr; You are healthy!</h6>
      </div>
      <footer class="footer-area footer--light">
        <div class="footer-big">
          <div class="container">
            <div class="row">
              <div class="col-md-3 col-sm-12">
                <div class="footer-widget">
                  <div class="widget-about">
                    <img
                      src={logo}
                      width="50"
                      height="50"
                      className="d-inline-block align-top img-circle"
                      alt="React Bootstrap logo"
                    />
                    <h5 style={{ color: "#3C90CE" }}>
                      <strong> Parkinson</strong> <br />
                      Saver
                    </h5>
                    <ul class="contact-details">
                      <li>
                        <span class="icon-earphones"></span> Call Us:
                        <a href="tel:344-755-111">+44 1234 6789</a>
                      </li>
                      <li>
                        <span class="icon-envelope-open"></span>
                        <a href="mailto:support@aazztech.com">
                          support@parkinson.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-4">
                <div class="footer-widget">
                  <div class="footer-menu footer-menu--1">
                    <h4 class="footer-widget-title">Popular Category</h4>
                    <ul>
                      <li>
                        <a href="#">Smart Watch</a>
                      </li>
                      <li>
                        <a href="#">FAQ</a>
                      </li>
                      <li></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-md-3 col-sm-4">
                <div class="footer-widget">
                  <div class="footer-menu">
                    <h4 class="footer-widget-title">Our Company</h4>
                    <ul>
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">How It Works</a>
                      </li>
                      <li>
                        <a href="#">Affiliates</a>
                      </li>
                      <li>
                        <a href="#">Testimonials</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-md-3 col-sm-4">
                <div class="footer-widget">
                  <div class="footer-menu no-padding">
                    <h4 class="footer-widget-title">Help Support</h4>
                    <ul>
                      <li>
                        <a href="#">Support Forum</a>
                      </li>
                      <li>
                        <a href="#">Terms &amp; Conditions</a>
                      </li>
                      <li>
                        <a href="#">Support Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mini-footer">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="copyright-text">
                  <p>
                    © 2023
                    <a href="#">UCL</a>. All rights reserved. Created by
                    <a href="#"> Parkinsonsaver</a>
                  </p>
                </div>

                <div class="go_top">
                  <MdOutlineKeyboardArrowUp
                    size={30}
                    onClick={scrollToTop}
                  ></MdOutlineKeyboardArrowUp>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
