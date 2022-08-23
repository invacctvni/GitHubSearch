import './App.css';
import React, {useState} from 'react'
import {ShowSearchResult} from "./ShowSearchResult";


function App() {

  const [userName,setUserName] = useState("")
  const [data, setData] = useState({})

  // OnChange Handler
  const onChangeHandler = (event) => {
    setUserName(event.target.value)
      // console.log(event.target.value)
  }

  const onSubmitHandler = (event) => {
      //avoid prevent anything
      event.preventDefault()
      fetch(`https://api.github.com/users/${userName}`)
          .then(
              res => {
                  return res.json()
              }
          )
          .then(v=>{
              setData(v)
              console.log(v)
          })
  }

  fetch("https://api.github.com/users/invacctvni")
      .then(
          (result)=> {
        return result.json()
          }).then((data=>{
              console.log(data)
  }))
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hello, Please input the thing you want to search.
        </h1>
          <p>UserName</p>
          <form onSubmit={onSubmitHandler}>
              <input type="text" value={userName} onChange={onChangeHandler}/>
          </form>
      </header>
        <div>
                <ShowSearchResult />
        </div>
    </div>



  );
}

export default App;
