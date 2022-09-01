import React from "react";
import CreateAccoount from "./CreateAccoount";
import Easygrow from "./Easygrow";
import Footer from "./Footer";
import Navbar from "./navbar";
import OurWorld from "./OurWorld";
import Terms from "./Terms";
import Why from "./Why";

function App() {
  return (
    <div>
      <Navbar />
      <CreateAccoount/>
      <Why/>
      <Easygrow/>
      <OurWorld/>
      <Footer/>
      <Terms/>
    </div>
  );
}

export default App;
