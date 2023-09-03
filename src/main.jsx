import React from 'react'
import ReactDOM from 'react-dom/client'
import {Dropdown} from './components/Dropdown.jsx'
import './index.css'
import './App.css'

const optionSelect = [
    {
        value: "value1",
        content: "Value 1"
    },
    {
        value: "value2",
        content: "Value 2"
    },
    {
        value: "value3",
        content: "Value 3"
    },
]

const optionsGroup = [
    { type: 'group', name: 'Foods', items: [
            {
                value: "chocolate",
                content: "Chocolate"
            },
            {
                value: "vanilla",
                content: "Vanilla"
            },
            {
                value: "strawberry",
                content: "Strawberry"
            },]
    },
    { type: 'group', name: 'Colors', items: [
            {
                value: "blue",
                content: "Blue"
            },
            {
                value: "white",
                content: "White"
            },
            {
                value: "red",
                content: "Red"
            },]
    }
]

function onSelect(option) {
    console.log('Option sélectionnée', option)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Dropdown title="Title select 1" options={optionSelect} onSelect={onSelect} />

    <Dropdown title="Title select 2" options={optionsGroup} onSelect={() => {}}/>
  </React.StrictMode>,
)