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
//https://stackoverflow.com/questions/45982244/adding-setinterval-to-componentdidmount-in-react
  componentDidMount() {
    this.getInfo()
    this.interval = setInterval(this.getInfo, 10000);
}
componentWillUnmount() {
    clearInterval(this.interval);
}

getInfo = () =>{

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
