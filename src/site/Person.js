import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Wrapper from './Wrapper'

function Person(props) {

    const[persons, setPersons] = useState([]);
    const[bookName, setBookName] = useState();

    useEffect(()=>{
        fetch(`http://127.0.0.1:8210/api/v1/phone-book/${props.match.params.id}`)
        .then(res => res.json())
        .then((actualData) => {
            setBookName(actualData.bookName)
            setPersons(actualData.personDetailsList)
        })
      },[])

    return (
        <Wrapper>
            <Link to={`/site/addressbook/${props.match.params.id}/person/create`} className='btn'>Add Person</Link>
            <table>
                <thead>
                <tr>
                    <th>#Id</th>
                    <th>Person Name</th>
                    <th>Phone Number</th>
                    <th>Address Book Name</th>
                </tr>
                </thead>
                <tbody>
                {persons.map(p => {
                    return (
                    <tr key={p.id}>
                        <td>{p.id}</td>
                        <td>{p.personName}</td>
                        <td>{p.phoneNumber}</td>
                        <td>{bookName}</td>
                    </tr>
                    )
                })}
                </tbody>
            </table>
        </Wrapper>
    )
}

export default Person
