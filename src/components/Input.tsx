import React, {ChangeEvent} from 'react';
import s from './style.module.css'

type InputType = {
    title: string
    type: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    value: number
}


export const Input = ({title, type, onChange, value}: InputType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e)
    }

    return (
        <div className={s.input_wrap}>
            <span>{title}</span>
            <input  onChange={onChangeHandler} type={type}  className={s.input} value={value} ></input>
        </div>
    );
};
