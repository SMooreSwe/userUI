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
            setIsEmpty(true)
            setTimeout(() => setIsEmpty(false), 2000)
        }

    }
    
    return (
        <>
        <form className='NameChanger__inputForm' onSubmit={(e) => handleSubmit(e)}>
            <input ref={selector} type="text" placeholder='Type a new name here!'/>
            <input type="submit" value="Change user's name" />
        </form>
        <div className={isEmpty ? 'error' : 'hidden' }>Please input a name for this user!</div>
        </>
    )
}

export default NameChanger