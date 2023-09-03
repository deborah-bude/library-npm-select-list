import '../App.css'
//import {OptionDropdown} from "./Option.jsx";
import PropTypes from 'prop-types';

// prop-types

export function Dropdown(props) {
    const labelId = props.title.toLowerCase().replace(" ", "-")

    function dropdownClick(e) {
        console.log("hello")
        console.log(e)
        e.target.setAttribute('tabindex', 1)
        e.target.classList.toggle("active")

        /*$('.dropdown-menu li').click(function () {
            var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
                msg = '<span class="msg">Hidden input value: ';
            $('.msg').html(msg + input + '</span>');
        });*/
    }

    function selectOption(e) {
        console.log(e)
    }

    function OptionElement(option) {
        if (option.type === "group") {
            return (
                <ul>{option.name}
                    {option.items.map((item) => {
                            return <li key={props.value}>{props.content}</li>
                        }
                        //<OptionDropdown key={item.value} value={item.value} content={item.content}/>
                    )}
                </ul>
            )
        }
        // return <option key={option.value} value={option.value} onClick={() => props.onSelect(option)}>{option.content}</option>
        return <li key={option.value} onClick={selectOption}>{option.content}</li>
        // <OptionDropdown key={option.value} value={option.value} content={option.content} onClick={() => onSelect(option)}/>
    }

    return (
        <div className="dropdown" onClick={dropdownClick}>
            <p>{props.title}</p>
            <ul className="dropdown-menu">
                <input type="hidden" name="gender"/>
                {
                    props.options.map((option) => OptionElement(option))
                }
            </ul>
        </div>
    )
}

Dropdown.propTypes = {
    title: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
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