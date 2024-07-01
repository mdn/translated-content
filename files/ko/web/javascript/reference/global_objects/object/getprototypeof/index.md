---
title: Object.getPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf
---

{{JSRef}}

**`Object.getPrototypeOf()`** 메서드는 지정된 객체의 프로토타입(가령 내부 `[[Prototype]]` 속성값)을 반환합니다.

## 구문

```js
Object.getPrototypeOf(obj);
```

### 매개변수

- `obj`
  - : 자신의 프로토타입이 반환되는 객체.

## 예

```js
var proto = {};
var obj = Object.create(proto);
Object.getPrototypeOf(obj) === proto; // true
```

## 주의

ES5에서, `obj` 매개변수가 객체가 아닌 경우 {{jsxref("TypeError")}} 예외가 발생합니다. ES6에서, 매개변수는 {{jsxref("Object")}}로 강제됩니다.

```js
Object.getPrototypeOf("foo");
// TypeError: "foo"는 객체가 아닙니다 (ES5 코드)
Object.getPrototypeOf("foo");
// String.prototype                  (ES6 코드)
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## Opera 전용 주의사항

이전 Opera 버전이 `Object.getPrototypeOf()`를 아직 지원하지 않지만, Opera는 Opera 10.50 이후로 비표준 [`Object.prototype.__proto__`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) 속성을 지원합니다.

## 참조

- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Object.setPrototypeOf()")}}
- [`Object.prototype.__proto__`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
- John Resig의 [getPrototypeOf](http://ejohn.org/blog/objectgetprototypeof/) 포스트
- {{jsxref("Reflect.getPrototypeOf()")}}
