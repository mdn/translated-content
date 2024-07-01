---
title: Reflect.has()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/has
---

{{JSRef}}

**`Reflect.has()`** 정적 메서드는 [`in` 연산자](/ko/docs/Web/JavaScript/Reference/Operators/in)의 함수판입니다.

{{EmbedInteractiveExample("pages/js/reflect-has.html")}}

## 구문

```js
Reflect.has(target, propertyKey);
```

### 매개변수

- `target`
  - : 속성을 탐색할 객체.
- `propertyKey`
  - : 탐색할 속성의 이름.

### 반환 값

객체가 속성을 가지고 있는지 나타내는 {{jsxref("Boolean")}}.

### 예외

`target`이 {{jsxref("Object")}}가 아니면 {{jsxref("TypeError")}}.

## 설명

`Reflect.has()` 메서드는 객체에 속성이 존재하는지 판별할 수 있습니다. [`in` 연산자](/ko/docs/Web/JavaScript/Reference/Operators/in)처럼 동작합니다.

## 예제

### `Reflect.has()` 사용하기

```js
Reflect.has({ x: 0 }, "x"); // true
Reflect.has({ x: 0 }, "y"); // false

// 프로토타입 체인에 존재하는 속성도 true 반환
Reflect.has({ x: 0 }, "toString");

// .has() 처리기 메서드를 가진 Proxy
obj = new Proxy(
  {},
  {
    has(t, k) {
      return k.startsWith("door");
    },
  },
);
Reflect.has(obj, "doorbell"); // true
Reflect.has(obj, "dormitory"); // false
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Reflect")}}
- [`in` 연산자](/ko/docs/Web/JavaScript/Reference/Operators/in)
