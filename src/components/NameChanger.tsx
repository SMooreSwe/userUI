import React, { FormEvent, useRef, useState } from 'react'
import { ChangerProps } from '../utils/types'

const NameChanger = ({ nameSetter }: ChangerProps) => {
    const [ isEmpty, setIsEmpty ] = useState<boolean>(false)
    const selector = useRef<HTMLInputElement | null >(null)
    

    const handleSubmit = (e : FormEvent) => {
        const newName  = selector.current?.value 
        e.preventDefault();
        if (newName) {
            nameSetter(newName)
        } else {

        }

    }
    
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input ref={selector} type="text" placeholder='Type a new name here!'/>
            <input type="submit" value="Change User's Name" />
        </form>
    )
}

export default NameChanger