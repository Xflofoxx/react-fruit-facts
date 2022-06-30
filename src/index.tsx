import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import './index.css';
import App from './App';
import Fruit from './pages/Fruit';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="fruits/:fruitName" element={<Fruit/>}/>
                    <Route path="*" element={
                        <main style={{padding: "1rem"}}>
                            <h1>404 - Not found!</h1>
                            <p>There's nothing here!</p>
                        </main>
                    }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
