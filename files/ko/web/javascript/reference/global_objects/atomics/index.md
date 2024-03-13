---
title: Atomics
slug: Web/JavaScript/Reference/Global_Objects/Atomics
l10n:
  sourceCommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{JSRef}}

**`Atomics`** 객체는 아토믹 연산(Atomic operation, 원자적 연산)을 정적 메서드로 제공합니다.
{{jsxref("SharedArrayBuffer")}} 와 {{jsxref("ArrayBuffer")}} 객체와 함께 사용됩니다.

## 설명

아토믹 연산은 `Atomic` 모듈에 설치됩니다. 다른 전역 객체와 달리 `Atomics`는 생성자가 아니기 때문에,
[`new` 연산자](/ko/docs/Web/JavaScript/Reference/Operators/new)와 함께 사용하거나
`Atomics` 객체를 함수로 호출할 수 없습니다. {{jsxref("Math")}} 객체처럼 `Atomics`의 모든 속성과
메서드는 정적입니다.

### 아토믹 연산

메모리가 공유되면 여러 스레드가 메모리에서 동일한 데이터를 읽고 쓸 수 있습니다.
아토믹 연산은 예측 가능한 값을 쓰고 읽고, 다음 연산이 시작되기 전에 연산을 완료하여 연산이 중단되지 않도록 합니다.

### Wait와 notify

`wait()`와 `notify()` 메서드는 Linux 퓨텍스(futex)("빠른 사용자 공간 뮤텍스(mutex)")에서 모델링되어
특정 조건이 참이 될 때까지 기다리는 방법을 제공하며 일반적으로 차단 구문으로 사용됩니다.

## 정적 속성

- `Atomics[@@toStringTag]`
  - : [`@@toStringTag`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 속성의 초기 값은 `"Atomics"` 문자열입니다. 이 속성은 {{jsxref("Object.prototype.toString()")}}에서 사용됩니다.

## 정적 메서드

- {{jsxref("Atomics.add()")}}
  - : 배열의 특정 인덱스에 있던 값에 전달된 값을 추가합니다. 해당 인덱스의 이전 값을 반환합니다.
- {{jsxref("Atomics.and()")}}
  - : 전달된 값과 배열의 지정된 인덱스에 있는 값으로 AND 연산을 수행합니다. 해당 인덱스의 이전 값을 반환합니다.
- {{jsxref("Atomics.compareExchange()")}}
  - : 배열의 지정된 인덱스 값과 같으면 그곳에 값을 저장합니다. 이전 값을 반환합니다.
- {{jsxref("Atomics.exchange()")}}
  - : 배열의 지정된 위치에 전달받은 값을 저장합니다. 이전 값을 반환합니다.
- {{jsxref("Atomics.isLockFree()", "Atomics.isLockFree(size)")}}
  - : 잠금 또는 atomic 연산을 사용할지 여부를 결정하는 데 사용할 수 있는 최적화 기본 요소입니다. 주어진 요소 크기의 배열에 대한 atomic 연산이 하드웨어 atomic 연산(잠금과 반대)을 사용하여 구현되는 경우 `true`를 반환합니다. 전문가만 사용합니다.
- {{jsxref("Atomics.load()")}}
  - : 배열의 지정된 위치에 있는 값을 반환합니다.
- {{jsxref("Atomics.notify()")}}
  - : 배열의 지정된 인덱스에서 대기 중인 에이전트에 알립니다. 알림을 받은 에이전트 수를 반환합니다.
- {{jsxref("Atomics.or()")}}
  - : 전달된 값과 배열의 지정된 인덱스에 있는 값으로 OR 연산을 수행합니다. 해당 인덱스의 이전 값을 반환합니다.
- {{jsxref("Atomics.store()")}}
  - : 배열의 지정된 인덱스에 값을 저장합니다. 값을 반환합니다.
- {{jsxref("Atomics.sub()")}}
  - : 배열의 지정된 인덱스에서 값을 뺍니다. 해당 인덱스의 이전 값을 반환합니다.
- {{jsxref("Atomics.wait()")}}
  - : 배열의 지정된 인덱스가 여전히 값을 포함하고있고 대기 중이거나 시간 초과됐는지 확인합니다. `"ok"`, `"not-equal"` 또는 `"timed-out"`을 반환합니다. 호출 에이전트에서 대기가 허용되지 않으면 예외가 발생합니다. (대부분의 브라우저는 브라우저의 메인 스레드에서 `wait()`을 허용하지 않습니다.)
- {{jsxref("Atomics.waitAsync()")}}
  - : 공유 메모리 위치에서 비동기식으로(즉, `Atomics.wait`와 다르게 차단 없이) 대기하고 {{jsxref("Promise", "프로미스")}}를 반환합니다.
- {{jsxref("Atomics.xor()")}}
  - : 제공된 값을 사용하여 배열의 지정된 인덱스에 있는 값에 대해 XOR 연산을 수행합니다. 해당 인덱스의 이전 값을 반환합니다.

## 예제

### Atomic 사용하기

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);

ta[0]; // 0
ta[0] = 5; // 5

Atomics.add(ta, 0, 12); // 5
Atomics.load(ta, 0); // 17

Atomics.and(ta, 0, 1); // 17
Atomics.load(ta, 0); // 1

Atomics.compareExchange(ta, 0, 5, 12); // 1
Atomics.load(ta, 0); // 1

Atomics.exchange(ta, 0, 12); // 1
Atomics.load(ta, 0); // 12

Atomics.isLockFree(1); // true
Atomics.isLockFree(2); // true
Atomics.isLockFree(3); // false
Atomics.isLockFree(4); // true

Atomics.or(ta, 0, 1); // 12
Atomics.load(ta, 0); // 13

Atomics.store(ta, 0, 12); // 12

Atomics.sub(ta, 0, 2); // 12
Atomics.load(ta, 0); // 10

Atomics.xor(ta, 0, 1); // 10
Atomics.load(ta, 0); // 11
```

### Waiting과 notifying

`Int32Array`를 공유한다고 했을 때

```js
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

읽기 스레드는 0이 될 것으로 예상되는 위치 0에서 sleep 상태이며 대기 중입니다. 이것이 사실인 한 계속되지 않습니다.
그러나 쓰기 스레드가 새 값을 저장하면 쓰기 스레드에서 이를 알리고 새 값을 반환합니다. (123)

```js
Atomics.wait(int32, 0, 0);
console.log(int32[0]); // 123
```

쓰기 스레드는 새 값을 저장하고 대기 중인 스레드가 작성되면 알립니다.

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

- {{jsxref("ArrayBuffer")}}
- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Typed_arrays)
- [웹 워커](/ko/docs/Web/API/Web_Workers_API)
- [parlib-simple](https://github.com/lars-t-hansen/parlib-simple) – 동기화 및 작업 배포 추상화를 제공하는 간단한 라이브러리입니다.
- [Shared Memory – a brief tutorial](https://github.com/tc39/ecmascript_sharedmem/blob/master/TUTORIAL.md)
- [A Taste of JavaScript's New Parallel Primitives – Mozilla Hacks](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/)
