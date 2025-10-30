// 一个文件中只能有一个 export default（默认导出）

// import { useState } from "react"

// 如果不写 export default，其他文件就无法识别和引入这个组件，会导致 “组件未定义” 的错误
// 用大括号传入父组件里组件的属性
export default function MyButton({count,onClick}){
    // 响应事件
    // function handleClick(){
    //     alert('you have clicked me')
    // }

    //更新页面（useState helps 组件 “记住” 一些信息并展示出来）
    // useState
    // const [count,setCount] = useState(0);
    // function handleClick () {
    //     setCount(count + 1)
    // }

    //使用 Hook
    // 只能在的组件（或其他 Hook）的 顶层 调用 Hook
    // 想在一个条件或循环中使用 useState，请提取一个新的组件并在组件内部使用它
    return (
        // 不要 调用 事件处理函数：你只需 把函数传递给事件 即可。当用户点击按钮时 React 会调用你传递的事件处理函数。
        // <button onClick={handleClick} >我是一个按钮</button>
        // <button onClick={props.onClick} >我是一个按钮</button>
        // <button onClick={handleClick} >click {count} times</button>
        <button onClick={onClick} >click {count} times</button>

    )
}