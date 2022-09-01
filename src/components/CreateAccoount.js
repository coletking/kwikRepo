import React from "react";
import "./OtherCss.css";
import {FiUser} from 'react-icons/fi'
import {BsBuilding} from 'react-icons/bs'
import {TbWorld} from 'react-icons/tb'

function Createaccount() {
  return (
    <div>
      <div className="creatAccoutdiv">
        <div className="createaccoutcontenter">
          <div className="createcaccotn">
            <div className="createio">
              <div className="wrraper">
                <div className="imagesidecrete">
                  <FiUser/>
                </div>
                <div className="testside">
                  <span className="colorgree"> 01</span>
                  <span className="passinwmrn">Create Account </span>
                  <p>
                    Creating an account on PNFP Banking is as easy as ABC, just
                    submit a few details about yourself and submit the form.
                    Voila, you're now part of the family.
                  </p>
                </div>
              </div>
            </div>

            <div className="createio">
              <div className="wrraper">
                <div className="imagesidecrete">
                  <BsBuilding/>
                </div>
                <div className="testside">
                  <span className="colorgree"> 02</span>
                  <span className="passinwmrn">Attach bank accounts </span>
                  <p>
                    Attach your bank account to PNFP Banking so we can be able
                    to pay you and other proceed with other financial
                    transactions. Now you're set to start sending and receiving
                    money internationally.
                  </p>
                </div>
              </div>
            </div>

            <div className="createio">
              <div className="wrraper">
                <div className="imagesidecrete">
                  <TbWorld/>
                </div>
                <div className="testside">
                  <span className="colorgree"> 03</span>
                  <span className="passinwmrn">Send and receive money </span>
                  <p>
                  Send and receive money both locally and internationally directly to your bank account.
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

export default Createaccount;
