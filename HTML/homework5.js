/*
1. Object를 이용해서 경기날짜&상대팀명&상대팀점수&두산팀점수를 저장하고, 
prompt를 이용해 사용자가 날짜를 입력하면 [?월 ?일 ?대 ?으로 ?한테 (이겼다/졌다)]를 출력하는 프로그램을 구현하시오.
(단, 1- Object의 들어가는 내용은 임의로 작성하시오. 
2- 승패는 두산팀을 기준으로 한다. 예> 5월 5일 두산팀 3 : 삼성팀 5 => 5월 5일 3대 5으로 삼성팀한테 졌다. 
3- ?월 ?일의 범위는 5월 12일 ~ 16일까지다. 
4- 5월 15일은 경기가 없는 날이다.)
*/

/*
//game이라는 객체를 만들고 그 안에 날짜별로 객체를 만듦.(중첩객체) 
//날짜별 객체 안에 경기날짜&상대팀명&상대팀점수&두산팀점수를 저장
let game = {
    "05-12": {
        date: "5월 12일", //경기날짜
        opponent: "삼성팀", //상대팀명
        opponentScore: 5, //상대팀점수
        dusanTeamScore: 3 //두산팀점수
    },

    "05-13": {
        date: "5월 13일",
        opponent: "롯데팀",
        opponentScore: 2,
        dusanTeamScore: 4
    },

    "05-14": {
        date: "5월 14일",
        opponent: "한화팀",
        opponentScore: 1,
        dusanTeamScore: 2
    },

    "05-16": {
        date: "5월 16일",
        opponent: "LG팀",
        opponentScore: 3,
        dusanTeamScore: 1
    }
};

let result; //경기의 승패(이겼다. or 졌다.)를 담을 변수
let gameDate; //prompt창으로 날짜를 입력받아 저장할 변수

while(1) { //무한루프
    //날짜를 입력해달라는 prompt를 띄움. 경기날짜와 입력예시도 알려줌.
    gameDate = window.prompt("날짜를 입력해주세요.\n경기 날짜: 5월 12 ~ 5월 16일(5월 15일 경기 없음)\n입력 예시) 05-12");

    //사용자가 입력한 날짜 값에 따라 다른 결과를 주기 위해 if문 사용

    if(gameDate == "05-15") { //경기가 없었던 5월 15일을 입력한 경우,
        //경기가 없었다고 alert를 사용해 경고창을 띄움.
        alert("5월 15일은 경기가 없었습니다.\n경기 날짜: 5월 12 ~ 5월 16일(5월 15일 경기 없음)\n입력 예시) 05-12");
        continue; //continue를 사용해 반복문의 처음으로 돌아가서 반복문 내용 처음부터 다시 실행. -> prompt창이 다시 뜸.
    }
    else if(game[gameDate] == undefined) { //game["05-20"] 처럼 없는 날짜를 입력한 경우,
        //alert를 사용해 정확하게 날짜를 입력해달라고 경고창을 띄움.
        alert("정확하게 날짜를 입력해주세요.\n경기 날짜: 5월 12 ~ 5월 16일(5월 15일 경기 없음)\n입력 예시) 05-12");
        continue; //continue를 사용해 반복문의 처음으로 돌아가서 반복문 내용 처음부터 다시 실행. -> prompt창이 다시 뜸.
    }
    else { //정확한 날짜를 입력한 경우,

        //입력받은 날짜의 두산팀 점수 > 상대팀 점수 => result에 "이겼다." 라고 값을 넣음.
        if(game[gameDate]['dusanTeamScore'] > game[gameDate]['opponentScore']) { 
            result = "이겼다."
        }
        else { // 그렇지 않으면(두산팀 점수 < 상대팀 점수) result에 "졌다." 라고 값을 넣음.
            result = "졌다."
        }
        
        //game 객체의 입력받은 날짜 객체의 키에 접근해서 필요한 정보들을 콘솔창에 출력
        //[?월 ?일 ?대 ?으로 ?한테 (이겼다/졌다)] 
        console.log(`[${game[gameDate]['date']} ${game[gameDate]['dusanTeamScore']} 대 ${game[gameDate]['opponentScore']}으로 ${game[gameDate]['opponent']}한테 ${result}]`);
        break; //반복문을 끝내지 않으면 계속 무한루프. 정확한 날짜를 입력받으면 결과 출력 후 반복문 탈출하도록 break 사용
    }
}
*/

