// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
let is_leapYear = () => {
    let year = document.getElementById("Q3").value;
    let result =  year % 4 === 0 ? (year % 100 === 0 ? (year % 400 === 0 ? (`${year} -- > leap year`) 
                                                           : (`${year} -- > Not a leap year`)) 
                                       :(`${year} -- > leap year`)) 
                   :(`${year} -- > Not a leap year`)
    document.getElementById("A3").innerHTML= result
}