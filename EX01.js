/*if문을 사용하여 다음과 같이 출력되는 코드를 작성하시오
/*
짜장면이 true일 경우: 오늘 식단은 짜장면입니다.
짜장면이 false일 경우: 오늘 식단은 짜장면이 아닙니다.
*/

let blackNoodle = false;

if(blackNoodle) {
    console.log("오늘 식단은 짜장면입니다.");
}
else {
    console.log("오늘 식단은 짜장면이 아닙니다.");
}


//문제풀이
let food = true;
if(!food /*== true*/) { //이미 참, 거짓을 나타내므로 비교 연산자 굳이 사용할 필요 없음
    console.log("오늘 식단은 짜장면입니다.");
}
else {
    console.log("오늘 식단은 짜장면입니다.")
} //!을 이용해 if문 해도 되고 if-else도 된다.

// //window.prompt() 사용
// let blackNoodle = window.prompt("오늘 식단은 짜장면입니까?");
// blackNoodle = (blackNoodle === 'true'); //boolean 타입으로 변환하기 위해
// // blackNoodle = Boolean(blackNoodle); //를 사용하면 true는 true, false도 true가 된다.
// // let a = 'false';
// // a = Boolean(a);
// // console.log(a); //true

// if(blackNoodle) { 
//     console.log("오늘 식단은 짜장면입니다.");
// }
// else {
//     console.log("오늘 식단은 짜장면이 아닙니다.");
// }