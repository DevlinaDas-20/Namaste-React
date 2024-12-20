import React from "react";
import ReactDOM from 'react-dom/client';
let element = document.createElement('h1');
element.innerHTML='HELLO Javascript ! Tag injected using vannila JS';
document.getElementById('root').appendChild(element)



let reactElement = React.createElement('h1',{id:'paraOne',style:{color:'red'}},"Hello World! Tag injected using React CDN");
let root = ReactDOM.createRoot(document.getElementById('rootTwo'));
console.log('root',root)
root.render(reactElement)