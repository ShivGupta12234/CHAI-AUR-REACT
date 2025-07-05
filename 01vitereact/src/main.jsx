import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import {jsx as _jsx} from "react/jsx-runtime"
function MyApp(){
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google", // FIXED key from 'childern' to 'children'
// };

const anotherElement1 = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "Chai aur React"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click me to visit Google ',
  anotherUser
)

ReactDom.createRoot(document.getElementById('root'))
.render(

    reactElement 
    // <MyApp/>
    // <App/>
    // anotherElement1
)
