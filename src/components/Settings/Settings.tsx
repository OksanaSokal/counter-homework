import {Input} from '../Input';
import React, {ChangeEvent} from 'react';
import s from '../style.module.css';
import {Button} from '../Button';

export type SettingsType = {
    disabled: boolean
    getStartValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
    getMaxValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
    maxValue: number
    startValue: number
    setRange: () => void
}

export const Settings = ({
                             disabled,
                             getStartValueHandler,
                             maxValue,
                             startValue,
                             getMaxValueHandler,
                             setRange
                         }: SettingsType) => {
    return (
        <>
            <div className={s.wrapper}>
                <Input title={'max value: '} type={'number'} onChange={getMaxValueHandler} value={maxValue}/>
                <Input title={'start value: '} type={'number'} onChange={getStartValueHandler} value={startValue}/>
            </div>
            <div className={s.wrapper}>
                <Button className={s.button} title={'set'} onClick={setRange} disabled={disabled}/>
            </div>
        </>
    )
}