document.getElementById("myButton").onclick = function(){
	
var letters = /^[A-Za-z]+$/;	

let existingStudents = ['SNDMIK001', 'SNDMIK002', 'SNDMIK003'];

let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
let result = "";

let firstName = "";
let lastName = "";	

firstName = document.getElementById("firstName").value
lastName = document.getElementById("lastName").value + "XXX";
	
let num = 1

for (let i = 0; i < lastName.length; i++) {
  if (!vowels.includes(lastName[i])) {
    result += lastName[i];
  }
}

lastName = result;

//let i = 0;
num = num.toString().padStart(3, '0');
let testStudentNumber = lastName.toUpperCase().substring(0, 3) + firstName.toUpperCase().substring(0, 3) + num;
	
while (existingStudents.includes(testStudentNumber)) {
num = parseInt(num);
num += 1;
num = num.toString().padStart(3, '0');
testStudentNumber = lastName.toUpperCase().substring(0, 3) + firstName.toUpperCase().substring(0, 3) + num;
}

num = num.toString().padStart(3, '0');
let studentNumber = lastName.toUpperCase().substring(0, 3) + firstName.toUpperCase().substring(0, 3) + num;

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
	
if (firstName.match(letters) && lastName.match(letters)) {
    document.getElementById("studentNumberOutput").innerHTML = "Hi " + firstName + ", your student number is: " + studentNumber.bold();
    return true;
  } else {
    document.getElementById("studentNumberOutput").innerHTML = "You entered invalid characters, please refresh the page and try again";
    return false;
  }
};
