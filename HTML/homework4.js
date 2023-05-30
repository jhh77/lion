//1. 아래의 출력문을 보고 출력결과와 둘의 출력 차이를 서술하시오.
//""를 사용한 경우에는 문자열로 인식해서 ${a}가 789로 나오지 않고, 안녕하세요! 저는 ${a} 숫자를 좋아합니다. 라고 출력됩니다.
//``를 사용한 경우에는 ${a}가 a의 값으로 나옵니다. 그래서 출력결과는 안녕하세요! 저는 789 숫자를 좋아합니다. 라고 출력됩니다.

//2. 오류가 발생한다면 그 이유와 해당 위치를 서술하고, const와 let의 가장 큰 차이점을 1가지 이상 서술하시오.
// const A = 8;
// let b = 80;
// while (b >= 3) {
//     console.log(--b);
//     console.log(++A);
// }
//오류 발생 위치: console.log(++A);
//이유: const로 선언한 변수는 값을 변경할 수 없기 때문입니다.

//3. 변수 이름 규칙 내용을 정리하여 작성하시오.
//영문자, 달러($), 언더바(_), 숫자만 올 수 있습니다.
//단, 첫번째 글자로는 숫자가 올 수 없습니다.
//대문자와 소문자를 구분합니다.
//자바스크립트의 예약어는 변수명으로 사용할 수 없습니다.


//4. 지금까지 배운 내용을 토대로 문제 최소 3개를 만들어오세요. 
//(이 문제들을 종합하여 다음주 스터디를 진행할 계획입니다. 문제 해설은 지목당한 사람이 해설을 1차로 한 후 문제 제작자가 2차로 할 계획입니다.)


//5. undefined와 null의 차이점을 서술하시오


//6. 아래의 조건을 if문으로 작성하시오.
//AA카페 메뉴를 입력하는 prompt 창이 뜨고,  
//메뉴에 없는 제품을 주문하였을 때는 판매하지 않는다는 문구가 콘솔창에 출력이 되고 다시 prompt 창이 뜬다. 
//모든 주문이 끝났을 때에는 prompt 창에 0을 넣으면 주문이 끝난다. 주문이 모두 끝난 후에는 주문받은 내역의 최종 가격을 출력한다
//americano 3000
//chocolateCreamCake 4400
//latte 4000
//milkCake 3500
//vanillaLatte 4200
//mintChocolate 4600


// /* 카페 메뉴들 변수들 */
// let americano = 3000;  //아메리카노
// let chocolateCreamCake = 4400; //초코크림케이크
// let latte = 4000; //카페라떼
// let milkCake = 3500; //우유케이크
// let vanillaLatte = 4200; //바닐라라떼
// let mintChocolate = 4600; //민트초콜릿

// /* 주문 관련 변수들 */
// let menu; //주문 받은 메뉴를 넣을 변수
// let price = 0; //주문한 메뉴의 가격을 넣을 변수

// let finish = 1; //주문 프로그램 종료 변수. 0이면 종료. 0으로 초기화하면 반복문이 동작하지 않으므로 1로 초기화.

// /* 주문 프로그램 반복문 */
// while(finish != 0) { //주문 프로그램 종료 변수가 0이 아닐 때까지 반복. 0이 되면 반복문 탈출.
//     /* 주문 받기 */
//     menu = window.prompt(`주문할 메뉴를 선택해주세요.
//     아메리카노: ${americano}
//     초코크림케이크: ${chocolateCreamCake}
//     카페라떼: ${latte}
//     우유케이크: ${milkCake}
//     바닐라라떼: ${vanillaLatte}
//     민트초콜릿: ${mintChocolate}`);

//     /* 주문받은 메뉴에 따라 price 변수 값을 할당함 */
//     if(menu == "아메리카노") {
//         price = americano;
//     }
//     else if (menu == "초코크림케이크") {
//         price = chocolateCreamCake;
//     }
//     else if (menu == "카페라떼") {
//         price = latte;
//     }
//     else if (menu == "우유케이크") {
//         price = milkCake;
//     }
//     else if (menu == "바닐라라떼") {
//         price = vanillaLatte;
//     }
//     else if (menu == "민트초콜릿") {
//         price = mintChocolate;
//     }
//     else { //없는 메뉴를 선택한 경우
//         console.log("그런 메뉴는 판매하지 않습니다. 정확히 입력해주세요."); //다시 입력해달라고 콘솔창에 출력
//         continue; //반복문의 처음으로 돌아감
//     }

