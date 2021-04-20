import './App.css';
import Map from './Map'
import React, { Component } from 'react'
import spot from './spot.json'

export default class App extends Component {
  render() {
    const data = spot.map(el => {
      return {
        coordinates: el.location.value.coordinates,
        address:el.address.value.addressRegion
      }
    })
    return (
      <div>
        <Map data = {data}></Map>
      </div>
    )
  }
}

