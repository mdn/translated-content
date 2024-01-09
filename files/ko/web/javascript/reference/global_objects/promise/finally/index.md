---
title: Promise.prototype.finally()
slug: Web/JavaScript/Reference/Global_Objects/Promise/finally
page-type: javascript-instance-method
browser-compat: javascript.builtins.Promise.finally
---

{{JSRef}}

{{jsxref("Promise")}} 인스턴스의 **`finally()`** 메서드는 프로미스를 처리한 후(이행되거나 거부된 후) 호출할 함수를 예약합니다.
이 메서드는 즉시 동등한 {{jsxref("Promise")}} 객체를 반환하므로 [프로미스 체이닝](/ko/docs/Web/JavaScript/Guide/Using_promises#chaining)이 가능합니다.

**`finally()`** 메서드를 사용하면 {{jsxref("Promise/then", "then()")}} 와 {{jsxref("Promise/catch", "catch()")}} 처리기 속 코드 중복을 피할 수 있습니다.

{{EmbedInteractiveExample("pages/js/promise-finally.html", "taller")}}

## 문법

```js-nolint
promiseInstance.finally(onFinally)
```

### 매개변수

- `onFinally`
  - : 프로미스가 처리된 후 비동기적으로 실행될 함수입니다. 거부된 프로미스를 반환하지 않는 이상 반환 값은 무시됩니다. 함수는 인자 없이 호출됩니다.

### 반환 값

반환 값은 인스턴스와 동일한 {{jsxref("Promise")}} 입니다. 만약 처리기에서 예외가 발생하거나 거부된 프로미스를 반환하면, `finally()`는 그 값을 이유로 거부된 프로미스를 반환합니다. 이외에는 처리기의 반환 값은 원래 프로미스의 상태에 영향을 주지 않습니다.

## 설명

`finally()` 메서드는 결과에 관계없이 promise가 처리되고 나서 무언가를 처리하거나 정리할 때 유용합니다.

`finally()` 메서드는 {{jsxref("Promise/then", "then(onFinally, onFinally)")}} 를 호출하는 것과 매우 비슷하지만 몇 가지 차이점이 있습니다.

- 함수를 인라인으로 만들 때, 두 번 선언하거나 변수에 할당할 필요 없이 한 번만 사용해서 전달할 수 있습니다.
- `finally()` 호출은 보통 외부의 영향을 받지 않으며 원래 프로미스의 최종 상태를 변경하지 않습니다. 다음 예시를 참고하세요.
  - `Promise.resolve(2).then(() => 77, () => {})` 는 `77`로 이행됩니다. 이와는 다르게, `Promise.resolve(2).finally(() => 77)` 는 `2`로 이행됩니다.
  - 유사하게 `Promise.reject(3).then(() => {}, () => 88)` 는 `88`로 거부됩니다. 이와는 달리 `Promise.reject(3).finally(() => {})` 는 `3`로 거부됩니다.

> **참고:** `finally` 콜백 내 예외 발생 또는 거부된 프로미스를 반환하는 경우에는 거부된 프로미스를 반환합니다. 예를 들어 `Promise.reject(3).finally(() => { throw 99; })` 와 `Promise.reject(3).finally(() => Promise.reject(99))` 는 모두 `99`로 거부된 프로미스를 반환합니다.

> **경고:** 다음은 설명을 위한 예시이며 실제 폴리필이 아닙니다.

```js
promise.then(
  (value) => Promise.resolve(onFinally()).then(() => value),
  (reason) =>
    Promise.resolve(onFinally()).then(() => {
      throw reason;
    }),
);
```

`finally()` 메서드가 `then()` 을 호출하기 때문에 서브클래싱을 지원합니다. 위 예시의 {{jsxref("Promise.resolve()")}} 호출을 주목하세요. 실제로 `onFinally()` 의 반환 값은 `Promise.resolve()` 와 동일한 방식으로 이행됩니다. 하지만 이행된 프로미스의 진짜 생성자는 서브클래스가 됩니다. `finally()` 는 이 생성자를 [`promise.constructor[@@species]`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/@@species) 에서 얻습니다.

## 예시

### `finally()` 사용하기

```js
let isLoading = true;

fetch(myRequest)
  .then((response) => {
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return response.json();
    }
    throw new TypeError("Oops, we haven't got JSON!");
  })
  .then((json) => {
    /* JSON 처리 */
  })
  .catch((error) => {
    console.error(error); // 이 줄도 오류가 발생할 수 있습니다. (예: console = {})
  })
  .finally(() => {
    isLoading = false;
  });
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 더보기

- [Polyfill of `Promise.prototype.finally` in `core-js`](https://github.com/zloirock/core-js#ecmascript-promise)
- {{jsxref("Promise")}}
- {{jsxref("Promise.prototype.then()")}}
- {{jsxref("Promise.prototype.catch()")}}
