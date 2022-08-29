---
title: Atomics
slug: Web/JavaScript/Reference/Global_Objects/Atomics
translation_of: Web/JavaScript/Reference/Global_Objects/Atomics
browser-compat: javascript.builtins.Atomics
---
{{JSRef}} {{SeeCompatTable}}**Atomics 오브젝트**는 atomic operations 정적메소드로서 제공됩니다. 다음과 같은 오브젝트와 함께 {{jsxref("SharedArrayBuffer")}} 사용합니다.

Atomic operations Atomic Module을 인스톨해야합니다. 다른 global objects들과 다르게 Atomic은 constructor가 아닙니다. **new operator**를 사용하면 안되고 invoke Atomics object 함수로 사용하면됩니다. Atomics의 속성과 함수들은 static입니다. (as is the case with the {{jsxref("Math")}} object, for example).

## Methods

### Atomic operations

메모리가 공유되었을때, 멀티쓰레드는 메모리안에 같은 데이터들을 읽거나 쓸 수 있습니다.
Atomic operations은 예측 가능한 값을 쓰고 읽으며 다음 작업이 시작되기 전에 작업이 완료되고,작업이 중단되지 않도록합니다.

- {{jsxref("Atomics.add()")}}
  - : Adds a given value at a given position in the array. Returns the old value at that position.
- {{jsxref("Atomics.and()")}}
  - : Computes a bitwise AND at a given position in the array. Returns the old value at that position.
- {{jsxref("Atomics.compareExchange()")}}
  - : Stores a given value at a given position in the array, if it equals a given value. Returns the old value.
- {{jsxref("Atomics.exchange()")}}
  - : Stores a given value at a given position in the array. Returns the old value.
- {{jsxref("Atomics.load()")}}
  - : Returns the value at the given position in the array.
- {{jsxref("Atomics.or()")}}
  - : Computes a bitwise OR at a given position in the array. Returns the old value at that position.
- {{jsxref("Atomics.store()")}}
  - : Stores a given value at the given position in the array. Returns the value.
- {{jsxref("Atomics.sub()")}}
  - : Subtracts a given value at a given position in the array. Returns the old value at that position.
- {{jsxref("Atomics.xor()")}}
  - : Computes a bitwise XOR at a given position in the array. Returns the old value at that position.

### Wait and wake

The `wait()` and `wake()` methods are modeled on Linux futexes ("fast user-space mutex") and provide ways for waiting until a certain condition becomes true and are typically used as blocking constructs.

- {{jsxref("Atomics.wait()")}}
  - : Verifies that a given position in the array still contains a given value and sleeps awaiting or times out. Returns either `"ok"`, `"not-equal"`, or `"timed-out"`. If waiting is not allowed in the calling agent then it throws an Error exception (most browsers will not allow `wait()` on the browser's main thread).
- {{jsxref("Atomics.wake()")}}
  - : Wakes up some agents that are sleeping in the wait queue on the given array position. Returns the number of agents that were woken up.
- {{jsxref("Atomics.isLockFree()", "Atomics.isLockFree(size)")}}
  - : An optimization primitive that can be used to determine whether to use locks or atomic operations. Returns `true`, if an atomic operation on arrays of the given element size will be implemented using a hardware atomic operation (as opposed to a lock). Experts only.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{jsxref("ArrayBuffer")}}
- [JavaScript typed arrays](/ko/docs/Web/JavaScript/Typed_arrays)
- [Web Workers](/ko/docs/Web/API/Web_Workers_API)
- [parlib-simple](https://github.com/lars-t-hansen/parlib-simple) – a simple library providing synchronization and work distribution abstractions.
- [Shared Memory – a brief tutorial](https://github.com/tc39/ecmascript_sharedmem/blob/master/TUTORIAL.md)
- [A Taste of JavaScript’s New Parallel Primitives – Mozilla Hacks](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/)
