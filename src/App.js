import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      type: 'Hello React Course'
    }
  }

  render() {
      console.log(this.state)
      return(
          <div className='container app-container'>
            <div>
              <h4>Our Small Pokemon App</h4>
                  <form>
                  <label>Choose your required type!</label>
                    <select>
                      <option value='1'>normal</option>
                      <option value='2'>fighting</option>
                      <option value='3'>flying</option>
                    </select>
                    <button className='btn btn-success'>Search</button>
                  </form>            
            </div>
          </div>
      )
  }
}

export default App;
