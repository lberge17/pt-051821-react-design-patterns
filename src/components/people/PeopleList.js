import React from 'react';
import PersonCard from './PersonCard';
import { useNavigate } from 'react-router-dom';

export default function PeopleList({people}) {
  const navigate = useNavigate();

  function handleSubmit(){
    // change => starships
    console.log("doing some logic.....")
    navigate("/starships")
  }

  return <ul>
      {/* iterating over all people and rendering PeopleCards */}
      <button onClick={handleSubmit}>Submit</button>
      {people.map((p, idx) => <PersonCard {...p} key={idx} />)}
  </ul>;
}
