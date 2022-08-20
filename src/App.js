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
      <SpecialMenu />
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
