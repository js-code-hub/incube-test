export const add = (numbers: string): number => {

    // If the input string is empty, then it returns 0
    if (!numbers) return 0;

    // Default delimeters is comma or newline
    let delimeter = /,|\n/;
    let numberString = numbers;

    // check if there is a custom delimeter
    if (numbers.startsWith('//')) {
        const delimiterEnd = numbers.indexOf('\n');
        delimeter = new RegExp(numbers.substring(2, delimiterEnd))
        numberString = numbers.substring(delimiterEnd + 1)
    }

    // split the number string by the delimeter and convert each part to a number
    const numberArray = numberString.split(delimeter).map(Number);

    // Filter out negative numbers from the array
    const negativeNumbers = numberArray.filter(num => num < 0);

    // Throw an exception if there are any negative numbers
    if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed ${negativeNumbers.join(',')}`);
    }

    // Atlast return the sum of the numbers in an array
    return numberArray.reduce((sum, num) => sum + num, 0)
}