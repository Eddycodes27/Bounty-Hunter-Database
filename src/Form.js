import { useState } from 'react'

function Form() {
const [newBounty, setNewBounty] = useState({})

const handleChange = (e) => {
    setNewBounty({...newBounty, [e.target.name]:e.target.value})
}

const handleCheck = (e) => {
    setNewBounty({...newBounty, [e.target.name]:e.target.checked})
}

const postBounty = (e) => {
    e.preventDefault()
    let preJSONBody = {
        name: newBounty.name,
        wantedFor: newBounty.wantedFor,
        client: newBounty.client,
        reward: Number(newBounty.reward),
        captured: Boolean(newBounty.captured)
    }
    fetch('http://localhost:8000/bounties', {
        method: 'POST',
        body: JSON.stringify(preJSONBody),
        headers: {'Content-Type':'application/json'}
    })
    .then(response => response.json())
    .then(postBounty => {
        setNewBounty({})
    })
    .catch(err => console.error(err))
}

    return (
        <form onSubmit={postBounty}>
            <div>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' id='name'></input>
            </div>
            <div>
                <label htmlFor='wantedFor'>Wanted For:</label>
                <input type='text' name='wantedFor' id='wantedFor'></input>
            </div>
            <div>
                <label htmlFor='client'>Client:</label>
                <input type='text' name='client' id='client'></input>
            </div>
            <div>
                <label htmlFor='reward'>Reward:</label>
                <input type='number' name='reward' id='reward'></input>
            </div>
            <div>
                <label htmlFor='captured'>Captured:</label>
                <input type='checkbox' name='captured' id='captured'></input>
            </div>

            <input type='submit' value='Post' />
        </form>
    )
}

export default Form