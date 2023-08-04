---
title: console.assert()
slug: Web/API/console/assert
---

{{APIRef("Console API")}}

**`console.assert()`** 메서드는 주어진 가정이 거짓인 경우 콘솔에 오류 메시지를 출력합니다. 참인 경우, 아무것도 하지 않습니다.

{{AvailableInWorkers}}

## 구문

```js
console.assert(assertion, obj1 [, obj2, ..., objN]);
console.assert(assertion, msg [, subst1, ..., substN]); // C-like message formatting
```

### 매개변수

- `assertion`
  - : 아무 불리언 표현식. 거짓인 경우, 메시지를 콘솔에 출력합니다.
- `obj1` ... `objN`
  - : 출력에 사용할 JavaScript 객체. 각각의 문자열 표현은 입력한 순서대로 함께 출력됩니다.
- `msg`
  - : 0개 이상의 치환 문자열을 포함하는 JavaScript 문자열.
- `subst1` ... `substN`
  - : `msg` 매개변수의 치환 문자열에 대입할 JavaScript 객체. 이 매개변수를 사용하면 출력 형식을 추가로 제어할 수 있습니다.

## 예제

다음 예제는 객체와 가정을 함께 사용하는 법을 보입니다.

```js
const errorMsg = "the # is not even";
for (let number = 2; number <= 5; number += 1) {
  console.log("the # is " + number);
  console.assert(number % 2 === 0, { number: number, errorMsg: errorMsg });
  // or, using ES2015 object property shorthand:
  // console.assert(number % 2 === 0, {number, errorMsg});
}
// output:
// the # is 2
// the # is 3
// Assertion failed: {number: 3, errorMsg: "the # is not even"}
// the # is 4
// the # is 5
// Assertion failed: {number: 5, errorMsg: "the # is not even"}
```

자세한 내용은 {{domxref("console")}} 문서의 [콘솔에 텍스트 출력하기](/ko/docs/Web/API/console#콘솔에_텍스트_출력하기)를 참고하세요.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
