import React from "react";
import "./App.css";
import {
  Navbar,
  Header,
  About,
  SpecialMenu,
  Chef,
  Intro,
  Laurels,
  Gallery,
  FindUs,
  Footer,
} from "./component";
const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      {/* problem of small devices here in special menu don't forget it  */}
      <SpecialMenu />
      {/* -------------------------------------------------------------- */}
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
};

export default App;
