---
title: Reflect.getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/getOwnPropertyDescriptor
---

{{JSRef}}

**`Reflect.getOwnPropertyDescriptor()`** 정적 메서드는 객체에 주어진 속성이 존재하면, 해당 속성의 서술자를 반환합니다. {{jsxref("Object.getOwnPropertyDescriptor()")}}와 유사합니다.

{{EmbedInteractiveExample("pages/js/reflect-getownpropertydescriptor.html")}}

## 구문

```js
Reflect.getOwnPropertyDescriptor(target, propertyKey);
```

### 매개변수

- `target`
  - : 속성을 탐색할 객체.
- `propertyKey`
  - : 자체 속성 서술자를 가져올 속성의 이름.

### 반환 값

대상 속성이 객체에 존재하면, 그 속성의 서술자. 존재하지 않으면 {{jsxref("undefined")}}.

### 예제

`target`이 {{jsxref("Object")}}가 아니면 {{jsxref("TypeError")}}.

## 설명

`Reflect.getOwnPropertyDescriptor` 메서드는 객체 속성의 서술자를 반환합니다. 만약 존재하지 않는 속성이라면 {{jsxref("undefined")}}를 대신 반환합니다. {{jsxref("Object.getOwnPropertyDescriptor()")}}와의 유일한 차이는 객체가 아닌 대상의 처리 방법입니다.

## 예제

### `Reflect.getOwnPropertyDescriptor()` 사용하기

```js
Reflect.getOwnPropertyDescriptor({ x: "hello" }, "x");
// {value: "hello", writable: true, enumerable: true, configurable: true}

Reflect.getOwnPropertyDescriptor({ x: "hello" }, "y");
// undefined

Reflect.getOwnPropertyDescriptor([], "length");
// {value: 0, writable: true, enumerable: false, configurable: false}
```

### `Object.getOwnPropertyDescriptor()`와의 차이점

`Reflect.getOwnPropertyDescriptor()`의 첫 번째 매개변수가 객체가 아니고 {{glossary("Primitive", "원시값")}}이라면 {{jsxref("TypeError")}}가 발생합니다. 반면 {{jsxref("Object.getOwnPropertyDescriptor()")}}는 같은 상황에서 값을 우선 객체로 변환합니다.

```js
Reflect.getOwnPropertyDescriptor("foo", 0);
// TypeError: "foo" is not non-null object

Object.getOwnPropertyDescriptor("foo", 0);
// { value: "f", writable: false, enumerable: true, configurable: false }
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Reflect")}}
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
