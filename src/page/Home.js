import React from "react";
import Hello from "../component/Hello";
import LoginMessage from "../component/LoginMessage";
import MapContainer from "../component/MapContainer";

const Home = ({ user }) => {
  const offline = <LoginMessage />;
  const online = (
    <>
      <Hello user={user} />
      <MapContainer  user={user} />
    </>
  );
  return user ? online : offline;
};

export default Home;
