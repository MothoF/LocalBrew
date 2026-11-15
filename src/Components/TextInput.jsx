import React from 'react';
import ReactDOM from 'react-dom';

export default function TextInput(props){
    return (
        <>
            <input type='text' placeholder={props.DisplayText}/>
        </>
    );
}