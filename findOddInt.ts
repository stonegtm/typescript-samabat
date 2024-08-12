export const findOddInteger = (arr: number[]): number => {
    return arr.reduce((acc, num) => acc ^ num, 0);
};