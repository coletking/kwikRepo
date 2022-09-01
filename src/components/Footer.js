import React from "react";
import {TiSocialPinterest, TiSocialInstagram, TiSocialTwitter} from 'react-icons/ti'
import {FiFacebook} from "react-icons/fi"
import "./OtherCss.css"
function Footer() {
  return (
    <div>
      <div className="KwikFooter">
        <div className="kwikconteient">
          <div className="kwikimage">
            <img src="/img/logo.png" alt="" />
          </div>
          <div className="text">
            <p>
              Lending products are subject to credit application and approval.
            </p>
            <strong>
              Lending products are subject to credit application and approval.
              Investment, Insurance and Non-deposit Trust products are: NOT A
              DEPOSIT • NOT FDIC INSURED • NOT GUARANTEED BY THE BANK • NOT
              INSURED BY ANY FEDERAL GOVERNMENT AGENCY • MAY LOSE VALUE
            </strong>
            <p>
              PNFP Banking is an Equal Housing Lender and Member FDIC. The PNFP
              Banking logo®, PNFP Banking are federally registered service marks
              of PNFP Banking Bancshares Incorporated. © 2020 PNFP Banking
              Bancshares Incorporated.
            </p>

            <div className="socialicons">
                <div className="iconaos">
                    <FiFacebook/>
                </div>

                <div className="iconaos">
                    <TiSocialTwitter/>
                </div>

                <div className="iconaos">
                    <TiSocialInstagram/>
                </div>

                <div className="iconaos">
                    <TiSocialPinterest/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
