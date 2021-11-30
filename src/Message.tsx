import React from 'react'
import messageHOC from './Hoc'

const example = (props:any): any => <p>{props.name}, {props.msg}</p>


const Message = messageHOC(example)
/*
interface UserMessage{
    name:string
    msg:string
}

// const Message = (props: {msg:string}): any => {
const Message = (props: UserMessage): any => {
    return (
        <>
            <p>{props.msg}</p>
            <p>{props.name}</p>
        </>
    )
}
*/
export default Message
