import { useState } from "react";
// import MyButton from './MyButton.jsx'//有jsx导入就有导出，组件要默认导出
// import User from './User.jsx'
import TodoList from "./TodoList.jsx";
import "./App.css"; //CSS 的作用是 “描述样式”，通过选择器全局生效，不需要像 JS 模块那样通过 export 暴露 “可引用的实体”；而构建工具会自动处理 CSS 的引入和生效，无需手动导出

function App() {
  // 条件渲染
  // let content
  // let condition = true //默认default
  // if(condition){
  //   content = <User />
  // }else{
  //   content = <MyButton />

  // }

  //列表渲染
  // const products = [
  //   {title:'Cabbage',id:1},
  //   {title:'Tomato',id:2},
  //   {title:'Apple',id:3},
  // ]
  // // 对于列表中的每一个元素，你都应该传递一个字符串或者数字给 key，用于在其兄弟节点中唯一标识该元素
  // const listItems = products.map(product =>
  //   <li key={product.id}>
  //     {product.title}
  //   </li>
  // )

  //响应事件
  // function handleClick(){
  //   alter('you have clicked me')
  // }

  //组件通信
  // const [count,setCount] = useState(0);
  // function handleClick () {
  //     setCount(count + 1)
  // }

  const [todos, setTodos] = useState([
    { id: 1, todo: "写高数作业", completed:false },
    { id: 2, todo: "学习 react" ,completed:false },
    { id: 3, todo: "玩王者荣耀" ,completed:false },
  ]);
  const[inputVal,setInputVal] = useState('')

  //处理输入框变化的函数（input变化触发）
  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  const addNewTodo = () => {
    if (!inputVal.trim()) return; // !!空值不添加
    const newTodo = {
      id: Date.now(),
      todo: inputVal,
    };
    setTodos((prev) => [...prev, newTodo]);
    setInputVal("");
  };
  // delete 是关键字
const buttonClick = (deleteId)=>{
  const newTodos = todos.filter(todo => todo.id !== deleteId)
  setTodos(newTodos)
}


const hasCompleted =(id)=>{
  const newTodos =  todos.map(todo =>{
      if(todo.id === id){
        // map 回调函数必须返回新对象
// 不修改原对象，通过 “复制 + 覆盖” 的方式创建新对象
        // todo.completed = !todo.completed
        return{...todo,completed:!todo.completed}
        console.log(todo.id)
        // console.log(1)

      }
      return todo
    }
  )
  setTodos(newTodos)
}

  // JSX 比 HTML 更加严格必须闭合标签，组件只能返回一个jsx标签，必须包裹到一个共享父级或者空标签
  return (
    <>
      <div>
        {/* React 组件必须以大写字母开头，而 HTML 标签则必须是小写字母 */}
        {/* <User />
    <MyButton/>
    <MyButton/>
    <MyButton/> */}
        {/* {content} */}

        {/* 三目运算符 */}
        {/* {
      condition?(<User />):(<MyButton />)
    } */}

        {/* 不需要else的简单化的 && 语法 */}
        {/* {
      condition && <User />
    } */}

        {/* <ul>{listItems}</ul> */}

        {/* 不可以在组件直接使用onClick  自定义组件不会自动将传入的属性（props）绑定到内部的 DOM 元素上*/}
        {/* <MyButton onClick={ handleClick}  /> */}

        {/* 如果多次渲染同一个组件，每个组件都会拥有自己的 state,分而治之 */}
        {/* 每个按钮会 “记住” 自己的 count，而不影响其他按钮。 */}
        {/* <MyButton  />
    <MyButton  />
    <MyButton  />
    <MyButton  /> */}
        {/* 共享数据并一起更新 怎么办？  --> 把子组件的状态上移到 父组件*/}
        {/* 组件通信 状态提升 */}
        {/* <MyButton count={count} onClick = {handleClick}  />
    <MyButton count={count} onClick = {handleClick}  />
    <MyButton count={count} onClick = {handleClick}  /> */}
      </div>
      <h1> ToDoList </h1>
      <div className='input-user'>
        <input
          value={inputVal}
          onChange={handleInputChange}
          type='text'
          placeholder='please input your todos!'
          className='input-box'
        />
        <button onClick={addNewTodo}>submit</button>
      </div>
      {/* <TodoList/> */}
      <div className='list-box'>
      {/* 用 () 包裹 JSX */}
        {todos.map((item) => (
          // $ 间有个空格
          <div className={`list-item ${item.completed ? 'completed' : ''}`} key={item.id}>
            
            <input type='checkbox' onChange={()=> hasCompleted(item.id)} value={item.completed} />
            <ul>{item.todo}</ul>
            <button className='delButton' onClick={()=> buttonClick(item.id)} >Delete</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
