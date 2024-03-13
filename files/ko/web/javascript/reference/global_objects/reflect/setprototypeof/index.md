---
title: Reflect.setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/setPrototypeOf
---

{{JSRef}}

**`Reflect.setPrototypeOf()`** 정적 메서드는 주어진 객체의 프로토타입(내부 `[[Prototype]]` 속성)을 다른 객체나 {{jsxref("null")}}로 바꿉니다. 반환 값을 제외하면 {{jsxref("Object.setPrototypeOf()")}} 메서드와 같습니다.

{{EmbedInteractiveExample("pages/js/reflect-setprototypeof.html")}}

## 구문

```js
Reflect.setPrototypeOf(target, prototype);
```

### 매개변수

- `target`
  - : 프로토타입을 지정할 대상 객체.
- `prototype`
  - : 대상 객체의 새로운 프로토타입. (객체 또는 {{jsxref("null")}}

### 반환 값

프로토타입 설정 성공 여부를 나타내는 {{jsxref("Boolean")}}.

### 예외

`target`이 {{jsxref("Object")}}가 아니거나, `prototype`이 객체도 {{jsxref("null")}}도 아니면 {{jsxref("TypeError")}}.

## 설명

`Reflect.setPrototypeOf()` 메서드는 주어진 객체의 프로토타입(즉, 내부 `[[Prototype]]` 속성)을 변경합니다.

## 예제

### `Reflect.setPrototypeOf()` 사용하기

```js
Reflect.setPrototypeOf({}, Object.prototype); // true

// It can change an object's [[Prototype]] to null.
Reflect.setPrototypeOf({}, null); // true

// Returns false if target is not extensible.
Reflect.setPrototypeOf(Object.freeze({}), null); // false

// Returns false if it cause a prototype chain cycle.
const target = {};
const proto = Object.create(target);
Reflect.setPrototypeOf(target, proto); // false
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Reflect")}}
- {{jsxref("Object.setPrototypeOf()")}}
