# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Installation
`npm i react-library-dropdown`
or
`npm install react-library-dropdown`

# Web site
[https://github.com/deborah-bude/react-library-dropdown](https://github.com/deborah-bude/react-library-dropdown)

# Usage
## Import in JSX file:
`import { Dropdown } from "react-library-dropdown"`

## How use ?
Options parameters
Normal
``` js
const options = [
    {
        value: "item-value-option-1", 
        content: "Item content  1"
    },
    {
        value: "item-value-option-2", 
        content: "Item content 2"
    },
    {
        value: "item-value-option-3", 
        content: "Item content 3"
    },
]

return <Dropdown title="State" options={options}></Dropdown>

```



With `<optgroup label="">`

``` js
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

return <Dropdown title="State" options={optionsGroup}></Dropdown>

```