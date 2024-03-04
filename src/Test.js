import logo from './assets/images/logo.avif';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import InputGroup from 'react-bootstrap/InputGroup';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import astronut from "./assets/images/astronut.avif";
import fivecan2 from "./assets/images/five-can-2.webp";
import footerlogo from "./assets/images/footer-logo.avif";
import canimg5 from "./assets/images/can-img-5.webp";
import canimg6 from "./assets/images/can-img-6.webp";
import canimg7 from "./assets/images/can-img-7.webp";
import canimg8 from "./assets/images/can-img-8.webp";


const Test = () => {
  return (
    <div>
      <header>
        <Container fluid>
          <Row>
            <Col md={3}>
              <div className='header-left-nav'>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    SHOP
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    VISIT
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    ABOUT
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Col>

            <Col md={6}>
              <div className='logo'>
                <img src={logo} alt='' />
              </div>
            </Col>

            <Col md={3}>
              <div className='header-right-nav'>
                <ul>
                  <li><svg class="theme-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aca_font_size="19px" aca_line_height="24.7px" aca_letter_spacing="NaNpx">
                    <path d="M13.1628 13.2558C13.1628 16.241 14.3487 19.104 16.4595 21.2149C18.5704 23.3258 21.4334 24.5116 24.4186 24.5116C27.4038 24.5116 30.2668 23.3258 32.3777 21.2149C34.4885 19.104 35.6744 16.241 35.6744 13.2558C35.6744 10.2706 34.4885 7.40763 32.3777 5.29675C30.2668 3.18588 27.4038 2 24.4186 2C21.4334 2 18.5704 3.18588 16.4595 5.29675C14.3487 7.40763 13.1628 10.2706 13.1628 13.2558V13.2558Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aca_font_size="19px" aca_line_height="24.7px" aca_letter_spacing="NaNpx"></path>
                    <path d="M6 46C6 41.1151 7.94053 36.4302 11.3947 32.9761C14.8488 29.5219 19.5337 27.5814 24.4186 27.5814C29.3035 27.5814 33.9884 29.5219 37.4425 32.9761C40.8967 36.4302 42.8372 41.1151 42.8372 46H6Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aca_font_size="19px" aca_line_height="24.7px" aca_letter_spacing="NaNpx"></path>
                  </svg></li>
                  <li>
                    <svg class="theme-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aca_font_size="19px" aca_line_height="24.7px" aca_letter_spacing="NaNpx">
                      <path d="M2 21.1304C2 26.2041 4.01552 31.07 7.60317 34.6577C11.1908 38.2453 16.0567 40.2609 21.1304 40.2609C26.2041 40.2609 31.07 38.2453 34.6577 34.6577C38.2453 31.07 40.2609 26.2041 40.2609 21.1304C40.2609 16.0567 38.2453 11.1908 34.6577 7.60317C31.07 4.01552 26.2041 2 21.1304 2C16.0567 2 11.1908 4.01552 7.60317 7.60317C4.01552 11.1908 2 16.0567 2 21.1304V21.1304Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aca_font_size="19px" aca_line_height="24.7px" aca_letter_spacing="NaNpx"></path>
                      <path d="M46 46L34.6576 34.6576" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aca_font_size="19px" aca_line_height="24.7px" aca_letter_spacing="NaNpx"></path>
                    </svg>
                  </li>
                  <li><svg class="theme-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aca_font_size="19px" aca_line_height="24.7px" aca_letter_spacing="NaNpx">
                    <path d="M40.4348 17.3044H7.91304C6.8565 17.3044 6 18.1609 6 19.2174V44.087C6 45.1435 6.8565 46 7.91304 46H40.4348C41.4913 46 42.3478 45.1435 42.3478 44.087V19.2174C42.3478 18.1609 41.4913 17.3044 40.4348 17.3044Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aca_font_size="19px" aca_line_height="24.7px" aca_letter_spacing="NaNpx"></path>
                    <path d="M15.5652 13.4783V10.6087C15.5652 8.32553 16.4722 6.13587 18.0866 4.52143C19.7011 2.90698 21.8907 2 24.1739 2C26.4571 2 28.6467 2.90698 30.2612 4.52143C31.8756 6.13587 32.7826 8.32553 32.7826 10.6087V13.4783" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aca_font_size="19px" aca_line_height="24.7px" aca_letter_spacing="NaNpx"></path>
                  </svg></li>
                </ul>
                <div class="get-app">
                  <Button>GET THE APP</Button>
                  <div className='get-app-content'>
                    <img src={astronut} alt='' />
                    <h4>Live on iOS and Android!</h4>
                    <div>
                      <img src="https://cdn.shopify.com/s/files/1/0250/9239/1008/files/App-Store.svg?v=1664222380" alt="Get app" width="114" height="34" />

                      <img src="https://cdn.shopify.com/s/files/1/0250/9239/1008/files/Google-Play.svg?v=1664222380" alt="Get app" width="114" height="34" />
                    </div>
                  </div>
                </div>
              </div>
            </Col>

          </Row>
        </Container>
      </header>


      <section className='add-to-cart'>
        <Container>
          <Row>
            <Col md={6}>
              <div className='product-here'>
                <img src={fivecan2} alt='' />
              </div>
            </Col>

            <Col md={6}>
              <div className='product-detail'>
                <h2>RIPE</h2>
                <h4>IPA| 7.0%</h4>
                <h4>4-PACK</h4>
                <h5>$19.00</h5>
                <Button>ADD TO CART</Button>
                <p>Ripe has earned its bones over the years in Portland, and we are now able to share our award-winning IPA up and down the left coast. Ripe is dry hopped with Citra and Citra Cryo hops for a juicy wave of citrus and tropical fruit tones.</p>
                <div className='accordiann'>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header><svg class="theme-icon" width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aca_font_size="19px" aca_line_height="28.5px" aca_letter_spacing="NaNpx"><path d="M16 41C18.7614 41 21 38.7614 21 36C21 33.2386 18.7614 31 16 31C13.2386 31 11 33.2386 11 36C11 38.7614 13.2386 41 16 41Z" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aca_font_size="19px" aca_line_height="28.5px" aca_letter_spacing="NaNpx"></path>
                        <path d="M38 41C40.7614 41 43 38.7614 43 36C43 33.2386 40.7614 31 38 31C35.2386 31 33 33.2386 33 36C33 38.7614 35.2386 41 38 41Z" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aca_font_size="19px" aca_line_height="28.5px" aca_letter_spacing="NaNpx"></path>
                        <path d="M17 27V9C17 8.46957 17.2107 7.96086 17.5858 7.58579C17.9609 7.21071 18.4696 7 19 7H45C45.5304 7 46.0391 7.21071 46.4142 7.58579C46.7893 7.96086 47 8.46957 47 9V35H43" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aca_font_size="19px" aca_line_height="28.5px" aca_letter_spacing="NaNpx"></path>
                        <path d="M21 35H29" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aca_font_size="19px" aca_line_height="28.5px" aca_letter_spacing="NaNpx"></path>
                        <path d="M7 37H3C2.46957 37 1.96086 36.7893 1.58579 36.4142C1.21071 36.0391 1 35.5304 1 35V23C1 20.8783 1.84285 18.8434 3.34315 17.3431C4.84344 15.8429 6.87827 15 9 15H17" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aca_font_size="19px" aca_line_height="28.5px" aca_letter_spacing="NaNpx"></path>
                        <path d="M1 33H8" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aca_font_size="19px" aca_line_height="28.5px" aca_letter_spacing="NaNpx"></path>
                        <path d="M1 24H9C9.53043 24 10.0391 23.7893 10.4142 23.4142C10.7893 23.0391 11 22.5304 11 22V15" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aca_font_size="19px" aca_line_height="28.5px" aca_letter_spacing="NaNpx"></path></svg>Shipping information</Accordion.Header>
                      <Accordion.Body>
                        <p>All orders ship with UPS Ground.</p>
                        <p>Someone must be home with valid ID to accept delivery - packages containing alcohol by law will not be left at your door. You may use your tracking link to arrange for a scheduled delivery or pickup.</p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header><svg class="theme-icon" width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aca_font_size="19px" aca_line_height="28.5px" aca_letter_spacing="NaNpx"><path d="M23.066 3.142C23.1376 2.95161 23.2656 2.78759 23.4328 2.67181C23.6 2.55603 23.7986 2.494 24.002 2.494C24.2054 2.494 24.404 2.55603 24.5712 2.67181C24.7384 2.78759 24.8664 2.95161 24.938 3.142L30 17.494H44.296C44.5004 17.494 44.7 17.5566 44.8677 17.6735C45.0354 17.7903 45.1633 17.9558 45.2341 18.1476C45.305 18.3393 45.3153 18.5482 45.2638 18.746C45.2123 18.9438 45.1014 19.1211 44.946 19.254L33 29.158L38 44.178C38.0669 44.3793 38.068 44.5966 38.0033 44.7986C37.9386 45.0005 37.8113 45.1767 37.6399 45.3016C37.4685 45.4265 37.2618 45.4936 37.0497 45.4933C36.8376 45.4931 36.6311 45.4253 36.46 45.3L24 36.158L11.534 45.3C11.3628 45.4229 11.1571 45.4886 10.9464 45.4876C10.7357 45.4867 10.5306 45.4192 10.3605 45.2948C10.1904 45.1704 10.064 44.9954 9.99921 44.7948C9.93447 44.5943 9.93475 44.3784 10 44.178L15 29.158L3.052 19.254C2.89663 19.1211 2.78572 18.9438 2.7342 18.746C2.68268 18.5482 2.69303 18.3393 2.76385 18.1476C2.83468 17.9558 2.96257 17.7903 3.13031 17.6735C3.29805 17.5566 3.49757 17.494 3.702 17.494H18L23.066 3.142Z" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aca_font_size="19px" aca_line_height="28.5px" aca_letter_spacing="NaNpx"></path></svg>Local Pickup Rules</Accordion.Header>
                      <Accordion.Body>
                        <p>All pickup orders (except at the Division St. Pop-Up) are ready as soon as they are submitted and must be collected by close of business the following day. Division Pop-Up orders can be collected during business hours Wed-Sun.</p><br></br>
                        <p>Please have your order number and valid ID.</p><br></br>
                        <p>You may pick up your order from your chosen location anytime during regular open hours. In the event of a holiday or weather-related closure, you will have an extra day for pickup.</p><br></br>
                        <p>Orders not picked up in the stated timeframe cannot be guaranteed. Please contact us for questions about specific orders.</p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header><svg class="theme-icon" width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aca_font_size="19px" aca_line_height="28.5px" aca_letter_spacing="NaNpx"><path d="M24 1.44034C27.9782 1.44034 31.7936 3.02069 34.6066 5.83374C37.4196 8.64678 39 12.4621 39 16.4403C39 23.5343 28 41.2023 24.842 46.1403C24.7515 46.2815 24.627 46.3977 24.4799 46.4782C24.3327 46.5587 24.1677 46.6009 24 46.6009C23.8323 46.6009 23.6673 46.5587 23.5201 46.4782C23.373 46.3977 23.2485 46.2815 23.158 46.1403C20 41.2043 9 23.5343 9 16.4403C9 12.4621 10.5804 8.64678 13.3934 5.83374C16.2064 3.02069 20.0218 1.44034 24 1.44034V1.44034Z" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aca_font_size="19px" aca_line_height="28.5px" aca_letter_spacing="NaNpx"></path>
                        <path d="M18 16.4403C18 18.0316 18.6321 19.5578 19.7574 20.683C20.8826 21.8082 22.4087 22.4403 24 22.4403C25.5913 22.4403 27.1174 21.8082 28.2426 20.683C29.3679 19.5578 30 18.0316 30 16.4403C30 14.849 29.3679 13.3229 28.2426 12.1977C27.1174 11.0725 25.5913 10.4403 24 10.4403C22.4087 10.4403 20.8826 11.0725 19.7574 12.1977C18.6321 13.3229 18 14.849 18 16.4403Z" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aca_font_size="19px" aca_line_height="28.5px" aca_letter_spacing="NaNpx"></path></svg>Great Notion Locations</Accordion.Header>
                      <Accordion.Body>
                        <p>Pickup is available at Alberta, Northwest, SW Division Pop-Up, and Beaverton in Portland; Georgetown and Ballard in Seattle; and the Sacramento Fulfillment Center in California.</p><br></br>
                        <p>Inventory at each location differs. Please see availability in checkout or visit your preferred taproom page for a full list of available products.</p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <span>Share<button><svg aria-hidden="true" focusable="false" role="presentation" class="icon fill-current icon-facebook" viewBox="0 0 20 20" aca_font_size="19px" aca_line_height="28.5px" aca_letter_spacing="NaNpx"><path d="M18.05.811q.439 0 .744.305t.305.744v16.637q0 .439-.305.744t-.744.305h-4.732v-7.221h2.415l.342-2.854h-2.757v-1.83q0-.659.293-1t1.073-.342h1.488V3.762q-.976-.098-2.171-.098-1.634 0-2.635.964t-1 2.72V9.47H7.951v2.854h2.415v7.221H1.413q-.439 0-.744-.305t-.305-.744V1.859q0-.439.305-.744T1.413.81H18.05z" aca_font_size="19px" aca_line_height="28.5px" aca_letter_spacing="NaNpx"></path></svg></button></span>
              </div>
            </Col>

          </Row>
        </Container>
      </section>

      <section className='shop-latest three'>
        <Container>
          <div className='shop-latest-title'>
            <h4>YOU MAY ALSO LIKE</h4>
          </div>

          <Row>
            <Col md={3}>
              <div className='can-img'>
                <img src={canimg5} alt='' />
                <div class='can-img-text'>
                  <h5>
                    German Doppelbock Recipe Kit | 5-gallon All-Grain Beer  Ingredients Kit
                  </h5>
                  <h5>$57.99</h5>
                </div>
              </div>
            </Col>

            <Col md={3}>
              <div className='can-img'>
                <img src={canimg6} alt='' />
                <div class='can-img-text'>
                  <h5>
                    Intense Tropical Hazy IPA - All Grain Beer Recipe Kit
                  </h5>
                  <h5>$68.99</h5>
                </div>
              </div>
            </Col>

            <Col md={3}>
              <div className='can-img'>
                <img src={canimg7} alt='' />
                <div class='can-img-text'>
                  <h5>
                    Tropical Hazy IPA - All Grain Beer Recipe Kit
                  </h5>
                  <h5>$66.99</h5>
                </div>
              </div>
            </Col>

            <Col md={3}>
              <div className='can-img'>
                <img src={canimg8} alt='' />
                <div class='can-img-text'>
                  <h5>
                    Juicy Hazy IPA - All Grain Beer Recipe Kit
                  </h5>
                  <h5>$68.99</h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>


      <section className='newsletter'>
        <Container>
          <div className='shop-latest-title'>
            <h4>GET THE NEWSLETTER</h4>
            <p>Exclusive discounts, sneaks peeks, and more.</p>
          </div>
          <Row>
            <Col md={5}>
              <div className='newsletter-content'>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="email@example.com"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <Button variant="outline-secondary" id="button-addon2">
                    Subscribe
                  </Button>
                </InputGroup>
              </div>
            </Col>
          </Row>

        </Container>
      </section>


      <section className='footer'>
        <Container fluid>
          <div className='footer-title'>
            <img src={footerlogo} alt='' />
          </div>
          <Row>
            <Col md={4}>
              <div className='footer-card one'>
                <h4>Keep Beer Fun</h4>
                <ul>
                  <li><svg aria-hidden="true" focusable="false" role="presentation" class="icon fill-current icon-facebook" viewBox="0 0 20 20" aca_font_size="19px" aca_line_height="28.5px" aca_letter_spacing="NaNpx"><path d="M18.05.811q.439 0 .744.305t.305.744v16.637q0 .439-.305.744t-.744.305h-4.732v-7.221h2.415l.342-2.854h-2.757v-1.83q0-.659.293-1t1.073-.342h1.488V3.762q-.976-.098-2.171-.098-1.634 0-2.635.964t-1 2.72V9.47H7.951v2.854h2.415v7.221H1.413q-.439 0-.744-.305t-.305-.744V1.859q0-.439.305-.744T1.413.81H18.05z" aca_font_size="19px" aca_line_height="28.5px" aca_letter_spacing="NaNpx"></path></svg></li>
                  <li><svg aria-hidden="true" focusable="false" role="presentation" class="icon fill-current icon-twitter" viewBox="0 0 20 20" aca_font_size="19px" aca_line_height="28.5px" aca_letter_spacing="NaNpx"><path d="M19.551 4.208q-.815 1.202-1.956 2.038 0 .082.02.255t.02.255q0 1.589-.469 3.179t-1.426 3.036-2.272 2.567-3.158 1.793-3.963.672q-3.301 0-6.031-1.773.571.041.937.041 2.751 0 4.911-1.671-1.284-.02-2.292-.784T2.456 11.85q.346.082.754.082.55 0 1.039-.163-1.365-.285-2.262-1.365T1.09 7.918v-.041q.774.408 1.773.448-.795-.53-1.263-1.396t-.469-1.864q0-1.019.509-1.997 1.487 1.854 3.596 2.924T9.81 7.184q-.143-.509-.143-.897 0-1.63 1.161-2.781t2.832-1.151q.815 0 1.569.326t1.284.917q1.345-.265 2.506-.958-.428 1.386-1.732 2.18 1.243-.163 2.262-.611z" aca_font_size="19px" aca_line_height="28.5px" aca_letter_spacing="NaNpx"></path></svg></li>
                  <li><svg aria-hidden="true" focusable="false" role="presentation" class="icon fill-current icon-instagram" viewBox="0 0 512 512" aca_font_size="19px" aca_line_height="28.5px" aca_letter_spacing="NaNpx"><path d="M256 49.5c67.3 0 75.2.3 101.8 1.5 24.6 1.1 37.9 5.2 46.8 8.7 11.8 4.6 20.2 10 29 18.8s14.3 17.2 18.8 29c3.4 8.9 7.6 22.2 8.7 46.8 1.2 26.6 1.5 34.5 1.5 101.8s-.3 75.2-1.5 101.8c-1.1 24.6-5.2 37.9-8.7 46.8-4.6 11.8-10 20.2-18.8 29s-17.2 14.3-29 18.8c-8.9 3.4-22.2 7.6-46.8 8.7-26.6 1.2-34.5 1.5-101.8 1.5s-75.2-.3-101.8-1.5c-24.6-1.1-37.9-5.2-46.8-8.7-11.8-4.6-20.2-10-29-18.8s-14.3-17.2-18.8-29c-3.4-8.9-7.6-22.2-8.7-46.8-1.2-26.6-1.5-34.5-1.5-101.8s.3-75.2 1.5-101.8c1.1-24.6 5.2-37.9 8.7-46.8 4.6-11.8 10-20.2 18.8-29s17.2-14.3 29-18.8c8.9-3.4 22.2-7.6 46.8-8.7 26.6-1.3 34.5-1.5 101.8-1.5m0-45.4c-68.4 0-77 .3-103.9 1.5C125.3 6.8 107 11.1 91 17.3c-16.6 6.4-30.6 15.1-44.6 29.1-14 14-22.6 28.1-29.1 44.6-6.2 16-10.5 34.3-11.7 61.2C4.4 179 4.1 187.6 4.1 256s.3 77 1.5 103.9c1.2 26.8 5.5 45.1 11.7 61.2 6.4 16.6 15.1 30.6 29.1 44.6 14 14 28.1 22.6 44.6 29.1 16 6.2 34.3 10.5 61.2 11.7 26.9 1.2 35.4 1.5 103.9 1.5s77-.3 103.9-1.5c26.8-1.2 45.1-5.5 61.2-11.7 16.6-6.4 30.6-15.1 44.6-29.1 14-14 22.6-28.1 29.1-44.6 6.2-16 10.5-34.3 11.7-61.2 1.2-26.9 1.5-35.4 1.5-103.9s-.3-77-1.5-103.9c-1.2-26.8-5.5-45.1-11.7-61.2-6.4-16.6-15.1-30.6-29.1-44.6-14-14-28.1-22.6-44.6-29.1-16-6.2-34.3-10.5-61.2-11.7-27-1.1-35.6-1.4-104-1.4z" aca_font_size="19px" aca_line_height="28.5px" aca_letter_spacing="NaNpx"></path><path d="M256 126.6c-71.4 0-129.4 57.9-129.4 129.4s58 129.4 129.4 129.4 129.4-58 129.4-129.4-58-129.4-129.4-129.4zm0 213.4c-46.4 0-84-37.6-84-84s37.6-84 84-84 84 37.6 84 84-37.6 84-84 84z" aca_font_size="19px" aca_line_height="28.5px" aca_letter_spacing="NaNpx"></path><circle cx="390.5" cy="121.5" r="30.2" aca_font_size="19px" aca_line_height="28.5px" aca_letter_spacing="NaNpx"></circle></svg></li>
                  <li><svg aria-hidden="true" focusable="false" role="presentation" class="icon fill-current icon-youtube" viewBox="0 0 21 20" aca_font_size="19px" aca_line_height="28.5px" aca_letter_spacing="NaNpx"><path d="M-.196 15.803q0 1.23.812 2.092t1.977.861h14.946q1.165 0 1.977-.861t.812-2.092V3.909q0-1.23-.82-2.116T17.539.907H2.593q-1.148 0-1.969.886t-.82 2.116v11.894zm7.465-2.149V6.058q0-.115.066-.18.049-.016.082-.016l.082.016 7.153 3.806q.066.066.066.164 0 .066-.066.131l-7.153 3.806q-.033.033-.066.033-.066 0-.098-.033-.066-.066-.066-.131z" aca_font_size="19px" aca_line_height="28.5px" aca_letter_spacing="NaNpx"></path></svg></li>
                </ul>
              </div>
            </Col>
            <Col md={2}>
              <div className='footer-card'>
                <h3>GREAT NOTION</h3>
                <ul>
                  <li>Sign Up for Updates</li>
                  <li>Loyalty & Referrals</li>
                  <li>FAQs</li>
                  <li>Contact Us</li>
                  <li>Careers</li>
                  <li>Terms of Use</li>
                  <li>DEI & Code of Conduct</li>
                  <li>CCPA</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </Col>

            <Col md={1}></Col>

            <Col md={2}>
              <div className='footer-card'>
                <h3>OUR BEERS</h3>
                <ul>
                  <li>Beer Subscription</li>
                  <li>IPA</li>
                  <li>Lager</li>
                  <li>Smoothie</li>
                  <li>Sour</li>
                  <li>Stout</li>
                  <li>Other</li>
                </ul>
              </div>
            </Col>
            <Col md={1}></Col>

            <Col md={2}>
              <div className='footer-card'>
                <h3>LOCATIONS</h3>
                <ul>
                  <li>Alberta</li>
                  <li>Northwest</li>
                  <li>Beaverton</li>
                  <li>Georgetown</li>
                  <li>Ballard</li>
                </ul>
              </div>
            </Col>
          </Row>

          <div className='copy-right'>
            <p>© 2024, Great Notion. Powered by Shopify</p>
          </div>

        </Container>
      </section>



    </div>
  )
}
export default Test;