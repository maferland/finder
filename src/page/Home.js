import React from "react";
import Hello from '../component/Hello';
import LoginMessage from '../component/LoginMessage';
import MapContainer from '../component/MapContainer';

const Home = (props) => {
  const offline = <LoginMessage />;
  const online = (
    <>
      <Hello user={props.user} />
      <MapContainer />
    </>
  )
  return props.user ? online : offline;
};

export default Home;
