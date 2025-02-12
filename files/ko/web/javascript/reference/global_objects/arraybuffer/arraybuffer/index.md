---
title: ArrayBuffer() 생성자
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}}

**`ArrayBuffer()`** 생성자는 {{jsxref("ArrayBuffer")}} 객체를 생성합니다.

{{InteractiveExample("JavaScript Demo: ArrayBuffer Constructor", "shorter")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(8);

console.log(buffer.byteLength);
// Expected output: 8
```

## 구문

```js-nolint
new ArrayBuffer(length)
new ArrayBuffer(length, options)
```

> **참고:** `ArrayBuffer()`는 오직 [`new`](/ko/docs/Web/JavaScript/Reference/Operators/new)로만 생성할 수 있습니다. `new` 없이 호출을 시도하면 {{jsxref("TypeError")}} 예외가 발생합니다.

### 매개변수

- `length`
  - : 생성할 `ArrayBuffer`의 바이트 크기.
- `length`
  - : 생성할 배열 버퍼의 바이트 단위의 크기.
- `options` {{optional_inline}}
  - : 다음 속성을 포함하는 객체.
    - `maxByteLength` {{optional_inline}}
      - : 배열 버퍼가 크기를 재조정할 수 있는 바이트 단위 최대 크기.

### 반환 값

지정한 크기를 가진 새로운 `ArrayBuffer` 객체. 내용은 모두 0으로 초기화됩니다.

지정된 크기의 새 `ArrayBuffer` 객체입니다. `maxByteLength` 속성이 명시되어 있을 경우 이 값으로 {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} 속성이 설정됩니다. 그 내용은 0으로 초기화됩니다.

### 예외

- {{jsxref("RangeError")}}
  - : 다음 중 한 가지 경우에 발생합니다.
    - `length` 혹은 `maxByteLength`가 {{jsxref("Number.MAX_SAFE_INTEGER")}} (≥ 2<sup>53</sup>)보다 크거나 음수일 경우
    - `length`가 `maxByteLength`보다 클 경우.

## 예제

### ArrayBuffer 생성하기

이 예제에서는 버퍼를 참조하는 {{jsxref("Int32Array")}} 뷰를 사용하여 8바이트 버퍼를 만듭니다.

```js
const buffer = new ArrayBuffer(8);
const view = new Int32Array(buffer);
```

### 크기 조절이 가능한 ArrayBuffer 생성하기

이 예제에서는 최대 16바이트까지 크기를 조정할 수 있는 8바이트 버퍼를 생성한 다음 {{jsxref("ArrayBuffer/resize", "resize()")}} 이를 12바이트로 조정합니다.

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

buffer.resize(12);
```

> **참고:** `maxByteLength`는 사용 사례에 맞게 가능한 가장 작은 값으로 설정하는 것이 좋습니다. 메모리 부족 오류의 위험을 줄이려면 `1073741824`(1GB)를 초과하지 않아야 합니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서의 `ArrayBuffer` 폴리필](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Guide/Typed_arrays) 안내서
- {{jsxref("SharedArrayBuffer")}}
