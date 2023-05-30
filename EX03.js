/*
3. 다음 if문과 똑같이 출력되는 switch문 코드를 작성하시오
let weather = 'sunny';
if(weather == 'windy') {
    console.log('오늘은 바람이 많이 분다.');
}
else if(weather == 'rainy') {
    console.log('오늘은 비가 온다.');
}
else if(weather == 'sunny') {
    console.log('오늘은 날씨가 좋다.');
}
else {
    console.log('오늘의 날씨는 어떤가요?');
}
*/

let weather = 'snow';

switch(weather) {
    case 'windy':
        console.log('오늘은 바람이 많이 분다.');
        break;
    case 'rainy':
        console.log('오늘은 비가 온다.');
        break;
    case 'sunny':
        console.log('오늘은 날씨가 좋다.');
        break;
    default:
        console.log('오늘의 날씨는 어떤가요?');
}

//문제풀이

let a_weather = 'sunny';
switch(a_weather) {
    case 'windy':
        console.log('오늘은 바람이 많이 분다.');
        break;
    case 'rainy':
        console.log('오늘은 비가 온다.');
        break; //break가 없으면 밑으로 계속 내려가므로 주의해서 사용
    case 'sunny':
        console.log('오늘은 날씨가 좋다');
        break;
    default:
        console.log('오늘의 날씨는 어떤가요?');
}