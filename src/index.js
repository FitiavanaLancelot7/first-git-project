import React from 'react'
import ReactDOM from 'react-dom/client'


const Compo = () =>{
    return <h1>hello react</h1>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Compo/>
)