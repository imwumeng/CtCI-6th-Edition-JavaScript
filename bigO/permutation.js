function permutation(str, prefix){
    if(str.length==0){
        console.log(prefix)
        return;
    }
    console.log(str, prefix);
    for(var i=0;i<str.length;i++){
        var rem = str.substring(0,i) + str.substr(i+1)
        permutation(rem, prefix + str.substr(i,1));
    }
}

permutation("ilovechina","");