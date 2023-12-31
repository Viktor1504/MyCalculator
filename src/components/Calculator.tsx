import React, {ChangeEvent, useState} from 'react';
import s from './Calculator.module.css'
import Button from './Button';
import CalcScreen from './CalcScreen';

const Calculator = () => {

    const [result, setResult] = useState<string>('')

    const onClickHandler = (e: ChangeEvent<HTMLDivElement>) => {
        setResult(result + e.target.id)
    }

    const clear = () => {
        setResult('')
    }

    const calculate = () => {
        setResult(eval(result).toString())
    }

    return (
        <div className={s.calc}>
            <CalcScreen title={result}/>
            <Button onClick={clear} className={`${s.grey}`} title={'AC'}/>
            <Button onClick={onClickHandler} className={`${s.grey}`} title={'+/-'}/>
            <Button onClick={onClickHandler} className={`${s.grey}`} title={'%'}/>
            <Button onClick={onClickHandler} className={`${s.orange}`} title={'÷'}/>
            <Button id={'7'} onClick={onClickHandler} title={'7'}/>
            <Button id={'8'} onClick={onClickHandler} title={'8'}/>
            <Button id={'9'} onClick={onClickHandler} title={'9'}/>
            <Button onClick={onClickHandler} className={`${s.orange}`} title={'×'}/>
            <Button id={'4'} onClick={onClickHandler} title={'4'}/>
            <Button id={'5'} onClick={onClickHandler} title={'5'}/>
            <Button id={'6'} onClick={onClickHandler} title={'6'}/>
            <Button onClick={onClickHandler} className={`${s.orange}`} title={'-'}/>
            <Button id={'1'} onClick={onClickHandler} title={'1'}/>
            <Button id={'2'} onClick={onClickHandler} title={'2'}/>
            <Button id={'3'} onClick={onClickHandler} title={'3'}/>
            <Button id={'+'} onClick={onClickHandler} className={`${s.orange}`} title={'+'}/>
            <Button id={'0'} onClick={onClickHandler} className={`${s.zero}`} title={'0'}/>
            <Button onClick={onClickHandler} title={'.'}/>
            <Button onClick={calculate} className={`${s.orange}`} title={'='}/>
        </div>
    )
}

export default Calculator;