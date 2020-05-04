import React from "react";
import Hello from '../component/Hello';
import LoginMessage from '../component/LoginMessage';

const Home = (props) => {
  return <>{props.user ? <Hello user={props.user} /> : <LoginMessage /> }</>
};

export default Home;
