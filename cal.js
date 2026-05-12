function add(value){
    document.getElementById("display").value+=value
}
function calculate(value){
    var res=eval(document.getElementById("display").value)
    document.getElementById("display").value=res
}
function clearDisplay(){
    document.getElementById("display").value=""
}
