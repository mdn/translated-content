---
title: String.prototype.search()
slug: Web/JavaScript/Reference/Global_Objects/String/search
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

{{jsxref("String")}} 값의 **`search()`** 메서드는 정규식과 이 문자열 간에 일치하는 항목이 있는지 검색하여
문자열에서 첫 번째로 일치하는 항목의 인덱스를 반환합니다.

{{InteractiveExample("JavaScript Demo: String.search()")}}

```js interactive-example
const paragraph = "I think Ruth's dog is cuter than your dog!";

// Anything not a word character, whitespace or apostrophe
const regex = /[^\w\s']/g;

console.log(paragraph.search(regex));
// Expected output: 41

console.log(paragraph[paragraph.search(regex)]);
// Expected output: "!"
```

## 구문

```js-nolint
search(regexp)
```

### 매개변수

- `regexp`
  - : 정규식 객체 또는 [`Symbol.search`](/ko/docs/Web/JavaScript/Rference/Global_Objects/Symbol/search) 메서드가 있는 모든 객체입니다.

    `regexp`가 `RegExp` 객체가 아니고 `Symbol.search` 메서드가 없는 경우, `new RegExp(regexp)`를 사용하여 암시적으로 {{jsxref("RegExp")}}로 변환됩니다.

### 반환 값

정규 표현식과 주어진 문자열이 처음 일치하는 인덱스(일치하는 항목이 없는 경우 `-1`)입니다.

## 설명

`String.prototype.search()`의 구현 자체는 매우 간단합니다. 그저 단순히 문자열을 첫 번째 매개변수로 하여 인수의 `Symbol.search` 메서드를 호출합니다. 실제 구현은 [`RegExp.prototype[@@search]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@search)에서 가져옵니다.

`regexp`의 `g` 플래그는 `search()` 결과에 아무런 영향을 미치지 않으며, 검색은 항상 정규식의 `lastIndex`가 0인 것처럼 수행됩니다. `search()`의 동작에 대한 자세한 내용은 [`RegExp.prototype[@@search]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@search)를 참조하세요.

패턴이 발견되었는지 여부와 문자열 내에서 해당 패턴의 인덱스를 알고 싶을 때는 `search()`를 사용합니다.

- 패턴의 존재 여부만 알고 싶다면 부울을 반환하는 {{jsxref("RegExp.prototype.test()")}} 메서드를 사용하세요.
- 일치하는 텍스트의 내용이 필요한 경우 {{jsxref("String.prototype.match()")}} 또는 {{jsxref("RegExp.prototype.exec()")}}를 사용합니다.

## 예제

### search() 사용하기

다음 예제는 서로 다른 두 개의 정규식 객체가 있는 문자열을 검색하여 검색 성공(양수 값)과 검색 실패(`-1`)를 표시하는 예제입니다.

```js
const str = "hey JudE";
const re = /[A-Z]/;
const reDot = /[.]/;
console.log(str.search(re)); // 첫 대문자 "J"의 인덱스인 4를 반환합니다.
console.log(str.search(reDot)); // '.' 을 찾을 수 없어서 -1을 반환합니다.
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `String.prototype.search` in `core-js` with fixes and implementation of modern behavior like `Symbol.search` support](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [정규 표현식](/ko/docs/Web/JavaScript/Guide/Regular_expressions) 가이드
- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- [`RegExp.prototype[@@search]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@search)
