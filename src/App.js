import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./main/Main";
import AddressBook from "./site/AddressBook";
import AddressBookCreate from "./site/AddressBookCreate";
import Person from "./site/Person";
import PersonCreate from "./site/PersonCreate";
import UncommonPerson from "./site/UncommonPerson";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Main} />
        <Route path="/site/addressbook" exact component={AddressBook} />
        <Route path="/site/addressbook/create" exact component={AddressBookCreate} />
        <Route path="/site/addressbook/:id/person" exact component={Person} />
        <Route path="/site/addressbook/:id/person/create" exact component={PersonCreate} />
        <Route path="/site/addressbook/person" exact component={Person} />
        <Route path="/site/addressbook/person/create" exact component={PersonCreate} />
        <Route path="/site/addressbook/uncommonperson" exact component={UncommonPerson} />
      </BrowserRouter>
    </div>
  );
}

export default App;
