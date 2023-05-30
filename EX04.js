/*
4. A라는 가게는 아래의 물건을 판다. window.prompt()를 이용하여
prompt창에 가게에서 파는 물건을 입력할 경우 물건의 가격이, 팔지 않는 물건을 입력할 경우에는
팔지 않는다는 문구가 출력되도록 코드를 작성하시오
cola: 2000원
beer: 4000원
milk: 3000원
coffee: 1000원
예시: 콜라는 2000원입니다. /(입력한 물건)은 팔지 않습니다.
*/

// let cola = 2000, beer = 4000, milk = 3000, coffee = 1000;

// let menu = window.prompt("무엇을 구매하시겠습니까?\n cola / beer/ milk / coffee ");

// //switch문을 이용한 프로그램
// switch(menu) {
//     case 'cola':
//         console.log(`콜라는 ${cola}원입니다.`);
//         break;
//     case 'beer':
//         console.log(`맥주는 ${beer}원입니다.`);
//         break;
//     case 'milk':
//         console.log(`우유는 ${milk}원입니다.`);
//         break;
//     case 'coffee':
//         console.log(`커피는 ${coffee}원입니다.`);
//         break;
//     default:
//         console.log(`${menu}는 팔지 않습니다.`);
// }

//문제풀이
let product = window.prompt('구매할 상품을 입력하시오. \n cola는 2천원, beer는 4천원, mlik는 3천원, coffee는 천원입니다.');
let price;
switch(product) { //console.log를 남발하지 않고 이렇게 깔끔하게 하는 방법도 있다.
    case 'cola':
        price = 2000;
    case 'beer':
        price = 4000;
    case 'milk':
        price = 3000;
    case 'coffee':
        price = 1000;
    console.log(`${product}는 ${price}원입니다.`);
    break;
    default:
        console.log(`${product}는 팔지 않습니다.`);
}

//cola로 입력해도 되고 콜라라고 입력해도 되게 프로그램 짜보기(if-else if 사용)
// if(menu == 'cola' || menu == '콜라') {
//     console.log(`콜라는 ${cola}원입니다.`);
// }
// else if(menu == 'beer' || menu == '맥주') {
//     console.log(`맥주는 ${beer}원입니다.`);
// }
// else if(menu == 'milk' || menu == '우유') {
//     console.log(`우유는 ${milk}원입니다.`);
// }
// else if(menu == 'coffee' || menu == '커피') {
//     console.log(`커피는 ${coffee}원입니다.`);
// }
// else {
//     console.log(`${menu}는 팔지 않습니다.`);
// }