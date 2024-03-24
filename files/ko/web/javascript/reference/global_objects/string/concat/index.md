---
title: String.prototype.concat()
slug: Web/JavaScript/Reference/Global_Objects/String/concat
---

{{JSRef}}

**`concat()`** 메서드는 매개변수로 전달된 모든 문자열을 호출 문자열에 붙인 새로운 문자열을 반환합니다.

{{EmbedInteractiveExample("pages/js/string-concat.html")}}

## 구문

```js
str.concat(string2, string3[, ..., stringN])
```

### 매개변수

- `string2...stringN`
  - : 합칠 문자열.

### 반환값

주어진 문자열을 모두 붙인 새로운 문자열.

## 설명

`concat()` 함수는 호출 문자열에 문자열 인수를 이어 붙인 결과를 반환합니다. 원본 문자열과 결과 문자열의 변형은 서로에게 영향을 미치지 않습니다. 인수가 문자열이 아니면 계산 전에 문자열로 변환합니다.

## 예제

### `concat()` 사용하기

아래 예제에서는 문자열을 결합하여 새로운 문자열을 만듭니다.

```js
var hello = "Hello, ";
console.log(hello.concat("Kevin", ". Have a nice day."));
/* Hello, Kevin. Have a nice day. */

var greetList = ["Hello", " ", "Venkat", "!"];
"".concat(...greetList); // "Hello Venkat!"

"".concat({}); // [object Object]
"".concat([]); // ""
"".concat(null); // "null"
"".concat(true); // "true"
"".concat(4, 5); // "45"
```

## 성능

`concat()` 메서드보다 {{jsxref("Operators/Assignment_Operators", "할당 연산자", "", 1)}} (`+`, `+=`)를 사용하는게 더 좋습니다. [성능 테스트](https://web.archive.org/web/20170404182053/https://jsperf.com/concat-vs-plus-vs-join) 결과에 따르면 할당 연산자의 속도가 몇 배 빠릅니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 관련문서

- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Operators/Assignment_Operators", "Assignment operators", "", 1)}}
