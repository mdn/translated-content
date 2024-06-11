---
title: ArrayBuffer.prototype.transfer()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/transfer
l10n:
  sourceCommit: a0b5c6af9c854702d15ec800b529064fb7d297db
---

{{JSRef}}

{{jsxref("ArrayBuffer")}} 인스턴스의 **`transfer()`** 메서드는 이 버퍼와 동일한 바이트 내용을 가진 새 `ArrayBuffer`를 생성한 다음 이 버퍼를 분리합니다.

## 구문

```js-nolint
transfer()
transfer(newByteLength)
```

### 매개변수

- `newByteLength` {{optional_inline}}
  - : 새 `ArrayBuffer`의 {{jsxref("ArrayBuffer/byteLength", "byteLength")}}입니다. 기본값은 이 `ArrayBuffer`의 `byteLength`입니다.
    - `newByteLength`가 이 `ArrayBuffer`의 `byteLength`보다 작으면 해당 버퍼에 담지 못해 "넘치는" 바이트는 삭제됩니다.
    - `newByteLength`가 이 `ArrayBuffer`의 `byteLength`보다 크다면 남는 바이트는 0으로 채워집니다.
    - 이 `ArrayBuffer`의 크기를 조정할 수 있는 경우 `newByteLength`는 해당 {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}}보다 크지 않아야 합니다.

### 반환 값

새로운 {{jsxref("ArrayBuffer")}} 객체입니다. 해당 객체의 내용은 이 `ArrayBuffer`의 내용으로 초기화되며, 여분의 바이트가 있으면 0으로 채워집니다. 새로운 `ArrayBuffer`는 이 `ArrayBuffer`가 크기 조정이 가능한 경우에만 크기를 조정할 수 있으며, 이 경우 새로운 객체의 {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}}는 이 `ArrayBuffer`의 것과 동일합니다. 원래의 `ArrayBuffer`는 분리됩니다.

### 예외

- {{jsxref("RangeError")}}
  - : 이 `ArrayBuffer`가 크기 조절이 가능하고 `newByteLength`가 이 `ArrayBuffer`의 {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}}보다 크다면 발생합니다.
- {{jsxref("TypeError")}}
  - : `ArrayBuffer`가 이미 분리된 경우 발생합니다.

## 설명

`transfer()` 메서드는 [구조화된 복제 알고리즘](/ko/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)과 동일한 연산을 수행합니다. 이 `ArrayBuffer`의 바이트를 새 `ArrayBuffer` 객체에 복사한 다음 이 `ArrayBuffer` 객체를 분리합니다. 자세한 내용은 [전송하는 배열 버퍼](/ko/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#transferring_arraybuffers)를 참조하십시오.

`transfer()`는 이 `ArrayBuffer`의 크기 조정 가능 여부 값을 유지합니다. 새 `ArrayBuffer`의 크기를 조정할 수 없게 하려면 {{jsxref("ArrayBuffer/transferToFixedLength", "transferToFixedLength()")}}를 대신 사용하시기 바랍니다. 고정 길이 버퍼를 크기 조정이 가능하도록 만드는 버퍼를 전송하는 방법은 없습니다.

`transfer()`는 구현에서 이 메서드를 제로 카피 이동 또는 `realloc`으로 구현할 수 있으므로 데이터의 실제 복사본이 없어도 되므로 매우 효율적입니다.

## 예제

### ArrayBuffer 전송하기

```js
// ArrayBuffer를 생성하고 몇 바이트를 기록합니다
const buffer = new ArrayBuffer(8);
const view = new Uint8Array(buffer);
view[1] = 2;
view[7] = 4;

// 버퍼를 같은 크기로 복사합니다
const buffer2 = buffer.transfer();
console.log(buffer.detached); // true
console.log(buffer2.byteLength); // 8
const view2 = new Uint8Array(buffer2);
console.log(view2[1]); // 2
console.log(view2[7]); // 4

// 버퍼를 더 작은 크기로 복사합니다
const buffer3 = buffer2.transfer(4);
console.log(buffer3.byteLength); // 4
const view3 = new Uint8Array(buffer3);
console.log(view3[1]); // 2
console.log(view3[7]); // undefined

// 버퍼를 더 큰 크기로 복사합니다
const buffer4 = buffer3.transfer(8);
console.log(buffer4.byteLength); // 8
const view4 = new Uint8Array(buffer4);
console.log(view4[1]); // 2
console.log(view4[7]); // 0

// 이미 분리됨, TypeError 발생
buffer.transfer(); // TypeError: Cannot perform ArrayBuffer.prototype.transfer on a detached ArrayBuffer
```

### 크기 조절이 가능한 ArrayBuffer 전송하기

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const view = new Uint8Array(buffer);
view[1] = 2;
view[7] = 4;

// 버퍼를 더 작은 크기로 복사
const buffer2 = buffer.transfer(4);
console.log(buffer2.byteLength); // 4
console.log(buffer2.maxByteLength); // 16
const view2 = new Uint8Array(buffer2);
console.log(view2[1]); // 2
console.log(view2[7]); // undefined
buffer2.resize(8);
console.log(view2[7]); // 0

// maxByteLength 범위 내에서 더 큰 크기로 버퍼 복사
const buffer3 = buffer2.transfer(12);
console.log(buffer3.byteLength); // 12

// maxByteLength 범위 보다 더 큰 크기로 버퍼 복사
buffer3.transfer(20); // RangeError: Invalid array buffer length
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `ArrayBuffer.prototype.transfer()` in `core-js`](https://github.com/zloirock/core-js#arraybufferprototypetransfer-and-friends)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("ArrayBuffer.prototype.detached")}}
- {{jsxref("ArrayBuffer.prototype.transferToFixedLength()")}}
