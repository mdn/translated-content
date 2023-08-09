---
title: Promise.reject()
slug: Web/JavaScript/Reference/Global_Objects/Promise/reject
---

{{JSRef}}

**`Promise.reject(reason)`** 메서드는 주어진 이유(reason)로 거부된 `Promise` 객체를 반환합니다.

## 구문

```js
Promise.reject(reason);
```

### 매개변수

- reason
  - : 이 `Promise`를 거부한 이유.

## 설명

정적 `Promise.reject` 함수는 거부된 `Promise`를 반환합니다. 디버깅 목적 및 까다로운 오류를 잡기 위해, `reason`을 `Error`생성자의 인스턴스로 만들면 유용합니다.

## 예

### 정적 Promise.reject() 메서드 사용

```js
Promise.reject("Testing static reject").then(
  function (reason) {
    // 호출되지 않음
  },
  function (reason) {
    console.log(reason); // "Testing static reject"
  },
);

Promise.reject(new Error("fail")).then(
  function (error) {
    // 호출되지 않음
  },
  function (error) {
    console.log(error); // Stacktrace
  },
);
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- {{jsxref("Promise")}}
- [BlueBird Promise 라이브러리를 사용해 선택된 오류 잡기](https://github.com/petkaantonov/bluebird#error-handling)
