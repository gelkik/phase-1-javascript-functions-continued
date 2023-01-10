// code your solution here
function saturdayFun(name = "roller-skate"){
    return `This Saturday, I want to ${name}!`;
}

function mondayWork(expression = 'go to the office'){
    return `This Monday, I will ${expression}.`;
}

function wrapAdjective(expression){
    return function(special){
            return `You are ${expression}${special}${expression}!`
        }
}
