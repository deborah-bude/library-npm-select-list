import '../App.css'

export function OptionDropdown(props) {
    return (
        <li key={props.value}>{props.content}</li>
    )
}
