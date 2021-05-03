let suggestions = ["C", "C++", "JAVA", "PYTHON", "HTML", "SQL"];
// getting all required elements
// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// if user press any key and release
inputBox.onkeyup = (e) => {
	let userData = e.target.value; //user enetered data
	let emptyArray = [];
	if (userData) {
		icon.onclick = () => {
			webLink = "tutors.html";
			linkTag.setAttribute("href", webLink);
			console.log(webLink);
			linkTag.click();
		};
		emptyArray = suggestions.filter((data) => {
			//filtering array value and user characters to lowercase and return only those words which are start with user enetered chars

			return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
		});
		emptyArray = emptyArray.map((data) => {
			// passing return data inside li tag
			console.log(data);
			return (data = "<li>" + data + "</li>");
		});
		if (emptyArray.length != 0) {
			searchWrapper.classList.add("active"); //show autocomplete box
			showSuggestions(emptyArray);
		}
		let allList = suggBox.querySelectorAll("li");
		for (let i = 0; i < allList.length; i++) {
			//adding onclick attribute in all li tag
			allList[i].setAttribute("onclick", "select(this)");
		}
	} else {
		searchWrapper.classList.remove("active"); //hide autocomplete box
	}
};

function select(element) {
	let selectData = element.textContent;
	inputBox.value = selectData;
	icon.onclick = () => {
		

		if (inputBox.value === "C"||inputBox.value === "c") webLink = "ctutors.html";
		else if (inputBox.value === "C++"||inputBox.value === "c++") webLink = "cpptutors.html";
		else if (inputBox.value === "JAVA"||inputBox.value === "java") webLink = "java.html";
		else if (inputBox.value === "PYTHON"||inputBox.value === "python") webLink = "python.html";
		else if (inputBox.value === "HTML"||inputBox.value === "html") webLink = "web.html";
		else if (inputBox.value === "SQL"||inputBox.value === "sql") webLink = "sql.html";
		else webLink = "home.html";
		window.open(webLink,"_self");
		// linkTag.setAttribute("href", webLink);
		// linkTag.click();
	};
	searchWrapper.classList.remove("active");
}

function showSuggestions(list) {
	let listData;
	if (!list.length) {
		userValue = inputBox.value;
		listData = "<li>" + userValue + "</li>";
	} else {
		listData = list.join("");
	}
	suggBox.innerHTML = listData;
}
