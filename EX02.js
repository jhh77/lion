//2. for문을 사용하여 다음과 같이 출력되는 코드를 작성하시오
/*
1 2
1 4
1 6
3 2
3 4
3 6
*/

for(let i = 1; i <= 3; i++) {
    if(i == 2) {
        continue;
    }
    for(let j = 2; j <= 6; j += 2) {
        console.log(i, j);
    }
}

//문제풀이
for(let i = 1; i < 4; i += 2) { //증감식을 활용해도 됨. 
    for(let j = 2; j < 7; j += 2) {
        console.log(i, j);
    }
}