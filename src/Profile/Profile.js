import React, { Component } from 'react';
import "./Profile.css";

class Profile extends Component {
  render() {
    return (
      <div>
        {/* <div className="section d-flex">
          <div className="col-6 d-flex justify-content-center align-items-center">
            <img className="projcet-img" src={'./project4.svg'} alt="profile section"/>
          </div>
          <div className="col-6 d-flex justify-content-center align-items-center profile-section">
            <div>
          New things always motivate me. I move forward with curiosity of the world.
          <b> Why don't you join me on a wonderful life journey? :) </b></div>
          </div>
        </div> */}
        
          <div className="section d-flex">
          <div className="col-6 d-flex justify-content-center align-items-center">
            <img className="project-img" src={'./project2.svg'}/>
          </div>
          <div className="col-6 d-flex justify-content-center align-items-center">
            <div>
            <p><b>WORK EXPERIENCE</b><br/></p>
            <p>
              Front-end developer in ‘Knowru’ (March, 2019 - November, 2019)<br/>
              Web developer in ‘Childly’ (November, 2019 - December, 2019)<br/>
              Web developer in ‘Ziontech Solution’ (February, 2020 - November, 2020)
            </p>
            </div>
          </div>
          </div>
          <div className="section d-flex">
          <div className="col-6 d-flex justify-content-center align-items-center">
            <div>
            <p><b>EDUCATION</b><br/></p>
            <p>
            Sogang University, Computer Science and Engineering (2015 ~ )<br/></p>
            <p><br/><b>Courses Completed</b></p>
            <p>
            •  JAVA Language Programming<br/>
            •  Systems Programming<br/>
            •  Operating System<br/>
            •  Advanced Software Practices<br/>
            •  Programming Languages<br/>
            •  Data Structures<br/>
            •  Design and Analysis of Algorithms<br/>
            </p>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-center align-items-center">
            <img className="project-img" src={'./project1.svg'} alt="education section"/>
          </div>
          </div>

          {/* <div className="section d-flex">
          <div className="col-6 d-flex justify-content-center align-items-center">College activity</div>
          <div className="col-6 d-flex justify-content-center align-items-center">
            <img className="projcet-img" src={'./project3.svg'} />
          </div>
          </div> */}
          
      </div>
    );
  }
}
export default Profile