import React, { useEffect, useState } from 'react'
import Wrapper from './Wrapper'
import Select from 'react-select'

function UncommonPerson() {

    const[books, setArrdessBooks] = useState([]);

    const[booksoption, setBookOptions] = useState([]);

    const [selectedOptionBook1, setSelectedOptionBook1] = useState();

    const [selectedOptionBook2, setSelectedOptionBook2] = useState();

    const[persons, setPersons] = useState([]);

    useEffect(()=>{
        fetch('http://127.0.0.1:8210/api/v1/get-all-phone-book')
        .then(res => res.json())
        .then((data) => {
            setArrdessBooks(data);
        })
    },[])

    const handleTypeSelectBook1 = e => {
        setSelectedOptionBook1(e.value);
    };

    const handleTypeSelectBook2 = e => {
        setSelectedOptionBook2(e.value);
    };

    const submit = (e) => {
        e.preventDefault();
        fetch(`http://127.0.0.1:8210/api/v1/phone-book/get-unique-person?book1=${selectedOptionBook1}&book2=${selectedOptionBook2}`)
        .then(res => res.json())
        .then((actualData) => {
            setPersons(actualData);
            console.log(actualData);
        })
    }

    const load = () => {
        if (booksoption.length == 0){
            books.map(b => {
                booksoption.push({value: b.bookName, label: b.bookName});
            });
        }
    }

    return (
        <Wrapper>
            <form onSubmit={submit}>
                <label>Select Book 1</label>
                <Select options={booksoption} onMenuOpen={load} onChange={handleTypeSelectBook1}/>
                <label>Select Book 2</label>
                <Select options={booksoption} onMenuOpen={load} onChange={handleTypeSelectBook2}/>
                <br></br>
                <button type="submit">Show Common Person</button>
            </form>
            <br></br>
            <table>
                <thead>
                <tr>
                    <th>#Id</th>
                    <th>Person Name</th>
                    <th>Phone Number</th>
                    <th>Book Name</th>
                </tr>
                </thead>
                <tbody>
                {persons.map(p => {
                    return (
                    <tr key={p.id}>
                        <td>{p.id}</td>
                        <td>{p.personName}</td>
                        <td>{p.phoneNumber}</td>
                        <td>{p.bookName}</td>
                    </tr>
                    )
                })}
                </tbody>
            </table>
        </Wrapper>
    )
}

export default UncommonPerson
