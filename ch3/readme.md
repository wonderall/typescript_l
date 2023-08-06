# 타입의 모든 것
  `타입(type): 값과 이 값으로 할 수 있는 일의 집합`

타입을 통해 타입 검사기는 어떤 연산이 가능한지 안하는지를 판단할 수 있다.
---
### 간단한 타입 예제
```typescript
function squareOf(n: number){
  retun n * n
}
```

n을 number로 제한하며 다른 타입이 들어 올때 컴파일에서 에러를 발생해준다.
타입 어노테이션이 없으면 제한이 없으므로 아무 타입이나 인수로 전달받아 실행을 해야지만 에러를 확인할 수 있다.
이 예제에서 말하고자 하는 점은
> 타입스크립트란 특정 타입만 와야 할 때 이를 명시할 수 있는 언어'라는 점이다.
---
## 타입의 가나다
1. any
any는 어떤 타입이라도 허용한다. 마치 타입스크립트를 사용하지 않는 자바스크립트와 같다.
any는 꼭 필요한 경우가 아니면 사용을 지양한다.
any값을 발견하더라도 예외를 주고싶으면 tsconfig.json 파일에서 noImpliciAny플래그를 활성화 시켜주면 된다.
---
2. unknow
```typescript
let a: unknow =30 //unkonwn
let b = a === 123 // boolean
let c = a + 10 // error, 객체의 타입이 ' unknown'임
if(typeof a === 'number'){
  let d = a + 10 // number
}
```
  1. 타입스크립트가 무언가의 타입을 unknown이라고 추론하는 상황은 없다. unknown 타입을 사용하고자 한다면 명시적으로 설정해야 한다.
  2. unknown 타입이 아닌 값과 unknown 타입인 값을 비교할 수 있다.
  3. 하지만 unknown 값이 특정 타입이라ㅗㄱ 가정하고 해당 타입에서 지원하는 동작(연산)을 수행할 수는 없다. 먼저 타입스크릅트에게 해당 값이 타입임을 증명해야 한다(typeof연산자와 if문을 활용하여..)
  ---
3. boolean
true, false 두 개의 값을 갖는다. 이 타입은 비교 연산과 반전 연산을 할 수 있다. 
```typescript
let a = true //boolean
var b = false // boolean
const c = true // true
let d : boolean = true // boolean
let e : true = true // true
let f : true = false // error, true타입에 false 타입을 할당할 수 없음
```
    1. 어떤 값이 boolean인지 타입스크립트가 추론하게 한다(a,b)
    2. 어떤 값이 특정 boolean인지 타입스크립트가 추론하게 한다.(c)
    3. 값이 boolean임을 명시적으로타입스크립트에게 알린다(d)
    4. 값이 특정 boolean임을 명시적으로 타입스크립트에 알린다(e,f)

e,f에 사용할 수 있는 값은 boolean타입이 가질 수 있는 값 중 특정한 하나의 값으로 한정했다. 이 기능을 "타입 리터럴"이라고 부른다.
> 타입 리터럴 : 오직 하나의 값을 나타내는 타입

d에서 명시적으로 타입 리터럴을 설정했다. const을 사용하여 타입스크립트가 c을 boolean에서 true의 특정 값을 가진것으로 추론하게 하였다. 

타입 리터럴은 실수를 방지해 안정성을 추가로 확보해주는 타입스크립트의 강력한 기능이다. 다른 언어에는 없는 독특한 기능이다.
---
4. number
모든 숫자(정수, 소수, 양수, 음수, Infinity, Nan등)의 집합이다. 덧셈, 뺄셈, 모듈로, 비교 등의 숫자 관련 연산을수행할 수 있다. 
```typescript
let a = 1234 // number
let b = Infinity * 0.10 //number
const c = 5678 // 5678, 타입 리터럴
let d = a < b // boolean
let e : number = 100 // number
let f : 26.218 = 26.218 // 26.218
let g : 26.218 = 10  // error, 10 타입을 26.218 타입에 할당할 수 없음
```
    1. 타입스크립트 값이 number임을 추론하게 한다(a,b)
    2. const를 이용해 타입스크립트가 값이 특정 number임을 추론하게 한다.(c)
    3. 값이 number임을 명시적으로 알린다(e)
    4. 타입스크립트에 값이 특정 number임을 명시적으로 알린다(f,g)

상황에따라 number 타입이 특정 값으로 제한되도록 처리할 수 있다(c,f,g)

    긴 숫자를 처리할 때는 숫자 분리자를 이용해 숫자를 읽기 쉽게 만들 수 있다.

    let oneMillion = 1_000_000 // 1000000 동일
    let tow Million = 2_000_000  // 2000000 동일

---

5. bigint
number는 2^53까지의 정수를 표현할 수 있지만 bigint는 더 큰 수도 표현할 수 있다.
사용방법은 아래와 같다.
```typescript
let a = 1234n //bigint
const b = 5678n //5678n
var c = a + b // bigint
let d = a < 1235 // boolean
let e = 88.5n //error, 정수만 가능
let f : bigint = 100 n // bigint
let g : 100n = 100n // 100n
let h: bigint = 100 // error, 100 타입은 bigint타입에 할당할 수 없음
```
