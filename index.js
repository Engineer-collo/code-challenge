// challenge 1

function marksGrading(marks) {
    if(marks > 79 && marks <= 100) {
        return  "Your grade is: A" ;
    }else if(marks >= 60 && marks <= 79  ) {
        return "Your grade is: B-";
    }else if(marks <= 59 && marks >= 49) {
        return "Your grade is: c-";
    }else if(marks < 49 && marks >= 40) {
        return "Your grade is: D-";
    }else if(marks < 40 && marks >= 0) {
        return "You grade is: E";
    }else {
        return "Please enter a value between 0 and 100"
    }
}
console.log(marksGrading( ))





// challenge 2
function speedDetector(speed) {
    if (speed < 70) {
        console.log( "Ok")
    }else if (speed > 70 && speed <= 75 ) {
        console.log(`Points: ${1}`)
    } else if (speed > 75 && speed <= 80 ) {
        console.log(`Points: ${2}`)
    } else if (speed > 80 && speed <= 85 ) {
        console.log(`Points: ${3}`)
    } else if (speed > 85 && speed <= 90 ) {
        console.log(`Points: ${4}`)
    } else if (speed > 90 && speed <= 95 ) {
        console.log(`Points: ${5}`)
    } else if (speed > 95 && speed <= 100 ) {
        console.log(`Points: ${6}`)
    } else if (speed > 100 && speed <= 105 ) {
        console.log(`Points: ${7}`)
    } else if (speed > 105 && speed <= 110 ) {
        console.log(`Points: ${8}`)
    } else if (speed > 110 && speed <= 115 ) {
        console.log(`Points: ${9}`)
    } else if (speed > 115 && speed <= 120 ) {
        console.log(`Points: ${10}`)
    } else if (speed > 120 && speed <= 125 ) {
        console.log(`Points: ${11}`)
    } else if (speed > 125 && speed <= 130 ) {
        console.log("Licence suspended")
    } 
}
speedDetector()





// challenge 3
// calculate PAYE
let PAYE = (taxablePay) =>  {
       if(taxablePay >= 0 && taxablePay <= 24000 ) {
           return (10 / 100 * taxablePay)
       }else if (taxablePay >= 24001 && taxablePay <= 32333 ) {
           return (25 / 100 * taxablePay)
       }else if (taxablePay >= 32334 && taxablePay <= 500000) {
           return (30 / 100 * taxablePay)
       }else if (taxablePay >= 500001 && taxablePay <= 800000) {
           return (32.5 / 100 * taxablePay)
       }else if (taxablePay >800000) {
           return (35 / 100 * taxablePay)
       }else {
           return "cannot do NHIF deductions on that figure!"
       }
   }
    

console.log(nhifDeduction(42000) )

// calculate nhif deductions
const nhif = function nhifDeduction(grossPay) {
    if (grossPay >0 && grossPay < 5999) {
        return 150
    }else if (grossPay >= 6000 && grossPay <= 7999) {
        return 300
    }else if (grossPay >=8000 && grossPay <= 11999) {
        return 400
    } else if(grossPay >=12000 && grossPay <= 14999) {
        return 500
    }else if (grossPay >= 1500 && grossPay <= 19999) {
        return 600
    }else if (grossPay >= 20000 && grossPay <=24999) {
        return 750
    }else if (grossPay >= 25000 && grossPay <= 29999 ) {
        return 850
    }else if (grossPay >= 30000 && grossPay <= 34999) {
        return 900
    } else if (grossPay >= 35000 && grossPay <= 39999) {
        return 950
    } else if (grossPay >= 40000 && grossPay <= 44999) {
        return 1000
    }else if (grossPay >= 45000 && grossPay <= 49999) {
        return 1100
    }else if (grossPay >= 50000 && grossPay <= 59999) {
        return 1200
    }else if (grossPay >= 60000 && grossPay <= 69999) {
        return 1300
    }else if (grossPay >= 70000 && grossPay <= 79999) {
        return 1400
    }else if (grossPay >= 80000 && grossPay <= 89999) {
        return 1500
    }else if (grossPay >= 90000 && grossPay <= 99999) {
        return 1600
    }else if (grossPay >= 100000) {
        return 1700
    }
    }
console.log(nhifDeduction())

// calculate nssf deductions 
const nssf = function nssfDeduction() {
    return (6 / 100 * 7000)
}
console.log(nssfDeduction())

