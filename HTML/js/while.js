let level = 50;
let point = 0;

while(level >= 30) {
    console.log("레벨이 30이상입니다.");
    ++point;
    console.log(`획득한 토탈 포인트: ${point}`);

    if(level >= 50) {
        console.log("레벨이 50이상입니다.");
        ++point;
        console.log(`획득한 토탈 포인트: ${point}`);
    }
    // else if (level >= 80) {
    //     console.log("레벨이 80이상입니다.");
    //     ++point;
    //     console.log(`획득한 토탈 포인트: ${point}`);
    // }
    else {
        console.log("레벨이 30이상 50미만입니다.");
    }
    break;
}