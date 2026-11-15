import React from 'react';
import ReactDOM from 'react-dom';
import SearchIcon from './SearchIcon';
import TextInput from './TextInput';

export default function SearchBar(props){
    return(
        <div className='search'>
            <SearchIcon/>
            <TextInput DisplayText={props.DisplayText}/>
        </div>
    );
}