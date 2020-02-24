
function dis(val){
	document.getElementById("fect").value=val;
}
function dis(val){
	document.getElementById("fect").value+=val;
}
function solve()
{
	let y=document.getElementById("fect").value;
	let x=eval(y);
	document.getElementById("fect").value=x;
}
function cls()
{
	document.getElementById("fect").value=" ";
}
function back() {
    var value = document.getElementById("fect").value;
    document.getElementById("fect").value = value.substr(0, value.length - 1);
}