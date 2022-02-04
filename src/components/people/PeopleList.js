import React from 'react';
import PersonCard from './PersonCard';

export default function PeopleList({people}) {
  return <ul>
      {/* iterating over all people and rendering PeopleCards */}
      {people.map((p, idx) => <PersonCard {...p} key={idx} />)}
  </ul>;
}
