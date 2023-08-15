---
title: 호이스팅
slug: Glossary/Hoisting
---

JavaScript에서 **호이스팅**(hoisting)이란, 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것을 의미합니다. `var`로 선언한 변수의 경우 호이스팅 시 `undefined`로 변수를 초기화합니다. 반면 `let`과 `const`로 선언한 변수의 경우 호이스팅 시 변수를 초기화하지 않습니다.

호이스팅을 설명할 땐 주로 "변수의 선언과 초기화를 분리한 후, 선언만 코드의 최상단으로 옮기는" 것으로 말하곤 합니다. 따라서 변수를 정의하는 코드보다 사용하는 코드가 앞서 등장할 수 있습니다. 다만 선언과 초기화를 함께 수행하는 경우, 선언 코드까지 실행해야 변수가 초기화된 상태가 됨을 주의하세요.

> **참고:** 호이스팅은 (`let`과 `const`를 포함한) [ECMAScript® 2015 언어 명세](https://www.ecma-international.org/ecma-262/6.0/index.html) 이전의 표준 명세에는 나타나지 않았습니다. 당시에는 호이스팅이 JavaScript에서 실행 맥락, 특히 생성 및 실행 단계의 동작 방식을 설명하는 일반적인 방법이었습니다.

## 기술 예제

JavaScript는 함수의 코드를 실행하기 전에 함수 선언에 대한 메모리부터 할당합니다. 덕분에 함수를 호출하는 코드를 함수 선언보다 앞서 배치할 수 있습니다. 예를 들어,

```js
function catName(name) {
  console.log("제 고양이의 이름은 " + name + "입니다");
}

catName("호랑이");

/*
결과: "제 고양이의 이름은 호랑이입니다"
*/
```

위의 코드 조각이 일반적으로 코드를 작성하는 순서라면, 함수를 선언하기 전에 먼저 호출했을 때의 예제도 보겠습니다.

```js
catName("클로이");

function catName(name) {
  console.log("제 고양이의 이름은 " + name + "입니다");
}

/*
결과: "제 고양이의 이름은 클로이입니다"
*/
```

함수 호출이 함수 자체보다 앞서 존재하지만, 그럼에도 불구하고 이 코드 역시 동작합니다. 이것이 JavaScript에서 실행 맥락이 동작하는 방식입니다.

호이스팅은 다른 자료형과 변수에도 잘 작동합니다. 변수를 선언하기 전에 먼저 초기화하고 사용할 수 있는 것입니다.

### 선언만 호이스팅 대상

JavaScript는 초기화를 제외한 선언만 호이스팅합니다. 변수를 먼저 사용하고 그 후에 선언 및 초기화가 나타나면, 사용하는 시점의 변수는 기본 초기화 상태(`var` 선언 시 `undefined`, 그 외에는 초기화하지 않음)입니다. 예를 들어,

```js
console.log(num); // 호이스팅한 var 선언으로 인해 undefined 출력
var num; // 선언
num = 6; // 초기화
```

반면, 다음 예제는 선언 없이 초기화만 존재합니다. 따라서 호이스팅도 없고, 변수를 읽으려는 시도에서는 `ReferenceError` 예외가 발생합니다.

```js
console.log(num); // ReferenceError
num = 6; // 초기화
```

다음은 호이스팅을 보이는 더 많은 예제입니다.

```js
// 예제 1
// y만 호이스팅 대상

x = 1; // x 초기화. x를 선언하지 않은 경우 선언. 그러나 명령문에 var가 없으므로 호이스팅이 발생하지 않음
console.log(x + " " + y); // '1 undefined'
// JavaScript는 선언만 호이스팅하므로, 윗줄의 y는 undefined
var y = 2; // y를 선언하고 초기화

// 예제 2
// 호이스팅은 없지만, 변수 초기화는 (아직 하지 않은 경우) 변수 선언까지 병행하므로 변수를 사용할 수 있음

a = "크랜"; // a 초기화
b = "베리"; // b 초기화

console.log(a + "" + b); // '크랜베리'
```

### let과 const 호이스팅

`let`과 `const`로 선언한 변수도 호이스팅 대상이지만, `var`와 달리 호이스팅 시 `undefined`로 변수를 초기화하지는 않습니다. 따라서 변수의 초기화를 수행하기 전에 읽는 코드가 먼저 나타나면 예외가 발생합니다.

더 많은 정보는 [`let` 문서의 "시간상 사각지대"](/ko/docs/Web/JavaScript/Reference/Statements/let#시간상_사각지대)를 참고하세요.

### 같이 보기

- [`var` 명령문](/ko/docs/Web/JavaScript/Reference/Statements/var) — MDN
- [`function` 명령문](/ko/docs/Web/JavaScript/Reference/Statements/function) — MDN
