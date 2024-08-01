---
title: Atomics.wait()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/wait
l10n:
  sourceCommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{JSRef}}

**`Atomics.wait()`** 정적 메서드는 {{jsxref("Int32Array")}}의 지정된 위치에 지정된 값이
여전히 포함되어 있는지 확인합니다. 만약 그러하다면 잠자기 상태로 있으면서 깨우기(wake-up) 알림을 기다리거나 시간이 만료됩니다.
이 함수는 `"ok"`, `"not-equal"` 또는 `"timed-out"` 문자열을 반환합니다.

> [!NOTE]
> 이 연산은 공유 {{jsxref("Int32Array")}} 또는 {{jsxref("BigInt64Array")}}에서만
> 작동하며 메인 스레드에서는 허용되지 않을 수 있습니다.
> 이 메서드의 비차단, 비동기 버전에 대해서는 {{jsxref("Atomics.waitAsync()")}}를 참조하세요.

## 구문

```js-nolint
Atomics.wait(typedArray, index, value)
Atomics.wait(typedArray, index, value, timeout)
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

`"ok"`, `"not-equal"` 혹은 `"timed-out"` 문자열

### 예외

- `typedArray`가 허용된 정수형이 아닐 경우 {{jsxref("TypeError")}}가 발생합니다.
- `index`가 `typedArray`의 범위를 벗어날 경우 {{jsxref("RangeError")}}가 발생합니다.

## 예제

### wait() 사용하기

공유된 `Int32Array`에서

```js
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

읽기 스레드는 0이 될 것으로 예상되는 위치 0에서 잠자기 상태로 대기 중입니다. 이 값이 유지되는 한 계속 진행되지 않습니다.
그러나 쓰기 스레드가 새 값을 저장하면 쓰기 스레드에서 알림을 받고 새 값(123)을 반환합니다.

```js
Atomics.wait(int32, 0, 0);
console.log(int32[0]); // 123
```

쓰기 스레드는 새 값을 저장하고 쓰기가 완료되면 대기 중인 스레드에 알립니다:

```js
console.log(int32[0]); // 0;
Atomics.store(int32, 0, 123);
Atomics.notify(int32, 0, 1);
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.waitAsync()")}}
- {{jsxref("Atomics.notify()")}}
