import React, { Component } from 'react'

import loading from './loading.gif'
export default class Spinner extends Component {
 

  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="" className='img-fluid w-25 h-25' />
      </div>
    )
  }
}