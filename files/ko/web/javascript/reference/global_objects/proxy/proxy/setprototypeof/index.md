---
title: handler.setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/setPrototypeOf
---

{{JSRef}}

**`handler.setPrototypeOf()`** 메서드는 {{jsxref("Object.setPrototypeOf()")}}에 대한 트랩입니다.

{{EmbedInteractiveExample("pages/js/proxyhandler-setprototypeof.html", "taller")}}

## 구문

```js
new Proxy(target, {
  setPrototypeOf(target, prototype) {},
});
```

### 매개변수

다음 매개변수는 `setPrototypeOf()` 메서드에 전달됩니다. `this`는 처리기에 바인딩됩니다.

- `target`
  - : 대상 객체
- `prototype`
  - : 대상 객체의 새 프로토타입 또는 `null`

### 반환 값

`setPrototypeOf()` 메서드는 `[[Prototype]]`이 성공적으로 변경되었으면 `true`를 반환하고 그렇지 않으면 `false`를 반환합니다.

## 설명

**`handler.setPrototypeOf()`** 메서드는 {{jsxref("Object.setPrototypeOf()")}}에 대한 트랩입니다.

### 가로채기

이 트랩은 다음 작업을 가로챌 수 있습니다.

- {{jsxref("Object.setPrototypeOf()")}}
- {{jsxref("Reflect.setPrototypeOf()")}}

### 불변 조건

다음 불변 조건이 위반되면 프록시에서 {{jsxref("TypeError")}}가 발생합니다.

- `target`을 확장할 수 없는 경우, 프로토타입 매개변수는 `Object.getPrototypeOf(target)`과 동일한 값이어야 합니다.

## 예제

객체에 대한 새 프로토타입 설정을 허용하지 않으려면 처리기의 `setPrototypeOf()` 메서드에서 `false`를 반환하거나 예외를 발생시키면 됩니다.

### 접근 방식 1: false 반환하기

이 접근 방식은 변경 실패 시 예외를 발생시키는 모든 작업이 해당 작업 자체에서 직접 예외를 생성해야 함을 뜻합니다.

예를 들어 {{jsxref("Object.setPrototypeOf()")}}가 {{jsxref("TypeError")}}를 발생시킬때, {{jsxref("Reflect.setPrototypeOf()")}}와 같이 실패 시 일반적으로 예외를 발생시키지않는 연산이 수행된다면 예외가 발생하지 **않습니다.**

```js
const handlerReturnsFalse = {
  setPrototypeOf(target, newProto) {
    return false;
  },
};

const newProto = {},
  target = {};

const p1 = new Proxy(target, handlerReturnsFalse);
Object.setPrototypeOf(p1, newProto); // throws a TypeError
Reflect.setPrototypeOf(p1, newProto); // returns false
```

### 접근 방식 2: 예외 발생 시키기

후자의 접근 방식은 변경을 시도하거나 예외를 발생시키는 **모든** 작업을 실행시킵니다. 이 접근 방식은 예외가 발생하지 않는 작업도 실패 시 예외가 발생하거나 사용자 지정 예외 값을 발생시키려는 경우에 좋은 선택지가 될 수 있습니다.

```js
const handlerThrows = {
  setPrototypeOf(target, newProto) {
    throw new Error("custom error");
  },
};

const newProto = {},
  target = {};

const p2 = new Proxy(target, handlerThrows);
Object.setPrototypeOf(p2, newProto); // throws new Error("custom error")
Reflect.setPrototypeOf(p2, newProto); // throws new Error("custom error")
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Proxy")}}
- [`Proxy()` 생성자](/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Object.setPrototypeOf()")}}
- {{jsxref("Reflect.setPrototypeOf()")}}
