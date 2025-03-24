import './App.css'

function App() {
  
  function handledButton3(){
    alert("Button 3 has been clicked");
  }

  const handledButton4 = () => alert("Button 4 has been moused over");

  return (
    <>
      <h1>React and Vite</h1>

      <button onClick={function showAlert() {
        alert("You clicked me!")
      }}>
        Click Me</button>

      <button onClick={() => alert("Arrow func has been clicked")}>Arrow Func Click</button>
      
      <button onClick={handledButton3}>Button 3</button>

      <button onMouseOver={handledButton4}>Button 4 </button>
    </>
  )
}

export default App
