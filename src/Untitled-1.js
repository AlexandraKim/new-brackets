function check(str, bracketsConfig) {
    var strArray = str.split('');
    var openningBrackets = [], closingbrackets = [];
    for (var k = 0; k < bracketsConfig.length; k++) {
        openningBrackets.push(bracketsConfig[k][0]);
        closingbrackets.push(bracketsConfig[k][1]);
    }
    if (!openningBrackets.includes(strArray[0])) {
        return false;
    }

    var storage = [];
    var theSameBrackets;
    for (var i = 0; i < strArray.length; i++) {
        for (var b = 0; b < openningBrackets.length; b++) {
            // if (openningBrackets[b] != closingbrackets[b]){
                if (strArray[i] == openningBrackets[b]) {
                    if (openningBrackets[b] != closingbrackets[b]){
                        storage.push(openningBrackets[b]);
                    } else {
                        
                    }
                    
                } else {
                    if (strArray[i] == closingbrackets[openningBrackets.indexOf(storage[storage.length - 1])]) {
                        storage.pop(strArray[i - 1]); console.log(strArray[i - 1]);
                    }
                }
            // } else{
            //     if (strArray[i] == openningBrackets[b]) {
            //         storage.push(openningBrackets[b])
            //     }

            // }
           
            // if (strArray[i] == closingbrackets[b]) {
            //     storage.pop(openningBrackets[b])
            // }
            // if (strArray[i] == closingbrackets[b]) {
            //     if (strArray[i] == closingbrackets[openningBrackets.indexOf(strArray[i-1])]){
            //         storage.pop(strArray[i-1]); console.log(strArray[i-1]);
            //     }

            // }
        }

    }
    return storage.length == 0;
}

const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];
// console.log(check('([{}])', config3));
// console.log(check('[(])', config2));
console.log(check('||', config4));
console.log(check('|()|', config5));
console.log(check('|()|(||)||', config5));
console.log(check('111115611111111156111111112222888888222255778777787755556666777777777766222221111222288888822225577877778775555666677777777776622222', config6));
console.log(check('|(|)', config5));
// console.log(check());
// console.log(check());