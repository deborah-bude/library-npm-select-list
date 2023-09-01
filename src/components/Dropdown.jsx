import '../App.css'

// prop-types

export function Dropdown(props) {
    console.log(props)
    return (
        <>
            <label htmlFor="pet-select">{props.title}</label>
            <select name={props.title} id="pet-select">
                {
                    props.options.map((option, index) => {
                        if(!option.type) {
                            return <option key={index} value={option.value}>{option.content}</option>
                        } else if (option.type === "group") {
                            return (<optgroup label={option.name}>
                                {option.items.map((item) => {
                                    console.log(item)
                                    return <option key={index} value={item.value}>{item.content}</option>
                                })}
                            </optgroup>)
                        }
                    })
                }
            </select>

        </>
    )
}
