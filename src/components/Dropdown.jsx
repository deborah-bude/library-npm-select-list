import '../App.css'
//import {OptionDropdown} from "./Option.jsx";
import PropTypes from 'prop-types';
import {useEffect, useState} from "react";

// prop-types

export function Dropdown(props) {
    const dropdownArray = [...props.options]
    const labelId = props.title.toLowerCase().replaceAll(" ", "-")
    const [openDropdown, setOpenDropdown] = useState(false)
    const [chosenValue, setChosenValue] = useState("")
    const [optionSelected, setOptionSelected] = useState([...dropdownArray])

    if(props.search === undefined) props.search = false

    function dropdownClick(e) {
        setOpenDropdown(!openDropdown)
    }
    function closeDropdown() {
        setOpenDropdown(false)
    }
    function selectOption(valueOption) {
        console.log(valueOption)
        setChosenValue(valueOption)
    }

    function searchValue(e) {
        if(e.target.value.length === 0) {
            setOptionSelected([...props.options])
        } else {
            setOptionSelected(dropdownArray.filter(item => item.toLowerCase().includes(e.target.value.toLowerCase())))
        }
        setChosenValue(e.target.value)
    }

    function OptionElement(option) {
        if (option.type === "group") {
            return (
                <ul>{option.name}
                    {option.items.map((item) => {
                            return <li key={item.value} onClick={() => {selectOption(option)}}>{item.content}</li>
                        }
                    )}
                </ul>
            )
        }
        return <li key={option} onClick={() => {selectOption(option)}}>{option}</li>
    }

    return (
        <div className="dropdown" onClick={dropdownClick}>
            {props.search ?
                <>
                    <label htmlFor={labelId}>{props.title}</label>
                    <input name={labelId} id={labelId} className="chosen-value" type="text" value={chosenValue}
                           placeholder={openDropdown ? "Select state" : "Type to filter"} onChange={searchValue}/>
                </>
            :
                <>
                    <p>{props.title}</p>
                    <p>{chosenValue === "" ? "Select state" : chosenValue }</p>
                    <input name={labelId} id={labelId} type="hidden" value={chosenValue} />
                </>
            }
            <div className={openDropdown ? "open dropdown-menu" : "dropdown-menu"}>
                <ul className="value-list">
                    { optionSelected.map((option) => OptionElement(option)) }
                </ul>
            </div>
        </div>
    )
}

Dropdown.propTypes = {
    title: PropTypes.string.isRequired,
    search: PropTypes.bool,
    //onSelect: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.shape({
                value: PropTypes.string.isRequired,
                content: PropTypes.string.isRequired
            }),
            PropTypes.shape({
                type: 'group',
                name: PropTypes.string.isRequired,
                items: PropTypes.arrayOf(
                    PropTypes.shape({
                        value: PropTypes.string.isRequired,
                        content: PropTypes.string.isRequired
                    })
                )
            }),
        ])
    ).isRequired
}