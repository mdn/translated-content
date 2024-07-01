---
title: String.prototype.endsWith()
slug: Web/JavaScript/Reference/Global_Objects/String/endsWith
---

{{JSRef}}

The **`endsWith()`** 메서드를 사용하여 어떤 문자열에서 특정 문자열로 끝나는지를 확인할 수 있으며, 그 결과를 `true` 혹은 `false`로 반환한다.

## 문법

```js
str.endsWith(searchString[, length])
```

### 파라미터들

- `searchString`
  - : 이 문자열의 끝이 특정 문자열로 끝나는지를 찾기 원하는 문자열입니다.
- `length`
  - : 옵션입니다. 찾고자 하는 문자열의 길이값이며, 기본값은 문자열 전체 길이입니다. 문자열의 길이값은 문자열 전체 길이 안에서만 존재하여야 합니다.

### 반환 값

문자열의 끝이 주어진 문자열로 끝나면 **`true`**, 그렇지 않다면 **`false`**

## 설명

여러분은 이 메서드를 사용하여 어떤 문자열이 특정 문자열로 끝나는지를 확인할 수 있습니다.

## 예제

### `endsWith()` 사용하기

```js
var str = "To be, or not to be, that is the question.";

console.log(str.endsWith("question.")); // true
console.log(str.endsWith("to be")); // false
console.log(str.endsWith("to be", 19)); // true
```

## Polyfill

이 메서드는 ECMAScript 6 규격에 포함되었습니다만 아직까지는 모든 JavaScrpt가 이 기능을 지원하고 있지는 않습니다. 하지만 여러분은 `String.prototype.endsWith()` 메서드를 다음과 같이 쉽게 [polyfill](https://en.wikipedia.org/wiki/Polyfill) 할 수 있습니다:

```js
if (!String.prototype.endsWith) {
  String.prototype.endsWith = function (searchString, position) {
    var subjectString = this.toString();
    if (
      typeof position !== "number" ||
      !isFinite(position) ||
      Math.floor(position) !== position ||
      position > subjectString.length
    ) {
      position = subjectString.length;
    }
    position -= searchString.length;
    var lastIndex = subjectString.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 관련문서

- {{jsxref("String.prototype.startsWith()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
