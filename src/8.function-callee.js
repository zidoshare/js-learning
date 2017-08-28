function factorial(num){
  if(num < 1)
    return 1
  else
    return num * factorial(num -1)
}

function factorial2(num){
  if(num < 1)
    return 1
  else
    return num * arguments.callee(num -1)
}

//以上两个函数执行结果一样，但是使用callee可以不绑定在固定的函数名上

console.log(factorial(5))
console.log(factorial2(5))


function outer(){
  inner()
}
function inner(){
  console.log(inner.caller)
}

outer()


function outer2(){
  inner2()
}

function inner2(){
  console.log(arguments.callee.caller)
}

outer2()
