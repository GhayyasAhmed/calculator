function getNumber(num){
    var result = document.getElementById("result");
    result.value += num;
}
function clearresult(){
    var result = document.getElementById("result");
    result.value = ""
}

function getvalue(){
    var result = document.getElementById("result");
    result.value = eval(result.value)
}
function reciprocal(){
    var result = document.getElementById("result");
    result.value = 1/result.value;
}
function square(){
    var result = document.getElementById("result");
    result.value = result.value * result.value;
}
function sqrt(){
    var result = document.getElementById("result");
    result.value = Math.sqrt(result.value);
}
function signchange(){
    var result = document.getElementById("result");
    result.value = result.value * (-1);
}
function clearlast(){
    var result = document.getElementById("result");
    result.value = result.value.slice(0, - 1);
}
function percentage(){
    var result = document.getElementById("result");
    result.value = eval(result.value) * 100;
}