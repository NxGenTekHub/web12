import React from "react";
import SEO from "../components/SEO";
import Header from "../partials/header/Header";
import IntroSlider from "../container/IntroSlider/IntroSlider";
import HomeAbout from "../components/About/HomeAbout.jsx";
import ServiceIconBox from "../container/service/ServiceIconBox";
import HomeSuccess from "../components/Success/HomeSuccess";
import HomeBlog from "../container/BlogGrid/HomeBlog";
import ContactInformation from "../container/ContactInformation/ContactInformationThree";
import Footer from "../container/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop.jsx";

const HomeOne = () => {
  return (
    <React.Fragment>
      <SEO title="NxGenTekHub || Home" />
      <Header />
      <IntroSlider />
      <HomeAbout />
      <ServiceIconBox classOption="bg-color-1" />
      <HomeSuccess />
      <HomeBlog />
      <ContactInformation />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default HomeOne;
