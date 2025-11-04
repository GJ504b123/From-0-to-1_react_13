export default function TodoList({item, hasCompleted,buttonClick}) {
//   const todos = [
//     { id: 1, todo: "写高数作业" },
//     { id: 2, todo: "学习 react" },
//     { id: 3, todo: "玩王者荣耀" },
//   ];
//   const todosItem = todos.map((todo) => <li key={todo.id}>{todo.todo}</li>);
//   return (
//     // {todosItem} 返回的是对象，不是组件
//     <div className='list'>
//         <input type="checkbox" />
//       <ul>{todosItem[0]}</ul>
//       <button className="delButton">Delete</button>
//     </div>
    // 希望每个 todo 项都作为一个独立的 “整体”（包含自己的 checkbox、内容、delete 按钮），而不是所有 todo 共用一个 checkbox 和 delete 按钮。
//   );
//   return (
//     <div className="list-box">
        
//             {
//                 todos.map((todo) =>(
//                     <div className="list-item" key={todo.id}>
//                     <input type="checkbox" />
//                     <ul>{todo.todo}</ul>
//                     <button className="delButton">Delete</button>
//                     </div>
//                 ))
//             }
//     </div>
//   )

// input 得到todo
const { id,todo,completed} = item
return (
    <div className={`list-item ${item.completed ? 'completed' : ''}`} key={id}>
            
    <input type='checkbox' onChange={()=> hasCompleted(id)} value={completed} />
    <ul>{todo}</ul>
    <button className='delButton' onClick={()=> buttonClick(id)} >Delete</button>
  </div>
)


}
