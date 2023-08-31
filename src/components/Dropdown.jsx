import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(props) {
    console.log(props)
  return (
    <>
        <label htmlFor="pet-select">{props.title}</label>
        <select name={props.title} id="pet-select">
            {props.options.map((option,index)=>{
                return <option key={index} value={option.value}>{option.content}</option>
            })}
        </select>

    </>
  )
}

export default App
