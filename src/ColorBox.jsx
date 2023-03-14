import React, { Component } from 'react'
import './style/colorBox.css'

export default class ColorBox extends Component {
  render() {
    // console.log(this.props.background);
    return (
      <div style={{backgroundColor:this.props.background.color}}  className='colorBox'>
        <div className="empty-box">
        </div>
        <div className="copy-box">
        <span>COPY</span>
        </div>
        <div className="other-box">
        <span>{this.props.background.name}</span>
        <span>MORE</span>
        </div>
      </div>
    )
  }
}
