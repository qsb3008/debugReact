import { Component } from './mreact';
import ReactDOM from 'react-dom';
import './index.css';

function Comp ({ name }) {
  return (<div className="border">{name}</div>)
}

const jsx = (
  <div className="border">
    <p>全栈</p>
    <a href="http://www.baidu.com">邱顺斌</a>
    <Comp name="abc">
    </Comp>
    <hr></hr>
    {/* <ReactComp></ReactComp> */}
  </div>
)

ReactDOM.render(
  jsx,
  document.getElementById('root')
);
