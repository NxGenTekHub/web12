import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/logo/Logo";
import FooterData from "../../data/Footer/footerItem.json";
import FooterLinkItem from "../../components/Footer/FooterLinkItem.jsx";

const Footer = () => {
  return (
    <div className="footer-section section footer-bg-color">
      <div className="container">
        <div className="row mb-lg-14 mb-md-10 mb-6">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 col-12 mb-6">
            <div className="footer-widget">
              <div className="footer-logo">
                <Logo
                  image={`${process.env.PUBLIC_URL}/images/logo/footer.png`}
                />
              </div>
              <div className="footer-widget-content">
                <div className="content">
                  <a href="tel:4697556848">+1 (469) 755-6848</a>
                  <a href="mailto:info@NxGenTekHubconsultingservices.com">
                    info@NxGenTekHubconsultingservices.com
                  </a>
                </div>
                <div className="footer-social-inline">
                  <a href="https://www.facebook.com/profile.php?id=100090956600560">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                  <a href="https://www.instagram.com/NxGenTekHub_consulting/">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/NxGenTekHub-consulting-services/">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {FooterData &&
            FooterData.map((single, key) => {
              return (
                <div
                  key={key}
                  className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mb-6">
                  <FooterLinkItem data={single} key={key} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
