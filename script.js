window.addEventListener("load", results);

function results(){
  var name = document.getElementById('name').value;
  var pwd = document.getElementById('pwd').value;
  var thebutton = document.getElementById("submit");

  document.body.style.backgroundColor = "#70DBDB";
  name.style.color = "#ffffff";
  word.style.color = "#ffffff";
  thebutton.style.color = "#ffffff";


  document.write("Thank you " + name + "<br/>");
  document.write("Don't feel bad if Heather doesn't respond to you, though.");
}

function clicked(){
  window.location = "formresult.html";
}
