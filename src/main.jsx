import React from 'react'
import ReactDOM from 'react-dom/client'
import {Dropdown} from './components/Dropdown.jsx'
import './index.css'
import './App.css'

/*const optionSelect = [
    {
        value: "Alabama",
        content: "Alabama"
    },
    {
        value: "Alaska",
        content: "Alaska"
    },
    {
        value: "Arizona",
        content: "Arizona"
    },
]*/

const optionSelect = ["alabama", "Alaska", "Arizona"]

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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Dropdown title="Title select 1" options={optionSelect} search={false} />
      <Dropdown title="Title select 1" options={optionsGroup} search={false} />
      <Dropdown title="Title select 2" options={optionSelect} search={true} />
  </React.StrictMode>,
)