import React, { useEffect, useState } from 'react';

import './App.css';

type Name = {
  title: string,
  first: string,
  last: string
}

type Street = {
  number: number,
  name: string,
}

type UserLocation = {
  street: Street,
  city: string,
  country: string,
  postcode: number,
}

type Age = {
  age: number
}

type User = {
  name : Name,
  location: UserLocation,
  dob: Age,
}

function App() {
  const [name, setName] = useState<string>('')
  const [age, setAge] = useState<string>('')
  const [address, setAddress] = useState<string>('')
  
  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(response => {
        const userlist : User[] = response.results
        const user = userlist[0]
        setName(`${user.name.first} ${user.name.last}`)
        setAge(`${user.dob.age}`)
        setAddress(`${user.location.street.number} ${user.location.street.name} \n
        ${user.location.city} \n
        ${user.location.postcode} \n
        ${user.location.country}`)
      })
  }, [])

  return (
    <div className="App">
      <header>This user is...</header>
      <main>
        <div>{name}</div>
        <div>Age: {age}</div>
        <div>{address}</div>
      </main>
    </div>
  );
}

export default App;