/*
for(let date in game) {
    if(gameDate == date) {
        if(game[date]['dusanTeamScore'] > game[date]['opponentScore']) {
            result = "이겼다."
        }
        else {
            result = "졌다."
        }
        console.log(`${game[date]['date']} ${game[date]['dusanTeamScore']} 대 ${game[date]['opponentScore']}으로 ${game[date]['opponent']}한테 ${result}`);
    }
    
}
*/
/*
for(let date in game) {
    for(let file in game[date]) {
        console.log(`${game[file]['date']}`);
    }
}
console.log(gameDate === Object.keys(game)[0]);
*/

//2. Object를 호출하는 방법 2가지를 서술하시오
//(1) 대괄호를 사용한다. name['jhh']
//(2) 점(.) 연산자를 이용한다. name.jhh

//3.아래의 값이 출력되는 for문을 작성하시오
/*
1 2 
1 5 
1 8
4 2
4 5 
4 8
*/
/*
for(let i = 1; i <= 4; i += 3) {
    for(let j = 2; j <= 8; j += 3) {
        console.log(i, j);
    }
}
*/

//4. 선택자 id와 class의 차이점을 서술
//id는 css를 주고 싶은 특정한 태그가 1개 있을 때 사용하며 중복되어서는 안된다. css 적용방법은 #id이다.
//class는 비슷한 특성을 주고 싶은 태그들이 여러 개일 때 쓰며, css 적용방법은 .class이름이다.

//5. 아래의 코드를 보고 출력값을 구하시오.
/*
let a = 3; 
let b = 4; 
let c = a++ + --b; 

console.log(a, b, ++c); 
*/

//결과: 4 3 7

//6. 이메일을 입력받고 ‘@’ 전까지만 출력하시오.
/*
//사용 메서드
//slice(시작 인덱스, 끝 인덱스(포함하지 않음)) - 시작 인덱스부터 끝 인덱스까지 문자열 추출
//indexOf(찾을 문자열, 시작 위치(생략가능)) - 찾으려는 문자열 인덱스 반환

//prompt 창으로 이메일을 입력받고 변수 email에 그 값을 넣음.
let email = window.prompt("이메일을 입력하세요\n예시)a1b2ce@naver.com");

//slice를 사용해서 문자열 추출. 시작(인덱스 0) 부터 '@'의 인덱스까지 추출
//'@'의 인덱스는 고정적이지 않음. 그렇기 때문에 indexOf()를 사용해서 '@'의 인덱스를 반환받음.
let result = email.slice(0, email.indexOf("@"));
console.log(result); //결과 출력
*/

//7. 아래의 array 내용을 모두 출력하는 for문을 작성하시오. 
//(단, length를 사용하여야 한다.)

//let array = [1, 2, 3, 4, 5];
/*
//초기식: 배열 원소의 처음부터 출력해야 하므로 i를 0으로 설정
//조건식: 배열의 마지막 인덱스는 배열의 길이(length)-1 과 같다. i < array.length;로 하면 마지막 인덱스까지 출력 가능.
for(let i = 0; i < array.length; i++) {
    console.log(array[i]); //i가 인덱스 번호의 값을 의미하므로 array[i] 하면 배열 원소 출력.
}
*/

//8. 1부터 100까지의 숫자 중 7의 배수들만을 합하여 그 결과를 출력하는 프로그램을 짜고자 할 때, 아래의 빈칸을 채우시오.
/*
let sum = 0;

for(let i = 0; i <= 100; i++) {
    //7의 배수들의 공통점: 7로 나누었을 때 나머지가 0이다. 를 활용하여 if문 작성
    if(i % 7 == 0) { //나머지 연산자를 사용해 i를 7로 나누었을 때 나머지가 0과 같으면,
        sum += i; //7의 배수들의 합을 담는 변수 sum에 i 값을 더해줌.
    }
}

console.log(sum);
*/

