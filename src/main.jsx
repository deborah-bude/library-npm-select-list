import React from 'react'
import ReactDOM from 'react-dom/client'
import Dropdown from './components/Dropdown.jsx'
import './index.css'

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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Dropdown title="Title select" options={optionSelect}/>
  </React.StrictMode>,
)