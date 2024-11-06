---
title: Reflect.preventExtensions()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/preventExtensions
---

{{JSRef}}

**`Reflect.preventExtensions()`** 정적 메서드는 새로운 속성을 객체에 추가하지 못하도록 완전히 막습니다. 즉, 미래의 객체 확장을 막습니다. {{jsxref("Object.preventExtensions()")}}와 유사하지만 [차이점](#object.preventextensions_와의_차이점)도 있습니다.

{{EmbedInteractiveExample("pages/js/reflect-preventextensions.html")}}

## 구문

```js
Reflect.preventExtensions(target);
```

### 매개변수

- `target`
  - : 확장을 방지할 대상 객체.

### 반환 값

대상의 확장을 성공적으로 방지했는지 나타내는 {{jsxref("Boolean")}}.

### 예외

`target`이 {{jsxref("Object")}}가 아니면 {{jsxref("TypeError")}}.

## 설명

`Reflect.preventExtensions()` 메서드는 새로운 속성을 객체에 추가하지 못하도록 완전히 막습니다. 즉, 미래의 객체 확장을 막습니다. {{jsxref("Object.preventExtensions()")}}와 유사합니다.

## 예제

### `Reflect.preventExtensions()` 사용하기

{{jsxref("Object.preventExtensions()")}}도 참고하세요.

```js
// 객체는 기본적으로 확장 가능
var empty = {};
Reflect.isExtensible(empty); // === true

// ...하지만 바꿀 수 있음
Reflect.preventExtensions(empty);
Reflect.isExtensible(empty); // === false
```

### `Object.preventExtensions()`와의 차이점

`Reflect.preventExtensions()`는 첫 번째 매개변수가 {{glossary("Primitive", "원시값")}}이면 {{jsxref("TypeError")}}를 던집니다. 반면 {{jsxref("Object.preventExtensions()")}}는 우선 객체로 변환을 시도합니다.

```js
Reflect.preventExtensions(1);
// TypeError: 1 is not an object

Object.preventExtensions(1);
// 1
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Reflect")}}
- {{jsxref("Object.isExtensible()")}}
