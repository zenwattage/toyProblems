//in class test - nailed it
// 3/20/19


// %3 print fizz

// %5 print buzz

/// 3 && 5 print fizzbuzz

function fizzBuzz() {}

    for(var i = 1; i <= 100; i++) {
        
        if( i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz");
        }
        
        else if( i % 5 === 0) {
            console.log("buzz");
        }

        else if( i % 3 === 0 ) {
            console.log("fizz");
        }       

        else {
            console.log(i);
        }

    };

fizzBuzz();