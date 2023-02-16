import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Wrapper from './Wrapper'

function AddressBook() {

  const[books, setArrdessBooks] = useState([]);

  useEffect(()=>{
    fetch('http://127.0.0.1:8210/api/v1/get-all-phone-book')
    .then(res => res.json())
    .then(data => setArrdessBooks(data))
  },[])

  return (
    <Wrapper>
      <Link to='/site/addressbook/create' className='btn'>Add Address Book</Link>
      <table>
        <thead>
          <tr>
            <th>#Id</th>
            <th>Address Book Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map(b => {
            return (
              <tr key={b.id}>
                <td>{b.id}</td>
                <td>{b.bookName}</td>
                <td>
                  <Link to={`/site/addressbook/${b.id}/person/create`} className='btn'>Add Person</Link>
                  &nbsp;
                  <Link to={`/site/addressbook/${b.id}/person`} className='btn'>Show Person</Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Wrapper>
  )
}

export default AddressBook
