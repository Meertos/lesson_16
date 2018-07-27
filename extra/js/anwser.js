var btn = document.getElementById("btn");
var checkBox = document.getElementById("checkbox");
var userAge;
var status;
var blockAnwser = document.getElementById("main");
var page = document.getElementById("main-block");

function getAge() {
	userAge = document.getElementById("user-age").value;
	return userAge;
	check(userAge);
}

function check() {
	if(userAge > 17) {
		if(checkBox.checked){
			alert("Доступ разрешён." + " Ваша подписка оформлена. Ваш возраст: " + userAge);
			status = 1;
		}
		else {
			alert("Доступ запрещён." + " Вы не оформили подписку. Ваш возраст: " + userAge);
			status = 0;
		}
	}
	if(userAge <= 17){
		if(checkBox.checked){
			alert("Доступ запрещён." + " Вы оформили подписку. Ваш возраст: " + userAge);
			status = 0;
		}
		else {
			alert("Доступ запрещён." + " Вы не оформили подписку. Ваш возраст: " + userAge);
			status = 0;
		}
	}
	if(status == 1){
		switchPage();
	}
}

function switchPage() {
		blockAnwser.style.display = "none";
		page.style.display = "block";
}

btn.addEventListener("click", getAge);
btn.addEventListener("click", check);