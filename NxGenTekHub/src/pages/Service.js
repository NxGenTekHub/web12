import React from "react";
import SEO from "../components/SEO";
import Header from "../partials/header/Header";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
import ServiceIconBoxTwo from "../container/service/ServiceIconBoxTwo";
import AboutSix from "../container/About/AboutSix";
import FunfactTwo from "../container/Funfact/FunfactTwo";
import Footer from "../container/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop.jsx";

const Service = () => {
  return (
    <React.Fragment>
      <SEO title="NxGenTekHub || Service" />
      <Header />
      <Breadcrumb
        image="images/bg/breadcrumb-bg-three.jpg"
        title="We work with bold brands that we believe in"
        content="Home"
        contentTwo="Services"
      />
      <ServiceIconBoxTwo />
      <AboutSix />
      <FunfactTwo />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default Service;
