/*
//single calculation
//자바스크립트의 가장 기본적인 연산

let students = 20;
students = students + 1;
//students += 1; 간략표현
console.log(students);

students = students - 1;
//studnets -= 1;
console.log(students);

students = students * 2;
//studnets *= 2;
console.log(students);

students = students / 2;
//studnets /= 2;
console.log(students);

//students = students / 3;
//다른 언어랑 다르게 정수로 안 나오네

let extraStudents = students % 3;
console.log(extraStudents);
//%은 나머지 연산자이다. 나눗셈 결과의 나머지.
*/

/*
let age = window.prompt("How old are you?"); 
//window.prompt() 팝업입력창. 사용자 55라는 데이터를 입력했을 때 숫자 55가 아닌 '55' 즉 문자열로 들어온다.
console.log(typeof age); //typeof는 자료형을 나타내는 문자열을 반환
age += 1; //age = age + 1;
console.log(`Happy Birthday! You are ${age} years old`);

age = Number(age); //Number 타입으로 바꾸겠다! 형변환 같은건가?
console.log(typeof age);
age += 1;
console.log(`Happy Birthday! You are ${age} years old`);
*/

// //팝업입력창에 나이와 이름을 적으라고 하고 생일 축하한다고 콘솔창에 띄워보자
// let age = window.prompt("나이를 입력해주세요!");
// let name = window.prompt("이름을 알려주세요!");

// age = Number(age);
// console.log(`${name}님 ${age}번째 생일 축하드립니다!`);



let userName = "kim eunseo"; //공백도 포함. 길이 11

//Length 문자열의 길이(띄어쓰기 포함)
console.log(userName.length);

//chatAt() n번째 인덱스에 있는 문자 반환
//개개인의 문자에 접근하는 것. 마지막 인덱스는 length -1
console.log(userName.charAt(0)); //가장 첫번째니까 k
console.log(userName.charAt(3)); //
console.log(userName.charAt(4)); //e

//indexOf(): 주어진 값과 일치하는 첫번째 인덱스 번호 반환
console.log(userName.indexOf("e")); // "e"의 인덱스 번호 , 4
console.log(userName.indexOf(" ")); //공백의 인덱스 번호 , 3
console.log(userName.indexOf("j")); //일치하는 값 없으면 -1 반환

//lastIndexOf() :역순부터 주어진 값 탐색해 인덱스 번호 반환
//주의: 역순부터 탐색하되, 인덱스 번호가 뒤에서부터 0이 되는 것은 아님
console.log(userName.lastIndexOf("e")); //8

//toUpperCase() & toLowerCase(): 모두 다 대문자로 & 모두 다 소문자로 반환
//원래의 str에 영향을 주지 않는다. 즉, 데이터 값에 변화가 생기지 않음. 영향 X
console.log(userName.toUpperCase()); //KIM EUNSEO
console.log(userName.toLowerCase()); //kim eunseo

//trim() 문자열의 양 끝 공백을 없애준다. 
let test = '  안녕   ';
test = test.trim();
console.log(test);

//replaceAll(): 문자열 대체
let phoneNum = "010/1234/5678";
phoneNum = phoneNum.replaceAll("/","-");
console.log(phoneNum);

//slice(): 문자열로부터 텍스트 추출하고 새 문자열 반환
//기존 문자열에 영향 X , 다른 문자열을 만들어내는 것
//str.slice(1, 4) 주의! 1번 인덱스부터 3번 인덱스까지!! 종료인덱스는 포함이 안된다!!!
//시작인덱스가 음수면 뒤에서부터 
//종료인덱스가 생략이면 문자열 마지막까지 추출됨

let fullName = "eunseo kim";
let firstName;
let lastName;
firstName = fullName.slice(0, fullName.indexOf(" ")); //공백은 포함안됨.
console.log(firstName);

lastName = fullName.slice(fullName.indexOf(" ") + 1, ); //+1을 안하면 공백부터 추출됨
console.log(lastName);


