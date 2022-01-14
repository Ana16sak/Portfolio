const words2 = ["a ML Enthusiast", "a Web Devoloper", "an Aspiring Actuary "];
let j = 0;
let timer2;

function typingEffect2() {
	let word2 = words2[j].split("");
	var loopTyping2 = function() {
		if (word2.length > 0) {
			document.getElementById('word').innerHTML += word2.shift();
		} else {
			deletingEffect2();
			return false;
		};
		timer2 = setTimeout(loopTyping2, 200);
	};
	loopTyping2();
};

function deletingEffect2() {
	let word2 = words2[j].split("");
	var loopDeleting2 = function() {
		if (word2.length > 0) {
			word2.pop();
			document.getElementById('word').innerHTML = word2.join("");
		} else {
			if (words2.length > (j + 1)) {
				j++;
			} else {
				j = 0;
			};
			typingEffect2();
			return false;
		};
		timer2 = setTimeout(loopDeleting2, 100);
	};
	loopDeleting2();
};

typingEffect2();

