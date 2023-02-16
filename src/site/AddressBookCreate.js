import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Wrapper from './Wrapper'

function AddressBookCreate() {

    const [bookName, setAddressBookName] = useState('');
    const history = useHistory();
    const submit = (e) => {
        e.preventDefault();
        fetch('http://127.0.0.1:8210/api/v1/add-phone-book', {
            method: 'POST',
            headers: {"content-type" : "application/json"},
            body : JSON.stringify({bookName})
        }).then(() => {
            history.push('/site/addressbook')
        })
    }

    return (
        <Wrapper>
        <form onSubmit={submit}>
            <label>Address Book Name</label>
            <input type="text" name="bookName" onChange={e => setAddressBookName(e.target.value)} />
            <button type="submit">Add</button>
        </form>
        </Wrapper>
    )
}

export default AddressBookCreate
