'use strict';

//! Функція для виведення результату на екран і в консоль
function showResult(taskId, result) {
    document.getElementById(taskId).textContent = result;
    console.log(`${taskId}:`, result);
}

// -=================================================================

//- Задача №1
let someVar = 0;
++someVar;
if (someVar) {
    showResult('task1', `Результат: ${someVar}`);
}

// -=================================================================

//- Задача №2
let task2Result = '';
for (let i = 1; i <= 10; i++) {
    task2Result += `Пункт №${i}\n`;
}
showResult('task2', task2Result);

// -=================================================================

// -Задача №3
if (2 * 20 <= 10 || (30 / 2 < 5 && 10 <= '10') || 20 === '20') {
    showResult('task3', 'Результат: 000');
} else {
    showResult('task3', 'Умова не виконалася');
}

// -=================================================================

//- Задача №4
function divideNumbers(a, b) {
    // Перевірка на коректність вхідних даних
    if (typeof a !== 'number' || typeof b !== 'number' || b === 0) {
        return 'Результат ділення: Неможливо виконати ділення';
    }
    return `Результат ділення: ${a / b}`;
}

showResult(
    'task4',
    divideNumbers(10, 2) +
        '\n' +
        divideNumbers(7, 3) +
        '\n' +
        divideNumbers(5, 0) +
        '\n' +
        divideNumbers() +
        '\n'
);

// -=================================================================

//- Задача №5
const myArray = [5, 'текст', 10, true, [1, 2, 3]];
let task5Result = 'Елементи масиву:\n';

myArray.forEach((element, index) => {
    task5Result += `${index}: ${element}\n`;
    if (element === 10) {
        task5Result += `Знайдено число 10 на позиції ${index}\n`;
    }
});

showResult('task5', task5Result);
