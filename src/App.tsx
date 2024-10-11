import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import s from './components/style.module.css'
import {Settings} from './components/Settings/Settings';
import {CounterView} from './components/CounterView/CounterView';


function App() {
    const [value, setValue] = useState(0)

    const incrementHandler = () => {
        setValue(value + 1)
    }

    const [maxValue, setMaxValue] = useState(5)
    const getMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
    }

    const [startValue, setStartValue] = useState(0)
    const getStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value)
    }

    // useEffect(()=>{
    //     localStorage.setItem('startValue', JSON.stringify(startValue))
    //     localStorage.setItem('maxValue', JSON.stringify(maxValue))
    // },[startValue, maxValue])

    useEffect(() => {
        if (startValue >= maxValue || startValue < 0 || maxValue < 0) {
            setError(true)
            setDisabled(true)
        } else {
            setError(false)
            setDisabled(false)
        }
    }, [startValue, maxValue]);

    const reset = () => {
        startValue ? setValue(startValue) : setValue(0)
    }

    const setRange = () => {
        setValue(startValue)
    }

    const [error, setError] = useState(false)
    const [disabled, setDisabled] = useState(true)

    return (
        <div className="App">
            <div className={s.container}>
                <Settings disabled={disabled} getStartValueHandler={getStartValueHandler} maxValue={maxValue}
                          startValue={startValue} getMaxValueHandler={getMaxValueHandler} setRange={setRange}/>
            </div>
            <div className={s.container}>
                <CounterView value={value} error={error} maxValue={maxValue} increment={incrementHandler}
                             reset={reset}/>
            </div>

        </div>
    );
}

export default App;

