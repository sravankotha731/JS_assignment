// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
let is_leapYear = (year) => {
    year % 4 === 0 ? (year % 100 === 0 ? (year % 400 === 0 ? console.log(`${year} -- > leap year`) 
                                                           : console.log(`${year} -- > Not a leap year`)) 
                                       : console.log(`${year} -- > leap year`)) 
                   : console.log(`${year} -- > Not a leap year`)
}
is_leapYear(2000)