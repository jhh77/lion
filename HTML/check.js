//변수 
let order = document.getElementById("order"); //주문하기 버튼 order 변수에 저장
let food = document.getElementsByName("food"); //name이 food인 checkbox들 food 변수에 저장(배열)
let membership; //회원등급 변수
let vvip = 1500; let vip = 1000; let gold = 500; //등급별 할인 금액 변수와 값 할당. silver 등급은 할인 금액 없음.

let startOrder = function () { //주문하기 버튼 눌렀을 때 작동하는 함수 - 결제하기 함수

    let orderPrice = 0; //주문 금액 변수 
    let totalPrice = 0; //총 금액 변수(할인 적용 후 값)

    for(let i=0; i < food.length; i++) { //name이 food인 checkbox들의 길이만큼 반복
        if(food[i].checked == true) { //i번째 인덱스의 체크여부 확인. 체크되어있다면
            let price = parseInt(food[i].value); //price라는 변수에 i번째 인덱스의 value를 정수로 바꿔 저장
            orderPrice += price; //정수로 바꾼 price 변수 값을 주문금액 변수인 orderPrice에 더함
        }
    } //for문 끝

    //주문 확인창 띄우기
    let yesNo = confirm(`총 주문하신 금액은 ${orderPrice}입니다. \n주문하시겠습니까?`); 

    if(yesNo === true) { //만약 주문확인 창에서 '확인'을 눌렀다면,
        //회원등급을 물어보기 창 띄우고 membership 변수에 저장
        membership = window.prompt("회원등급을 말씀해주세요\n VVIP / VIP / GOLD / SILVER"); 
    }
    else { //'취소'를 눌렀다면,
        alert("주문을 취소하셨습니다.") //"주문을 취소하셨습니다." 라는 경고창을 띄움
    }

    
    //회원등급별 할인금액 적용 while문
    //등급을 제대로 입력하지 않을 시 다시 물어보도록 설정. 제대로 입력한 경우 다음으로 넘어감.
    while(membership != 'VVIP' && membership != 'VIP' && membership != 'GOLD' && membership != 'SILVER') {

        membership = membership.toUpperCase(); //회원등급 변수의 값을 대문자로 바꿈.


        //총 금액(할인 금액 적용 후 값) 구하기 switch문
        switch(membership) { 
            case 'VVIP': //vvip면 vvip 할인금액 빼고 totalPrice에 저장
                totalPrice = orderPrice - vvip;
                break;
            case 'VIP': //vip면 vip 할인금액 빼고 totalPrice에 저장
                totalPrice = orderPrice - vip;
                break;
            case 'GOLD': //gold면 gold 할인금액 빼고 totalPrice에 저장
                totalPrice = orderPrice - gold;
                break;
            case 'SILVER': //silver면 할인금액 없으므로 주문 금액을 totalPrice에 저장
                totalPrice = orderPrice;
                break;
            default: //만약 등급을 잘못 입력할 경우 다시 창을 띄움
                membership = window.prompt("잘못 입력하셨습니다.\n다시 회원등급을 말씀해주세요\n VVIP / VIP / GOLD / SILVER");
        }

    }

    //결제 확인창 - 주문금액, 할인금액, 총 금액을 알리고 결제하겠냐는 창을 띄움.
    let pay = confirm(`주문하신 금액: ${orderPrice}\n 할인받은 금액: ${orderPrice-totalPrice}\n 총 금액: ${totalPrice}\n 
    결제하시겠습니까?`);

  
    if(pay === true) { //결제 확인창에서 '확인'을 누르면,
        alert("결제가 완료되었습니다."); //"결제가 완료되었습니다." 창 띄우기
    }
    else { //결제 확인창에서 '취소'를 누르면,
        alert("결제를 취소하셨습니다."); //"결제를 취소하셨습니다." 창 띄우기
    }
    

}


//주문하기 버튼 이벤트 
order.addEventListener("click", startOrder); //주문하기 버튼을 클릭하면 startOrder(결제하기 함수)를 실행시킴