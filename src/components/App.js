import React, { Component } from "react";
import { Parallax } from 'react-spring/renderprops-addons';
// css
import './App.scss';
import Sections from './Sections';




class App extends Component {
  render() {
    let parallax;
    return (
      <Parallax pages={13} ref={ref => parallax = ref}>
        <Sections />
      </Parallax>
    );
  }
}

export default App;
