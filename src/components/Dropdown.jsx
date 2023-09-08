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
    const ref = useRef(null);

    // Detect when user click outside element to close dropdown
    useEffect(() => {
        const handleOutSideClick = (event) => {
            if (!ref.current?.contains(event.target)) {
                setOpenDropdown(false)
            }
        };
        window.addEventListener("mousedown", handleOutSideClick);
    }, [ref]);

    function searchValue(e) {
        if(e.target.value.length === 0) {
            setOptionSelected(dropdownArray)
        }
        else {
            setOptionSelected(dropdownArray.filter((elementArray) =>
                    elementArray.toLowerCase().includes(e.target.value.toLowerCase())
            ))
        }
        setChosenValue(e.target.value)
    }

    function OptionElement(option) {
        return <li key={option} onClick={() => {setChosenValue(option)}}>{option}</li>
    }

    return (
        <div className="dropdown" onClick={() => setOpenDropdown(!openDropdown)}>
            {props.search ?
                <>
                    <label className="label-dropdown" htmlFor={labelId}>{props.title}</label>
                    <input name={labelId} id={labelId} className="chosen-value" type="text" value={chosenValue}
                           placeholder={openDropdown ? "Select state" : "Type to filter"} onChange={searchValue}/>
                </>
            :
                <>
                    <p className="label-dropdown">{props.title}</p>
                    <p className="input-dropdown">{chosenValue === "" ? "Select state" : chosenValue }</p>
                    <input name={labelId} id={labelId} type="hidden" value={chosenValue} />
                </>
            }
            <div ref={ref} className={openDropdown ? "open dropdown-menu" : "dropdown-menu"}>
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
            PropTypes.string.isRequired,
    ).isRequired
}