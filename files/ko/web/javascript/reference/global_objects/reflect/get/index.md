---
title: Reflect.get()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/get
---

{{JSRef}}

**`Reflect.get()`** 정적 메서드는 객체의 속성을 가져오는 함수입니다. `target[propertyKey]`와 비슷합니다.

{{EmbedInteractiveExample("pages/js/reflect-get.html")}}

## 구문

```js
Reflect.get(target, propertyKey[, receiver])
```

### 매개변수

- `target`
  - : 속성을 가져올 대상 객체.
- `propertyKey`
  - : 가져올 속성의 이름.
- `receiver` {{optional_inline}}
  - : 대상 속성이 접근자라면 `this`의 값으로 사용할 값. {{jsxref("Proxy")}}와 함께 사용하면, 대상을 상속하는 객체를 사용할 수 있습니다.

### 반환 값

속성의 값.

### 예외

`target`이 {{jsxref("Object")}}가 아니면 {{jsxref("TypeError")}}.

## 설명

`Reflect.get` 메서드는 객체 속성의 값을 가져올 수 있습니다. [속성 접근자](/ko/docs/Web/JavaScript/Reference/Operators/Property_Accessors)의 함수판이라고 할 수 있습니다.

## 예제

### `Reflect.get()` 사용하기

```js
// Object
var obj = { x: 1, y: 2 };
Reflect.get(obj, "x"); // 1

// Array
Reflect.get(["zero", "one"], 1); // "one"

// handler 매개변수와 Proxy
var x = { p: 1 };
var obj = new Proxy(x, {
  get(t, k, r) {
    return k + "bar";
  },
});
Reflect.get(obj, "foo"); // "foobar"
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Reflect")}}
- [속성 접근자](/ko/docs/Web/JavaScript/Reference/Operators/Property_Accessors)
