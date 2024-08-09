/*
    클래스 정의 :
    - 속성 및 기능의 집합을 정의
*/
class Sample1 {
    field: string;

    constructor (field:string) {
        this.field = field;
    }

    method (arg:string): void {

    }
}


console.log('==================================================');

/*
    접근제어자
    - public: 클래스 내부, 자식 클래스 내부, 모든 위치
    - protected : 클래스 내부, 자식 클래스
    - private: 클래스 내부
    - TypeScript는 패키지라는 개념이 없기 때문에 기본값은 public으로 지정
*/
class Sample2 {
    public publicField: string;
    protected protectedField: string;
    private privateField: string;

    constructor() {
        this.publicField = '퍼블릭';
        this.protectedField = '프로텍티드';
        this.privateField = '프라이빗';
    }
}
const Sample2Instance = new Sample2();
Sample2Instance.publicField;
// Sample2Instance.protectedField; // 불가능
// Sample2Instance.privateField; // 불가능
console.log('==================================================');

/*
    생성자 매개변수에 접근 제어자 지정
    - 생성자의 매개변수에 접근 제어자를 지정해서 필드 선언 가능
*/
class Sample3 {

    constructor (
        public publicField: string,
        protected protectedField: string,
        private privateField: string,
        localVariable: string // 접근 제어자를 붙이지 않으면 그냥 매개변수이다
    ) {}
}


console.log('==================================================');

/*
    readonly :
    - readonly가 선언된 클래스 속성은 선언 시 또는 생성자 내부에서만 값을 할당할 수 있음
    - 값을 재할당할 수 없고 오직 읽기만 가능
    - 상수 선언에 사용
*/
class Sample4 {

    public readonly field1: string = '읽기전용 1';
    public readonly field2: string;

    constructor(
        field2: string,
        public readonly field3: string
    ) {
        this.field2 = field2;
    }

    // setMethod () {
    //     this.field1 = '변경'; // 불가능
    // }
}

const sample4Instance = new Sample4('읽기전용 2', '읽기전용 3');
console.log(sample4Instance); // Sample4 { field3: '읽기전용 3', field1: '읽기전용 1', field2: '읽기전용 2' }
// sample4Instance.field1 = '변경'; // 불가능, 읽기전용이기 때문에
console.log('==================================================');

/*
    추상 클래스 :
    - 하나 이상의 추상 메서드를 포함하는 클래스, abstract 키워드로 선언
*/
abstract class AbstractClass {
    abstract abstractMethod (arg: string): void;
}

class SubClass extends AbstractClass {

    abstractMethod(arg: string): void {
        
    }
}

console.log('==================================================');