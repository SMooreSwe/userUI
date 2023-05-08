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
  
  type PicSelect = {
    large: string
  }

  type User = {
    name : Name,
    location: UserLocation,
    dob: Age,
    picture: PicSelect
  }

  type UserProps = {
    name: string,
    address: string,
    age: string,
    imageURL: string
  }

  type ChangerProps = {
    nameSetter: Function
  }

export type { User, UserProps, ChangerProps }