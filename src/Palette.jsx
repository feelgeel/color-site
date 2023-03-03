import React, { Component } from 'react'
import ColorBox from './ColorBox'
import './style/palettes.css'
export default class Palette extends Component {
  render() {
    // console.log(this.props.palette);
    const colorBoxes=this.props.palette.colors.map(color=><ColorBox key={color.name} background={color} />)
    return (
      <div className='palettes'>
        <div className="palettes-colors">
        {colorBoxes}
        </div>
      </div>
    )
  }
}
