function setup(){
let xSum = 0
for(let x = 1;x <= 20;x++){
xSum = xSum + x
console.log(xSum)
}
}


for(let n = 2; n <= 10; n++){
    console.log(n + "-tabellen")
    for(let L = 1; L <= 10; L++){
        let R = n * L
        console.log(R)
    }
}


console.log("y=3*x*x+6*x+9")

for(let x=0; x <= 10, x++){
    let i = x * 10
    let y = 3 * x * x + 6 * x +9
    console.log(x, y)
}