import React, { Component } from "react";
import logo from "../assets/images/certick-logo.png";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "./App.css";
import character from '../assets/images/character.svg';
import flowerpot from '../assets/images/Flowerpot.svg';
import Yellowtree from '../assets/images/Yellowtree.svg';
import Greentree from '../assets/images/Greentree.svg';
import Mud from '../assets/images/Mud.svg';


class App extends Component {
  state = {
    tabName : 'why'
  };

  setTabKey = (tabname) => {
console.log("tab name :: ", tabname);

  }

  render() {
    return (
      <div className="App1">
        {/* <div className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <nav className="top-navigation-fixed navbar-expand-lg navbar-light clearfix">
            <div className="collapse navbar-collapse">
              <div className="nav nav-tabs position-static no-image border-bottom-0" id="nav-tab" role="tablist">
                <a className="nav-item nav-link active" id="nav-whyus-tab" data-toggle="tab" href="#whyus" role="tab"
                  aria-controls="nav-whyus" aria-selected="true">Why us</a>
                <a className="nav-item nav-link" id="nav-ourprocess-tab" data-toggle="tab" href="#ourprocess"
                  role="tab" aria-controls="nav-ourprocess" aria-selected="false">Our process</a>
                <a className="nav-item nav-link" id="nav-contactus-tab" data-toggle="tab" href="#contactus"
                  role="tab" aria-controls="nav-contactus" aria-selected="false">Contact us</a>
              </div>
            </div>
          </nav> */}
        <Tabs defaultActiveKey="why" activeKey={this.state.tabNameß} id="uncontrolled-tab-example" onSelect={(k) => this.setTabKey(k)}>
          <img src={logo} className="" alt="logo" />
          <Tab eventKey="why" title="Why us">
            <div
              className="tab-pane fade show active"
              id="nav-whyus"
              role="tabpanel"
              aria-labelledby="nav-whyus-tab"
            >
              <div className="container-fluid mx-lr">
              <div className="row mt-5">
                <div className="col-md-5">
                  <h1 className="title">Seamless resource planning.</h1>
                  <p className="title-desc mt-5">
                    we help our people to narrow down there requirement on
                    recruitment process for there firm, the process are seamless
                    and innovative with a assurace of great mind onboard.
                  </p>
                  <button className="btn p1-btn">Let’s connect</button>
                  <p className="title-desc desc2 mt-5">
                    we help our clinets which we are proud of our expertise.
                  </p>
                  <h2 className="startups-educations mt-5 pt-3">Startups / Educations</h2>
                </div>
                <div className="col-md-3"></div>
                <div className="col-md-4 col-lg-4 col-xs-12 whyus-img-block">
                <img src={flowerpot} className="mt-5 pt-5 mr-5 whyus-img1" alt="character" />
                <img src={character} className="whyus-img2" alt="character" />
                </div>
              </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="ourprocess" title="Our process">
            <div
              className="tab-pane fade show active"
              id="nav-ourprocess"
              role="tabpanel"
              aria-labelledby="nav-ourprocess-tab"
            >
              <div className="container-fluid mx-lr">
                <div className="row">
                  <div className="col-md-6 mt-5">
                    <h1 className="title2">Drop us your requirements</h1>
                    <p className="title-desc desc4 mt-5">
                      We help our customer to minimize there efforts with assurence
                      of quaified candidats<br />Write us and we will do our best to
                      reach you at your perfect time.
                    </p>
                    <button className="btn p1-btn mt-5">Let’s connect</button>
                  </div>
                  <div className="col-md-4"></div>
                  <div className="col-md-2 mt-4">
                    <div className="image-block">
                      <img src={Yellowtree} className="Yellowtree1" alt="Yellowtree" />
                      <img src={Yellowtree} className="Yellowtree2" alt="Yellowtree" />
                      <img src={Yellowtree} className="Yellowtree3" alt="Yellowtree" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="contactus" title="Contact us">
            <div
              className="tab-pane fade show active"
              id="nav-contactus"
              role="tabpanel"
              aria-labelledby="nav-contactus-tab"
            >
              <div className="container-fluid mx-lr">
                <div className="row position-relative">
                  <div className="col-md-3 m-auto ">
                    <h1 className="title mt-5">Wer’e good at</h1>
                    <img src={Yellowtree} className="Yellowtree4" alt="Yellowtree" />
                  </div>
                </div>
                  <div className="row mt-5">
                    <div className="col-md-8 m-auto">
                      <div className="row mt-5">
                        <div className="col-md-6">
                        <div className="d-flex">
                          <div className="Oval"></div>
                          <p className="title-desc">Parmanent Staffing Solutions</p>
                        </div>
                        <div className="d-flex mt-4">
                          <div className="Oval"></div>
                          <p className="title-desc">Resource Outsources</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex">
                          <div className="Oval"></div>
                          <p className="title-desc">Tech Stack , Specilist domain , Architect</p>
                        </div>
                        <div className="d-flex mt-4">
                          <div className="Oval"></div>
                          <p className="title-desc">Support specilist in Non-It</p>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                <div className="row">
                  <div className="col-md-12 position-relative">
                    <img src={Greentree} className="greentree1" alt="Greentree" />
                    <img src={Mud} className="mud1" alt="Mud" />
                    <p className="title3 text-center mt-5">360 Degree staffing solutions</p>
                    <p className="title-desc desc3 text-center">Understanding the Partner’s Requirement</p>
                    <p className="title-desc desc3 text-center">
                      <b>Outsourcing and Shortlisting needful</b>
                    </p>
                  </div>
                  <div className="col-md-2"></div>
                  <div className="col-md-10">
                    <p className="title-desc desc3">Details analysis</p>
                  </div>
                  <div className="col-md-12">
                    <p className="title-desc desc3 text-center">
                      Experinces / Required & Needful skills set / Salary brackets
                      / Locations{" "}
                    </p>
                    <p className="title-desc desc3 text-center">
                      Communications skills set / Experience & Interest /
                      Candidates Relocations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;
