var vals = [];
function fibonacci(n){
    if(n<=0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    return fibonacci(n-1)+fibonacci(n-2);
    //vals.push(val);
    //return val;
}
fibonacci(10)
console.log(vals)