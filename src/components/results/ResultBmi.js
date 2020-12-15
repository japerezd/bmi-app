import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { DataContext } from '../../DataContext'
import { getRange } from '../../helpers/getRange';
import { healthyWeightEnglish, healthyWeightMetric } from '../../helpers/healthyWeight';

export const ResultBmi = () => {
    // min bmi and max bmi for healthy persons
    const minHealthy = 18.5;
    const maxHealthy = 24.9;

    const isMetricOrEnglish = () => {
        if(symbol === 'kg')
            return 'metric';

        return 'english';
    }

    const {data: {symbol, bmi, height}} = useContext(DataContext);

    const {name, range, text} = getRange(bmi);

    const getMinMax = () => {
        if(isMetricOrEnglish() === 'metric'){
           const {min, max} = healthyWeightMetric(height, minHealthy, maxHealthy);
           return {min, max};
        }else{
            const {min, max} = healthyWeightEnglish(height, minHealthy, maxHealthy);
            return {min, max};
        }
    }

    const {min, max} = getMinMax();

    const link = () => {
        if(isMetricOrEnglish() === 'metric')
            return '/metric';
        
        return '/english';
    }

    return (
        <div className="result-container animate__animated animate__slideInDown">
            <div className="container__header">
                 Result
            </div>

            <Link to={link} className="link" style={{color: 'blue'}}>
                <h4>Calculate again</h4>
            </Link>

            <div className="result">
                <h3>YOUR BMI</h3>                    
                <span className="result-bmi">{bmi}</span>
            </div>

            <img src={`./assets/images/${name}`} className="person-weight" alt={name}/>

            <div className="range-description">
                <b>{ range }</b>
            </div>

            <div className="result-text">
                <p>{text}</p>
                <p><strong>The healthy range for BMI is between 18.5 and 24.9</strong></p>
            </div>
            
            <span className="directive-text">A healthy weight for someone your height would be</span>
            <span className="directive-range">{min} - {max} <span className="weight">{symbol}</span> </span>
        </div>
    )
}
