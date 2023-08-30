// -- component
import Button from "presentation/component/atom/Button";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__try" id="signup">
        <div className="container">
          <div className="footer__try__wrapper">
            <div className="footer__try__txt">
              <h2 className="footer__try__title">Try for free!</h2>
              <p className="footer__try__desc">
                Get limited 1 week free try our features!
              </p>
            </div>
            <div className="footer__try__btn">
              <div className="footer__try__btn__item">
                <Button type="button" variant="secondary">
                  Learn more
                </Button>
              </div>
              <div className="footer__try__btn__item">
                <Button href="#" variant="arrow" link>
                  Request Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <div className="footer__menu-container">
            <div className="footer__menu js-footer-accordion">
              <div className="footer__menu__wrapper">
                <h5 className="footer__menu__title">About</h5>
                <ul className="footer__nav">
                  <li className="footer__nav__item">
                    <a className="footer__nav__link" href="#help">
                      Profile
                    </a>
                  </li>
                  <li className="footer__nav__item">
                    <a className="footer__nav__link" href="#features">
                      Features
                    </a>
                  </li>
                  <li className="footer__nav__item">
                    <a className="footer__nav__link" href="#testimonials">
                      Careers
                    </a>
                  </li>
                  <li className="footer__nav__item">
                    <a className="footer__nav__link" href="#DwNews">
                      DW News
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer__menu__wrapper">
                <h5 className="footer__menu__title">Help</h5>
                <ul className="footer__nav">
                  <li className="footer__nav__item">
                    <a className="footer__nav__link" href="#home">
                      Support
                    </a>
                  </li>
                  <li className="footer__nav__item">
                    <a className="footer__nav__link" href="#signIn">
                      Sign In
                    </a>
                  </li>
                  <li className="footer__nav__item">
                    <a className="footer__nav__link" href="#guide">
                      Guide
                    </a>
                  </li>
                  <li className="footer__nav__item">
                    <a className="footer__nav__link" href="#reports">
                      Reports
                    </a>
                  </li>
                  <li className="footer__nav__item">
                    <a className="footer__nav__link" href="#q&amp;a">
                      Q&A
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer__sosmed">
                <h5 className="footer__sosmed__title">Social Media</h5>
                <ul className="footer__sosmed__nav">
                  <li className="footer__sosmed__item">
                    <a
                      className="footer__sosmed__link footer__sosmed__link--facebook"
                      href="#facebook"
                    >
                      <img
                        className="footer__sosmed__img"
                        src="asset/img/sosmed/facebook.svg"
                        alt="facebook"
                      />
                    </a>
                  </li>
                  <li className="footer__sosmed__item">
                    <a
                      className="footer__sosmed__link footer__sosmed__link--twitter"
                      href="#twitter"
                    >
                      <img
                        className="footer__sosmed__img"
                        src="asset/img/sosmed/twitter.svg"
                        alt="twitter"
                      />
                    </a>
                  </li>
                  <li className="footer__sosmed__item">
                    <a
                      className="footer__sosmed__link footer__sosmed__link--instagram"
                      href="#instagram"
                    >
                      <img
                        className="footer__sosmed__img"
                        src="asset/img/sosmed/instagram.svg"
                        alt="instagram"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer__logo">
              <div className="footer__logo__wrapper js-footer-logo">
                <a className="footer__logo__link" href="#home">
                  <img
                    className="footer__logo__img"
                    src="asset/img/logo/data-warehouse02.png"
                    alt="data-warehouse"
                  />
                </a>
              </div>
              <div className="footer__desc">
                <p className="footer__address">
                  Warehouse Society, 234 Bahagia Ave Street PRBW 29281
                </p>
                <p className="footer__info">
                  info@warehouse.project 1-232-3434 (Main)
                </p>
              </div>
            </div>
          </div>
          <div className="footer__copyright">
            <p className="footer__copyright__txt">
              &copy; Datawarehouse&trade;, 2020. All rights reserved. Company
              Registration Number: 21479524.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
