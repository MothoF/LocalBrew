import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import SearchBar from './Components/SearchBar';

function App() {
    return (
        <>
            <SearchBar className="search" DisplayText="Browse your favourite coffee..."/>
        </>
    );
}

export default App
