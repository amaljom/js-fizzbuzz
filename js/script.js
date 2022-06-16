const fizzBuzzWrapper = document.getElementById('wrapper-fizz-buzz');
let valueNumber;
for (let i = 1; i <=100; i++){

    if( i % 3 == 0 &&  i % 5 == 0 ){
        console.log('FizzBuzz');
        valueNumber='FizzBuzz'
    }
        else if( i % 5 == 0){
            console.log('Buzz');
            valueNumber='Buzz'
        }
        else if(i % 3 == 0){
            console.log('Fizz');
            valueNumber='Fizz'
        }
        
    else{
        console.log(i);
        valueNumber=i
    }
    
    const casella = document.createElement('div');
    casella.classList.add('col-2');
    casella.innerHTML=(valueNumber);
    fizzBuzzWrapper.append(casella);
}
    




// ! da rivedere un attimo 
// switch(true){

//     case i % 3 == 0 &&  i % 5 == 0:
//     console.log('FizzBuzz');
        
//     case i % 5 == 0:
//     console.log('Buzz');
        
//     case i % 3 == 0:
//     console.log('Fizz');
        
//     case i:
//     console.log(i);
// }