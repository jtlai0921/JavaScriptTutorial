function gcd(m, n) {
    if(n === 0) {
        return m;
    }
    return gcd(n, m % n);
}

let m = 100;
let n = 25;
let r = gcd(m, n);
if(r === 1) {
    console.log('互質');
} 
else {
    console.log('最大公因數：', r);
}