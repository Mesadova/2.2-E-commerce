
// Exercise 6
function validate() {
	var error = 0;
	var regEmail = /^([a-zA-Z0-9_\-\.])+\@([a-zA-Z0-9_\-\.])+\.([a-zA-Z]{2,})$/;
	var regName = /^[a-zA-Z]{3,}$/;
	var regPhone = /^[0-9]{3,}$/;
	var regAddress = /^[a-zA-Z0-9]{3,}$/;
	var regPassword = /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]{4,}$/;

	// Get the input fields
	var fName = document.getElementById("fName");
	var fLastN = document.getElementById("fLastN");
	var fEmail = document.getElementById("fEmail");
	var fPassword = document.getElementById("fPassword");
	var fAddress = document.getElementById("fAddress");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");
	var errorLastN = document.getElementById("errorLastN");
	var errorPassword = document.getElementById("errorPassword");
	var errorAddress = document.getElementById("errorAddress");
	var errorPhone = document.getElementById("errorPhone");
	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == "" || regName.test(fName.value) == false) {
		error++;
	}

	if(fLastN.value == "" || regName.test(fLastN.value) == false) {
		error++;
	}

	if(fEmail.value == "" || regEmail.test(fEmail.value) == false) {
		error++;
	}
	
	if(fPhone.value == "" || regPhone.test(fPhone.value) == false) {
		error++;
	}

	if(fAddress.value == "" || regAddress.test(fAddress.value) == false) {
		error++;
	}

	if(fPassword.value == "" || regPassword.test(fPassword.value) == false) {
		error++;
	}



	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}

}
