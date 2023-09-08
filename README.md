# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Installation
`npm i react-library-dropdown`
or
`npm install react-library-dropdown`

Actual version : `1.3.3`

NPM version : 9.8.1

React version : 18.2.0

Made with VS Code.

# Web site
[https://github.com/deborah-bude/react-library-dropdown](https://github.com/deborah-bude/react-library-dropdown)

# Usage
## Import in JSX file:
`import { Dropdown } from "react-library-dropdown"`

## How use ?
Options parameters
Normal
``` js
const options = ["Item content 1", "Item content 2", "Item content 3", "Item content 4"]
const title = "My dropdown menu"

return <Dropdown title={title} options={options}></Dropdown>

```

With search option

Default value : `false`
``` js
return <Dropdown title={title} options={options} serach={true}></Dropdown>
```