---
title: Object.getOwnPropertySymbols()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols
---

{{JSRef}}

**`Object.getOwnPropertySymbols()`** 메서드는 주어진 객체에서 직접 찾은 모든 심볼 속성들의 배열을 반환합니다.

{{EmbedInteractiveExample("pages/js/object-getownpropertysymbols.html")}}

## 구문

```js
Object.getOwnPropertySymbols(obj);
```

### 매개변수

- `obj`
  - : 반환받고자 하는 심볼 속성들이 있는 객체

### 반환 값

주어진 객체에서 직접 찾은 모든 심볼 속성들의 배열

## 설명

{{jsxref("Object.getOwnPropertyNames()")}}와 유사하게, 주어진 객체의 모든 심볼 속성을 배열로 가져올 수 있습니다. 참고로 {{jsxref("Object.getOwnPropertyNames()")}} 자체에는 객체의 심볼 속성이 포함되어 있지 않고 오직 문자열 속성만 포함되어 있습니다.

모든 객체에는 처음에는 고유한 심볼 속성이 없으므로, `Object.getOwnPropertySymbols()`는 객체에 심볼 속성을 설정하지 않는 한 빈 배열을 반환합니다.

## 예제

### getOwnPropertySymbols 사용하기

```js
var obj = {};
var a = Symbol("a");
var b = Symbol.for("b");

obj[a] = "localSymbol";
obj[b] = "globalSymbol";

var objectSymbols = Object.getOwnPropertySymbols(obj);

console.log(objectSymbols.length); // 2
console.log(objectSymbols); // [Symbol(a), Symbol(b)]
console.log(objectSymbols[0]); // Symbol(a)
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- `Object.getOwnPropertySymbols`의 폴리필은 [`core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)에서 사용할 수 있습니다.
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Symbol")}}
