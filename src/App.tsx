import React, { useEffect, useState } from 'react';

import './App.css';
import { User } from './utils/types';
import UserDisplay from './components/UserDisplay';


function App() {
  const [name, setName] = useState<string>('')
  const [age, setAge] = useState<string>('')
  const [address, setAddress] = useState<string>('')
  const [imageURL, setImageURL] = useState<string>('')
  
  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(response => {
        const userlist : User[] = response.results
        const user = userlist[0]
        setName(`${user.name.first} ${user.name.last}`)
        setAge(`${user.dob.age}`)
        setAddress(`${user.location.street.number} ${user.location.street.name}
        ${user.location.city}
        ${user.location.postcode}
        ${user.location.country}`)
        setImageURL(`${user.picture.large}`)
      })
  }, [])

  const nameSetter = (newName : string) => {
    setName(newName)
  }
  
  return (
    <div className="App">
      <header><h1>Meet...</h1></header>
      <main>
        <UserDisplay name={name} address={address} age={age} imageURL={imageURL}/>
      </main>
    </div>
  );
}

export default App;
