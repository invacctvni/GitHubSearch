import {ShowSearchResult} from "./ShowSearchResult";
import {useEffect, useState} from "react";

export const HomePage = () => {

    const [userName,setUserName] = useState("")
    const [data, setData] = useState({})
    const [display,setDisplay] = useState("none")
    const [emptyDisplay, setEmptyDisplay] = useState("block")

    // OnChange Handler
    const onChangeHandler = (event) => {
        setUserName(event.target.value)
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
                if (!v?.message) {
                    setData(v)
                    setDisplay("block")
                    setEmptyDisplay("none")
                }
                else {
                    setDisplay("none")
                    setEmptyDisplay("block")
                }
            })

    }

    fetch(`https://api.github.com/users/${userName}`)
        .then(
            (result)=> {
                return result.json()
            }).then((data=>{
        // if(data) {
        //     // console.log('non-empty inputs')
        //     setDisplay("block")
        // }
        // else {
        console.log('inputs is===>',data)
        // }
    }))
    return <div>
        <header className="App-header">
            <h1>
                Hello, Please input the thing you want to search.
            </h1>
            <p>UserName</p>
            <form onSubmit={onSubmitHandler}>
                <input type="text" value={userName} onChange={onChangeHandler}/>
            </form>
        </header>
        <div className="showSearchResultContainer" style={{display:`${display}`}}>
            <ShowSearchResult data={data} />
        </div>
        <div style={{display:`${emptyDisplay}`}}>
            <h2>
                Sorry Your Input is Invalid, Please try again
            </h2>
        </div>
    </div>
}
