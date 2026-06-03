---
title: SharedArrayBuffer() 생성자
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

> [!NOTE]
> `SharedArrayBuffer` 생성자는 특정 [보안 요구 사항](/ko/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements)이 충족되지 않는 한 항상 전역적으로 사용할 수 없습니다.

**`SharedArrayBuffer()`** 생성자는 {{jsxref("SharedArrayBuffer")}} 객체를 생성합니다.

{{InteractiveExample("JavaScript Demo: SharedArrayBuffer Constructor", "shorter")}}

```js interactive-example
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(8);

console.log(buffer.byteLength);
// Expected output: 8
```

## 구문

```js-nolint
new SharedArrayBuffer(length)
new SharedArrayBuffer(length, options)
```

> [!NOTE]
> `SharedArrayBuffer()`는 오직 [`new`](/ko/docs/Web/JavaScript/Reference/Operators/new)로만 생성할 수 있습니다. `new` 없이 호출하면 {{jsxref("TypeError")}} 예외가 발생합니다.

### 매개변수

- `length`
  - : 생성할 배열 버퍼의 바이트 단위의 크기.
- `options` {{optional_inline}}
  - : 아래 속성을 포함하고 있는 객체
    - `maxByteLength` {{optional_inline}}
      - : 공유 배열 버퍼의 최대 크기 조정이 가능한 바이트 단위의 최대 크기.

### 반환 값

`maxByteLength`가 명시되었다면 {{jsxref("SharedArrayBuffer/maxByteLength", "maxByteLength")}} 속성이 명시된 `maxByteLength`로 설정된 명시된 크기의 새로운 `SharedArrayBuffer`를 반환합니다.
내용은 0으로 초기화 됩니다.

## 예제

### SharedArrayBuffer를 생성하기 위해 언제나 new 연산자를 사용하세요

`SharedArrayBuffer` 생성자는 {{jsxref("Operators/new", "new")}} 연산자와 함께 생성해야 합니다.
`SharedArrayBuffer` 생성자를 `new` 없이 호출하면
{{jsxref("TypeError")}}가 발생합니다.

```js example-bad
const sab = SharedArrayBuffer(1024);
// TypeError: 내장 SharedArrayBuffer 생성자를
// new 없이 호출하는 것은 금지됩니다.
```

```js example-good
const sab = new SharedArrayBuffer(1024);
```

### 크기를 늘릴 수 있는 SharedArrayBuffer 크기 늘리기

이 예제에서 크기가 최대 16바이트로 늘어날 수 있는 8바이트 버퍼를 생성하고 {{jsxref("SharedArrayBuffer/grow", "grow()")}}를 통해 12바이트로 늘립니다.

```js
const buffer = new SharedArrayBuffer(8, { maxByteLength: 16 });

buffer.grow(12);
```

> [!NOTE]
> `maxByteLength`는 사용 사례에 맞게 가능하면 가장 작은 수를 설정하기를 권장합니다. 메모리 부족 오류의 위험성을 감소시키기 위해 `1073741824`(1GB)를 초과할 수 없습니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Atomics")}}
- {{jsxref("ArrayBuffer")}}
- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Guide/Typed_arrays) 안내서
