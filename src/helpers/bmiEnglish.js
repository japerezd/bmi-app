

export const bmiEnglish = (feet,inches, pounds) => {

    const heightToInches = (feet * 12) + parseInt(inches);
    const newInchesSquare = heightToInches * heightToInches;
    const result = (pounds / newInchesSquare) * 703;
    return Math.round(result * 10) / 10;
}

export const getHeightToInches = (feet, inches) => {
    return (feet * 12) + parseInt(inches);
}