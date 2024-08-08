/*
    매개변수 기본값 : 
    - 함수 호출시 매개변수를 전달하지 않으면 사용할 기본값을 지정할 수 있음
*/
const add = (a = 5, b = 10) => a + b;
console.log( add() ); // 15
console.log( add(50, 99) ); // 149

console.log('========================================');

/*
    rest 매개변수 : 
    - 함수 선언시 매개변수 앞에 ...을 붙여서 정의한 매개변수
    - 함수에 전달받은 매개변수의 배열을 전달받음
    - 다른 매개변수와 같이 rest 매개변수를 사용할 땐 rest 매개변수를 제일 마지막에 선언해야함
*/
const restFunction = (...arg) => {
    console.log(arg); // [ 1, 2, 3, 4, 5 ]
};
restFunction(1, 2, 3, 4, 5);

const restFunction2 = (arg1, ...args) => { // 왠만하면 사용하지 않는 것이 좋음
    console.log(arg1); // 1
    console.log(args); // [ 2, 4, 5, 7, 8 ]
};
restFunction2(1, 2, 4, 5, 7, 8);

console.log('========================================');

/*
    spread 연산자 : // 굉장히 유용하고 편리함
    - ...을 사용하여 대상의 요소를 하나씩 분리
    - 연산자의 피연산자는 반드시 반복 가능한 객체(배열, 객체, 문자열, ...) 이어야 함
*/
const numbers = [1, 2, 3, 4];
console.log(numbers); // [ 1, 2, 3, 4 ]
console.log(...numbers); // 1 2 3 4

console.log('========================================');

// 배열 복사에 사용
const newNumbers = [...numbers]; // = [ 1, 2, 3, 4 ]
console.log(newNumbers); // [ 1, 2, 3, 4 ]

newNumbers[0] = 20;
console.log(numbers); // [ 1, 2, 3, 4 ]
console.log(newNumbers); // [ 20, 2, 3, 4 ]

console.log('========================================');

// 배열 연결에 사용
const numbers2 = [5, 6, 7, 8];
let newNumbers2 = [...numbers, ...numbers2]; // = [ 1, 2, 3, 4, 5, 6, 7, 8 ]
console.log(newNumbers2); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
newNumbers2 = [ ...numbers2, ...numbers ]; // = [ 5, 6, 7, 8, 1, 2, 3, 4 ]
console.log(newNumbers2); // [ 5, 6, 7, 8, 1, 2, 3, 4 ]

console.log('========================================');

// 배열 요소 추가에 사용
newNumbers2 = [ ...newNumbers2, 9, 10 ];
console.log(newNumbers2); // [ 5, 6, 7, 8, 1, 2, 3, 4, 9, 10 ]

console.log('========================================');

// 객체 복사, 연결, 요소 추가에 사용
const king = {
    name: '이성계',
    tombName: '태조'
};

let newKing = { ...king };
newKing.name = '이방과';
console.log(king); // { name: '이성계', tombName: '태조' }
console.log(newKing); // { name: '이방과', tombName: '태조' }

const kingInfo = {
    address: '서울특별시',
    country: '고려'
};

newKing = { ...king, ...kingInfo };
console.log(newKing); // { name: '이성계', tombName: '태조', address: '서울특별시', country: '고려' }
newKing = { ...kingInfo, ...king };
console.log(newKing); // { address: '서울특별시', country: '고려', name: '이성계', tombName: '태조' }

newKing = { ...king, birth: '1335-11-04'};
console.log(newKing); // { name: '이성계', tombName: '태조', birth: '1335-11-04' }

newKing = { ...king, name: '이단', birth: '1335-11-04'};
console.log(newKing); // name: { '이단', tombName: '태조', birth: '1335-11-04' }
newKing = { name: '이단', ...king, birth: '1335-11-04'};
console.log(newKing); // { name: '이성계', tombName: '태조', birth: '1335-11-04' } // 순서가 중요