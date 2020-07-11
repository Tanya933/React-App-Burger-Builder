import React from 'react';
import classes from './Button.module.css';

const button =(props)=>(
<button
className={[classes.Button, classes[props.btnType]].join(' ')} /* join will make array of strings into a single string*/ 
onClick={props.clicked}>{props.children}</button>
);

export default button;