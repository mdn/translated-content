---
title: Symbol.prototype.description
slug: Web/JavaScript/Reference/Global_Objects/Symbol/description
l10n:
  sourceCommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{JSRef}}

{{jsxref("Symbol")}} 값의 **`description`** 접근자 속성은 이 심볼에 대한 설명이 포함된 문자열을
반환하거나 설명이 없는 경우 `undefined`를 반환합니다.

{{EmbedInteractiveExample("pages/js/symbol-prototype-description.html")}}

## 설명

{{JSxRef("Symbol")}} 객체는 디버깅에 사용할 수 있지만 심볼 자체에 접근하는 데는 사용할 수 없는 선택적인 설명과 함께 생성할 수 있습니다.
`Symbol.prototype.description` 속성은 해당 설명을 읽는 데 사용할 수 있습니다. 이 속성은 둘러싸는
`"Symbol()"` 문자열을 포함하지 않으므로 `Symbol.prototype.toString()`과 다릅니다. 예제를 참조하세요.

## 예제

### description 사용하기

```js
Symbol("desc").toString(); // "Symbol(desc)"
Symbol("desc").description; // "desc"
Symbol("").description; // ""
Symbol().description; // undefined

// well-known symbols
Symbol.iterator.toString(); // "Symbol(Symbol.iterator)"
Symbol.iterator.description; // "Symbol.iterator"

// global symbols
Symbol.for("foo").toString(); // "Symbol(foo)"
Symbol.for("foo").description; // "foo"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `Symbol.prototype.description` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{JSxRef("Symbol.prototype.toString()")}}
- Polyfill: <https://npmjs.com/symbol.prototype.description>
