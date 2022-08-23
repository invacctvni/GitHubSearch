import './showSearchResult.css';
import { useNavigate } from "react-router-dom";
const ShowSearchResult = ({data}) => {
    const navigate = useNavigate()
    return <table
        className="showSearchResultContainer"
    >
            <tr>
                <th>Avatar</th>
                <th>User Name</th>
                <th>User Description</th>
                <th>Followers</th>
                <th>Followings</th>
                {/*<th>public repositories</th>*/}
            </tr>
            <tr>
                <td>
                    {/*avatar */}
                    <img src={data?.avatar_url} alt=""/>
                </td>
                {/*<td> {data?.login}</td>*/}
                <td> {data?.name}</td>
                <td> {data?.bio}</td>
                <td onClick={()=>navigate('/FollowersResult')}> {data?.followers}</td>
                <td>{data?.following}</td>
            </tr>
        </table>
}

export {ShowSearchResult}