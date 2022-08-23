import {useState} from "react";
import "./followersResult.css";
export const FollowersResult = ({userName}) => {
    const [data, setData] = useState([])
    fetch(`https://api.github.com/users/${userName}/followers`)
        .then(
            (result) => {
                return result.json()
            }).then((data => {
        // console.log('inputs is===>', data)
        setData(data)
        // console.log('data id', data[0]?.id)
    }))
    return <div className="followersInformationContainer">
        <a href="./">Back to Home Page</a>
        <h1>Follower's Information</h1>
        {data.map((v,i)=> {
            return <li key={i}>
                {v?.login}
            </li>})
        }
    </div>
}


