---
title: String.prototype.trimStart()
slug: Web/JavaScript/Reference/Global_Objects/String/trimStart
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

{{jsxref("String")}} 값의 **`trimStart()`** 메서드는 이 문자열 시작 부분의 공백을 제거하고 기존 문자열의 수정 없이 새로운 문자열을 반환합니다. `trimLeft()`는 이 메서드의 별칭입니다.

{{InteractiveExample("JavaScript Demo: String.trimStart()")}}

```js interactive-example
const greeting = "   Hello world!   ";

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trimStart());
// Expected output: "Hello world!   ";
```

## 구문

```js-nolint
trimStart()

trimLeft()
```

### 매개변수

없음.

### 반환 값

시작 부분(왼쪽)에서 공백이 제거된 `str`을 나타내는 새 문자열입니다. 공백은 [공백](/ko/docs/Web/JavaScript/Reference/Lexical_grammar#white_space) 문자에 [줄 종결자](/ko/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators)를 더한 값으로 정의됩니다.

`str`의 시작 부분에 공백이 없는 경우도 새 문자열이 반환됩니다(기본적으로 `str`의 복사본입니다).

### 별칭

{{jsxref("String/trim", "trim()")}}가 표준화된 후, 엔진은 비표준 메서드인 `trimLeft`도 구현했습니다. 그러나 {{jsxref("String/padStart", "padStart()")}}와의 일관성을 위해 이 메서드가 표준화되었을 때 그 이름은 `trimStart`로 선택되었습니다. 웹 호환성을 위해 `trimLeft`는 `trimStart`의 별칭으로 남아 있으며, 완전히 동일한 함수 객체를 참조합니다. 일부 엔진에서는 이것이 의미하는 바가 있습니다.

```js
String.prototype.trimLeft.name === "trimStart";
```

## 예제

### trimStart() 사용하기

다음 예제는 `str`의 시작부에 있는 공백을 제거하지만, 마지막의 공백은 제거하지 않습니다.

```js
let str = "   foo  ";

console.log(str.length); // 8

str = str.trimStart();
console.log(str.length); // 5
console.log(str); // 'foo  '
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서의 `String.prototype.trimStart` 폴리필](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.trim()")}}
- {{jsxref("String.prototype.trimEnd()")}}
