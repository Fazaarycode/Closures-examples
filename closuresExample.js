// function Hellow(){
//     console.log('Working');
    
// }

// Hellow();


// function printMyName(firstName, lastName){
// //write inner function
// //every functions needs to return something
// //let outer function return inner function
// //let inner function return the actual value itself
// return innerFunc();

//     function innerFunc(){
//         return 'Your name, my friend'+" "+firstName+" "+lastName
//     }
// }

// var x=printMyName('Mohamed','Fazaary');
// console.log(
//     x
// );

// *******************************************************
//calling inner function after outer function has executed

// function outerToExecuteFirst(superHero){

//     return innerFunc;
//     function innerFunc(combinedLastName){
//         return superHero+" "+combinedLastName
//     }
// }

// var x = outerToExecuteFirst('Super');
// x('Woman');


// console.log(outerToExecuteFirst('Super') && x('Woman'));

// *******************************************************

//set and get IDs using closure

function superID(){
    var id=254;
    return {
        getId: function(){
            return id;
        },
        setId: function(newId){
            id = newId;
        }
    }
}


var callOuterFunction = superID();


console.log(callOuterFunction); // will return the code snippet inside the return object

//callOuterFunction.getId();
//console.log(callOuterFunction.getId()); //return the prefixed id , 254

callOuterFunction.setId(1101); //logging this will say undefined as we are not returning anything in setId()

callOuterFunction.getId();

console.log(callOuterFunction.getId()); //new getId will return the value set from setId


