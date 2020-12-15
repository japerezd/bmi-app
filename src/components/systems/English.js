import React, { useContext } from 'react'
import { DataContext } from '../../DataContext';
import { bmiEnglish, getHeightToInches } from '../../helpers/bmiEnglish';
import { useForm } from '../../hooks/useForm';
import { types } from '../../types/types';
import { SystemsNavbar } from '../ui/SystemsNavbar';

export const English = ({history}) => {

    const [formValues, handleInputChange] = useForm({
        feet:'',
        inches: '',
        pounds: ''
    });

    const {dispatch} = useContext(DataContext);

    const {feet, inches, pounds} = formValues;

    const handleCalculate = e => {
        e.preventDefault();
        dispatch({
            type: types.english,
            payload: {
                height: getHeightToInches(feet, inches),
                bmi: bmiEnglish(feet, inches, pounds)
            }
        });

        history.push('/result');
    }

    return (

        <div className="container animate__animated animate__fadeIn">
            <div className="container__header">
                BMI Calculator for adults
            </div>

        <div className="english-system">    
        <SystemsNavbar/>
        
        <form
            onSubmit={handleCalculate}
        >

            <div className="english-system__height ">
                <label><strong>Height: </strong></label>
                <div>
                    <input 
                        type="number" 
                        placeholder="5"
                        name="feet"
                        value={feet}
                        onChange={handleInputChange}
                    /> 
                    <label className="measurements"> feet</label>
                    
                    <input 
                        type="number" 
                        placeholder="9"
                        name="inches"
                        value={inches}
                        onChange={handleInputChange}
                    /> 
                    <label className="measurements"> inches</label>
                </div>
            </div>
        
            <div className="english-system__weight">
                <label><strong>Weight: </strong></label>
                <div>
                    <input 
                        type="number" 
                        placeholder="155"
                        name="pounds"
                        value={pounds}
                        onChange={handleInputChange}
                    /> 
                    <label className="measurements"> pounds</label>
                </div>
            </div>

            {
                feet ==='' || inches === '' || pounds === '' 
                ?
                    <button className="btn btn-block btn-primary" type="submit" disabled>
                        Calculate
                    </button>
                :
                <button className="btn btn-block btn-primary" type="submit">
                        Calculate
                </button>
            }
        </form>
    </div>

    </div>

    )
}
