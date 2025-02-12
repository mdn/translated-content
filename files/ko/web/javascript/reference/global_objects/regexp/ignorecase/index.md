---
title: RegExp.prototype.ignoreCase
slug: Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase
l10n:
  sourceCommit: c4e3558ee1045803df4a685f11f94dca273cd5fe
---

{{JSRef}}

**`ignoreCase`** 접근자 속성은 `i` 플래그가 정규 표현식에 사용되었는지 여부를 가리킵니다.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.ignoreCase")}}

```js interactive-example
const regex1 = new RegExp("foo");
const regex2 = new RegExp("foo", "i");

console.log(regex1.test("Football"));
// Expected output: false

console.log(regex2.ignoreCase);
// Expected output: true

console.log(regex2.test("Football"));
// Expected output: true
```

## 설명

`RegExp.prototype.ignoreCase`는 `i` 플래그가 사용되었으먼 `true`값을 가집니다. 그렇지 않으면 `false` 값을 가집니다. `i` 플래그는 문자열 매칭에서 대소문자를 구분하지 않음을 가리킵니다.

정규식에 [`unicode`](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) 플래그가 있는 경우 대/소문자 케이스 매핑은 [`CaseFolding.txt`](https://unicode.org/Public/UCD/latest/ucd/CaseFolding.txt)에 명시된 대로 수행됩니다. 그렇지 않으면 대/소문자 매핑은 [Unicode Default Case Conversion](https://unicode-org.github.io/icu/userguide/transforms/casemappings.html)을 사용합니다. 이 알고리즘은 [`String.prototype.toUpperCase()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) 및 [`String.prototype.toLowerCase()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)에서 사용되는 알고리즘과 동일합니다.

`ignoreCase`의 set 접근자는 `undefined`, 즉 정의되지 않았습니다. 이 속성을 직접 변경할 수 없습니다.

## 예제

### ignoreCase 사용하기

```js
const regex = /foo/i;

console.log(regex.ignoreCase); // true
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("RegExp.prototype.lastIndex")}}
- {{JSxRef("RegExp.prototype.dotAll")}}
- {{JSxRef("RegExp.prototype.global")}}
- {{JSxRef("RegExp.prototype.hasIndices")}}
- {{JSxRef("RegExp.prototype.multiline")}}
- {{JSxRef("RegExp.prototype.source")}}
- {{JSxRef("RegExp.prototype.sticky")}}
- {{JSxRef("RegExp.prototype.unicode")}}
