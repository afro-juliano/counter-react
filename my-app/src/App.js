/*import logo from './logo.svg';*/
import './App.css';
import { Component } from 'react';

export default class Counter extends Component {
  state = {
    count: 42
  };

  handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }));
  };

  render() {
    return (
      <>
       <div>
            <h2>{this.state.count}</h2>
       </div>
       <style>{`
          .counter-button {
            font-size: 1rem;
            padding: 5px 10px;
            color: #585858;
        }
      `}</style>
      <button onClick={this.handleClick}>Click</button>
      </>
    );
  }
}
