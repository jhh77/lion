// function hello() { /* 함수 정의 */
//     console.log('안녕 내 이름은 조혜현이야');
// }

// hello(); /* 함수 호출 */

/* 내가 푼 것 */
// let user = "조혜현";

// function hi(userName) {
//     console.log(`안녕 내 이름 ${userName}이야`);
// }

// hi(user);

/* 풀이 */
// let name = "혜현";
// function hi() {
//     console.log('안녕 내 이름은 ${name}이야');
// }
// hi()

/* 또 다른 풀이 */
// function hi(name) {
//     console.log('안녕 내 이름은 ${name}이야');
// }

// const name = hi('혜현');


/* 1과 2를 더한 결과를 출력하는 함수 */
// function add(x, y) {
//     result = x + y;
//     console.log(result);
// }

// add(1, 2);


/* 두 개의 변수에 값(숫자)을 할당해 이 두 개를 매개변수로 받아 더한 값을 출력하는 함수 add를 만드시오 */
// let num1 = 3;
// let num2 = 5;

// function add(x, y) {
//     console.log(x + y);
// }

// add(num1, num2);


/* 5. 철수는 40살인 선생님이 몇 년도에 태어났는지 궁금해졌다. 변수 age(나이)가 주어질때, 
2023을 기준으로 출생 연도를 출력하는 함수 ‘year’를 만드시오 */
// let age = 40;

// function year(age) {
//     console.log(2023-(age-1));
// }

// year(age);

/* 6. 두 개의 매개변수가 주어질 때, 두 매개변수 중 더 큰 숫자를 출력하는 함수 ‘max’를 만드시오. (단, if문을 활용) */
// function max(x, y) {
//     result = x;

//     if(x < y) {
//         result = y;
//     }

//     console.log(result);
// }

// let n1 = 10;
// let n2 = 2;

// max(n1, n2);

/* 7. 정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 정수로 출력 하는 함수 ‘solution’을 만드시오. 
(단, 문자형 데이터를 파라미터로 전달해주면 정수형으로 변환하는 parseInt()를 활용) */
// function solution1(num1, num2) {
//     let result = parseInt(num1 / num2);
//     console.log(`${num1} / ${num2} = ${result}`);
// }

// let number1 = 9;
// let number2 = 2;

// solution1(number1, number2);


/* 8. 정수 n이 주어질 때, n 이하의 양수를 모두 더한 값을 출력하는 함수 ‘sum’을 만드시오. (단, for문 활용) */
// function sum (n) {
//     let result = 0;

//     for(let i = n; i > 0; i--) { /* 반대로 + 사용도 됨 */
//         result += i;
//     }

//     console.log(`${n} 이하의 양수를 모두 더한 값은 ${result} 입니다.`);
// }

// let num = 10;

// sum(num);


/* 9. 정수 n이 주어질 때, n 이하의 짝수를 모두 더한 값을 출력하는 함수 ‘solution’을 만드시오. (단, for문 활용) */
function solution(n) {
    let result = 0;
    for(let i = n; i > 0; i--) {
        if(i % 2 == 1)
            continue;
        
        result += i;
    }

    console.log(`${n} 이하의 짝수를 모두 더한 값은 ${result} 입니다.`);
}

let number = 10;

solution(number);



/* 10. 5부터 7까지의 구구단을 출력하는 함수 ‘gugudan’을 만드시오. (단, 중첩 for문을 활용) */
function gugudan() {
    for(let i = 5; i <= 7; i++) {
        console.log(`${i} 구구단`);
        for(let j = 1; j <= 9; j++) {
            console.log(`${i} * ${j} = ${i * j}`); /* result 만들어서 넣어서 출력해도 됨 */
        }
    }
}

gugudan();