/**
 * 이벤트(evnet)
 * 
 * 폼 이벤트
 * -제출, 초기화 
 * 
 * 마우스 이벤트
 * -클릭, 더블클릭, 마우스이동
 * 
 * 키보드 이벤트
 * -keydown(누를 때), keypress(문자), keyup(떨어질 때)
 * 
 * on + 이벤트 타입 (onclick 같은)
 */

var el = document.getElementById('brand-title');

var myfunc = function () {
    alert('addEventListener');
};

//click하면 이 함수를 실행해라! (click하면 myfunc을 실행해라!)
el.addEventListener("click", myfunc); //addEventListener의 인자로 이벤트와 함수이름을 써야한다.