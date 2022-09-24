function validation(){
  var x = document.getElementById("textarea");
  if(x.value ==""){
    alert("Please Enter your text.");
  }
}


function handleUpper() {
  var x = document.getElementById("textarea");
  x.value =   x.value.toUpperCase();
  // document.title = "Uppercase!!"; 
  validation();
}


function handleLower() {
  var x = document.getElementById("textarea");
  x.value =   x.value.toLowerCase();
  // document.title = "Lowercase!!";
  validation();
}


function handleCopy() {
  var CopyText = document.getElementById("textarea");
  CopyText.select();
  navigator.clipboard.writeText(CopyText.value);
  // document.title = "Copied!!";
  validation();
}


function handleGap() {
  var x = document.getElementById("textarea");
 x.value = x.value.replace( / +/g, ' '); 
 validation();
}


function handleClear() {
  var x = document.getElementById("textarea");
  x.value =  " ";
  // document.title = "Cleared!!";
  validation();
}





