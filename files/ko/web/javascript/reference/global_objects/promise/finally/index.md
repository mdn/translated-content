---
title: Promise.prototype.finally()
slug: Web/JavaScript/Reference/Global_Objects/Promise/finally
l10n:
  sourceCommit: 88d71e500938fa8ca969fe4fe3c80a5abe23d767
---

{{JSRef}}

{{jsxref("Promise")}} 인스턴스의 **`finally()`** 메서드는 프로미스를 처리한 후(이행되거나 거부된 후) 호출할 함수를 예약합니다.
이 메서드는 즉시 동등한 {{jsxref("Promise")}} 객체를 반환하므로 [프로미스 체이닝](/ko/docs/Web/JavaScript/Guide/Using_promises#chaining)이 가능합니다.

**`finally()`** 메서드를 사용하면 {{jsxref("Promise/then", "then()")}} 와 {{jsxref("Promise/catch", "catch()")}} 처리기 속 코드 중복을 피할 수 있습니다.

{{InteractiveExample("JavaScript Demo: Promise.finally()", "taller")}}

```js interactive-example
function checkMail() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Mail has arrived");
    } else {
      reject(new Error("Failed to arrive"));
    }
  });
}

checkMail()
  .then((mail) => {
    console.log(mail);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log("Experiment completed");
  });
```

## 문법

```js-nolint
promiseInstance.finally(onFinally)
```

### 매개변수

- `onFinally`
  - : 프로미스가 처리된 후 비동기적으로 실행될 함수입니다. 거부된 프로미스를 반환하지 않는 이상 반환 값은 무시됩니다. 함수는 인자 없이 호출됩니다.

### 반환 값

반환 값은 인스턴스와 동일한 {{jsxref("Promise")}} 입니다. 만약 처리기에서 예외가 발생하거나 거부된 프로미스를 반환하면, `finally()`가 반환한 프로미스는 대신 그 값으로 거부됩니다. 이외에는 처리기의 반환 값은 원래 프로미스의 상태에 영향을 주지 않습니다.

## 설명

`finally()` 메서드는 결과에 관계없이 프로미스가 처리되고 나서 무언가를 처리하거나 정리할 때 유용합니다.

`finally()` 메서드는 {{jsxref("Promise/then", "then(onFinally, onFinally)")}} 를 호출하는 것과 매우 비슷하지만 몇 가지 차이점이 있습니다.

- 함수를 인라인으로 만들 때, 두 번 선언하거나 변수에 할당할 필요 없이 한 번만 사용해서 전달할 수 있습니다.
- `onFinally` 콜백은 인자를 받지 않습니다. 이행된 값 혹은 거부된 이유와 무관하게 처리하는 경우에만 실행되므로 인자가 필요하지 않습니다.
- `finally()` 호출은 보통 외부의 영향을 받지 않으며 원래 프로미스의 최종 상태를 변경하지 않습니다. 다음 예시를 참고하세요.
  - `Promise.resolve(2).then(() => 77, () => {})` 는 `77`로 이행됩니다. 이와는 다르게, `Promise.resolve(2).finally(() => 77)` 는 `2`로 이행됩니다.
  - 유사하게 `Promise.reject(3).then(() => {}, () => 88)` 는 `88`로 거부됩니다. 이와는 달리 `Promise.reject(3).finally(() => {})` 는 `3`로 거부됩니다.

> [!NOTE]
> `finally` 콜백 내 예외 발생 또는 거부된 프로미스를 반환하는 경우에는 거부된 프로미스를 반환합니다. 예를 들어 `Promise.reject(3).finally(() => { throw 99; })` 와 `Promise.reject(3).finally(() => Promise.reject(99))` 는 모두 `99`로 거부된 프로미스를 반환합니다.

{{jsxref("Promise/catch", "catch()")}}처럼 , `finally()`는 내부적으로 자신을 호출한 객체의 `then` 메소드를 호출합니다. `onFinally`가 함수가 아닌 경우, `then()`은 두 인자 모두 `onFinally`로 넘어가 호출되며, 즉 {{jsxref("Promise.prototype.then()")}}에게 유용한 처리기가 포함되지 않는다는 의미입니다. 그 외의 경우 then()은 내부적으로 생성된 두 개의 함수와 함께 호출되며, 다음과 비슷하게 동작합니다.

> [!WARNING]
> 다음은 설명을 위한 예시이며 실제 폴리필이 아닙니다.

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

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `Promise.prototype.finally` in `core-js`][]
- {{jsxref("Promise")}}
- {{jsxref("Promise.prototype.then()")}}
- {{jsxref("Promise.prototype.catch()")}}

[Polyfill of `Promise.prototype.finally` in `core-js`]: https://github.com/zloirock/core-js#ecmascript-promise
