//function that checks if a number is prime

//number that cannot be made by multiplying other whole numbers
//return true if prime
// false if not

function primeCheck(number) {

    for(var i = 2; i < number; i ++) {

        if ( number % i === 0) {

            return false;
        }
    }
    return number > 1;
}

primeCheck(7);