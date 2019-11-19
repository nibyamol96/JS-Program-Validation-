function namecheck()
{
var n=document.getElementById('name');
if(n.value.length==0)
{
  var str="Field is requred";
  document.getElementById('nam').innerHTML=str;

}
else {
  document.getElementById('nam').innerHTML=n.value;
}
}
function emailcheck(){
  var c=document.getElementById('email');
  if((c.value.includes("@"))&&(c.value.includes("."))){
    var str1="";
    document.getElementById('em').innerHTML=str1;
  }
  else {
    var str1=" Enter valid mail";
    document.getElementById('em').innerHTML=str1;
  }
}

function passwordchecking(){
  var p=document.getElementById('pswd');
  if(p.value.length>=6){

    document.getElementById('pass').innerHTML="";
  }
  else {
    var str3="password must contain atleast 6 charecter";
    document.getElementById('pass').innerHTML=str3;
  }
}

function confirmpassword(){
  var t=document.getElementById('rpswd');
  var pa=document.getElementById('pswd');
  tval=t.value;
  paval=pa.value;
                            console.log(tval);
                            console.log(paval);
  if(tval==paval){

                            console.log("Password confirmed");
    document.getElementById('repass').innerHTML="";
  }
  else {
    var str4="password mismatch";
                          console.log("password mismatch");
    document.getElementById('repass').innerHTML=str4;
  }
}
function checkdate(){
 var d=document.getElementById('bday');
 var dt1=d.value;
 var year=Number(dt1.substr(0,4));
console.log(year);
 var dt = new Date();
 var yr=dt.getFullYear();
 console.info(yr);
 var diff=yr-year;
 
 if(diff<=18){
   msg="You need a permission to join.Tick here if yourchild can join:";

   document.getElementById('date').innerHTML=msg;
 }
 else {
   document.getElementById('date').innerHTML="";
 }
}
function checkchar(){
  var c=140;
  var x = document.getElementById("bio").value;
  len=x.length;
  c=c-len;
    document.getElementById("short").innerHTML = c;
}
