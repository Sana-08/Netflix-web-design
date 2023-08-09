import React from 'react'
import "./index.css";
import ReactDOM from "react-dom/client";
import Home from './Home';
import Enjoy from './Enjoy';
import Download from './Download';
import Watch from './Watch';
import Profiles from './Profiles';
import Asked from './Asked';
import Call from './Call';

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        <Home/>
        <Enjoy/>
       <Download/>
       <Watch/>
       <Profiles/>
       <Asked/>
       <Call/>
    </div>
);