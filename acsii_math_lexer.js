// ascii math lexer 
// Tokens are identifiers(greek letters, alphabets) integers floats, relationship operators, unary operators,  functions, left brackets
// 
var everything = 
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
    '-:': 'DIVIDE',
    '=': 'EQUAL',
    '!=': 'NOTEQUAL',
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
    '~~': "APPROX",
    '(': 'LEFT_PAREN',
    '{': 'LEFT_CURLY',
    '[': 'LEFT_BRACKET',
    ')': 'RIGHT_PAREN',
    '}': 'RIGHT_CURLY',
    ']': 'RIGHT_BRACKET',
    ',': "COMMA",
    ';': "NEW_LINE",
    '|': "ABSOLUTE",
    'frac' : "BIG_DIVIDE",
    'root' : "BIG_ROOT",
    'stackrel' : "STACK",
    'sum': 'SUM',
    'prod': 'PRODUCT',
    'int': 'INTEGRATION',
    'del': 'DIFFERENTIATION',
    'oo': "INFINITY",
    'O/': "NULL",
    'CC': "COMPLEXES",
    'NN': "NATURALS",
    'QQ': "RATIONALS",
    'RR': "REALS",
    'ZZ': "INTEGERS",
    'alpha': "VARIABLE",
    'nu': "VARIABLE",
    'beta': "VARIABLE",
    'xi': "VARIABLE",
    'Xi': "VARIABLE",
    'gamma': "VARIABLE",
    'Gamma': "VARIABLE",
    'omicron': "VARIABLE",
    'delta': "VARIABLE",
    'Delta': "VARIABLE",
    'pi': "VARIABLE",
    'Pi': "VARIABLE",
    'varpi': "VARIABLE",
    'epsilon': "VARIABLE",
    'varepsilon': "VARIABLE",
    'rho': "VARIABLE",
    'varrho': "VARIABLE",
    'zeta': "VARIABLE",
    'sigma': "VARIABLE",
    'Sigma': "VARIABLE",
    'varsigma': "VARIABLE",
    'eta': "VARIABLE",
    'tau': "VARIABLE",
    'theta': "VARIABLE",
    'vartheta': "VARIABLE",
    'Theta': "VARIABLE",
    'upsilon': "VARIABLE",
    'Upsilon': "VARIABLE",
    'iota': "VARIABLE",
    'phi': "VARIABLE",
    'varphi': "VARIABLE",
    'Phi': "VARIABLE",
    'kappa': "VARIABLE",
    'varkappa': "VARIABLE",
    'chi': "VARIABLE",
    'lambda': "VARIABLE",
    'Lambda': "VARIABLE",
    'psi': "VARIABLE",
    'Psi': "VARIABLE",
    'mu': "VARIABLE",
    'omega': "VARIABLE",
    'Omega': "VARIABLE", 
    'sin': "FUNCTION",
    'cos': "FUNCTION",
    'tan': "FUNCTION",
    'csc': "FUNCTION",
    'sec': "FUNCTION",
    'cot': "FUNCTION",
    'sinh': "FUNCTION",
    'cosh': "FUNCTION",
    'tanh': "FUNCTION",
    'log': "FUNCTION",
    'ln': "FUNCTION",
    'det': "FUNCTION",
    'lim': "FUNCTION",
    'mod': "FUNCTION",
    'gcd': "FUNCTION",
    'lcm': "FUNCTION",
    'min': "FUNCTION",
    'max': "FUNCTION",
    'bb': "FONT",
    'bbb': "FONT",
    'cc': "FONT",
    'fr': "FONT", 
    'sf': "FONT",
}

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
    '!=': 'NOTEQUAL',
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
    '\t': 'BLANK',
    ' ': 'BLANK',
}

white_space_keys = Object.keys(white_space);
console.log(white_space);

var new_line = 
{
    '\n': 'NEW_LINE',
    ';': "NEW_LINE",
}

var new_line_keys = ['\n', ';'];

var delimiters =
{
    ',': "COMMA",
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
var BLANK = "BLANK";


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
// keywords = keywords.concat(Object.keys(white_space));
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

function make_keywords_nested(keywords)
{
    var keywords_nest = [];
    cur_str_len = keywords[0].length;
    keywords_nest[cur_str_len] = []
    for (var i = 0; i < keywords.length; i++) {
        if (keywords[i].length > cur_str_len)
        {
            cur_str_len = keywords[i].length;
            keywords_nest[cur_str_len] = [];
        }
        keywords_nest[cur_str_len].push(keywords[i])
    };
    return keywords_nest;
}

keywords_nest = make_keywords_nested(keywords)

function nextInArray(arr, i)
{
    i--;
    while(arr[i] == undefined)
        if(i-- == 0)
            return -1;
    return i
}


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

function isKeyword(math_input, cur_i)
{
    console.log("yay");
    var found = false
    for (var i = keywords_nest.length - 1; i >= 0;i = nextInArray(keywords_nest, i)) 
    {
        while (cur_i + keywords_nest[i][0].length > math_input.length)
        {
            i = nextInArray(keywords_nest, i);
        }
        for (var j = 0; j < keywords_nest[i].length; j++ )
        {
            for (var k = 0; k < keywords_nest[i][j].length; k++) 
            {
                found = true;
                if (keywords_nest[i][j].charAt(k) != math_input.charAt(cur_i+k))
                {
                    console.log("helo");
                    found = false;
                    break;
                }
            }
            if (found)
            {
                return [true, keywords_nest[i][j], k];
            }
        }
    }
    return [false];
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
                input_tokens.push(FLOAT);
            }
            else
            {
                input_tokens.push(INT);
            }
            input_split.push(math_input.slice(i, j));
            i = j;
        }
        else if ( (key = isKeyword(math_input, i))[0] )
        {
            console.log(key)
            input_tokens.push(everything[key[1]]);
            input_split.push(key[1]);
            i += key[2] + 1;
        }
        else if ( isAlphabet(start_of_token) )
        {
            input_tokens.push(VAR);
            input_split.push(start_of_token);
            i++;
        }
        else if ( white_space_keys.contains(start_of_token) )
        {
            input_tokens.push("BLANK");
            input_split.push(" ");
            while ( white_space_keys.contains(math_input.charAt(++i)))
                ;
        }
        else if ( new_line_keys.contains(start_of_token) )
        {
            input_tokens.push("NEW_LINE");
            input_split.push(";");
            while ( new_line_keys.contains(math_input.charAt(++i)))
                ;
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
// console.log(tokenize("12341123411\"asdfasdfasdf\""))
// console.log(tokenize("alphaxxalphe+!= 123 +a 123.123123 / frac 100"))
console.log(tokenize(" alph a1lpha ;;\n alph a"));
// console.log(make_keywords_nested(keywords));

// isKeyword("asdf", 0);




