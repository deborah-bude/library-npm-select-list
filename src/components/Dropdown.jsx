import '../App.css'
import PropTypes from 'prop-types';
import {useEffect, useRef, useState} from "react";

/**
 *
 * @param { String } props.title
 * @param { Array } props.options
 * @param { Boolean } [props.search: false]
 * @returns
 */
export function Dropdown(props, { search = false}) {
    const dropdownArray = [...props.options]
    const labelId = props.title.toLowerCase().replaceAll(" ", "-")
    const [openDropdown, setOpenDropdown] = useState(false)
    const [chosenValue, setChosenValue] = useState("")
    const [optionSelected, setOptionSelected] = useState([...dropdownArray])

    function searchValue(e) {
        setOpenDropdown(true)
        if(e.target.value.length === 0) {
            setOptionSelected(dropdownArray)
        }
        else {
            setOptionSelected(dropdownArray.filter((elementArray) =>
                    elementArray.name.toLowerCase().includes(e.target.value.toLowerCase())
            ))
        }
        setChosenValue(e.target.value)
    }

    function OptionElement(option) {
        return <li key={option.abbreviation} onClick={() => {setChosenValue(option.name)}}>{option.name}</li>
    }

    return (
        <div className="dropdown" onClick={() => setOpenDropdown(!openDropdown)}>
            {props.search ?
                <>
                    <label className="label-dropdown" htmlFor={labelId}>{props.title}</label>
                    <div className="input-container">
                        <span className={openDropdown ? "arrow-down arrow" : "arrow"}></span>
                        <input name={labelId} id={labelId} className="chosen-value" type="text" value={chosenValue}
                               placeholder={openDropdown ? "Select state" : "Type to filter"} onChange={searchValue}/>
                    </div>
                </>
            :
                <>
                    <p className="label-dropdown">{props.title}</p>
                    <input name={labelId} id={labelId} type="hidden" value={chosenValue} />
                    <div className="input-container">
                        <span className={openDropdown ? "arrow-down arrow" : "arrow"}></span>
                        <p className="input-dropdown">{chosenValue === "" ? "Select state" : chosenValue }</p>
                    </div>
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
    options: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            abbreviation: PropTypes.string.isRequired,
        })
    ).isRequired
}