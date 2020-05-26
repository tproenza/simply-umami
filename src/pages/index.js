import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';
import Instagram from '../components/instagram';

const p1 = 'https://user-images.githubusercontent.com/10237026/82856599-00afd480-9ed4-11ea-89cd-34081060af77.jpeg';
const p2 = 'https://user-images.githubusercontent.com/10237026/82856707-5c7a5d80-9ed4-11ea-8c74-b6d320aa79fb.jpg';
const p3 = 'https://user-images.githubusercontent.com/10237026/82854334-bc213a80-9ecd-11ea-9ee9-f84b0dbea020.jpeg';
const p4 = 'https://user-images.githubusercontent.com/10237026/82854328-b7f51d00-9ecd-11ea-9f73-c2e6bf6e8b72.jpeg';
const p5 = 'https://user-images.githubusercontent.com/10237026/82854314-b0ce0f00-9ecd-11ea-9609-ebfe59f6cbb8.jpeg';
const p6 = 'https://user-images.githubusercontent.com/10237026/82856338-589a0b80-9ed3-11ea-98c7-062b31e8649b.jpeg ';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead d-flex">
      <div className="container text-center my-auto">
        <img className="mb-1" src={config.heading} style={{width: '500px'}}></img>
        <h2 className="mb-5">
          {config.subHeading}
        </h2>
      </div>
      <div className="overlay"></div>
    </header>

    <section className="content-section bg-secondary" id="about">
      <div className="container text-center text-primary">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h2>
            La vida es mi corta para comer aburrido. Come #SimplementeUmami.
            </h2>
            <p className="lead mb-5">
              @Simply.Umami.Food es un espacio de co-creación para compartir recetas y/o vender comida #SimplementeUmami.
              Umami es un concepto que viene del japonés, significa sabroso/delicioso.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="content-section" id="portfolio">
      <div className="container">
        <div className="content-section-heading text-center">
          <h3 className="text-primary mb-0">#SimplementeUmami</h3>
          <h2 className="mb-5 text-secondary">Menu</h2>
        </div>
        <div className="row no-gutters">
          <div className="col-lg-6">
            <a className="portfolio-item" href="/#">
              <span className="caption">
                <span className="caption-content">
                  <h2>Dumplings</h2>
                  <p className="mb-0">
                  #SimplementeUmami
                  </p>
                </span>
              </span>
              <img className="img-fluid img-responsive" src={p1} alt="" />
            </a>
          </div>
          <div className="col-lg-6">
            <a className="portfolio-item" href="/#">
              <span className="caption">
                <span className="caption-content">
                  <h2>Siu mai</h2>
                  <p className="mb-0">
                  #SimplementeUmami
                  </p>
                </span>
              </span>
              <img className="img-fluid img-responsive" src={p2} alt="" />
            </a>
          </div>
          <div className="col-lg-6">
            <a className="portfolio-item" href="/#">
              <span className="caption">
                <span className="caption-content">
                  <h2>Cheese cake</h2>
                  <p className="mb-0">
                  #SimplementeUmami
                  </p>
                </span>
              </span>
              <img className="img-fluid img-responsive" src={p3} alt="" />
            </a>
          </div>
          <div className="col-lg-6">
            <a className="portfolio-item" href="/#">
              <span className="caption">
                <span className="caption-content">
                  <h2>Pie de limón</h2>
                  <p className="mb-0">
                  #SimplementeUmami
                  </p>
                </span>
              </span>
              <img className="img-fluid img-responsive" src={p4} alt="" />
            </a>
          </div>
          <div className="col-lg-6">
            <a className="portfolio-item" href="/#">
              <span className="caption">
                <span className="caption-content">
                  <h2>Salsa especial</h2>
                  <p className="mb-0">
                    #SimplementeUmami
                  </p>
                </span>
              </span>
              <img className="img-fluid img-responsive" src={p5} alt="" />
            </a>
          </div>
          <div className="col-lg-6">
            <a className="portfolio-item" href="/#">
              <span className="caption">
                <span className="caption-content">
                  <h2>Salted caramel</h2>
                  <p className="mb-0">
                  #SimplementeUmami
                  </p>
                </span>
              </span>
              <img className="img-fluid img-responsive" src={p6} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>

     <section
      className="content-section bg-primary text-white text-center"
      id="services"
    >
      <div className="container">
        <div className="content-section-heading">
          <h2 className="mb-5 text-secondary">#SimplementeUmami</h2>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 mb-12 mb-lg-12">
            <span className="mx-auto mb-3">
            <a
              className="btn btn-xl"
              href="https://api.whatsapp.com/send?phone=50766716505"
              style={{backgroundColor: '#4AC959', color: "white"}}
            >
               <i className="fab fa-whatsapp fa-3x"></i>
               <span style={{fontSize: '30px', marginLeft: '10px'}}>Chatea con nosotros</span>
            </a>
            </span>
          </div>
        </div>
      </div>
    </section>

    <Instagram></Instagram>

    {/* <section className="content-section" id="portfolio">
      <div className="container">
        <div className="content-section-heading text-center">
          <h3 className="text-secondary mb-0">#SimplementeUmami</h3>
          <h2 className="mb-5">Instagram</h2>
        </div>
        <div className="row no-gutters">
          <div className="col-lg-4">
            <a className="portfolio-item" href="/#">
              <span className="caption">
                <span className="caption-content">
                  <h2>Dumplings</h2>
                  <p className="mb-0">
                  #SimplementeUmami
                  </p>
                </span>
              </span>
              <img className="img-fluid img-responsive" src={p1} alt="" />
            </a>
          </div>
          <div className="col-lg-4">
            <a className="portfolio-item" href="/#">
              <span className="caption">
                <span className="caption-content">
                  <h2>Siu mai</h2>
                  <p className="mb-0">
                  #SimplementeUmami
                  </p>
                </span>
              </span>
              <img className="img-fluid img-responsive" src={p2} alt="" />
            </a>
          </div>
          <div className="col-lg-4">
            <a className="portfolio-item" href="/#">
              <span className="caption">
                <span className="caption-content">
                  <h2>Cheese cake</h2>
                  <p className="mb-0">
                  #SimplementeUmami
                  </p>
                </span>
              </span>
              <img className="img-fluid img-responsive" src={p3} alt="" />
            </a>
          </div>
          <div className="col-lg-4">
            <a className="portfolio-item" href="/#">
              <span className="caption">
                <span className="caption-content">
                  <h2>Pie de limón</h2>
                  <p className="mb-0">
                  #SimplementeUmami
                  </p>
                </span>
              </span>
              <img className="img-fluid img-responsive" src={p4} alt="" />
            </a>
          </div>
          <div className="col-lg-4">
            <a className="portfolio-item" href="/#">
              <span className="caption">
                <span className="caption-content">
                  <h2>Salsa especial</h2>
                  <p className="mb-0">
                    #SimplementeUmami
                  </p>
                </span>
              </span>
              <img className="img-fluid img-responsive" src={p5} alt="" />
            </a>
          </div>
          <div className="col-lg-4">
            <a className="portfolio-item" href="/#">
              <span className="caption">
                <span className="caption-content">
                  <h2>Salted caramel</h2>
                  <p className="mb-0">
                  #SimplementeUmami
                  </p>
                </span>
              </span>
              <img className="img-fluid img-responsive" src={p6} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section> */}

    {/* <section className="callout">
      <div className="container text-center">
        <h2 className="mx-auto mb-5">
          Welcome to
          <em>your</em>
          next website!
        </h2>
        <a
          className="btn btn-primary btn-xl"
          href="https://github.com/anubhavsrivastava/gatsby-starter-stylish"
        >
          Download Now!
        </a>
      </div>
    </section> */}

    <section className="content-section bg-secondary text-white">
      <div className="container text-center text-primary">
        <h2 className="mb-4">Hoy es buen dia para ser feliz, mas ahora que vas a comer #SimplementeUmami</h2>
      </div>
    </section>

    {/* <section id="contact" className="map">
      <iframe
        width="100%"
        height="100%"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A&amp;output=embed"
      ></iframe>
      <br />
      <small>
        <a href="https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A"></a>
      </small>
    </section> */}

    <ScrollToTop />
    <Footer />
  </Layout>
);

export default IndexPage;
