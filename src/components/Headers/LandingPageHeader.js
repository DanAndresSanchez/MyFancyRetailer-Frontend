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
import React from "react";

// reactstrap components
import { Card, CardBody, CardFooter } from "reactstrap";
import { RiVipCrownLine } from 'react-icons/ri';

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
        <div className="filter" />
        <Card
            data-background="image"
            style={{
              backgroundImage:
                  "url(" + require("assets/img/fancy-retailer-background.jpg") + ")"
            }}
            className={'card-blog'}
        >
          <CardBody>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h2 className="card-category">MyFancyRetailer</h2>
            <div className="card-icon">
              <RiVipCrownLine size={'4em'}/>
            </div>
            <h4 className="card-description">
              We provide and ship products, just fancier than the other guys
            </h4>
            <CardFooter>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
            </CardFooter>
          </CardBody>
        </Card>
    </>
  );
}

export default LandingPageHeader;
