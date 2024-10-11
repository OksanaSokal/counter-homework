import React from 'react';
import s from './style.module.css';

type SpanType = {
    value: number
    className?: string
}

const EditableSpan = ({value, className}: SpanType) => {

    return (
        <span className={className ? className + ' ' + s.number : s.number}>{value}</span>
    );
};

export default EditableSpan;