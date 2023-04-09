---
title: Atomics.notify()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/notify
l10n:
  sourceCommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{JSRef}}

**`Atomics.notify()`** 정적 메서드는 대기열에서 대기 중인 있는 일부 에이전트에게 알림을 보냅니다.

> **참조:** 이 작업은 공유된 {{jsxref("Int32Array")}}에서만 작동합니다.
> 공유되지 않은 `ArrayBuffer` 객체에서는 `0`을 반환합니다.

## 구문

```js-nolint
Atomics.notify(typedArray, index, count)
```

### 매개변수

- `typedArray`
  - : 공유된 {{jsxref("Int32Array")}}.
- `index`
  - : 깨울 `typedArray`의 위치.
- `count` {{optional_inline}}
  - : 알림을 보낼 대기 중 에이전트의 숫자. 기본 값은 {{jsxref("Infinity",
    "+Infinity")}}입니다.

### 반환 값

- 깨어난 에이전트의 숫자를 반환합니다.
- 공유되지 않은 {{jsxref("ArrayBuffer")}} 객체가 사용되었을 경우 `0`을 반환합니다.

### 예외

- `typedArray`가 허용된 정수형이 아닐 경우 {{jsxref("TypeError")}}가 발생합니다.
- `index`가 `typedArray`의 범위를 벗어날 경우 {{jsxref("RangeError")}}가 발생합니다.

## 예제

### `notify` 사용하기

공유된 `Int32Array`에서

```js
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

읽기 스레드는 0이 될 것으로 예상되는 위치 0에서 대기 중입니다. 이 상태가 유지되는 한 계속 진행되지 않습니다.
그러나 쓰기 스레드가 새 값을 저장하면 쓰기 스레드에서 알림을 받고 새 값(123)을 반환합니다.

```js
Atomics.wait(int32, 0, 0);
console.log(int32[0]); // 123
```

쓰기 스레드는 새로운 값을 저장하고 쓰기가 완료되면 대기 중인 스레드에 알립니다.

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
- {{jsxref("Atomics.wait()")}}
