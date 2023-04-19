let flag = false;
let nums = [];
let counter = 1;
let number1= null;
let number2 = null;
let op = null;
let opFlag = false;


let data = [
    [8,6,2,2],
    [4,5,2,2],
    [8,4,4,2],
    [7,8,8,1],
    [4,4,8,5],
    [6,7,2,2],
    [6,6,3,1],
    [2,2,4,7],
    [8,6,5,4],
    [5,4,3,3],
    [9,8,6,2],
    [8,8,3,1],
    [2,5,9,7],
    [6,6,5,2],
    [6,8,2,3]
    ]

function ready() {
        flag = true;
        let i = Math.floor(Math.random() * 15);
        console.log(i)
        nums = data[i]
        console.log(nums)
        document.querySelector("#num0").innerHTML = nums[0];
        document.querySelector("#num1").innerHTML = nums[1];
        document.querySelector("#num2").innerHTML = nums[2];
        document.querySelector("#num3").innerHTML = nums[3];
        document.getElementById('ready').disabled = true;

}

function calc(n1, op, n2){

    if(op ==='+'){ 
        console.log(Number(n1)+ Number(n2))
        return Number(n1)+ Number(n2)
    }
    else if (op === '-'){
        console.log(Number(n1)-Number(n2))
        return Number(n1)-Number(n2)
    }
    else if (op === '*'){
            console.log(Number(n1)*Number(n2))
            return Number(n1) * Number(n2)
    }
    else if (op === '/'){
        { 
            console.log(Number(n1)/Number(n2))
            return Number(n1)/Number(n2)
        }
    }
    else console.log('COULD NOT MATCH AN OP IN CALC FUNCTION')


}

function setNum(number){
    if(flag === true){
        if((counter % 2) === 1){
            counter++;
            console.log('first number of operation is being selected')
            var id = number.id;
            console.log('id:', id)
            number1 = document.getElementById(id).textContent;
            console.log('number 1:', number1)
            document.getElementById(id).disabled = true;
            operator = null;
            opFlag = false;
        }
        else if((counter % 2) === 0 && opFlag === true){
            counter++;
            console.log('second number of operation is being selected')
            var id = number.id;
            console.log('id:', id)
            number2 = document.getElementById(id).textContent;
            console.log('number 2:', number2)
            var sum = calc(number1, op, number2);
            var el = document.getElementById(id)
            document.getElementById(id).textContent = sum;
            opFlag = false;
        }

        checkSum(counter, sum)
    }
    else console.log('user needs to click ready')
}

function checkSum(counter, sum){
    if(counter === 7 && sum === 24){
        alert("congrats!");
    }
    else if(counter >= 7 && sum !== 24){
        alert('Better luck next time')
    }
}

function setOp(operator) {
    if((flag === true) && (counter%2)===0){
        if(number1 !== null){
            opFlag = true;
            if(operator === '+'){
                op = '+'
                console.log(op)
                
            }
            else if(operator === '-'){
                op = '-'
                console.log(op)
                
            }
            else if(operator === '/'){
                op = '/'
                console.log(op)
            }
            else if(operator === '*'){
                op = '*'
                console.log(op)
            }
            else console.log('cannot match op in getop')
        }
        else{
            console.log('number1 is null')
        }
    }
    else console.log('user needs to click ready')
}
