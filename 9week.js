// Task 1
let number = 5; 

if (number % 2 === 0) {
    console.log(number + ' — четное число');
} else {
    console.log(number + ' — нечетное число');
}

// Task 2
let num11 = 10; 
let num22 = 15; 

if (num11 > num22) {
    alert(num11 + ' — наибольшее число');
} else if (num22 > num11) {
    alert(num22 + ' — наибольшее число');
} else {
    alert('Числа равны');
}

// Task 3
let year = 2024; 

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    alert(year + ' — високосный год');
} else {
    alert(year + ' — не високосный год');
}

// Task 4
let variable = '42'; 

if (typeof variable === 'string') {
    alert('Переменная является строкой');
} else if (typeof variable === 'number') {
    alert('Переменная является числом');
} else {
    alert('Переменная не является строкой или числом');
}

// Task 5
let hour = 18; 

if (hour >= 6 && hour < 12) {
    alert('Доброе утро');
} else if (hour >= 12 && hour < 18) {
    alert('Добрый день');
} else if (hour >= 18 || hour < 6) {
    alert('Доброй ночи');
} else {
    alert('Некорректное значение времени');
}

// Task 6
let num1 = 10; 
let num2 = 25; 
let num3 = 50; 
let max = num1;
if (num2 > max) {
    max = num2;
}
if (num3 > max) {
    max = num3;
}
alert(max + ' — наибольшее число');

// Task 7
let correctLogin = 'madina';
let correctPassword = '0202';


let userLogin = prompt('Введите логин:');
let userPassword = prompt('Введите пароль:');

if (userLogin === correctLogin && userPassword === correctPassword) {
    alert('Доступ разрешен');
} else {
    alert('Доступ запрещен');
}

// Task 8
let monthNumber = parseInt(prompt('Введите номер месяца (1-12):'), 10);
let monthName;

if (monthNumber === 1) {
    monthName = 'Январь';
} else if (monthNumber === 2) {
    monthName = 'Февраль';
} else if (monthNumber === 3) {
    monthName = 'Март';
} else if (monthNumber === 4) {
    monthName = 'Апрель';
} else if (monthNumber === 5) {
    monthName = 'Май';
} else if (monthNumber === 6) {
    monthName = 'Июнь';
} else if (monthNumber === 7) {
    monthName = 'Июль';
} else if (monthNumber === 8) {
    monthName = 'Август';
} else if (monthNumber === 9) {
    monthName = 'Сентябрь';
} else if (monthNumber === 10) {
    monthName = 'Октябрь';
} else if (monthNumber === 11) {
    monthName = 'Ноябрь';
} else if (monthNumber === 12) {
    monthName = 'Декабрь';
} else {
    monthName = 'Некорректный номер месяца';
}
alert('Месяц: ' + monthName);

// Task 9
let age = parseInt(prompt('Введите ваш возраст:'), 10);
let ageCategory
if (age < 12) {
    ageCategory = 'детский возраст';
} else if (age >= 12 && age < 18) {
    ageCategory = 'подростковый возраст';
} else if (age >= 18 && age < 65) {
    ageCategory = 'взрослый возраст';
} else if (age >= 65) {
    ageCategory = 'пожилой возраст';
} else {
    ageCategory = 'Некорректный возраст';
}
alert('Возрастная категория: ' + ageCategory);

// Task 10
let monthNumbe = parseInt(prompt('Введите номер месяца (1-12):'), 10);
let season;

if (monthNumbe === 12 || monthNumbe === 1 || monthNumbe === 2) {
    season = 'Зима';
} else if (monthNumbe >= 3 && monthNumbe <= 5) {
    season = 'Весна';
} else if (monthNumbe >= 6 && monthNumbe <= 8) {
    season = 'Лето';
} else if (monthNumbe >= 9 && monthNumbe <= 11) {
    season = 'Осень';
} else {
    season = 'Некорректный месяц';
}
alert('Сезон года: ' + season);

// 5 MEDIUM TASK
// Task 1
function minCutsForGuests(guests) {
    if (guests < 1) {
        return 'Количество гостей должно быть положительным числом';
    }
    
    // Если количество гостей равно 1, разрезов не нужно
    if (guests === 1) {
        return 0;
    }
    // Оптимизация для степеней двойки
    let cuts = 0;
    let num = guests;
    while (num % 2 === 0) {
        num /= 2;
        cuts++;
    }
    // Если число гостей является степенью двойки
    if (num === 1) {
        return cuts;
    } else {
        // В общем случае, минимальное количество разрезов будет равно количеству гостей
        return guests;
    }
}

let guests = parseInt(prompt('Введите количество гостей:'), 10);
let result = minCutsForGuests(guests);
alert('Минимальное количество разрезов: ' + result);

// Task 2
let apples = parseInt(prompt('Введите количество яблок:'), 10);

if (apples % 3 === 0) {
    alert('Яблоки можно разделить поровну между тремя детьми.');
} else {
    alert('Яблоки нельзя разделить поровну между тремя детьми.');
}

// Task 3
let a = parseFloat(prompt('Введите длину стороны a:'));
let b = parseFloat(prompt('Введите длину стороны b:'));
let c = parseFloat(prompt('Введите длину стороны c:'));

if (a + b > c && a + c > b && b + c > a) {
    alert('Да');
} else {
    alert('Нет');
}

// Task 4
let d = parseFloat(prompt('Введите длину стороны d:'));
let m = parseFloat(prompt('Введите длину стороны m:'));
let n = parseFloat(prompt('Введите длину стороны n:'));

if (d + m > n && d + m > n && m + n > d) {
    if (d === m && b === n) {
        alert('Равносторонний');
    } else if (d === m || d === n || m === n) {
        alert('Равнобедренный');
    } else {
        alert('Разносторонний');
    }
} else {
    alert('Несуществующий');
}

// Task 5
let weight = parseFloat(prompt('Введите вес товара в кг:'));
let country = prompt('Введите страну доставки (США или другая):').toLowerCase();
let cost;

if (weight <= 0) {
    alert('Вес товара должен быть положительным числом.');
} else if (weight <= 1) {
    cost = 10;
} else if (weight <= 5) {
    if (country === 'сша') {
        cost = 20;
    } else {
        cost = 30;
    }
} else {
    cost = 50;
}
if (cost !== undefined) {
    alert('Стоимость доставки: $' + cost);
}

