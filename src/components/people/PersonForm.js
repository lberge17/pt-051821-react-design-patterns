import { useState } from 'react';

export default function PersonForm({addPerson}) {
    const [name, setName] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        // Add my name to my people...
        console.log("addingg....")
        addPerson({
            name: name
        })
        setName("")
    }

    return <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            value={name} 
            onChange={e => setName(e.target.value)} 
            placeholder="name" 
        />
        <input type="submit" />
    </form>;
}
