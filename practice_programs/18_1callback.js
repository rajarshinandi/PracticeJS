/**
 * With callback keyword one function can call another function 
 * 
 */

// Greet the persone based on current time
function greet(name, callback) {
    console.log('Welcome', name); //Syncn in nature
    callback(); //Syncn in nature
}

// Callback function
function advGreetings() {
    if (new Date().getHours() > 12)
        console.log("Good Evening")
    else
        console.log('Good Morning!')

}

greet("Raj", advGreetings) //We should call the actual function

// Callback with async function

function printInfo(name, customMessage, callback) {

    // setTimeout is a async function
    setTimeout(() => {
        console.log("I am ", name, 'waited for 5s!') //Here this will be printed next due to async type
    }, 5000) //5000ms -> 5s

    callback(customMessage); // Here this will be printed first
}

function displaycustomMessage(customMessage) {
    console.log(customMessage);
}

printInfo('Raj', 'Urgent customMessage!!', displaycustomMessage);