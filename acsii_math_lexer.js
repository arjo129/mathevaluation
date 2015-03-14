// ascii math lexer 
// Tokens are identifiers(greek letters, alphabets) integers floats, relationship operators, unary operators,  functions, left brackets
var operators = 
{ 
    '+': 'PLUS',
    '-': 'MINUS',
    '*': "MULTIPLY",
    '!': 'FACTORIAL',
    '/': 'DIVIDE',
    '^': 'SUPER_SCRIPT',
    '_': "SUB_SCRIPT",
    '%': 'PERCENT',
    'xx': 'MULTIPLY',
    '**': 'MULTIPLY',
    '-:': 'DIVIDE'
};

var assignment =
{
    '=': 'EQUAL',
}

var relation_symbols =
{
    '<': 'LESS_THAN',
    '>': 'GREATER_THAN',
    '<=': "LESS_OR_EQUAL",
    '>=': "GREATER_OR_EQUAL",
    'in': "IN",
    'nin': "!IN",
    'sub': "SUB",
    'sup': "SUP",
    'sube': "SUBE",
    'supe': "SUPE",
    'prop': "PROP",
    '-=': "EQUIVALENT",
    '~~': "APPROX"
}

var left_brackets =
{
    '(': 'LEFT_PAREN',
    '{': 'LEFT_CURLY',
    '[': 'LEFT_BRACKET',
}

var right_brackets = 
{
    ')': 'RIGHT_PAREN',
    '}': 'RIGHT_CURLY',
    ']': 'RIGHT_BRACKET',
}

var white_space =
{
    '\n': 'NEW_LINE',
    '\t': 'BLANK',
    ' ': 'BLANK',
}

var delimiters =
{
    ',': "COMMA",
    ';': "NEW_LINE",
    '\"': "QUOTE",
    '|': "ABSOLUTE"
}


var std_functions = ['sin', 'cos', 'tan', 'csc', 'sec', 'cot', 'sinh', 'cosh', 'tanh', 'log', 'ln', 'det', 'lim', 'mod', 'gcd', 'lcm', 'min', 'max']
// 'dim' not supported

var big_func = {
    'frac' : "BIG_DIVIDE",
    'root' : "BIG_ROOT",
    'stackrel' : "STACK"
}

var fonts = [
    'bb',
    'bbb',
    'cc',
    'fr', 
    'sf'
]


var digits = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];

var INT = "INT";
var FLOAT = "FLOAT";
var STRING = "STRING";
var VAR = "VARIABLE";


var greek_letters = 
[ 
    'alpha',
    'nu',
    'beta',
    'xi',
    'Xi',
    'gamma',
    'Gamma',
    'omicron',
    'delta',
    'Delta',
    'pi',
    'Pi',
    'varpi',
    'epsilon',
    'varepsilon',
    'rho',
    'varrho',
    'zeta',
    'sigma',
    'Sigma',
    'varsigma',
    'eta',
    'tau',
    'theta',
    'vartheta',
    'Theta',
    'upsilon',
    'Upsilon',
    'iota',
    'phi',
    'varphi',
    'Phi',
    'kappa',
    'varkappa',
    'chi',
    'lambda',
    'Lambda',
    'psi',
    'Psi',
    'mu',
    'omega',
    'Omega' 
];


big_operators =
{ 
    'sum': 'SUM',
    'prod': 'PRODUCT',
    'int': 'INTEGRATION',
    'del': 'DIFFERENTIATION',
}


special_char = 
{
    'oo': "INFINITY",
    'O/': "NULL",
    'CC': "COMPLEXES",
    'NN': "NATURALS",
    'QQ': "RATIONALS",
    'RR': "REALS",
    'ZZ': "INTEGERS"
}

var keywords = Object.keys(operators);
keywords = keywords.concat(Object.keys(assignment));
keywords = keywords.concat(Object.keys(relation_symbols));
keywords = keywords.concat(Object.keys(left_brackets));
keywords = keywords.concat(Object.keys(right_brackets));
keywords = keywords.concat(Object.keys(white_space));
keywords = keywords.concat(Object.keys(delimiters));
keywords = keywords.concat(Object.keys(big_func));
keywords = keywords.concat(Object.keys(big_operators));
keywords = keywords.concat(Object.keys(special_char));


keywords = keywords.concat(std_functions);
keywords = keywords.concat(fonts);
keywords = keywords.concat(greek_letters);

keywords.sort(function(a, b){
  return a.length -b.length; // ASC -> a - b; DESC -> b - a
});




Array.prototype.contains = function(obj) 
{
    for (var i = 0; i < this.length; i++) 
    {
        if (this[i] === obj)
            return true;
    }
    return false;
}




function isAlphabet(charc)
{
    return "A".charCodeAt() <= charc.charCodeAt() && charc.toUpperCase().charCodeAt() <= "Z".charCodeAt();
}




function tokenize(math_input)
{
    var start_of_token;
    var cur_char;
    var i = 0;
    var j;
    var isError = false;
    var errorMessage;
    var input_split = [];
    var input_tokens = [];
    var math_input_length = math_input.length;
    while (i < math_input_length)
    {
        start_of_token = math_input.charAt(i);

        if (start_of_token == '\"')
        {
            while (++i < math_input_length && math_input.charAt(i) != '\"')
                ;
            i++;
        }
        else if (digits.contains(start_of_token))
        {
            j = i;
            do 
            {
                ++j < math_input_length;
            } while (digits.contains(math_input.charAt(j)));
            if (j < math_input_length 
                && math_input.charAt(j) == "." 
                && digits.contains(math_input.charAt(j+1)))
            {
                j++ ;
                do 
                {
                    ++j < math_input_length;
                } while (digits.contains(math_input.charAt(j)));
                input_split.push(math_input.slice(i, j));
                input_tokens.push(FLOAT);
                i = j;
            }
            else
            {
                input_split.push(math_input.slice(i, j));
                input_tokens.push(INT);
                i = j
            }
        }
        else
            i++;
        if (isError) 
        {
            return Array("ERROR", errorMessage);
        }
    }
    return Array(input_tokens, input_split);
}











// console.log(keywords);
console.log(tokenize("12341 12341 \"asdfasdfasdf\" "))
console.log(tokenize("12341.12341 1234\"asdfasdfasdf\"\"123\""))






