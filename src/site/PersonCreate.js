import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Wrapper from './Wrapper'

function PersonCreate(props) {

    const [personName, setPersonName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const history = useHistory();

    const submit = (e) => {
        e.preventDefault();
        fetch(`http://127.0.0.1:8210/api/v1/${props.match.params.id}/add-person`, {
            method: 'POST',
            headers: {"content-type" : "application/json"},
            body : JSON.stringify({personName, phoneNumber})
        }).then(() => {
            history.push(`/site/addressbook/${props.match.params.id}/person`)
        })
    }

    return (
        <Wrapper>
        <form onSubmit={submit}>
            <label>Person Name</label>
            <input type="text" name="personName" onChange={e => setPersonName(e.target.value)} />
            <label>Phone Number</label>
            <input type="text" name="phoneNumber" onChange={e => setPhoneNumber(e.target.value)} />
            <button type="submit">Add</button>
        </form>
        </Wrapper>
    )
}

export default PersonCreate
