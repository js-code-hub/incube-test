import { add } from "./utility/stringCalculator";

test('returns 0 for an empty string', () => {
    expect(add('')).toBe(0)
})

test('returns the number itself for a single number', () => {
    expect(add('1')).toBe(1);
})

test('returns the sum of two numbers', () => {
    expect(add('1,5')).toBe(6);
});

test('handles new lines between numbers', () => {
    expect(add('1\n2, 3')).toBe(6)
})

test('throws an exception for negative numbers', () => {
    expect(() => add('1,-2,3')).toThrow('negative numbers not allowed -2')
})

test('shows all the negative numbers seperated by comma in the exception message', () => {
    expect(() => add('-1,-2,3')).toThrow('negative numbers not allowed -1,-2')
})