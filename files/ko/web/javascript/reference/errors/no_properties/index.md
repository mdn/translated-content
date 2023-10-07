---
title: 'TypeError: "x" has no properties'
slug: Web/JavaScript/Reference/Errors/No_properties
---

{{jsSidebar("Errors")}}

[`null`](/ko/docs/Web/JavaScript/Reference/Operators/null) 과 {{jsxref("undefined")}} 라는 속성에 접근하려고 시도할때 "null(혹은 undefined)은 속성이 없습니다"라는 JavaScript 에러가 발생합니다.

## 메세지

```
TypeError: Cannot read properties of undefined (reading 'x') (V8-based)
TypeError: null has no properties (Firefox)
TypeError: undefined has no properties (Firefox)
TypeError: undefined is not an object (evaluating 'undefined.x') (Safari)
```

## 에러 타입

{{jsxref("TypeError")}}.

## 무엇이 잘못되었을까?

[`null`](/ko/docs/Web/JavaScript/Reference/Operators/null) 과 {{jsxref("undefined")}} 에 접근 할 수 있는 속성이 없습니다.

## 예제

### null and undefined have no properties

```js example-bad
null.foo;
// TypeError: null has no properties

undefined.bar;
// TypeError: undefined has no properties
```

## 참조

- [`null`](/ko/docs/Web/JavaScript/Reference/Operators/null)
- {{jsxref("undefined")}}
