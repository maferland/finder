import React from 'react'
import {updateMarker} from '../util/Api.js'

const LocationUpdater = (props) => {
  const [error, setError] = React.useState('')

  const handleClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((geolocation) => {
        updateMarker(props.user, geolocation)
      })
    } else {
      setError('Geolocation is not supported by this browser.')
    }
  }

  if (error) {
    return <p>{error}</p>
  }

  return <button onClick={handleClick}>Update my location</button>
}

export default LocationUpdater
