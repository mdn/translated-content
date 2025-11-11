---
title: Atomics.waitAsync()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/waitAsync
l10n:
  sourceCommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{JSRef}}

**`Atomics.waitAsync()`** 정적 메서드는 공유 메모리 위치에서 비동기적으로 대기하고 {{jsxref("Promise")}}를 반환합니다.

{{jsxref("Atomics.wait()")}}와는 다르게, `waitAsync`는 논 블록킹이며 메인 스레드에서 사용할 수 있습니다.

> [!NOTE]
> 이 작업은 오직 공유된 {{jsxref("Int32Array")}} 혹은 {{jsxref("BigInt64Array")}}에서만 동작합니다.

## 구문

```js-nolint
Atomics.waitAsync(typedArray, index, value)
Atomics.waitAsync(typedArray, index, value, timeout)
```

### 매개변수

- `typedArray`
  - : 공유된 {{jsxref("Int32Array")}} 혹은 {{jsxref("BigInt64Array")}}.
- `index`
  - : `typedArray`에서의 대기하고 있는 인덱스.
- `value`
  - : 테스트할 기대값.
- `timeout` {{optional_inline}}
  - : 대기 시간(밀리초). 시간이 명시되지 않으면 {{jsxref("Infinity")}}입니다.

### 반환 값

다음 속성을 가진 {{jsxref("Object")}}.

- `async`
  - `value` 속성이 {{jsxref("Promise")}}인지 아닌지를 나타내는 부울입니다.
- `value`
  - `async`가 `false`이면, `"not-equal"` 또는 `"time-out"`(`timeout` 매개변수가 `0`인 경우에만) 문자열일 수 있습니다.
    `async`가 `true`이면 `"ok"` 또는 `"timed-out"` 문자열 값으로 이행되는 {{jsxref("Promise")}}가 됩니다. 프로미스는 절대 거부되지 않습니다.

## 예제

### waitAsync() 사용하기

공유된 `Int32Array`에서

```js
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

읽기 스레드가 0이 될 것으로 예상되는 위치 0에서 대기 중입니다. `result.value`은 프로미스입니다.

```js
const result = Atomics.waitAsync(int32, 0, 0, 1000);
// { async: true, value: Promise {<pending>} }
```

읽기 스레드 또는 다른 스레드에서 메모리 위치 0이 호출되고 이행 결과 `"ok"` 문자열을 확인할 수 있습니다.

```js
Atomics.notify(int32, 0);
// { async: true, value: Promise {<fulfilled>: 'ok'} }
```

`"ok"`으로 확인되지 않는다면 2가지 원인이 있습니다. 첫 번째 원인은 공유 메모리 위치의 값이 예상과 다른 경우인데 이 경우 `value`는 프로미스 대신 `"not-equal"`이 될 됩니다. 두 번째 원인은 시간이 만료(타임아웃)될 경우로 프로미스 결과는 문자열 `"time-out"`입니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.wait()")}}
- {{jsxref("Atomics.notify()")}}
