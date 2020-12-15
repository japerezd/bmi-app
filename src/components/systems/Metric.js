import React, {useContext} from 'react';
import { DataContext } from '../../DataContext';
import { bmiMetric } from '../../helpers/bmiMetric';
import { useForm } from '../../hooks/useForm';
import { types } from '../../types/types';
import { SystemsNavbar } from '../ui/SystemsNavbar';

export const Metric = ({history}) => {
    const {dispatch} = useContext(DataContext);

    const [formValues, handleInputChange] = useForm({
        meters: '',
        kilograms: ''
    });


    const {meters, kilograms} = formValues;

    const handleCalculate = e => {
        e.preventDefault();

        dispatch({
            type: types.metric,
            payload: {
                height: meters,
                bmi: bmiMetric(meters, kilograms)
            }
        });

        history.push('/result');

    }

    return (

        <div className="container animate__animated animate__fadeIn">
            <div className="container__header">
                BMI Calculator for adults
            </div>
            <div className="metric-system">
        <SystemsNavbar/>

            <form
                onSubmit={handleCalculate}
            >
                <div className="metric-system__height">
                    <label><strong>Height: </strong></label>
                    <div>
                    <input type="number" placeholder="1.70" name="meters" value={meters}
                        onChange={handleInputChange}
                    /> 
                    <label className="measurements"> meters</label>
                    </div>
                </div>
                
                <div className="metric-system__weight">
                    <label><strong>Weight: </strong></label>
                    <div>
                        <input type="number" placeholder="75" name="kilograms" value={kilograms}
                            onChange={handleInputChange}
                        /> 
                        <label className="measurements"> kilograms</label>
                    </div>
                </div>

            {
                meters ==='' || kilograms === '' 
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
