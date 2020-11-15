import React from './mreact';
import ReactDOM from './mreact/react-dom';
import './index.css';

function Comp ({ name }) {
return (<div className=""border>{name}</div>)
}

const jsx = (
  <div className="border">
    <p>全栈</p>
    <a href="http://www.baidu.com">邱顺斌</a>
    <Comp></Comp>
  </div>
)

ReactDOM.render(
  jsx,
  document.getElementById('root')
);
