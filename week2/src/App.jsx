import {  useState ,useEffect} from "react";
import Square from "./Square";
// useState

function App() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const[isYezi,setIsYezi] = useState(true)
  const[winner,setWinner] = useState("")
  const[isFiveFive,setIsFiveFive] = useState(false)
  const[showAlter,setShowAlter] = useState(false)
  const[alterMess,setAlterMess] = useState("")
  // const handleClick = (index) => {

  //   const nextSquares = squares.slice();
  //   if (index === 0) {
  //     nextSquares[index] = "🥥";
  //     setSquares(nextSquares[0])
  //   } else if (squares[index - 1].value === "🥥") {
  //     nextSquares[index] = "🧀";
  //     setSquares(nextSquares[index])

  //   } else {
  //     nextSquares[index] = "🥥";
  //     setSquares(nextSquares[index])

  //   }
  //   setSquares(nextSquares);
  //   console.log(index);
  // };


 function handleClick(index){
  if(squares[index] !== "" || isFiveFive||winner)return
  const nextSquares = [...squares]
  
  if(!isYezi){
    nextSquares[index] =  "🥥"

  }else{
    nextSquares[index] =  isYezi ? "🧀":"🥥"
  }
  console.log(squares)
  const currentWinner = whoISWinner(nextSquares)
  if(currentWinner){
    setWinner(currentWinner)

    // alert(currentWinner + " wins")
  setSquares(nextSquares)
    setShowAlter(true)
    setAlterMess(currentWinner + " wins")
  }
  if(nextSquares.every((item) =>item !=="") && !currentWinner){
    setIsFiveFive(true)
    setShowAlter(true)
    setAlterMess("this is a five five situation")
  }
  setSquares(nextSquares)
  setIsYezi(!isYezi)


}
useEffect(() =>{
  if(showAlter){
    alert(alterMess)
    setShowAlter(false)
  }
},[showAlter,alterMess])

const whoISWinner = (squares) =>{
  const wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
  ]
  for(const line of wins){
    const[a,b,c] = line
    if(squares[a]&&squares[a] === squares[b]&&squares[b] ===squares[c]){
      return squares[a]
    }
  }
  return null
}

const resetGame = () =>{
  setSquares(Array(9).fill(""))
  setIsFiveFive(false)
  setIsYezi(true)
  setWinner("")
}

  return (
    <div className='square-box'>
      <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
      <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
      <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
      <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
      <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
      <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
      <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      <button onClick={resetGame}>reset</button>

    </div>
  );
}


export default App;
