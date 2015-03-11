//make token match


function token_match()
{
    // token_array = "+ - = ! / ( ) * ^ %";
    // token_array2 = "PLUS MINUS EQUAL FACTORIAL DIVIDE LEFT_PAREN RIGHT_PAREN MUTIPLY POWER MODULUS";
    // token_array = "\\sin \\cos \\tan \\"
    token_array = "\\alpha \\Alpha \\nu \\Nu \\beta \\Beta \\xi \\Xi \\gamma \\Gamma \\delta \\Delta \\pi \\Pi \\epsilon \\varepsilon rho \\varrho \\zeta \\Zeta \\sigma \\Sigma \\tau \\Tau \\theta \\vartheta \\Theta \\upsilon \\Upsilon \\iota \\Iota \\phi \\varphi \\Phi \\kappa \\Kappa \\chi \\Chi\\ \\lambda \\Lambda\\ \\psi \\Psi \\mu \\Mu \\omega \\Omega"
    token_array = 
    token_array = token_array.split(" ");
    token_array2 = token_array2.split(" ");
    token_match = {}
    for (var i = 0; i < token_array.length; i++) {
        token_match[token_array[i]] = token_array2[i];
    };
    numbers = "123456789".split("");
    console.log(token_match);
    console.log(token_array);
    console.log(numbers);
}


token_match();
