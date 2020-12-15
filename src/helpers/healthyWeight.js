

export const healthyWeightMetric = (height, minBmi, maxBmi) => {

    const min = Math.round(height * height * minBmi * 10) / 10;
    const max = Math.round(height * height * maxBmi * 10) / 10;
    return {
        min, max
    }
}

export const healthyWeightEnglish = (height, minBmi, maxBmi) => {
    const min = Math.round(Math.round(height * height / 703 * minBmi * 10) / 10);
    const max = Math.round(Math.round(height * height / 703 * maxBmi * 10) / 10);
    return {min, max}
}