import React from 'react'

export default function Greeting(props) {
    const {
        message= 'World'
    } = props

    return (
        <div>Hello, {greeting}!</div>
    )
}
