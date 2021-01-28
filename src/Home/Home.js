import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './Home.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));

class Home extends Component {
  render() {
    return (
      <div>
        <div className="main-img"> 
          <img src={'./heythere2.jpeg'} />
          <div className="main-content">
            <p className="title">Hey there!</p>
            <p className="content">I'm Myungyeon Chloe Lee.<br/>It means bright and delightful. I'm trying to make my life like that too :)</p>
          </div>
        </div>
        <div>

        </div>
      </div>
    );
  }
}
export default Home