import React, { useState, useEffect } from "react";
import "./App.css";
// components
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
import { HashLoader } from "react-spinners";
const style={
  background:"black"
}
const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {loading ? (
        <p
          style={{
            background: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width:"100%",
            height:"900px"
          }}
        >
          <HashLoader color="#D1B752" loading={loading}  size={100} />
        </p>
      ) : (
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
      )}
    </>
  );
};

export default App;
