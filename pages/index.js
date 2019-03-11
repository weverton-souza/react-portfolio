import React from "react"
import { Container, Row, Col } from "reactstrap";
import Typed from "react-typed";

import BaseLayout from '../components/layout/BaseLayout'


class Index extends React.Component {

  constructor() {
    super();
    this.roles = ['Team Player', 'Angular, React, TypeScript', 'C#, Python, Java, Spring', 'Rest, AWS, Docker' ]
  }
  render() {
    return (
      <BaseLayout className="cover">
        <div className="main-section">
          <div className="background-image">
            <img src="/static/images/background-index.png" />
          </div>

          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper`}>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2> Full Stack Web Developer </h2>
                      </div>
                      <img className="image" src="/static/images/section-1.png"/>
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                  OLÁ, EU SOU WEVERTON SOUZA, FORMANDO EM CIÊNCIAS DA COMPUTAÇÃO E DESENVOLVEDOR.
                  </h1>
                </div>
                <Typed
                  loop
                  typeSpeed={70}
                  backSpeed={50}
                  strings={this.roles}
                  shuffle={false}
                  backDalay={500}
                  loopCount={0}
                  showCursor
                  cursorChar='|'
                  className="self-typed"
                />
                <div className="hero-welcome-bio">
                  <h1>
                    KEEP CALM AND REBOOT!
                  </h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BaseLayout>
    );
  }
}

export default Index;
