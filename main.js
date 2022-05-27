//Toast Alerts DOM Selection
let successAlert = document.querySelector(".toast.success.hide");
let failAlert = document.querySelector(".toast.error.hide");
//New To Do Element function
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("task").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    // Ignore the empty input and show Bootstrap toast fail alert
    let toastAlert = new bootstrap.Toast(failAlert);
		toastAlert.show();
  } else {
    // Create the desired li item and show Bootstrap toast succes alert
    let toastAlert = new bootstrap.Toast(successAlert);
		toastAlert.show();
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("task").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
const doneMarkDOM = document.querySelector('#list')
doneMarkDOM.addEventListener('click', done_Element)

function done_Element(item){
    item.target.style.textDecoration = "line-through";
}

// Close button and it's connection
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

//Hide the desired li item 
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}