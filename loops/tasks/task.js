// let a=1 
// let b=10
// let current = start
function odd(){
    console.clear()
let a = parseInt(document.getElementById("num1").value)
let b = parseInt(document.getElementById("num2").value)
for(let i=a;i<b;i++){
    if(i%2!==0){
        console.log(i)
    }
}

}

function even()
{
    console.clear()
let a = parseInt(document.getElementById("num1").value)
let b = parseInt(document.getElementById("num2").value)  
for(let i=a;i<b;i++){
    if(i%2==0){
        console.log(i)
    }
} 
}

function mult()
{
let a = parseInt(document.getElementById("num").value)
for(let i=1;i<=10;i++){
    console.log(`${a}*${i}=${a*i}`)
}

}

function rev()
{
    
}
