---
title: handler.apply()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/apply
---

{{JSRef}}

**`handler.apply()`** 메서드는 함수 호출에 대한 트랩입니다.

{{EmbedInteractiveExample("pages/js/proxyhandler-apply.html", "taller")}}

## 구문

```js
var p = new Proxy(target, {
  apply: function (target, thisArg, argumentsList) {},
});
```

### 매개 변수

다음 매개변수는 `apply()` 메소드에 전달됩니다.
`this`는 핸들러에 바인딩됩니다.

- `target`
  - : 호출할 수 있는 대상 객체
- `thisArg`
  - : 호출에 대한 `this` 인수
- `argumentsList`
  - : 호출에 대한 인수 목록

### 반환 값

`apply()` 메서드는 어떤 값이든 반환할 수 있습니다.

## 설명

**`handler.apply()`** 메서드는 함수 호출에 대한 트랩입니다.

### 가로채기

이 트랩은 다음 작업을 가로챌 수 있습니다.

- `proxy(...args)`
- {{jsxref("Function.prototype.apply()")}}와 {{jsxref("Function.prototype.call()")}}
- {{jsxref("Reflect.apply()")}}

### 불변 조건

다음 불변 조건이 위반되면 프록시는 {{jsxref("TypeError")}}를 발생시킵니다.

대상 객체는 그 자체로 호출이 가능해야합니다. 즉, 함수 객체여야 합니다.

## 예제

### 함수 호출 가로채기

다음 코드는 함수 호출을 트랩합니다.

```js
const p = new Proxy(function () {}, {
  apply(target, thisArg, argumentsList) {
    console.log(`called: ${argumentsList}`);
    return argumentsList[0] + argumentsList[1] + argumentsList[2];
  },
});

console.log(p(1, 2, 3)); // "호출: 1,2,3"
// 6
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Proxy")}}
- [`Proxy()` 생성자](/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Function.prototype.apply()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Reflect.apply()")}}
