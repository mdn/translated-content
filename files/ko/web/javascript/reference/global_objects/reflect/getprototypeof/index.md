---
title: Reflect.getPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/getPrototypeOf
---

{{JSRef}}

**`Reflect.getPrototypeOf()`** 정적 메서드는 주어진 객체의 프로토타입을 반환합니다. {{jsxref("Object.getPrototypeOf()")}}와 거의 동일합니다.

{{EmbedInteractiveExample("pages/js/reflect-getprototypeof.html")}}

## 구문

```js
Reflect.getPrototypeOf(target);
```

### 매개변수

- `target`
  - : 프로토타입을 가져올 대상 객체.

### 반환 값

주어진 객체의 프로토타입. 상속한 속성이 없으면 {{jsxref("null")}}을 반환합니다.

### 예외

`target`이 {{jsxref("Object")}}가 아니면 {{jsxref("TypeError")}}.

## 설명

`Reflect.getPrototypeOf()` 메서드는 주어진 객체의 프로토타입(`[[Prototype]]` 내부 객체의 값 등)을 반환합니다.

## 예제

### `Reflect.getPrototypeOf()` 사용하기

```js
Reflect.getPrototypeOf({}); // Object.prototype
Reflect.getPrototypeOf(Object.prototype); // null
Reflect.getPrototypeOf(Object.create(null)); // null
```

### `Object.getPrototypeOf()`와 비교

```js
// 객체에는 동일한 결과
Object.getPrototypeOf({}); // Object.prototype
Reflect.getPrototypeOf({}); // Object.prototype

// ES5에서는 비객체 대상에서 모두 오류
Object.getPrototypeOf("foo"); // Throws TypeError
Reflect.getPrototypeOf("foo"); // Throws TypeError

// ES2015에서는 Reflect만 오류, Object는 객체로 변환
Object.getPrototypeOf("foo"); // String.prototype
Reflect.getPrototypeOf("foo"); // Throws TypeError

// ES2015 Object 동작을 따라하려면 객체 변환과정 필요
Reflect.getPrototypeOf(Object("foo")); // String.prototype
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Reflect")}}
- {{jsxref("Object.getPrototypeOf()")}}
