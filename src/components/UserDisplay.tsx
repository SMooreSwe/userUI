import React from 'react'
import { UserProps } from '../utils/types'

const UserDisplay = (props: UserProps) => {
    const { name, age, address, imageURL } = props
  return (
    <div className='user__wrapper'>
          {imageURL && 
            <img src={imageURL} alt={name} className='wrapper__image'/>
          }
          <div className='wrapper__text'>{name}</div>
          <div className='wrapper__text'>Age: {age}</div>
          <div className='wrapper__text'>{address}</div>
        </div>
  )
}

export default UserDisplay