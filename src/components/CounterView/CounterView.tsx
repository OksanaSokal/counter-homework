import s from '../style.module.css';
import {Button} from '../Button';


export type CounterViewProps = {
    value: number
    maxValue: number
    error: boolean
    increment: () => void
    reset: ()=> void
}

export const CounterView = ({
                                value,
                                maxValue,
                                error,
                                increment,
                                reset}: CounterViewProps) => {
    return (
        <>
            <div className={s.wrapper}>
                {
                    error
                        ? <span className={`${s.error} ${s.number}`}>{'Incorrect value'}</span>
                        : <span className={ value === maxValue ? `${s.max} ${s.number}` : s.number}>{value}</span>
                }
            </div>
            <div className={s.wrapper}>
                <div className={s.button_box}>
                    <Button className={s.button} title={'inc'} onClick={increment} disabled={value >= maxValue}/>
                    <Button className={s.button} title={'reset'} onClick={reset} disabled={+value === 0 }/>
                </div>
            </div>
        </>
    )
}