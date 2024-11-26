// Write a function where if the user is present then print the details of the user else print error

const cartoonChars = [
    { name: 'Thomas', type: 'cat', behaviour: 'funny' },
    { name: 'Jerrison', type: 'mouse', behaviour: 'clever' },
    { name: 'Spiker', type: 'dog', behaviour: 'serious' },
]

//We can pass any name as call back like here we are passing demoCallback as the callback
function searchCN(characterName, dummyCallbackFnName) {

    // Async function
    setTimeout(() => {
        console.log('Start finding the Character...');
        dummyCallbackFnName(characterName, findRealCharacter);
    }, 2000);

    console.log('Search over!!'); //This is printing in the first

}

// Callback function - 1
function findCharacter(characterName, callback) {
    console.log('I am on search for ', characterName);
    callback(characterName);

}

// Callback function - 2
function findRealCharacter(characterName) {
    if(cartoonChars.filter(e => e.name === characterName).length != 0)
        console.log(characterName, "is found!");
    else
        console.log("Sorry ", characterName, "is missing!")

}

searchCN('Thomas', findCharacter);
searchCN('Goofie', findCharacter);