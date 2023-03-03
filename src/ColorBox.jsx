import React, { Component } from 'react'
import './style/colorBox.css'

export default class ColorBox extends Component {
  render() {
    // console.log(this.props.background);
    return (
      <div style={{backgroundColor:this.props.background.color}}  className='colorBox'>
        <span>{this.props.background.name}</span>
      </div>
    )
  }
}
