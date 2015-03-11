// latex input lexer // // The important function here is the tokenizer// everything else is here to help the tokenizer// tokenizer input is latex math as a single string// accepted symbols are below in the arrays// the output are two arrays, the first is the string broken up into chuncks// the second is the token value for each chunk// // example// // tokenizer(" 2b = 1")// // [ [ '2b', '=', '1' ], [ 'NUMBER', 'EQUAL', 'NUMBER' ] ]// // ignores single char not in list// // tokenizer("@@$$@# 5 + 4 = 9 \" ");// // [ [ '5 ', '+', '4 ', '=', '9 ' ],// [ 'NUMBER', 'PLUS', 'NUMBER', 'EQUAL', 'NUMBER' ] ]// // unless preceded by \\// tokenizer("\\arjo")// // [ 'ERROR', ' "\\arjo" not a valid string' ]// // tokenizer("\\")// // [ 'ERROR', ' "\\" not a valid string' ]// // tokenizer(" 2 + a ^{\\alpha} \\div = 0")// // [ [ '2 ', '+', 'a', '^', '{', '\\alpha', '}', '\\div', '=', '0' ],// [ // 'NUMBER',// 'PLUS',// 'VARIABLE',// 'SUPER_SCRIPT',// 'LEFT_CURLY',// 'VARIABLE',// 'RIGHT_CURLY',// 'DIVIDE',// 'EQUAL',// 'NUMBER' ] // ]//// //  possible issue, d is taken to be a variable, but in latex, it is often used as differantiator, solution, define upright d as differntiator only var simple_operators = {     '+': 'PLUS',    '-': 'MINUS',    '=': 'EQUAL',    '!': 'FACTORIAL',    '/': 'ALT_DIVIDE',    '(': 'LEFT_PAREN',    ')': 'RIGHT_PAREN',    '{': 'LEFT_CURLY',    '}': 'RIGHT_CURLY',    '^': 'SUPER_SCRIPT',    '_': "SUB_SCRIPT",    '%': 'MODULUS',    '<': 'LESS_THAN',    '>': 'GREATER_THAN',};var digits = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];var NUM = "NUMBER";var VAR = "VARIABLE";var greek_letters = [     '\\alpha',    '\\nu',    '\\beta',    '\\xi',    '\\Xi',    '\\gamma',    '\\Gamma',    '\\omicron',    '\\delta',    '\\Delta',    '\\pi',    '\\Pi',    '\\varpi',    '\\epsilon',    '\\varepsilon',    '\\rho',    '\\varrho',    '\\zeta',    '\\sigma',    '\\Sigma',    '\\varsigma',    '\\eta',    '\\tau',    '\\theta',    '\\vartheta',    '\\Theta',    '\\upsilon',    '\\Upsilon',    '\\iota',    '\\phi',    '\\varphi',    '\\Phi',    '\\kappa',    '\\varkappa',    '\\chi',    '\\lambda',    '\\Lambda',    '\\psi',    '\\Psi',    '\\mu',    '\\omega',    '\\Omega' ];binary_operators ={     '\\pm': 'PLUS_MINUS',    '\\times': 'MULTIPLY',    '\\div': 'DIVIDE',    '\\ast': 'MULTIPLY',    '\\neq': 'NOT_EQUAL',    '\\geq': 'GREATER_OR_EQUAL',    '\\leq': 'LESS_OR_EQUAL' }trigonometric_functions ={     '\\sin': 'SIN',    '\\cos': 'COS',    '\\tan': 'TAN',    '\\arcsin': 'ARCSIN',    '\\arccos': 'ARCCOS',    '\\arctan': 'ARCTAN',    '\\sinh': 'SINH',    '\\cosh': 'COSH',    '\\tanh': 'TANH' }log_function = {     '\\lg': 'LOG10',     '\\ln': 'LOGE',     '\\log': 'LOG' }big_operators ={     '\\frac': 'MAKE_FRACTION',    '\\sqrt': 'SQUARE_ROOT',    '\\sum': 'SUM',    '\\prod': 'PRODUCT',    '\\int': 'INTEGRATION' }var simple_operators_keys = Object.keys(simple_operators);var binary_operators_keys = Object.keys(binary_operators);var trigonometric_functions_keys = Object.keys(trigonometric_functions);var log_function_keys = Object.keys(log_function);var big_operators_keys = Object.keys(big_operators);var arr_symbols_keys = Array(binary_operators_keys, trigonometric_functions_keys, log_function_keys, big_operators_keys);var arr_symbols = Array(binary_operators, trigonometric_functions, log_function, big_operators);Array.prototype.contains = function(obj) {    for (var i = 0; i < this.length; i++)     {        if (this[i] === obj)            return true;    }    return false;}function isAlphabet(charc){    return "A".charCodeAt() <= charc.charCodeAt() && charc.toUpperCase().charCodeAt() <= "Z".charCodeAt();}function tokenizer(math_input){    var cur_char;    var split_input = []    var input_tokens = []    var j;    var temp_str;    var isError = false;    var errorMessage;    for (var i = 0; i < math_input.length; i++)     {        cur_char = math_input.charAt(i);        // console.log(cur_char);        if ( simple_operators_keys.contains(cur_char) )        {            input_tokens.push(simple_operators[cur_char]);            split_input.push(cur_char);        }        else         if (cur_char in digits)         {            input_tokens.push(NUM);            j = i            while ( ++j < math_input.length && math_input.charAt(j) in digits)                ;            split_input.push(math_input.slice(i,j+1));            i = j;        }        else if ( isAlphabet(cur_char))        {            input_tokens.push(VAR);            split_input.push(cur_char);        }        else if ( cur_char == "\\" )        {            j = i;            while ( ++j < math_input.length && isAlphabet(math_input[j]))                // console.log(math_input[j]);                ;            temp_str = math_input.slice(i,j);            // console.log("\"" + temp_str + "\"");            if (greek_letters.contains(temp_str))            {                input_tokens.push(VAR);                split_input.push(temp_str);                i = j - 1;            }            else            {                isError = true;                errorMessage = " \"" + temp_str + "\" not a valid string";                for (var k = arr_symbols_keys.length - 1; k >= 0; k--)                 {                    // console.log(arr_symbols_keys[k])                    if (arr_symbols_keys[k].contains(temp_str))                    {                        input_tokens.push(arr_symbols[k][temp_str]);                        split_input.push(temp_str);                        i = j - 1;                        isError = false                    }                }            }        }        if (isError)         {            return Array("ERROR", errorMessage);        }    }    return Array(split_input, input_tokens);}// console.log(tokenizer("12+3"));// console.log(tokenizer("1234 ^ 3 % 32"));// console.log(tokenizer("(1234 ^ 3) % (3)2"));// console.log(tokenizer("ASD^((!@)a)1-24s+d-z*Z "));// console.log(isAlphabet("A"));// console.log(isAlphabet("z"));// console.log(isAlphabet("qqwe"));// console.log(tokenizer("\\"));// Object.keys(binary_operators).forEach(function (key) // {//     console.log(key);// });// // console.log(