
// Exercise 6
function validate() {
	let error = 0;
	let regEmail = /^([a-zA-Z0-9_\-\.])+\@([a-zA-Z0-9_\-\.])+\.([a-zA-Z]{2,})$/;
	let regName = /^[a-zA-Z]{3,}$/;
	let regPhone = /^[0-9]{9,9}$/;
	let regAddress = /^[a-zA-Z0-9]{3,}$/;
	let regPassword = /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]{4,}$/;
	let valid = 0;

	// Get the input fields
	let fName = document.getElementById("fName");
	let fLastN = document.getElementById("fLastN");
	let fEmail = document.getElementById("fEmail");
	let fPassword = document.getElementById("fPassword");
	let fAddress = document.getElementById("fAddress");
	let fPhone = document.getElementById("fPhone");

	let inputs = [fName, fLastN, fEmail, fPassword, fAddress, fPhone];

	// Get the error elements
	let errorName = document.getElementById("errorName");
	let errorEmail = document.getElementById("errorEmail");
	let errorLastN = document.getElementById("errorLastN");
	let errorPassword = document.getElementById("errorPassword");
	let errorAddress = document.getElementById("errorAddress");
	let errorPhone = document.getElementById("errorPhone");
	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == "" || regName.test(fName.value) == false) {
		fName.className = 'form-control ml-3 is-invalid';
		event.preventDefault();
	} else {
		fName.className = 'form-control ml-3 is-valid';
	}

	if(fLastN.value == "" || regName.test(fLastN.value) == false) {
		fLastN.className = 'form-control ml-3 is-invalid';
		event.preventDefault();
	} else {
		fLastN.className = 'form-control ml-3 is-valid';
	}

	if(fEmail.value == "" || regEmail.test(fEmail.value) == false) {
		fEmail.className = 'form-control ml-3 is-invalid';
		event.preventDefault();
	} else {
		fEmail.className = 'form-control ml-3 is-valid';
	}
	
	if(fPhone.value == "" || regPhone.test(fPhone.value) == false) {
		fPhone.className = 'form-control ml-3 is-invalid';
		event.preventDefault();
	} else {
		fPhone.className = 'form-control ml-3 is-valid';
	}

	if(fAddress.value == "" || regAddress.test(fAddress.value) == false) {
		fAddress.className = 'form-control ml-3 is-invalid';
		event.preventDefault();
	} else {
		fAddress.className = 'form-control ml-3 is-valid';
	}

	if(fPassword.value == "" || regPassword.test(fPassword.value) == false) {
		fPassword.className = 'form-control ml-3 is-invalid';
		event.preventDefault();
	} else {
		fPassword.className = 'form-control ml-3 is-valid';
	}
	inputs.forEach(input => {
		if (input.className === 'form-control ml-3 is-valid') {valid++};
	});

	if (valid === 6) {
		alert('All fields are correct. Checkout done');
	}
}
