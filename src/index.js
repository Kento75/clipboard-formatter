import React, { Component } from 'react'
import ReactDOM from 'react-dom'

/** コンポーネント定義 */
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)