

const solution = (S) => {

    // Array alphabetic caracters
    var alpha = Array(26);
    // init min with S length
    var min = S.length + 1;
    //var to sum caracters
    var sum = 0;
    // caracter count
    var count = 0;
    // calculate histograme for S
    for(var i = 0; i < S.length ; i++){
        var index = S[i].charCodeAt(0) - 'a'.charCodeAt(0);
        if(alpha[index] === undefined )
            alpha[index] = 1;
        else 
            alpha[index]++;
    }
    //
    for(var i = 0; i < alpha.length ; i++){
        //ignore caracters that does not exist in S
        if(alpha[i] === undefined )
            continue;
        count++;
        sum += alpha[i];
        // find the min
        if( min >= alpha[i] )
            min = alpha[i] ; 
    }
    // return the count of caracters that should be deleted
return sum - count*min;
    
}
