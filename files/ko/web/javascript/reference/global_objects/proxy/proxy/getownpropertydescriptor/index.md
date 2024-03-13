---
title: handler.getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getOwnPropertyDescriptor
---

{{JSRef}}

**`handler.getOwnPropertyDescriptor()`** 메서드는 {{jsxref("Object.getOwnPropertyDescriptor()")}}에 대한 트랩입니다.

{{EmbedInteractiveExample("pages/js/proxyhandler-getownpropertydescriptor.html", "taller")}}

## 구문

```js
new Proxy(target, {
  getOwnPropertyDescriptor(target, prop) {},
});
```

### 매개 변수

다음 매개변수는 `getOwnPropertyDescriptor()` 메서드에 전달됩니다. `this`는 처리기에 바인딩됩니다.

- `target`
  - : 대상 객체
- `prop`
  - : 검색해야 하는 속성의 이름

### 반환 값

`getOwnPropertyDescriptor()` 메서드는 객체를 반환하거나 `undefined`를 반환합니다.

## 설명

**`handler.getOwnPropertyDescriptor()`** 메서드는 {{jsxref("Object.getOwnPropertyDescriptor()")}}에 대한 트랩입니다.

### 가로채기

이 트랩은 다음 작업을 가로챌 수 있습니다.

- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Reflect.getOwnPropertyDescriptor()")}}

### 불변 조건

다음 불변 조건이 위반되면 프록시에서 {{jsxref("TypeError")}}가 발생합니다.

- `getOwnPropertyDescriptor()`는 객체 또는 `undefined`를 반환해야 합니다.
- 속성이 대상 객체의 구성할 수 없는 자체 속성으로 존재하는 경우, 속성이 존재하지 않는 것으로 보고될 수 없습니다.
- 속성이 대상 객체의 자체 속성으로 존재하고 대상 객체가 확장할 수 없는 경우, 속성이 존재하지 않는 것으로 보고될 수 없습니다.
- 속성이 대상 객체의 자체 속성으로 존재하지 않고 대상 객체가 확장 가능하지 않은 경우, 속성이 있는 것으로 보고될 수 없습니다.
- 속성이 대상 객체의 자체 속성으로 존재하지 않거나 대상 객체의 구성 가능한 자체 속성으로 존재하는 경우, 속성을 구성 불가능한 것으로 보고할 수 없습니다.
- `Object.getOwnPropertyDescriptor(target)`의 결과는 `Object.defineProperty()`를 사용하여 대상 객체에 적용할 수 있으며 예외를 발생시키지 않습니다.

## 예제

### getOwnPropertyDescriptor 트랩

다음 코드는 {{jsxref("Object.getOwnPropertyDescriptor()")}}를 트래핑합니다.

```js
const p = new Proxy(
  { a: 20 },
  {
    getOwnPropertyDescriptor(target, prop) {
      console.log(`called: ${prop}`);
      return { configurable: true, enumerable: true, value: 10 };
    },
  },
);

console.log(Object.getOwnPropertyDescriptor(p, "a").value); // "called: a"
// 10
```

다음 코드는 불변 조건을 위반합니다.

```js example-bad
const obj = { a: 10 };
Object.preventExtensions(obj);
const p = new Proxy(obj, {
  getOwnPropertyDescriptor(target, prop) {
    return undefined;
  },
});

Object.getOwnPropertyDescriptor(p, "a"); // TypeError is thrown
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Proxy")}}
- [`Proxy()` 생성자](/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Reflect.getOwnPropertyDescriptor()")}}
