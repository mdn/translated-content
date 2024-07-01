---
title: Object() constructor
slug: Web/JavaScript/Reference/Global_Objects/Object/Object
---

{{JSRef}}

**`Object`의 생성자**는 주어진 값를 객체 래퍼로 만들어 줍니다.

- 만약 값이 {{jsxref("null")}} 또는 {{jsxref("undefined")}} 라면, 빈 객체를 생성하여 반환합니다.
- 그렇지 않으면, 주어진 값의 타입 객체를 반환합니다.
- 만약 주어진 값이 객체라면, 해당 값을 그대로 반환합니다.

비 생성자 컨텍스트로 호출되면, `Object` 는 `new Object()` 와 동일하게 동작합니다.

## 구문

```js
new Object();
new Object(value);
```

### 매개변수

- `value`
  - : 아무 값

## 예시

### 새로운 객체 생성

```js
let o = new Object();
o.foo = 42;

console.log(o);
// Object { foo: 42 }
```

### undefined와 null을 받는 객체 types

다음 예제는 빈 `객체`를 `o` 변수에 저장합니다 :

```js
let o = new Object();
```

```js
let o = new Object(undefined);
```

```js
let o = new Object(null);
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이보기

- [객체 초기자](/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer)
