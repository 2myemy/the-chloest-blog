import React, { Component } from 'react';
import "./Profile.css";

class Profile extends Component {
  render() {
    return (
      <div>
        <div className="section d-flex">
          <div className="col-6 d-flex justify-content-center align-items-center">Education</div>
          <div className="col-6 d-flex justify-content-center align-items-center">
            <img className="projcet-img" src={'./project1.svg'} />
          </div>
          </div>
          <div className="section d-flex">
          <div className="col-6 d-flex justify-content-center align-items-center">
            <img className="projcet-img" src={'./project2.svg'} />
          </div>
          <div className="col-6 d-flex justify-content-center align-items-center">Former work</div>
          </div>
          <div className="section d-flex">
          
          <div className="col-6 d-flex justify-content-center align-items-center">College activity</div>
          <div className="col-6 d-flex justify-content-center align-items-center">
            <img className="projcet-img" src={'./project3.svg'} />
          </div>
          </div>
          <div className="section d-flex">
          <div className="col-6 d-flex justify-content-center align-items-center">
            <img className="projcet-img" src={'./project4.svg'} />
          </div>
          <div className="col-6 d-flex justify-content-center align-items-center">My journey</div>
          </div>
      </div>
    );
  }
}
export default Profile