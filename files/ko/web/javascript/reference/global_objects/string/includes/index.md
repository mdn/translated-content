---
title: String.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/String/includes
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/includes
---
{{JSRef}}

**`includes()`** 메서드는 하나의 문자열이 다른 문자열에 포함되어 있는지를 판별하고, 결과를 `true` 또는 `false` 로 반환합니다.

{{EmbedInteractiveExample("pages/js/string-includes.html")}}

## 구문

```js
str.includes(searchString[, position])
```

### 매개변수

- `searchString`
  - : 이 문자열에서 찾을 다른 문자열.
- `position` {{optional_inline}}
  - : `searchString`을 찾기 시작할 위치. 기본값 0.

### 반환값

문자열을 찾아내면 `true`. 실패하면 `false`.

## 설명

`includes()` 메서드를 사용해 문자열 내에 찾고자 하는 다른 문자열이 있는지 확인할 수 있습니다.

### 대소문자 구분

`includes()` 메서드는 대소문자를 구별합니다. 예를 들어 아래 코드는 `false`를 반환합니다.

```js
'Blue Whale'.includes('blue'); // returns false
```

## 예제

### `includes()` 사용하기

```js
var str = 'To be, or not to be, that is the question.';

console.log(str.includes('To be'));       // true
console.log(str.includes('question'));    // true
console.log(str.includes('nonexistent')); // false
console.log(str.includes('To be', 1));    // false
console.log(str.includes('TO BE'));       // false
```

## 폴리필

이 메서드는 ECMAScript 6 규격에 포함되었습니다만 아직까지는 모든 JavaScrpt가 이 기능을 지원하고 있지는 않습니다. 하지만 여러분은 이 메서드를 다음과 같이 쉽게 [polyfill](https://en.wikipedia.org/wiki/Polyfill) 할 수 있습니다.

```js
if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    'use strict';
    if (typeof start !== 'number') {
      start = 0;
    }

    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## String.prototype.contains

Firefox 18 - 39에서, `include()` 메서드의 이름은 `contains()`이었습니다. contains() 함수는 아래와 같은 이유로 {{bug(1102219)}}에서 `includes()`로 변경되었습니다:

It's been [reported](https://bugzilla.mozilla.org/show_bug.cgi?id=789036) that some websites using MooTools 1.2 broke on Firefox 17. This version of MooTools checks whether `String.prototype.contains()` exists and, if it doesn't, MooTools adds its own function. With the introduction of this function in Firefox 17, the behavior of that check changed in a way that causes code based on MooTools' `String.prototype.contains()` implementation to break. As a result, the implementation was [disabled](https://hg.mozilla.org/releases/mozilla-aurora/rev/086db97198a8) in Firefox 17 and `String.prototype.contains()` was available one version later, in Firefox 18, when [outreach to MooTools](https://bugzilla.mozilla.org/show_bug.cgi?id=789036#c32) was leading to the [release of MooTools version 1.2.6](http://mootools.net/blog/2013/02/19/mootools-1-2-6-released).

MooTools 1.3 forces its own version of `String.prototype.contains()`, so websites relying on it should not break. However, you should note that [MooTools 1.3 signature](http://mootools.net/core/docs/1.3.2/Types/String#String-method:-contains) and ECMAScript 6 signatures for this method differ (on the second argument). Later, [MooTools 1.5+ changed the signature to match the ES6 standard.](https://github.com/mootools/mootools-core/blob/master/Docs/Types/String.md#note)

Firefox 48에서, `String.prototype.contains()`은 제거되었습니다. 오직 `String.prototype.includes()`만 사용할 수 있습니다.

## 관련문서

- {{jsxref("Array.prototype.includes()")}} {{experimental_inline}}
- {{jsxref("TypedArray.prototype.includes()")}} {{experimental_inline}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.startsWith()")}}
- {{jsxref("String.prototype.endsWith()")}}
