/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer" style={{backgroundColor: '#13161a'}}>
      <hr/>
      <br/>
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a href={'https://github.com/DanAndresSanchez/MyFancyRetailer-Frontend'} target={'_blank'}>
                  MyFancyRetailer
                </a>
              </li>
              <li>
                <a
                    href="https://github.com/DanAndresSanchez"
                    target="_blank"
                >
                  Dan Sanchez
                </a>
              </li>
              <li>
                <a
                  href="https://www.creative-tim.com?ref=pkr-footer"
                  target="_blank"
                >
                  Creative Tim
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              Resources by Creative Time, Written by Dan Sanchez
            </span>
          </div>
        </Row>
      </Container>
      <br/>
    </footer>
  );
}

export default DemoFooter;
