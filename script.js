// 2. Створити функцію, яка приймає дату та повертає рік.
function getYear(){
    return new Date().getFullYear()
}

console.log(getYear())
// 3. Створити функцію, яка приймає дату та повертає місяць.
function getMonth(){
    return new Date().getMonth()+1
}

getMonth()
// 4. Створити функцію, яка приймає дату та повертає день місяця.
function getDayMonth(){
    return new Date().getDay()+1
}

getDayMonth()
// 5. Створити функцію, яка приймає дату та повертає години.
function getHour(){
    return new Date().getHours()
}
getHour()
// 6. Створити функцію, яка приймає дату та повертає хвилини.
function getMinutes(){
    return new Date().getMinutes()
}
getMinutes()
// 7. Створити функцію, яка приймає дату та повертає секунди.
function getSeconds(){
    return new Date().getSeconds()
}
getSeconds()
// 8. Створити функцію, яка перевіряє чи є дата вихідним днем (субота або неділя).
function isWeekend(checkDay){
    const date = new Date(checkDay)
    const day = date.getDay()
    console.log(date)
    console.log(day)
    return day !== 0 || day !== 6
}

console.log(isWeekend("2024-12-21"))

