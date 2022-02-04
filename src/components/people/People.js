import { useState, useEffect } from 'react';
import PeopleList from './PeopleList';
import PersonForm from './PersonForm';

export default function People() {
    const [people, setPeople] = useState([])

    useEffect(() => {
        fetch("https://swapi.dev/api/people")
        .then(r => r.json())
        .then(data => setPeople(data.results))
    }, [])

    function addPerson(person){
        setPeople(prevPeople => [...prevPeople, person])
    }

    return <div>
        <h1>ALL PEOPLE</h1>
        <PersonForm addPerson={addPerson} />
        <PeopleList people={people} />
    </div>;
}
