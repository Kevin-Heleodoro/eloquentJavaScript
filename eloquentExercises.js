// Looping a triangle
function starTriangle(){
    let star = '*';
    while(star.length < 8) {
        console.log(star)
        star += '*'
    }
}

function fizzBuzz() {
    for(let i = 1; i < 101; i++) {
        if(i % 15 === 0) console.log('fizzBuzz');
        else if(i % 3 === 0) console.log('fizz');
        else if(i % 5 === 0) console.log('buzz');
        else console.log(i)
    }
}

function checkerBoard(size){
    for(let i = 0; i < size; i ++) {
        let line = ''
        for(let j = 0; j < size; j++){
            if(i % 2 === 0){
                if(j % 2 === 0) line += '#'
                else line += '  '
            }
            else {
                if(j % 2 === 0) line += '  '
                else line += '#'
            }
        }
        console.log(line)
    }
}

function minimum(a, b) {
    let result;
    (a > b === true) ? result = a - b : result = b - a  ;
    console.log(result)
}

function evenOrOdd(N) {
    if(N === 0) console.log('even')
    if(N === 1) console.log('odd')
    else evenOrOdd(N - 2)
}

evenOrOdd(50)