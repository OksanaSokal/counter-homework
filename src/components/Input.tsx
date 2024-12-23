import React, {ChangeEvent} from 'react';
import s from './style.module.css'

type InputType = {
    title: string
    type: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    value: number
    className?: string
}


export const Input = ({title, type, onChange, value, className}: InputType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e)
    }
const classNameAdd = className ? `${s.input} ${className}`: s.input
    return (
        <div className={s.input_wrap}>
            <span>{title}</span>
            <input  onChange={onChangeHandler} type={type}  className={classNameAdd} value={value} ></input>
        </div>
    );
};

