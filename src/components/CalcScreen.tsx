import React from 'react';
import s from './Calculator.module.css'

type CalcScreenType = {
    title: string
}

const CalcScreen = (props: CalcScreenType) => {

    return (
        <div className={s.calcScreen}>
            {props.title}
        </div>
    );
};

export default CalcScreen;