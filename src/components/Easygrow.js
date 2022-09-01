import React from 'react'
import {AiOutlineCheckCircle} from "react-icons/ai"
import "./OtherCss.css"

function Easygrow() {
  return (
    <div>
        <div className="growcontainer">
            <div className="growitems">
                <div className="growtextside">
                    <div className="testall">
                        <div className="tetsheader">
                            <h1>Easily grow your finance save more money</h1>
                        </div>
                        <div className="testdetails">
                            <p>We're all in this together.</p>

                            <div className="textlist">
                                <div className="iconall">
                                    <div className="iconside">
                                        <AiOutlineCheckCircle/>
                                    </div>
                                    <div className="listextside">
                                        Bank Securely from Home
                                    </div>
                                </div>

                                <div className="iconall">
                                    <div className="iconside">
                                        <AiOutlineCheckCircle/>
                                    </div>
                                    <div className="listextside">
                                    Checking Accounts for You
                                    </div>
                                </div>


                                <div className="iconall">
                                    <div className="iconside">
                                        <AiOutlineCheckCircle/>
                                    </div>
                                    <div className="listextside">
                                    Lower Your Mortgage Payment
                                    </div>
                                </div>


                                <div className="iconall">
                                    <div className="iconside">
                                        <AiOutlineCheckCircle/>
                                    </div>
                                    <div className="listextside">
                                    More Time with 24-Hour Grace
                                    </div>
                                </div>

                                <button>Get Started </button>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className="textimage">
                    <img src="/img/img2.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Easygrow