# What is TypeScript?
- 변수, 파라미터, 함수의 반환 값에 타입을 지정해 안전하고 예측가능한 자바스크립트 프로그램을 가능하게 해주며, 자바스크립트의 장점을 그대로 유지하는게 가능 함

```typescript
let year : number = 2023;

function sumNumbers(firstNum : number, secondNum: number): number {
    return firstNum + secondNum ;
}
```

### 타입 추론
타입을 명시하지 않고 대입되는 값을 통해 타입을 추론이라고 함.

변수의 선언과 대입을 동시에 사용하여 타입 추론을 진행 함.
변수를 선언만 하고 동시에 대입을 하지 않으면 'any'타입으로 인식하게 되므로 동시를 사용하여 타입 추론을 사용하는게 좋음.
```typescript
// 타입 추론
let name = 'kim';

// 타입 추론이 아닌 경우
let name; // 타입 'any'로 지정 됨, 어느타입이 든 담을 수 있는 상태
name = 'kim';
name = 1234;
```