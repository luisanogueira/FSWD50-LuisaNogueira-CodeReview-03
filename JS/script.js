function calculateInsurancePerCountry(name, horse_power, age) {

		var name = document.getElementById("input1").value;
		var horse_power = parseFloat(document.getElementById("input3").value);
		var age =  parseFloat(document.getElementById("input2").value); 

	 	var country = document.getElementById("select").value;

			if (country == "austria") {
				document.getElementById("result").innerHTML = name + ", your insurance costs " + 
				Math.floor(horse_power * 100 / age + 50) + ".";

			} else if (country == "hungary") {
				document.getElementById("result").innerHTML = name + ", your insurance costs " + 
				Math.floor(horse_power * 120 / age + 100) + ".";

			} else {
				document.getElementById("result").innerHTML = name + ", your insurance costs " + 
				Math.floor(horse_power * 150 / (age + 3) + 150) + ".";
			}
		}

document.getElementById("btn").addEventListener("click", calculateInsurancePerCountry , false);