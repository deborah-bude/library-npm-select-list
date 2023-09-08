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

const optionSelect = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
    "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas",
    "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
    "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
    "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
    "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah",
    "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Dropdown title="Title select 1" options={optionSelect} />
      <Dropdown title="Title select 2" options={optionSelect} search={true} />
  </React.StrictMode>,
)