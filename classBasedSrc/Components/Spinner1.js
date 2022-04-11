import React, { Component } from 'react'
import load from './load.gif'
export class Spinner1 extends Component {
  render() {
    return (
      <div className="text-center">
                <img className='my-4' src={load} alt="loading" />
      </div>
    )
  }
}

export default Spinner1
