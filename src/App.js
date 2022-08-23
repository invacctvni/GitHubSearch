import './App.css';
import React, {useState} from 'react'
import {ShowSearchResult} from "./ShowSearchResult";
import './showSearchResult.css'
import {Route,Routes} from "react-router-dom"
import {HomePage} from "./HomePage";
import {FollowersResult} from "./FollowersResult";

function App() {

  return (
    <div className="App">
        <Routes>
            <Route exact path ='/' element={<HomePage />} />
            <Route path ='/showSearchResult' element={<ShowSearchResult />}/>
            <Route path= '/FollowersResult' element={<FollowersResult />}/>
        </Routes>
    </div>

  );
}

export default App;
