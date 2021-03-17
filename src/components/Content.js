import { Component } from "react";

class Content extends Component {

  setStyle () {
   return {
     color: this.props.color,
     borderColor: this.props.color,
     fontSize: this.props.fontSize
   }
  }

  render () {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div>Color: {this.props.color} - Fontsize: {this.props.fontSize}px</div>
        <div id="content" style={this.setStyle()}>
          Content Setting
        </div>
      </div>
    );
  }
}

export default Content;