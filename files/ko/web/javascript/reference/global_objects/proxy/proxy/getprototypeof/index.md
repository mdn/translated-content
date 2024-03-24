---
title: handler.getPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getPrototypeOf
---

{{JSRef}}

**`handler.getPrototypeOf()`** 메서드는 `[[GetPrototypeOf]]` 내부 메서드에 대한 트랩입니다.

{{EmbedInteractiveExample("pages/js/proxyhandler-getprototypeof.html", "taller")}}

## 구문

```js
new Proxy(obj, {
  getPrototypeOf(target) {
    // …
  },
});
```

### 매개변수

다음 매개변수는 `getPrototypeOf()` 메서드에 전달됩니다. `this`는 처리기에 바인딩됩니다.

- `target`
  - : 대상 객체

### 반환 값

`getPrototypeOf()` 메서드는 객체 또는 `null`을 반환합니다.

## 설명

### 가로채기

이 트랩은 다음 작업을 가로챌 수 있습니다.

- {{jsxref("Object.getPrototypeOf()")}}
- {{jsxref("Reflect.getPrototypeOf()")}}
- [`__proto__`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Operators/instanceof", "instanceof")}}

### 불변 조건

다음 불변 조건이 위반되면 프록시에서 {{jsxref("TypeError")}}가 발생합니다.

- `getPrototypeOf()` 메서드는 반드시 객체나 `null`을 반환해야 합니다.
- `target`을 확장할 수 없는 경우, `Object.getPrototypeOf(proxy)` 메서드는 `Object.getPrototypeOf(target)`과 동일한 값을 반환해야 합니다.

## 예제들

### 기본 사용법

```js
const obj = {};
const proto = {};
const handler = {
  getPrototypeOf(target) {
    console.log(target === obj); // true
    console.log(this === handler); // true
    return proto;
  },
};

const p = new Proxy(obj, handler);
console.log(Object.getPrototypeOf(p) === proto); // true
```

### getPrototypeOf 트랩을 싱핼 시키는 5가지 방법

```js
const obj = {};
const p = new Proxy(obj, {
  getPrototypeOf(target) {
    return Array.prototype;
  },
});
console.log(
  Object.getPrototypeOf(p) === Array.prototype, // true
  Reflect.getPrototypeOf(p) === Array.prototype, // true
  p.__proto__ === Array.prototype, // true
  Array.prototype.isPrototypeOf(p), // true
  p instanceof Array, // true
);
```

### 두 가지 예외

```js example-bad
const obj = {};
const p = new Proxy(obj, {
  getPrototypeOf(target) {
    return "foo";
  },
});
Object.getPrototypeOf(p); // TypeError: "foo" is not an object or null

const obj = Object.preventExtensions({});
const p = new Proxy(obj, {
  getPrototypeOf(target) {
    return {};
  },
});
Object.getPrototypeOf(p); // TypeError: expected same prototype value
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Proxy")}}
- [`Proxy()` 생성자](/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Object.getPrototypeOf()")}}
- {{jsxref("Reflect.getPrototypeOf()")}}
