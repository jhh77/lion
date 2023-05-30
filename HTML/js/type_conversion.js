let age = window.prompt("How old are you?");
console.log(typeof age); //입력받은 타입은 String
age += 1; // age = age + 1;
console.log("Happy birtheday! You are", age, "years old");
//console.log('Happy birthday! You are ${age} years old'); 권장

age = Number(age); //Number로 바꾸겠다(type이 변환됨)
console.log(typeof age); //Number로 바뀜.
age += 1;
console.log(`Happy Birthday! You are ${age} years old`); //232가 나오는 이유? Number로 변환하기 전에 문자열 덧셈이 있었음.

