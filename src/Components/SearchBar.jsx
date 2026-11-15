import React from 'react';
import ReactDOM from 'react-dom';
import SearchIcon from './SearchIcon';
import TextInput from './TextInput';
import '../Styles/SearchBarStyles.css';

export default function SearchBar(props){
    return(
        <div className='search'>
            <SearchIcon/>
            <TextInput className={props.className} DisplayText={props.DisplayText}/>
        </div>
    );
}