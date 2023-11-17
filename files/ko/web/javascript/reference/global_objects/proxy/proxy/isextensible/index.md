---
title: handler.isExtensible()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/isExtensible
---

{{JSRef}}

**`handler.isExtensible()`** 메서드는 {{jsxref("Object.isExtensible()")}}에 대한 트랩입니다.

{{EmbedInteractiveExample("pages/js/proxyhandler-isextensible.html", "taller")}}

## 구문

```js
new Proxy(target, {
  isExtensible(target) {},
});
```

### 매개 변수

다음 매개변수는 `isExtensible()` 메서드에 전달됩니다. `this`는 처리기에 바인딩됩니다.

- `target`
  - : 대상 객체

### 반환 값

`isExtensible()` 메서드는 불리언 값을 반환합니다.

## 설명

**`handler.isExtensible()`** 메서드는 {{jsxref("Object.isExtensible()")}}에 대한 트랩입니다.

### 가로채기

이 트랩은 다음 작업을 가로챌 수 있습니다.

- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Reflect.isExtensible()")}}

### 불변 조건

다음 불변 조건이 위반되면 프록시에서 {{jsxref("TypeError")}}가 발생합니다.

- `Object.isExtensible(proxy)`는 반드시 `Object.isExtensible(target)`와 같은 값을 반환해야합니다.

## 예제

### isExtensible 트랩

다음 코드는 {{jsxref("Object.isExtensible()")}}를 트랩합니다.

```js
const p = new Proxy(
  {},
  {
    isExtensible(target) {
      console.log("called");
      return true;
    },
  },
);

console.log(Object.isExtensible(p)); // "called"
// true
```

다음 코드는 불변 조건을 위반합니다.

```js example-bad
const p = new Proxy(
  {},
  {
    isExtensible(target) {
      return false;
    },
  },
);

Object.isExtensible(p); // TypeError is thrown
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Proxy")}}
- [`Proxy()` 생성자](/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Reflect.isExtensible()")}}
- {{jsxref("Reflect.preventExtensions()")}}
