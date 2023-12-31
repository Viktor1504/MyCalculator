import React from 'react';
import s from './Calculator.module.css'

type ButtonType = {
    title: string
    className?: string
    onClick?: (e: any) => void
    id?: string
}

const Button = (props: ButtonType) => {

    return <div id={props.id}
                className={`${s.btn} ${props.className}`}
                onClick={props.onClick}>
        {props.title}
    </div>
}

export default Button;