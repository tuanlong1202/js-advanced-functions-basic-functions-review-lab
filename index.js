// Your code here

function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective (charSpecial = '*') {
    let innerFunction = function(strGreeting) {
        return `You are ${charSpecial}${strGreeting}${charSpecial}!`
    }
    return innerFunction;
}

var Calculator = {
    add : function(num1, num2) { 
        return (num1 + num2) ;
    },
    multiply : function(num1, num2) { 
        return num1 * num2;
    },
    subtract : function(num1, num2) { 
        return (num1 - num2);
    },
    divide : function(num1, num2) {
        return num1 / num2;
    }
}

function actionApplyer (intStart = 0, arrayFn = [] ) {
    var intResult = intStart;
    for (let i = 0; i < arrayFn.length; i++) {
        intResult = arrayFn[i](intResult);
    }
    return intResult;
}
