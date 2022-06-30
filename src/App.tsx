import React from 'react';
import {Link, Outlet} from "react-router-dom";
import './App.css';

import {getFruits} from "./store/fruits";

function App() {
    const fruits = getFruits();

    return (
        <div className="App">
            <h1><Link to={"/"}>Fruit facts!</Link></h1>
            <i>Click on the link below to show fruit facts!</i>
            <p>Fruit facts from
                <a href={"https://fruitninjafacts.fandom.com/wiki/Sensei%27s_fruit_facts"} target="black">Fruit Ninja
                    game</a>
            </p>
            <nav style={{
                borderBottom: "2px solid #cccccc",
                paddingBottom: "1rem"
            }}>
                {fruits.map((fruit) => (
                    <Link
                        style={{display: "inline-block", margin: "1rem 1rem"}}
                        to={`fruits/${fruit.name}`}
                        key={fruit.id}
                    >
                        {fruit.name}
                    </Link>
                ))}
            </nav>
            <Outlet/>
        </div>
    );
}

export default App;
