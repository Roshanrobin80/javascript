// 1) 5% bonus for emp wrk >5 yrs

function bonus() 
{
let a = parseInt(document.getElementById("sal").value)
let b = parseInt(document.getElementById("exp").value)
let h3 = document.getElementById("h3")
if (b>=5){
    s=a*5/100
    sal=a+s
    h3.innerHTML=sal
}
else{
    h3.innerHTML="no bonus"
}
}

//2) last dig of a No. divisible by 3

function div()
{
let a = parseInt(document.getElementById("num").value)
let op=document.getElementById("op")
let b=a%10
if (b%3==0){
    op.innerHTML="divisible"
}
else{
    op.innerHTML="not divisible"
}
}

// 3) electricity bill

function elec()
{

}