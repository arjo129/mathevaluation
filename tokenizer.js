// 
// 
// math input (latex input)
// 
// 
// 
var token_match = 
{ '+': 'PLUS',
  '-': 'MINUS',
  '=': 'EQUAL',
  '!': 'FACTORIAL',
  '/': 'DIVIDE',
  '(': 'LEFT_PAREN',
  ')': 'RIGHT_PAREN',
  '*': 'MUTIPLY',
  '^': 'POWER',
  '%': 'MODULUS' };

var digits = [ '1', '2', '3', '4', '5', '6', '7', '8', '9' ]

var NUM = "NUMBER"

var tokens = Object.keys(token_match);

function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj)
            return true;
    }
    return false;
}


function tokenizer(math_input)
{
    var cur_char;
    var split_input = []
    var input_tokens = []
    var j;
    for (var i = 0; i < math_input.length; i++) 
    {
        cur_char = math_input.charAt(i);
        if ( cur_char in token_match)
        {
            input_tokens.push(token_match[cur_char]);
            split_input.push(cur_char);
        }
        else if (cur_char in digits) 
        {
            input_tokens.push(NUM);
            j = i + 1
            while ( j < math_input.length && math_input.charAt(j) in digits)
            {
                j++;
            }
            split_input.push(math_input.slice(i,j));
            i = j - 1;
        }
    }
    return Array(split_input, input_tokens);
}

console.log(tokenizer("12+3"));
console.log(tokenizer("1234 ^ 3 % 32"));
console.log(tokenizer("(1234 ^ 3) % (3)2"));


