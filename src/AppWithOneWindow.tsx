import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import s from './components/style.module.css'
import {Settings} from './components/Settings/Settings';
import {CounterView} from './components/CounterView/CounterView';
import {CounterViewAdditional} from './componentsWithOneWindow/CounterViewAdditional';


function AppWithOneWindow() {
    const [value, setValue] = useState(Number(localStorage.getItem('startValue')) || 0)

    const incrementHandler = () => {
        setValue(value + 1)
    }

    const [isChanged, setIsChanged] = useState(false);

    const [maxValue, setMaxValue] = useState( Number(localStorage.getItem('maxValue')) || 5)
    const getMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
        setIsChanged(true);
    }

    const [startValue, setStartValue] = useState(Number(localStorage.getItem('startValue')) || 0)
    const getStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value)
        setIsChanged(true);
    }

    useEffect(()=>{
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    },[startValue, maxValue])



    useEffect(() => {
        if (startValue >= maxValue || startValue < 0 || maxValue < 0) {
            setError(true)
            setDisabled(true)
        } else if (isChanged)  {
            setError(false)
            setDisabled(false)
        }
    }, [startValue, maxValue, isChanged]);

    const reset = () => {
        startValue ? setValue(startValue) : setValue(0)
    }

    const setRange = () => {
        setValue(startValue)
        setIsChanged(false)
    }

    const [error, setError] = useState(false)
    const [disabled, setDisabled] = useState(true)

    const openSettings =  () => {
        setIsChanged(true)
    }

    return (
        <div className="App">
            {
                isChanged ?
                    (
                        <div className={s.container}>
                            <Settings disabled={disabled} getStartValueHandler={getStartValueHandler} maxValue={maxValue}
                                      startValue={startValue} getMaxValueHandler={getMaxValueHandler} setRange={setRange}
                                      error={error}/>
                        </div>
                    )
                   :  (
                        <div className={s.container}>
                            <CounterViewAdditional value={value} error={error} startValue={startValue} maxValue={maxValue}
                                                   increment={incrementHandler}
                                                   reset={reset} isChanged={isChanged} openSettings={openSettings}/>
                        </div>
                    )
            }


        </div>
    );
}

export default AppWithOneWindow;

