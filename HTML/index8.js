// // let js_test = 79;
// // let jh_test = 34;
// // let jk_test = 89;

// // let js_lastTest = 

// // let student = window.prompt('점수가 궁금한 학생의 이름을 말씀해주세요.');

// // function print1(name) {
// //     if(name == "재석") {
// //         console.log(js_test)
// //     }
// // }

// //Array 선언
// let babelion = [];
// babelion = ['고선진','나민경','조혜현','김채현','김하경','한송이','정지현','정채원','표정인','허정윤','김도연']; //11
// //'조혜현'을 인덱스로 출력
// console.log(babelion[2]);

// //'홍길동' 님을 babelion 배열에 추가 (push)
// babelion.push('홍길동');

// //홍길동 제거 (pop)
// babelion.pop();

// //홍길동 님을 배열 앞에 추가 (unshift)
// babelion.unshift('홍길동');

// //홍길동 님을 배열 앞에서 제거 (shift)
// babelion.shift();

// //해커톤 A팀(slice)
// let Ateam = babelion.slice(0, 6); //주의! 끝인덱스는 포함되지 않는다.

// //해커톤 B팀(slice)
// let Bteam1 = babelion.slice(6,11);
// let Btean2 = babelion.slice(6);


// //A 학생의 시험점수를 Array로 만들어보세요.
// let studentA = [33, 33, 54, 98];

// //객체로 시험점수 만들기
// let Astudent = {kor: 33, eng: 33, mat:54, sci: 98};


//위의 표를 학급별로 총 3개의 object로 나타내시오
let school = {
    rapClass: {
        seungcheol_name: "승철", seungcheol_date: "1995-08-08", seungcheol_age: 29,
        wonwoo_name: "원우", wonwoo_date: "1996-07-17", wonwoo_age: 28
    },

    vocalClass: {
        seungkwan_name: "승관", seungkwan_date: "1998-01-16", seungkwan_age: 26,
        dk_name: "도겸", dk_date: "1997-02-18", dk_age: 27
    },

    danceClass: {
        dino_name: "디노", dino_date: "1999-02-11", dino_age: 25,
        hosi_name: "호시", hosi_date: "1996-06-10", hosi_age: 28
    }
};


//원우의 생년월일을 console.log()를 활용하여 출력하시오.
console.log("원우의 생년월일: ",school.rapClass.wonwoo_date);

//도겸의 나이를 console.log()를 활용하여 출력하시오
console.log("도겸의 나이: ",school.vocalClass.dk_age);


//버논의 생년월일과 나이를 각각 window.prompt()로 입력받고 그 값을 버논의 학급에 해당하는 object에 추가하시오.
school.rapClass['vernon_name'] = "버논";

let vernonDate = window.prompt("버논의 생년월일을 말씀해주세요. ex)1995-04-03");
school.rapClass['vernon_date'] = vernonDate;

let vernonAge = window.prompt("버논의 나이를 말씀해주세요.");
school.rapClass['vernon_age'] = parseInt(vernonAge);

//버논의 생년월일과 나이를 console.log()를 활용하여 출력하시오.
console.log("버논의 생년월일: ", school.rapClass.vernon_date);
console.log("버논의 나이: ", school.rapClass.vernon_age);

//console.log(school.rapClass);
