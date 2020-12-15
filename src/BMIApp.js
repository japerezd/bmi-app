import React, { useEffect, useReducer } from 'react';
import { DataContext } from './DataContext';
import { bmiReducer } from './reducers/bmiReducer';
import { AppRouter } from './routers/AppRouter';


export const BMIApp = () => {
    
    const init = () => {
        return JSON.parse(localStorage.getItem('bmi')) || {meters:null, kilograms:null}
    }
    const [data, dispatch] = useReducer(bmiReducer, {}, init);

    useEffect(() => {
       localStorage.setItem('bmi', JSON.stringify(data))
    }, [data])

    return (
        <>
        <DataContext.Provider value={ {data, dispatch} }>
            <AppRouter/>
        </DataContext.Provider>
        </>
    )
}
