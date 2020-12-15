

export const bmiMetric = (meters, kilograms) => {
    const result = kilograms / (meters * meters);
    return  Math.round(result * 10) / 10;
}