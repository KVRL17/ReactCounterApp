import React, { Component } from 'react'; 
import './App.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

class App extends Component { 
  constructor() {
    super();
    this.state = { 
      value: 0
    };
  }

  increment = () => {
    this.setState({
      value: this.state.value + 1 
    });
  };

  decrement = () => {
    this.setState({
      value: this.state.value - 1 
    });
  };

  render() {
    return (
      <div className="App">
        <p className="number">{this.state.value}</p>
        <AddCircleOutlineIcon className='plus' style={{ fontSize: '5rem' }} onClick={this.increment}/>
        <RemoveCircleOutlineIcon className='minus' style={{ fontSize: '5rem' }} onClick={this.decrement}/>
      </div>
    );
  }
}

export default App;
