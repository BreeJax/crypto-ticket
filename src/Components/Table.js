import React, { Component } from "react"

class Table extends Component {

  render() {
    console.log(this.props.info );
    return (
      <div>
      <table>
        <tbody>
          <tr>
            <th> </th>
            <th>Name</th>
            <th>USD 1 Hour</th>
            <th>USD 24 Hours</th>
            <th>USD Price</th>
          </tr>
          {this.props.info && this.props.info.map((crypto) => (
            <tr key ={crypto.id}>
            <td> <img src={`https://s2.coinmarketcap.com/static/img/coins/16x16/${crypto.id}.png`}/></td>
              <td>{crypto.name}</td>
              <td>{crypto.quotes.USD.percent_change_1h}</td>
              <td>{crypto.quotes.USD.percent_change_24h}</td>
              <td>{(crypto.quotes.USD.price).toFixed(2)}</td>
            </tr>
          ))}

          </tbody>
      </table>
            </div>
    )
  }
}

export default Table