//     /* 프로그램 종료 관련 */
//     //주문 종료할 것인지 prompt로 값을 입력받고 그 값을 finish라는 주문 프로그램 종료 변수에 할당. 
//     finish = window.prompt(`${menu}를 주문하셨습니다. 주문을 마치겠습니까?\n종료하려면 0을 입력하세요.`);

//     //0을 입력받을 경우: while 조건식(finish != 0)이 거짓이 되므로 반복문 탈출
//     //0 이외의 숫자를 입력받을 경우: while 조건식(finish != 0)이 참이 되므로 반복문 코드를 다시 실행

// }

// /* 주문 끝. 최종 주문 내역 출력 */
// console.log(`주문 내역\n상품: ${menu} / 가격: ${price}`); //콘솔창에 주문내역 출력


//7. A의 문자열을 B의 문자열로 만드시오. 
//A : “my name is Soojin Yong! Nice ToOo meet YOU!”;
//B : “My Name Is SOOJIN YONG! NIce TOo meeT yOu!”;

//indexOf(찾을 문자열, 시작 위치(생략가능)) - 찾으려는 문자열 인덱스 반환
//slice(시작 인덱스, 끝 인덱스(포함하지 않음)) - 시작 인덱스부터 끝 인덱스까지 문자열 추출
//replace(현재 문자열(교체하고 싶은 문자열), 변경할 문자열) - 문자열 교체

/* 문자열 a와 b 변수 선언과 초기화 */
// let a = "my name is Soojin Yong! Nice ToOo meet YOU!"; 
// let b = "My Name Is SOOJIN YONG! NIce TOo meeT yOu!";

// /* 시작과 끝 인덱스를 담을 변수들 선언 및 초기화 - slice에 사용할 것*/
// /* 문자열 a에서 사용할 시작, 끝 인덱스 변수 */
// let startA = 0; 
// let endA = a.indexOf(' ');

// /* 문자열 b에서 사용할 시작, 끝 인덱스 변수 */
// let startB = 0;
// let endB = b.indexOf(' ');

// /* 현재 문자열(교체하고 싶은 문자열), 변경할 문자열을 담을 변수들 선언 - replace에 사용할 것*/
// let oldStr; //현재 문자열(교체하고 싶은 문자열)
// let newStr; //변경할 문자열

// while(a != b) { //a 문자열과 b 문자열이 다를 동안 반복. a와 b가 같아지면 반복문 종료
//     oldStr = a.slice(startA, endA); //slice로 a 문자열 한 덩어리를 추출하여 oldStr에 할당
//     newStr = b.slice(startB, endB) //slice로 b 문자열 한 덩어리를 추출하여 newStr에 할당

//     a = a.replace(oldStr, newStr); //a 문자열 덩어리를 b의 문자열 덩어리로 교체하여 a에 넣기
//     console.log("바뀐 결과:",a); //중간 확인용으로 콘솔창에 바뀐 결과 출력
    
//     startA = a.indexOf(' ', startA) + 1; //그 다음 문자열 덩어리 앞에 공백이 있으므로 공백 찾은 후 +1(공백은 포함하지 않을거니까)
//     //찾을 시작 위치를 startA로 해서 교체된 문자열 이후의 공백을 찾게 됨.
//     endA = a.indexOf(' ', startA); //그 다음 문자열 덩어리 시작 인덱스(startA가 가지고 있음)부터 공백 찾기

//     //위와 같은 방식으로 startB와 endB 값 바꾸기
//     startB = b.indexOf(' ', startB) + 1;
//     endB = b.indexOf(' ', startB);

//     //마지막 you! 부분에는 공백이 없어 -1이 반환됨. 이 경우 you!가 아닌 you 문자열만 추출이 되므로
//     //endA와 endB에 문자열 길이 값을 넣어줌. (마지막 인덱스 + 1은 문자열 길이와 같기 때문에) 
//     //이 부분은 없어도 결과는 제대로 출력됨.
//     if(endA == -1 && endB == -1) {
//         endA = a.length;
//         endB = b.length;
//     }
// }

// console.log(' '); //한 줄 건너띄기
// console.log("결과=", a); //b의 문자열 내용으로 바뀐 a 문자열 내용을 콘솔창에 출력

// let array = [1,2,3,4,5];

// for(let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

let sum = 0;
for(let i = 0; i <= 100; i++) {
    if(i % 7 == 0) {
        sum += i;
    }
}

console.log(sum);