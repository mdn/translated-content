---
title: handler.preventExtensions()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/preventExtensions
---

{{JSRef}}

**`handler.preventExtensions()`** 메서드는 {{jsxref("Object.preventExtensions()")}}에 대한 트랩입니다.

{{EmbedInteractiveExample("pages/js/proxyhandler-preventextensions.html", "taller")}}

## 구문

```js
new Proxy(target, {
  preventExtensions(target) {},
});
```

### 매개 변수

다음 매개변수는 `preventExtensions()` 메서드에 전달됩니다. `this`는 처리기에 바인딩됩니다.

- `target`
  - : 대상 객체

### 반환 값

`preventExtensions()` 메서드는 불리언 값을 반환합니다.

## 설명

**`handler.preventExtensions()`** 메서드는 {{jsxref("Object.preventExtensions()")}}에 대한 트랩입니다.

### 가로채기

이 트랩은 다음 작업을 가로챌 수 있습니다.

- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Reflect.preventExtensions()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.freeze()")}}

### 불변 조건

다음 불변 조건이 위반되면 프록시에서 {{jsxref("TypeError")}}가 발생합니다.

- `Object.preventExtensions(proxy)`는 `Object.isExtensible(proxy)`가 `false`인 경우에만 `true`를 반환합니다.

## 예제

### preventExtensions 트랩

다음 코드는 {{jsxref("Object.preventExtensions()")}}를 트랩합니다.

```js
const p = new Proxy(
  {},
  {
    preventExtensions(target) {
      console.log("called");
      Object.preventExtensions(target);
      return true;
    },
  },
);

console.log(Object.preventExtensions(p)); // "called"
// false
```

다음 코드는 불변 조건을 위반합니다.

```js example-bad
const p = new Proxy(
  {},
  {
    preventExtensions(target) {
      return true;
    },
  },
);

Object.preventExtensions(p); // TypeError is thrown
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Proxy")}}
- [`Proxy()` 생성자](/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Reflect.preventExtensions()")}}
