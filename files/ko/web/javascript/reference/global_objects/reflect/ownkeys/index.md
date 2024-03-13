---
title: Reflect.ownKeys()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys
---

{{JSRef}}

**`Reflect.ownKeys()`** 정적 메서드는 대상 객체의 자체 속성 키를 배열로 반환합니다.

{{EmbedInteractiveExample("pages/js/reflect-ownkeys.html")}}

## 구문

```js
Reflect.ownKeys(target);
```

### 매개변수

- `target`
  - : 자체 키를 가져올 대상 객체.

### 반환 값

주어진 객체의 자체 속성 키를 담은 {{jsxref("Array")}}.

### 예외

`target`이 {{jsxref("Object")}}가 아니면 {{jsxref("TypeError")}}.

## 설명

The `Reflect.ownKeys()` 메서드는 대상 객체의 자체 속성 키를 배열로 반환합니다. 반환 값은 `{{jsxref("Object.getOwnPropertyNames", "Object.getOwnPropertyNames(target)", "", 1)}}.concat({{jsxref("Object.getOwnPropertySymbols", "Object.getOwnPropertySymbols(target)", "", 1)}})`와 동일합니다.

## 예제

### `Reflect.ownKeys()` 사용하기

```js
Reflect.ownKeys({ z: 3, y: 2, x: 1 }); // [ "z", "y", "x" ]
Reflect.ownKeys([]); // ["length"]

var sym = Symbol.for("comet");
var sym2 = Symbol.for("meteor");
var obj = {
  [sym]: 0,
  str: 0,
  773: 0,
  0: 0,
  [sym2]: 0,
  "-1": 0,
  8: 0,
  "second str": 0,
};
Reflect.ownKeys(obj);
// [ "0", "8", "773", "str", "-1", "second str", Symbol(comet), Symbol(meteor) ]
// Indexes in numeric order,
// strings in insertion order,
// symbols in insertion order
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Reflect")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
