---
title: Reflect.isExtensible()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/isExtensible
---

{{JSRef}}

**`Reflect.isExtensible()`** 정적 메서드는 객체의 확장 가능 여부, 즉 속성을 추가할 수 있는지 판별합니다. {{jsxref("Object.isExtensible()")}}과 유사하지만 [차이점](#object.isextensible_과의_차이)도 있습니다.

{{EmbedInteractiveExample("pages/js/reflect-isextensible.html", "taller")}}

## 구문

```js
Reflect.isExtensible(target);
```

### 매개변수

- `target`
  - : 확장 가능 여부를 판별할 대상 객체.

### 반환 값

객체의 확장 가능 여부를 나타내는 {{jsxref("Boolean")}}.

### 예외

`target`이 {{jsxref("Object")}}가 아니면 {{jsxref("TypeError")}}.

## 설명

`Reflect.isExtensible()` 메서드는 {{jsxref("Object.isExtensible()")}}와 유사하게, 객체에 새로운 속성을 추가할 수 있는지 판별합니다.

## 예제

### `Reflect.isExtensible()` 사용하기

{{jsxref("Object.isExtensible()")}}도 참고하세요.

```js
// 새로운 객체는 확장 가능
var empty = {};
Reflect.isExtensible(empty); // === true

// ...하지만 바꿀 수 있음
Reflect.preventExtensions(empty);
Reflect.isExtensible(empty); // === false

// 봉인한 객체는 확장 불가능함
var sealed = Object.seal({});
Reflect.isExtensible(sealed); // === false

// 동결한 객체도 확장 불가능함
var frozen = Object.freeze({});
Reflect.isExtensible(frozen); // === false
```

### `Object.isExtensible()`과의 차이점

`Reflect.isExtensible()`은 첫 번째 매개변수가 {{glossary("Primitive", "원시값")}}이면 {{jsxref("TypeError")}}를 던집니다. 반면 {{jsxref("Object.isExtensible()")}}은 우선 객체로 변환을 시도합니다.

```js
Reflect.isExtensible(1);
// TypeError: 1 is not an object

Object.isExtensible(1);
// false
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Reflect")}}
- {{jsxref("Object.isExtensible()")}}
