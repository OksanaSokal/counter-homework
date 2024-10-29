import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import s from './components/style.module.css'
import {Settings} from './components/Settings/Settings';
import {CounterView} from './components/CounterView/CounterView';
import {useDispatch, useSelector} from 'react-redux';
import type {RootState} from './app/store';
import {setMaxValueReducerAC, setStartValueReducerAC, setValueReducerAC,} from './model/valueReducer';


function App() {

    const dispatch = useDispatch();

    const value = useSelector<RootState, number>(state => state.value.value)
    const startValue = useSelector<RootState, number>(state => state.value.startValue)
    const maxValue = useSelector<RootState, number>(state => state.value.maxValue)

    const [isChanged, setIsChanged] = useState(false);
    const [error, setError] = useState(false)


    useEffect(() => {
        if (startValue >= maxValue || startValue < 0 || maxValue < 0) {
            setError(true)
            setIsChanged(true)
        } else if (isChanged) {
            setError(false)
        }
    }, [startValue, maxValue, isChanged]);

    const incrementHandler = () => {
        dispatch(setValueReducerAC(value+1))
    }


    const getMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        // let inputValue = e.currentTarget.value;
        // const regex = /^([1-9]\d*|0)$/;
        // if (regex.test(inputValue))

        if (e.currentTarget.value) {
            dispatch(setMaxValueReducerAC(+e.currentTarget.value))
            setIsChanged(true);
        } else {
            setError(true);
        }
    }

    const getStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setStartValueReducerAC(+e.currentTarget.value))
        setIsChanged(true);
    }

    const reset = () => {
        startValue ? dispatch(setValueReducerAC(startValue)) : dispatch(setValueReducerAC(0))
    }

    const setRange = () => {
        dispatch(setValueReducerAC(startValue))
        setIsChanged(false)

        // localStorage.setItem('startValue', JSON.stringify(value))
        // localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }

    return (
        <div className="App">
            <div className={s.container}>
                <Settings disabled={isChanged} getStartValueHandler={getStartValueHandler} maxValue={maxValue}
                          startValue={startValue} getMaxValueHandler={getMaxValueHandler} setRange={setRange}
                          error={error}/>
            </div>
            <div className={s.container}>
                <CounterView value={value} error={error} startValue={startValue} maxValue={maxValue}
                             increment={incrementHandler}
                             reset={reset} isChanged={isChanged}/>
            </div>

        </div>
    );
}

export default App;

