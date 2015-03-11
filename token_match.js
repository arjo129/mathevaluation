//make token match


function token_match()
{
    // token_array = "+ - = ! / ( ) * ^ %";
    // token_array2 = "PLUS MINUS EQUAL FACTORIAL DIVIDE LEFT_PAREN RIGHT_PAREN MUTIPLY POWER MODULUS";
    // token_array = "\\pm \\times \\div \\ast \\neq \\geq \\leq";
    // token_array2 = "PLUS_MINUS MULTIPLY DIVIDE MULTIPLY NOT_EQUAL GREATER_OR_EQUAL LESS_OR_EQUAL";
    // token_array = "\\sin \\cos \\tan \\arcsin \\arccos \\arctan \\sinh \\cosh \\tanh \\csc \\sec \\cot ";
    // token_array2 = "SIN COS TAN ARCSIN ARCCOS ARCTAN SINH COSH TANH";
    // token_array = "\\frac \\sqrt \\sum \\prod \\int";
    // token_array2 = "MAKE_FRACTION SQUARE_ROOT SUM PRODUCT INT";
    token_array = "\\lg \\ln \\log"
    token_array2 = "LOG10 LOGE LOG"


    // token_array = "\\inf"
    // var greek_letters = "\\alpha \\nu \\beta \\xi \\Xi \\gamma \\Gamma \\omicron \\delta \\Delta \\pi \\Pi \\varpi \\epsilon \\varepsilon \\rho \\varrho \\zeta \\sigma \\Sigma \\varsigma \\eta \\tau \\theta \\vartheta \\Theta \\upsilon \\Upsilon \\iota \\phi \\varphi \\Phi \\kappa \\varkappa \\chi \\lambda \\Lambda \\psi \\Psi \\mu \\omega \\Omega"

    token_array = token_array.split(" ");
    token_array2 = token_array2.split(" ");
    // greek_letters = greek_letters.split(" ");
    token_match = {}
    for (var i = 0; i < token_array.length; i++) {
        token_match[token_array[i]] = token_array2[i];
    };
    // numbers = "123456789".split("");
    console.log(token_match);
    console.log(token_array);
    // console.log(numbers);
    // console.log(greek_letters);
}


token_match();

// var greek_letters = 
// [ 
//     '\\alpha',
//     '\\nu',
//     '\\beta',
//     '\\xi',
//     '\\Xi',
//     '\\gamma',
//     '\\Gamma',
//     '\\omicron',
//     '\\delta',
//     '\\Delta',
//     '\\pi',
//     '\\Pi',
//     '\\varpi',
//     '\\epsilon',
//     '\\varepsilon',
//     '\\rho',
//     '\\varrho',
//     '\\zeta',
//     '\\sigma',
//     '\\Sigma',
//     '\\varsigma',
//     '\\eta',
//     '\\tau',
//     '\\theta',
//     '\\vartheta',
//     '\\Theta',
//     '\\upsilon',
//     '\\Upsilon',
//     '\\iota',
//     '\\phi',
//     '\\varphi',
//     '\\Phi',
//     '\\kappa',
//     '\\varkappa',
//     '\\chi',
//     '\\lambda',
//     '\\Lambda',
//     '\\psi',
//     '\\Psi',
//     '\\mu',
//     '\\omega',
//     '\\Omega',
//     'a'
// ];

// greek_letters = [0];

// console.log(0 in greek_letters);
// console.log(greek_letters.indexOf("a"));

// if ("a" in greek_letters)
//     console.log("works");
// else console.log("No");