//9.사용자가 컴퓨터가 생각하고 있는 숫자를 맞추는 프로그램을 짜시오.
//(예> 컴퓨터가 생각한 값 = 10, 사용자가 prompt를 이용해 5를 입력 -> “UP” 출력)
/*
//임의로 랜덤값 범위 설정 후 랜덤값을 num이라는 변수에 넣음. 
//num은 컴퓨터가 생각하고 있는 숫자를 담은 변수
let num = Math.floor(Math.random() * 20) + 1; // 1 <= num(정수) < 21

let userNum = 0; //userNum은 사용자가 입력한 값을 담을 변수. 
//0보다 큰 양수들로 초기화할 경우 혹시라도 while문이 실행되지 않을 수 있어 0으로 초기화

while(num != userNum) { //num(컴퓨터가 생각하고 있는 숫자값)과 userNum(사용자가 입력한 숫자값)이 다를 때까지 반복.
    //값이 같아지면(=사용자가 답을 맞추면) 반복문 종료

    userNum = window.prompt("정답을 말해주세요! 정답은 1~20 중에 있습니다.");

    if(userNum > num) { //정답보다 큰 값을 입력하면 down이라고 창 띄우기 
        alert("down");
    }
    else if (userNum < num) { //정답보다 작은 값을 입력하면 up이라고 창 띄우기
        alert("up");
    }
    else { //정답을 맞춘 경우 정답입니다! 정답은 ~였습니다. 라고 창 띄우기
        alert(`정답입니다! 정답은 ${num}이었습니다.`);
    }
}
*/

//10. Object를 이용해 학생 3명의 이름과 학점, 백분율을 작성하시고, 학점이 3.0 이상이고 백분율이 90이상인 학생만을 출력하시오.
/*
//students라는 객체 안에 학생 이름별로 객체를 생성.(중첩객체)
let students = {
    "김지혜":{ 
        percent:87, //백분율
        grade: 3.5 //학점
    },

    "김혜진":{
        percent:91,
        grade: 3.9
    },

    "이민지":{
        percent:98,
        grade: 4.2
    }
};

for(let person in students) { //루프 돌면서 students 객체의 키들이(김지혜,김혜진,이민지) person이라는 변수에 대입됨.

    //학생의 백분율과 학점의 값에 접근하여 백분율이 90이상이고 학점이 3.0 이상이면,
    if(students[person]['percent'] >= 90 && students[person]['grade'] >= 3.0)
        console.log(person); //학생이름 출력
}
*/

//11. Object를 이용해서 물건의 이름과 가격을 5개 입력하고, for문을 이용해서 가격이 가장 비싼 물건의 이름과 가격을 출력하시오.

//상품명:가격 형태로 products라는 객체 생성
let products = {
    "연필":1000,
    "노트":3000,
    "지우개":700,
    "볼펜":1700,
    "필통":6000
};

let expensivePrice = 0; //expensivePrice: 가장 비싼 물건의 가격을 담을 변수
let productName; //productName: 가장 비싼 물건의 이름을 담을 변수

for(let name in products) { //루프 돌면서 products 객체의 키들이(연필, 노트...) name이라는 변수에 대입됨.
    
    if(expensivePrice < products[name]) { //expensivePrice보다 products[name]의 값이 더 크면,
        expensivePrice = products[name]; //expensivePrice에 그 값을 넣음.
        productName = name; //productName에 상품명을 넣음.
    }

    //expensivePrice보다 products[name]의 값이 더 작은 경우에는
    //현재까지의 비싼 물건의 이름과 가격이 이미 변수들에 저장되어 있으므로 실행할 문장 없음. 그래서 if문만 사용. else 안 씀.
}

console.log(`가장 비싼 물건 이름: ${productName}, 가격: ${expensivePrice}원`); //가장 비싼 물건 이름과 가격 출력
