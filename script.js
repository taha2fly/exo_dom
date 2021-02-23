let tableOfWords = ["red", "blue", "green", "yellow", "purple"];

let textWrittten = "";
let currentTime = Math.round(new Date() / 1000);
let index = 0;

window.addEventListener("load", function(){
	let btn = document.querySelector("button");
	let page = document.querySelector("body");
	let txtArea = document.getElementById("area");
	btn.addEventListener("click", function(){
		//alert("Test !");
		currentTime = Math.round(new Date() / 1000);
		index = Math.floor(currentTime / 5)%5;
		page.style.backgroundColor = tableOfWords[index];
		txtArea.innerHTML = tableOfWords[index];
	})
})
