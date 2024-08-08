/*
    디스트럭처링 : // 잘 알아둘 필요가 있음
    - 구조화된 배열 혹은 객체를 비구조화, 구조화 파괴하여 개별 변수로 할당하는 것
    - 배열 혹은 객체에서 필요한 데이터만 추출해서 변수로 사용할 수 있도록 함
*/

let fruits = ['apple', 'banana', 'cacao'];
// const fruit1 = fruits[0];
// const fruit2 = fruits[1];
// const fruit3 = fruits[2];

let king = {
    name: '이성계',
    tomb: '태조',
    birth: '1335-11-04'
};
// const name = king.name;
// const tomb = king.tomb;
// const birth = king.birth;

/*
    배열 디스트럭처링
    - 배열의 각각의 요소를 배열로부터 추출해서 변수에 할당
    - 할당 기준은 인덱스
*/

// 만약에 배열 디스트럭처링에 배열의 길이를 초과한 변수를 선언하면 초과한 범위에 해당하는 변수는 undefind가 지정됨
const [fruit1, fruit2, fruit3] =  fruits;
console.log(fruit1, fruit2, fruit3); // apple banana cacao

console.log('========================================');

/*
    spread 연산자를 활용
    - 배열 디스트럭처링 마지막에 스프레드 연산자를 사용하면 남은 모든 요소로 새로운 배열을 생성
*/
const [anotherFruit, ...othersFruits] = fruits;
console.log(anotherFruit, othersFruits); // apple [ 'banana', 'cacao' ]

// const [...othersFruits2, anotherFruit2 ] = fruits;

console.log('========================================');

/*
    객체 디스트럭처링
    - 객체의 각 속성을 객체로부터 추출하여 변수에 할당
    - 할당 기준은 키
*/
// king = {
//     name: '이성계',
//     tomb: '태조',
//     birth: '1335-11-04'
// };
// 객체 디스트럭처링에서는 변수의 순서는 상관없지만, 이름은 반드시 객체 키의 이름과 같아야함
// 키 이름과 다르게 사용하고 싶을 땐 '키:변수명' 을 사용
const { name, tomb, birth: birthday } = king;
console.log(name, tomb, birthday); // 이성계 태조 1335-11-04



console.log('========================================');

/*
    spread 연산자를 활용
    - 객체 디스트럭처링 마지막에 스프레드 연산자를 사용하면 나머지 모든 속성을 묶어서 새로운 객체를 생성
*/
const { birth, ...reftKing } = king;
console.log(birth); // 1335-11-04
console.log(reftKing); // { name: '이성계', tomb: '태조' }


console.log('========================================');