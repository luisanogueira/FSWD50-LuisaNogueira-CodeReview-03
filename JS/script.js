var changeinput = document.getElementsByClassName("changeinput");

function getName() {
	return document.getElementById("newname").value;
} 
function getHorse_power() {
	return parseFloat(document.getElementById("horsepower").value);
} 

function getAge(birthDate) {
	var dateString = document.getElementById("birthday").value;
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
	return age;
}

function country() {
	return document.getElementById("select").value;
} 

function validateAndCalculate() {
	document.getElementById("btn").disabled = true;
	if (validateName() == true && validateHorsep() == true) {
		document.getElementById("btn").disabled = false;
		calculateInsurancePerCountry();
	}
}

function setInnerHTML(id, message) {
	document.getElementById(id).innerHTML = message;
}

function validateName() {
	if (getName() == "") {
		setInnerHTML("includename", "Please, include your name!");
		return false;
	} else {
		setInnerHTML("includename", "");
		return true;
	} 
}
	
function validateHorsep() {
	if (isNaN(getHorse_power())) {
		setInnerHTML("includehorsep", "Please, include only numbers!");
		return false;
	} else if (getHorse_power() > 2000) {
		setInnerHTML("includehorsep", "Please, include a real horse power value!");
		return false;
	} else {	
		setInnerHTML("includehorsep", "");
		return true;
	}
}

function calculateInsurancePerCountry() {

	var resultelem = document.getElementById("result");

	if (country() == "austria") {
		resultelem.innerHTML = getName() + ", your insurance costs " + 
		Math.floor(getHorse_power() * 100 / getAge() + 50) + ".";

	} else if (country() == "hungary") {
		resultelem.innerHTML = getName() + ", your insurance costs " + 
		Math.floor(getHorse_power() * 120 / getAge() + 100) + ".";

	} else {
		resultelem.innerHTML = getName() + ", your insurance costs " + 
		Math.floor(getHorse_power() * 150 / (getAge() + 3) + 150) + ".";
	}
}

document.getElementById("btn").addEventListener("click", validateAndCalculate , false);

for(var i=0; i < changeinput.length; i++) {
	changeinput[i].addEventListener("change", validateAndCalculate , false);
}