import React, { Component } from "react";
import "./App.css"
import Me from "./peace.png"

class App extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-left">
          <div className="home-left-wrap">
            <h3 className="home-hook">Hello World! I am</h3>
            <h2 className="home-name">Eric Paulin</h2>
            <div className="title">
              <div className="title-wrap">
                <div className="title-item">Front-End Developer</div>
                <div className="title-item">UI/UX Designer</div>
                <div className="title-item">Musician</div>
              </div>
            </div>
            <div className="about">
                I am a full time student working towards a B.S in Computer Science after recieving my A.S in Computer Science 
                and A.A in Liberal Arts. I love working in the front end and being able to use websites as a canvas to bring 
                my creative ideas to life. I also love listening to and making music, especially with friends and am in a band
                called Raspberry Hangover.
          </div>
          <div className="links">
            <a href="https://github.com/EricPaulin"> github </a>
            <a href="https://twitter.com/ericpollen_">twitter</a>
            <a href="https://ericpaulin.github.io/weather-app/">weather-app</a>
            <a href="https://ericpaulin.github.io/library-project/">mobile-library</a>
            <a href="https://ericpaulin.github.io/etch-a-sketch/">etch-a-sketch</a>
            </div>
          </div>
        </div>
        <div className="home-right">
          <div className="home-bg"></div>
          <img src= {Me} alt="me" className="home-img"/>
        </div>
      </div>
    )
  }
}

export default App;