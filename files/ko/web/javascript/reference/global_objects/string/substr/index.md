---
title: String.prototype.substr()
slug: Web/JavaScript/Reference/Global_Objects/String/substr
---

{{JSRef}}

> **경고:** 경고: 엄밀히 말해서 `String.prototype.substr()` 메서드가 더 이상 사용되지 않는, 즉 "웹 표준에서 제거된" 건 아닙니다. 그러나 `substr()`이 포함된 ECMA-262 표준의 [부록 B](https://www.ecma-international.org/ecma-262/9.0/index.html#sec-additional-ecmascript-features-for-web-browsers)는 다음과 같이 명시하고 있습니다.> … 본 부록이 포함한 모든 언어 기능과 행동은 하나 이상의 바람직하지 않은 특징을 갖고 있으며 사용처가 없어질 경우 명세에서 제거될 것입니다. …
>
> > … 프로그래머는 새로운 ECMAScript 코드를 작성할 때 본 부록이 포함한 기능을 사용하거나 존재함을 가정해선 안됩니다. …

**`substr()`** 메서드는 문자열에서 특정 위치에서 시작하여 특정 문자 수 만큼의 문자들을 반환합니다.

{{EmbedInteractiveExample("pages/js/string-substr.html")}}

## 구문

```js
str.substr(start[, length])
```

### 매개변수

- `start`
  - : 추출하고자 하는 문자들의 시작위치입니다. 만약 음수가 주어진다면, `문자열총길이 + start`의 값으로 취급합니다. 예를 들면, `start`에 -3을 설정하면, 자동적으로 `문자열총길이 - 3`으로 설정하게 됩니다.
- `length`
  - : 옵션값. 추출할 문자들의 총 숫자.

## 설명

`start` 는 문자 인덱스입니다. 문자열에서 첫 번째 문자의 인덱스는 0이며, 마지막 문자의 인덱스는 문자열 전체 길이에서 1을 뺀 값입니다. `substr()` 는 `start` 에서 문자들을 추출을 시작하여 `length` 만큼 문자들을 수집합니다.

만약 `start` 값이 양수이고 문자열 전체 길이보다 크거가 같을 경우, `substr()`은 빈 문자열을 반환합니다.

만약 `start`가 음수이면, `substr()`은 문자열 끝에서 `start` 숫자만큼 뺀 곳에서 시작하게 됩니다. 만약 `start`가 음수이고 절대값이 문자열 전체보다 크다면, `substr()`은 문자열의 0 인덱스부터 시작하게 됩니다. (주의: `start`의 음수값은 Microsoft JScript에서는 위의 설명과 같이 동작하지 않습니다.)

만약 `length`가 0 혹은 음수이면, `substr()`은 빈 문자열을 반환합니다. 만약 `length`가 생략되면, `substr()`은 문자열의 끝까지 추출하여 반환합니다.

## 예제

### `substr()` 사용하기

```js
var str = "abcdefghij";

console.log("(1, 2): " + str.substr(1, 2)); // '(1, 2): bc'
console.log("(-3, 2): " + str.substr(-3, 2)); // '(-3, 2): hi'
console.log("(-3): " + str.substr(-3)); // '(-3): hij'
console.log("(1): " + str.substr(1)); // '(1): bcdefghij'
console.log("(-20, 2): " + str.substr(-20, 2)); // '(-20, 2): ab'
console.log("(20, 2): " + str.substr(20, 2)); // '(20, 2): '
```

## 폴리필

Microsoft의 JScript는 시작 인덱스에서 음수값을 지원하지 않습니다. 만약 여러분이 이렇게 동작하길 원한다면, 아래 코드를 사용하여 해결할 수 있습니다:

```js
// only run when the substr() function is broken
if ("ab".substr(-1) != "b") {
  /**
   *  Get the substring of a string
   *  @param  {integer}  start   where to start the substring
   *  @param  {integer}  length  how many characters to return
   *  @return {string}
   */
  String.prototype.substr = (function (substr) {
    return function (start, length) {
      // call the original method
      return substr.call(
        this,
        // did we get a negative start, calculate how much it is from the beginning of the string
        // adjust the start parameter for negative value
        start < 0 ? this.length + start : start,
        length,
      );
    };
  })(String.prototype.substr);
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("String.prototype.slice()")}}
- {{jsxref("String.prototype.substring()")}}
