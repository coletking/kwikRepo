import React from "react";
import "./OtherCss.css";
import { AiOutlineLike } from "react-icons/ai";
import { FaPeopleArrows } from "react-icons/fa";
import { CgUserList } from "react-icons/cg";
import {GiPadlockOpen} from "react-icons/gi"

function Why() {
  return (
    <div>
      <div className="whycontainer">
        <div className="whyconteint">
          <div className="whyheaderpart">
            <div className="whyheadecontent">
              <h1>Why choose PNFP Banking online banking platform</h1>
              <p>
                Our digital tools and services were designed with you in mind.
                That’s why we’re honored to be ranked #1 in Customer
                Satisfaction with Online Banking and Mobile Banking Apps.
                Because at PNFP Banking, we’re for people.
              </p>
            </div>
          </div>

          <div className="whygridpart">
            <div className="banksecurecontent">
              <div className="bankitems">
                <div className="bankicons">
                  <AiOutlineLike />
                </div>
                <div className="banktexts">
                  <h3>Bank Securely From Home</h3>
                  <p>
                    Manage your money using your laptop, smartphone, or tablet
                    with PNFP Banking
                  </p>
                </div>
              </div>

              <div className="bankitems">
                <div className="bankicons">
                  <FaPeopleArrows />
                </div>
                <div className="banktexts">
                  <h3>Checking Accounts For You</h3>
                  <p>
                    With checking account options we look out for your financial
                    well-being.
                  </p>
                </div>
              </div>

              <div className="bankitems">
                <div className="bankicons">
                  <CgUserList />
                </div>
                <div className="banktexts">
                  <h3>Lower Your Mortgage Payment</h3>
                  <p>
                    Mortgage rates have dropped. Find out if a refinance can
                    save you money.
                  </p>
                </div>
              </div>

              <div className="bankitems">
                <div className="bankicons">
                  <GiPadlockOpen />
                </div>
                <div className="banktexts">
                  <h3>More Time With 24-Hour Grace</h3>
                  <p>
                    24-Hour Grace, gives you more time to make a deposit in
                    order to avoid an overdraft fee.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
