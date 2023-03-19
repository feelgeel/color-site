import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./style/colorBox.css";

export default class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.handleCopy=this.handleCopy.bind(this)
  }
  handleCopy(){
this.setState({ copied: true },()=>{
  setTimeout(() => {
    this.setState({ copied: false })
  }, 999999999);
  
});
  }
  render() {
    const { name, color } = this.props.background;
    const { copied} = this.state;
    // console.log(this.props.background);
    return (
      <CopyToClipboard onCopy={()=>this.handleCopy()}>
        <div style={{ backgroundColor: color }} className="colorBox">
         
          <div style={{ backgroundColor: color }}
          className={`overlay ${copied&&"show"}`}/>

          <div className={`overlay-copy ${copied&&"show"}`}>
            <div><h1>Copied</h1></div>
            <div> <p>{color}</p></div>
            
           
          </div>
            <div className="empty-box"></div>
            <div className="copy-box">
              <span>COPY</span>
            </div>
            <div className="other-box">
              <span className="other-box-name">
                {name} {color}
              </span>
              <span className="other-box-more">MORE</span>
            
          </div>
        </div>
      </CopyToClipboard>
    );
  }
}
