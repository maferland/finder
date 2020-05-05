import React from 'react';

const Hello = (props) => {
  console.log(props.user.user_metadata.full_name);
  const name = props.user.user_metadata.full_name;

  return (
    name ? <p>Welcome, {name}!</p> : <p>Welcome :)</p>
  )
}

export default Hello;