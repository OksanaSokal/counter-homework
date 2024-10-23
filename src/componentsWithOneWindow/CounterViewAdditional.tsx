import s from '../components/style.module.css';
import {Button} from '../components/Button';



export type CounterViewProps = {
    value: number
    startValue: number
    maxValue: number
    error: boolean
    increment: () => void
    reset: () => void
    isChanged: boolean
    openSettings?: () => void
}

export const CounterViewAdditional = ({
                                value,
                                maxValue,
                                error,
                                increment,
                                isChanged,
                                reset,
                                openSettings,
                            }: CounterViewProps) => {

    const openSettingsHandler =() => {
        if (openSettings) {
            openSettings()
        }
    }
    return (
        <>
            <div className={s.wrapper}>

                {error ? (
                    <span className={`${s.error} ${s.number}`}>{'Incorrect value'}</span>
                ) : isChanged ? (
                    <span>{'Enter values and press "set"'}</span>
                ) : (
                    <span className={value === maxValue ? `${s.max} ${s.number}` : s.number}>{ value}</span>
                )
                }


            </div>
            <div className={s.wrapper}>
                <div className={s.button_box}>
                    <Button className={s.button} title={'inc'} onClick={increment} disabled={value >= maxValue}/>
                    <Button className={s.button} title={'reset'} onClick={reset} disabled={+value === 0}/>
                    <Button className={s.button} title={'set'} onClick={openSettingsHandler}/>
                </div>
            </div>
        </>
    )
}