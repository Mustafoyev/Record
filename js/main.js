var elForm = document.querySelector('.js-form');
// var elArea = document.querySelector('.js-area');
var elList = document.querySelector('.js-list');
var elInp = document.querySelector('.js-inp');
var elBtn = document.querySelector('.js-btn');
var elSpan = document.querySelector('.js-span');

// elForm.addEventListener('submit', function (evt) {
// 	evt.preventDefault();

// 	var newArr = elArea.value.split(',');

// 	for (var arr of newArr) {
// 		var newLi = document.createElement('li');
// 		newLi.textContent = arr;
// 		elList.appendChild(newLi);
// 	}
// });

// for (i = 2; i < 10; i++) {
// 	for (j = 1; j < 10; j++) {
// 		console.log(`${i} x ${j} = ${i * j}`);
// 	}
// }

// uyga vazifa

elForm.addEventListener('submit', function (evt) {
	evt.preventDefault();
	var inpVal = elInp.value;
	elInp.value = '';
	var newLi = document.createElement('li');
	newLi.textContent = inpVal;
	elList.appendChild(newLi);
});

elList.style.listStyle = 'none';

var record = new webkitSpeechRecognition();
record.lang = 'uz-UZ';

elBtn.addEventListener('click', function () {
	record.start();
	document.body.style.backgroundColor = 'green';
});

record.onend = function () {
	document.body.style.backgroundColor = 'red';
};

record.onresult = function (evt) {
	elInp.value = evt.results[0][0].transcript;

	if (evt.results[0][0].transcript == 'nima gap') {
		elSpan.textContent = 'Assalomu alaykum Umid aka';
	}
};
