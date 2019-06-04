import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedImg: 0,
      imgs: [],
    }
  }
  componentDidMount(){
    this.setState({
      imgs: carouselData,
    })
  }

  leftClick = () => {
    if (this.state.selectedImg === 0) {
      this.setState({
        selectedImg: this.state.imgs.length - 1,
      })
    } else {
      this.setState({
        selectedImg: this.state.selectedImg - 1,
      })
    }
  }

  rightClick = () => {
    if (this.state.selectedImg === this.state.imgs.length) {
      this.setState({
        selectedImg: 0,
      })
    } else {
      this.setState({
        selectedImg: this.state.selectedImg + 1,
      })
    }
  }

  selectedImage = () => {
    return <img alt={this.state.imgs[this.state.selectedImg]} src={this.state.imgs[this.state.selectedImg]} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel">
        {this.selectedImage()}
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}