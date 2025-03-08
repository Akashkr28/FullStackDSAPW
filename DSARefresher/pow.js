var myPow = function(x, n) {
    //for power being negative
    if(n < 0) {
        n *= 1;
        var ans = findPow(x,n);
        return 1/ans;
    } else {
        return finPow(x, n);
    }
};