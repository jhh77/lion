let userName = "Jo hyehyeon"; //공백도 포함함. 11임

//Length 문자열의 길이(띄어쓰기 포함)
console.log(userName.length); //길이를 알아보는 것 .length

//charAt() n번째 인덱스에 있는 문자를 알려줌.
//개개인의 문자에 접근한다. length가 길이이니까 마지막 문자는 인덱스가 .length-1
console.log(userName.charAt(0)); //j
console.log(userName.charAt(3)); //h
console.log(userName.charAt(4)); //y

//indexOf()
//찾으려는 문자를 () 안에 작성한다. 주어진 값과 일치하는 첫번째 인덱스를 알려줌
console.log(userName.indexOf("e")); //e의 인덱스 번호를 찾아줘
console.log(userName.indexOf(" ")); //공백의 인덱스 번호를 찾아줘
//lastIndexOf() : 역순부터 탐색한다. 일치하는게 없으면 -1이 나옴.
console.log(userName.lastIndexOf("e")); //뒤에서부터 e의 인덱스 번호 찾아줘. 8 / 반복이 있을 때 사용

//toUpperCase() & toLowerCase()
//원래의 str에 영향을 안 준다. 
console.log(userName.toUpperCase()); //모두 대문자로 바꿔 => JO HYEHYEON
console.log(userName.toLowerCase()); //모두 소문자로 바꿔 => jo hyehyeon

//trim() 문자열의 양 끝 공백을 없애줌.

//replaceAll() 문자열 대체

//slice() 문자 쪼개기
//시작은 포함, 마지막은 포함되지 않는다.
//str.slice(1, 4) => 1 ~ 3 추출 마지막을 미포함한다.

let fullName = "eunseo kim";
let firstName;
let lastName;

firstName = fullName.slice(0, fullName.indexOf(" "));
//0 ~ 공백 전까지
console.log(firstName);

lastName = fullName.slice(fullName.indexOf(" ") + 1);
//k(=공백 + 1)부터 끝(,뒤가 생략됨.)까지
console.log(lastName);







