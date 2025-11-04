// import { useState } from "react"

export default function Square({value,onSquareClick}){
    // const [val,setVal] = useState("")
    // const handleClick = () =>{
    //     if(!value){
    //         // 第一步是 🥥
    //     setVal("🥥")
    //     }else if(value === "🥥"){
    //         setVal("🧀")
    //     }else{
    //         setVal("🥥")
    //     }
    // }
    return(
        <button className="square" onClick={onSquareClick} >{value}</button>
    )
}