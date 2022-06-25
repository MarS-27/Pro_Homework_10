
function main (a = 2, b = 3, c) { 
    let result = sum(a, b);
    
    if(typeof c === 'function') {
        return c(result);
    } else {
        return result;
    }
}

function mult(f) {
    return f += 100;
}

function sum(a, b) { 
    return a + b; 
}

console.log(main(1, 6, mult));

