import React from 'react'
import Hello from '../component/Hello'
import LoginMessage from '../component/LoginMessage'
import MapContainer from '../component/MapContainer'
import LocationUpdater from '../component/LocationUpdater'

const Home = ({user}) => {
  const offline = <LoginMessage />
  const online = (
    <>
      <Hello user={user} />
      <LocationUpdater user={user} />
      <MapContainer user={user} />
    </>
  )
  return user ? online : offline
}

export default Home
