import { normalWeight, obese, overWeight, underWeight } from "../data/weightRanges"

export const getRange = (bmi) => {
    if(bmi < 18.5) return underWeight;
    if(bmi >= 18.5 && bmi <=24.9) return normalWeight;
    if(bmi >= 25 && bmi <= 29.9) return overWeight;
    if(bmi >= 30) return obese;
}