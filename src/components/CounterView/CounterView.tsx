import s from '../style.module.css';
import {Button} from '../Button';


export type CounterViewProps = {
    value: number
    startValue: number
    maxValue: number
    error: boolean
    increment: () => void
    reset: () => void
    isChanged: boolean
}

export const CounterView = ({
                                value,
                                startValue,
                                maxValue,
                                error,
                                increment,
                                isChanged,
                                reset,
                            }: CounterViewProps) => {

    const disabledInc = value >= maxValue || isChanged
    const disabledReset = value === startValue || isChanged
    const className = value === maxValue ? `${s.max} ${s.number}` : s.number

    // console.log('value -', value)
    // console.log('startValue - ',startValue)
    // console.log('maxValue - ',maxValue)
    // console.log('isChanged -',isChanged)
    return (
        <>
            <div className={s.wrapper}>

                {error ? (
                    <span className={`${s.error} ${s.number}`}>{'Incorrect value'}</span>
                ) : isChanged ? (
                    <span>{'Enter values and press "set"'}</span>
                ) : (
                    <span className={className}>{value}</span>
                )
                }


            </div>
            <div className={s.wrapper}>
                <div className={s.button_box}>
                    <Button className={s.button} title={'inc'} onClick={increment} disabled={disabledInc}/>
                    <Button className={s.button} title={'reset'} onClick={reset} disabled={disabledReset}/>
                </div>
            </div>
        </>
    )
}

