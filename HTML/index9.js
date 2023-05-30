//멋사 스터디 미션 답안 코드

const rapClass = {
    seungcheol: {
        birth: '1995-08-08',
        age: 29
    },

    wonwoo: {
        birth: '1996-07-17',
        age: 28
    }
};

const vocalClass = {
    sk: { // : 대신 =를 넣으면 오류다!
        birth: '1998-01-16',
        age: 26
    },
    dk: {
        birth: '1997-02-18',
        age: 27
    }
};

const danceClass = {
    dino: {
        birth: '1999-02-11',
        age: 25
    },

    hosi: {
        birth: '1996-06-16',
        age: 28
    }
};

console.log(rapClass.wonwoo.birth);

console.log(vocalClass.dk.age);

//2. 버논 추가
vernonBirth = window.prompt('버논의 생년월일:');
vernonAge = window.prompt('버논의 나이');

//console.log(typeof vernonAge); //프롬프트 창으로 받으면 문자열로 반환된다.

vernonAge = parseInt(vernonAge); //number 타입으로 바꾸기 위해
console.log(typeof vernonAge); //number 타입

rapClass.vernon = {birth: vernonBirth, age: vernonAge};
console.log(vernonBirth, vernonAge);

//다른 방법
//rapClass.vernon = {birth: '1999-02-18', age: 26};
//console.log(rapClass.vernon.birth, rapClass.vernon.age);
