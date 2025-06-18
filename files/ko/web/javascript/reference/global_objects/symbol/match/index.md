---
title: Symbol.match
slug: Web/JavaScript/Reference/Global_Objects/Symbol/match
l10n:
  sourceCommit: 427e8d03276b4915c08c5f0541452fb1c830c295
---

{{JSRef}}

**`Symbol.match`** 정적 데이터 속성은 [잘 알려진 심볼](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol##잘_알려진_심볼) `@@match`를 나타냅니다. {{jsxref("String.prototype.match()")}} 메서드는 입력 문자열을 현재 객체와 일치시키는 데 사용되는 메서드의 첫 번째 인수에서 이 심볼을 조회합니다. 이 심볼은 객체를 [정규 표현식으로 처리](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes)해야 하는지 여부를 결정하는 데도 사용됩니다.

좀 더 많은 정보를 알고 싶으시면 [`RegExp.prototype[@@match]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@match)와 {{jsxref("String.prototype.match()")}}를 참고하시기 바랍니다.

{{InteractiveExample("JavaScript Demo: Symbol.match", "taller")}}

```js interactive-example
const regexp1 = /foo/;
// console.log('/foo/'.startsWith(regexp1));
// Expected output (Chrome): Error: First argument to String.prototype.startsWith must not be a regular expression
// Expected output (Firefox): Error: Invalid type: first can't be a Regular Expression
// Expected output (Safari): Error: Argument to String.prototype.startsWith cannot be a RegExp

regexp1[Symbol.match] = false;

console.log("/foo/".startsWith(regexp1));
// Expected output: true

console.log("/baz/".endsWith(regexp1));
// Expected output: false
```

## 값

잘 알려진 심볼 `@@match`.

{{js_property_attributes(0, 0, 0)}}

## 설명

이 함수는 [객체에 정규 표현식의 동작이 있는지](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes)를 식별하는 데에도 사용됩니다. {{jsxref("String.prototype.startsWith()")}}, {{jsxref("String.prototype.endsWith()")}} 그리고 {{jsxref("String.prototype.includes()")}}를 예로 들자면 첫 인수가 정규식인지 확인하고 정규식인 경우 {{jsxref("TypeError")}}를 발생시킵니다. 이제 `match` 심볼이 `false`(또는 `undefined`을 제외한 [거짓 같은](/ko/docs/Glossary/Falsy) 값)로 설정되어 있으면 해당 객체를 정규식 객체로 사용할 수 없음을 나타냅니다.

## 예제

### RegExp가 정규표현식이 아닌 것으로 표시하기

다음 코드는 {{jsxref("TypeError")}}를 발생시킵니다.

```js
"/bar/".startsWith(/bar/);

// /bar/가 정규 표현식이기에 TypeError 발생
// 그리고 Symbol.match 는 수정되지 않았습니다.
```

그러나 `Symbol.match`를 `false`로 설정하면 객체는 [정규식 객체가 아님](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes)으로 간주됩니다. `startsWith`와 `endsWith` 메서드는 결과적으로 `TypeError`를 발생시키지 않습니다.

```js
const re = /foo/;
re[Symbol.match] = false;
"/foo/".startsWith(re); // true
"/baz/".endsWith(re); // false
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `Symbol.match` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("Symbol.matchAll")}}
- {{jsxref("Symbol.replace")}}
- {{jsxref("Symbol.search")}}
- {{jsxref("Symbol.split")}}
- {{jsxref("String.prototype.match()")}}
- [`RegExp.prototype[@@match]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@match)
