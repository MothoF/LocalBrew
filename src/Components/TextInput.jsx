import React from 'react';
import ReactDOM from 'react-dom';
import '../Styles/TextInputStyles.css';

export default function TextInput(props){
    return (
        <>
            <input className={props.className} type='text' placeholder={props.DisplayText}/>
        </>
    );
}