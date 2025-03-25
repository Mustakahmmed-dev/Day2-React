import './App.css';
import Counter from './Counter';
import Batman from './Batman';
import Friends from './Friends';
import { Suspense } from 'react';
import Posts from './Posts';

// https://jsonplaceholder.typicode.com/users

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())

  const fetchPosts = fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json());
  

function App() {

  // function handledButton3(){
  //   alert("Button 3 has been clicked");
  // }

  // const handledButton4 = () => alert("Button 4 has been moused over");

  // const handleAddNum = (num) => {
  //   let newNum = num + 10;
  //   alert(newNum);
  // }

  return (
    <>
      <h1>React and Vite</h1>

    <Suspense fallback={<h2>Posts are loading...</h2>}>
      <Posts fetchPosts={fetchPosts}></Posts>
    </Suspense>

      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Friends fetchUsers={fetchUsers}></Friends>
      </Suspense> */}


      {/* <Batman></Batman>

      <Counter></Counter>

      <button onClick={function showAlert() {
        alert("You clicked me!")
      }}>
        Click Me</button>

      <button onClick={() => alert("Arrow func has been clicked")}>Arrow Func Click</button>
      
      <button onClick={handledButton3}>Button 3</button>

      <button onMouseOver={handledButton4}>Button 4 </button>

      <button onClick={() => handleAddNum(20)}>Click To Add 10</button> */}




    </>
  )
}

export default App
