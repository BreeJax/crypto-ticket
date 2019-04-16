import React, { Component } from 'react';
import Table from "./Components/Table"
import './App.css';

class App extends Component {
  constructor(props) {
  super(props)
  this.state = {
    error: null,
    isLoaded: false,
    cryptocurrency: []
  }
}
  componentDidMount() {
  fetch("https://api.coinmarketcap.com/v2/ticker/?limit=20")
    .then((res) => res.json())
    .then(
      (result) => {
        let currency = Object.values(result.data)
        this.setState({
          isLoaded: true,
          cryptocurrency: currency
        })
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        })
      }
    )
}
  render() {
    const { error, isLoaded, cryptocurrency } = this.state
    console.log(cryptocurrency);

    return (
      <div className="App">
        <Table info={this.state.cryptocurrency}/>
      </div>
    );
  }
}

/*


*/
export default App;
