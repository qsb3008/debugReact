import  Component from './mreact/Componnet';
import ReactDOM from './mreact/react-dom';
import React from './mreact/index';
import './index.css';

function Comp({ name }) {
  return (<div onClick={
    () => {
      console.log(666)
    }
  } className="border">{name}</div>)
}

class ClassComp extends Component {
  render() {
    return (<div>{
      this.props.name
    }</div>)
  }
}

const jsx = (
  <div className="border">
    <p>全栈</p>
    <a href="http://www.baidu.com">邱顺斌</a>
    <Comp name="abc">
    </Comp>
    <hr></hr>
    <ClassComp name="classComp"></ClassComp>
  </div>
)

ReactDOM.render(
  jsx,
  document.getElementById('root')
);
