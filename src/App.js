import { Component, useDebugValue } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import Content from './components/Content';
import Reset from './components/Reset';
import SizeSetting from './components/SizeSettings';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      color: "red",
      fontSize: 12
    }
  }

  onSetColor = (params) => {
    this.setState({
      color: params
    })
  }

  onChangeSize = (param) => {
    if (this.state.fontSize + param >= 8 && this.state.fontSize + param <= 36) {
      this.setState({
        fontSize: this.state.fontSize + param
      });
    }
  }

  onSettingDefault = (value) => {
    if (value) {
      this.setState({
        color: "red",
        fontSize: 12
      })
    }
  }

  render () {
    return (
      <div className="container mt-50">
        <div className="row">
          <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor}/>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SizeSetting fontSize={this.state.fontSize} onChangeSize={this.onChangeSize}/>
            <Reset onSettingDefault = {this.onSettingDefault}/>
          </div>
         <Content color={this.state.color} 
                  fontSize={this.state.fontSize} 
                  />
        </div>
      </div>    
    );
  }
}

export default App;
