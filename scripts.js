"use strict";

/** task 1 **/

{
    function calcNumber(a, b, c) {
        return (a - b) / c;
    }
    console.log(calcNumber(48, 4, 2));

    /** стрелочная функция**/

    let calcNumber = (a, b, c) => (a - b) / c;
    console.log(calcNumber(48, 4, 2));
} 

/** task 2 **/

{
    function getCubeSquare(number) {
        return `${Math.pow(number, 3)}, ${Math.pow(number, 2)}`;
    }

    console.log(getCubeSquare(47));

    /** стрелочная функция**/
    let getCubeSquare = (number) => `${Math.pow(number, 3)}, ${Math.pow(number, 2)}`;

    console.log(getCubeSquare(47));
}

/** task 3 **/

{
    /** Одна функция на min и max **/

    function getMinMax(a, b) {
        return a < b ? "a - наименьшее число" : 'b - наибольшее число';
    }
    console.log(getMinMax(14, 55));

    /** Две функции на min и max**/
    let min = (a, b) => a < b ? a : b;
    console.log(min(1, 2));

    let max = (a, b) => a > b ? a : b; 
    console.log(max(1, 2));
}

/** task 4 **/

{
    function createArray(a, b) {
        let array = [];

        for (let i = a; i <= b; i++) {
            array.push(i);
        }
        return array;
    }

    function printArray(array22) {
        console.log(array22);
    }
    
    printtArray(createArray(+prompt('Введите первый элемент массива')), +prompt('Введеите последний элемент массива'));
}

/** task 5, 6**/

{
    let isEven = (a) => a % 2 === 0 ? true : false;
    console.log(isEven(5));

    function getArray(array) {
        let newArray = [];

        for ( let value of array) {
            if (isEven(value)) newArray.push(value);
        }
        return newArray;
    }
    console.log(getArray([3, 4, 5, 6, 7, 13, 14, 22, 47, 54]));
}

/** task 7 **/

{
    function getPyramid (value, param) {
        for (let i = 1; i <= +value; i++) {
            let str = '';

            for (let j = 0; j < i; j++) {
                str += i || param;
            }
            console.log(str);
        }
            
    }

    getPyramid(prompt('Введите количество рядов пирамидки'), '*');
}



/** task 8 **/

{
    function getTriangle (row) {
        let str = '*';
        let countSpace = row - 1;
        for (let i = 1; i <= row; i++) {
            let space = ' '.repeat(countSpace);
            countSpace--;
            console.log(`${space}${str}`);
            str += '**';
        }
    }
    getTriangle(2);
}


/** task 9 **/
{

    function fibonacci(num) {

    let array = [0, 1];

        for (let i = 0; i <= num; i++) {
            
            let fib = array[array.length - 1] + array[array.length - 2]; 

            if (fib <= num) array.push(fib);
        }
        return array;
    }

    console.log(fibonacci(1000));
}

/** task 10 **/

{
    function getSum(num) {

    let stringNum = String(num);
    let sum = 0;

        for (let i = 0; i < stringNum.length; i++) {
            sum = sum + +stringNum[i];
        }
        console.log(sum); 

        // if (sum <= 9) {
        //     return sum;
        // } else {
        //     getSum(sum);
        // }

        return sum <= 9 ? sum : getSum(sum);
    }

    getSum(11);
}

{
    /** Вариант решения на онлайн-уроке**/

    // function getSum(value) {
    //     let sum = 0;
    
    //     for (let i = 0; i < value.length; i++) {
    //         sum += +value[i];
    //     }
    
    //     console.log(sum);
    
    //     if (sum > 9) {
    //         return getSum(String(sum))
    //     }
    
    //     return sum;
    // }
    
    // getSum('99');
}

/** task 11 **/
{
    function printArray(array) {

        console.log(array[i]);
        i++;

        if (i < array.length) printArray(array);

    }
    let i = 0;

    printArray([7, 3, 16, 25, 1, 8]);
}


/** task 12 (решение на онлайн-уроке) **/

{
    function showInfo(name, group) {
        let arr = ['Домашняя работа: "Функции"', 
                   `Выполнил студент гр. ${group}`,
                    `${name}`];
        let longString = 0;

        for (let value of arr) {
            if (value.length > longString) {
                longString = value.length;
            }
        }

        for (let i = 0; i < arr.length; i++) {
            const countRepeatWhitespase = longString - arr[i].length;

            arr[i] = `* ${arr[i]}${' '.repeat(countRepeatWhitespase)} *`;
        }

        arr.push('*'.repeat(longString + 4));
        arr.unshift('*'.repeat(longString + 4));

        for (let value of arr){
            console.log(value);
        }
    }

    showInfo('Петров Петр Петрович', 25688888);
}
    // // решение через несколько функций
{
    function getLongString(arr) {
        let longString = 0;

        for (let value of arr) {
            if (value.length > longString) {
                longString = value.length;
            }
        }
        return longString;
    }

    function createData(arr, longString) {
        for (let i = 0; i < arr.length; i++) {
            const countRepeatWhitespase = longString - arr[i].length;

            arr[i] = `* ${arr[i]}${' '.repeat(countRepeatWhitespase)} *`;
        }

        arr.push('*'.repeat(longString + 4));
        arr.unshift('*'.repeat(longString + 4));
    }

    function showInfo(name, group) {
        let arr = ['Домашняя работа: "Функции"', 
                   `Выполнил студент гр. ${group}`,
                    `${name}`];
        
        const longString = getLongString(arr);
        createData(arr, longString);
        
        for (let value of arr){
            console.log(value);
        }
    }
    showInfo(prompt('Введите Ваше ФИО'), +prompt('Введите № группы'));

}
