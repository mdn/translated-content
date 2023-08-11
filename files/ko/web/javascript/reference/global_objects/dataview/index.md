---
title: DataView
slug: Web/JavaScript/Reference/Global_Objects/DataView
---

{{JSRef}}

**`DataView`** 뷰는 플랫폼의 자체 {{glossary("endianness", "엔디언")}}(바이트 정렬 방법)에 신경 쓰지 않으면서 {{jsxref("ArrayBuffer")}}에서 다양한 숫자 자료형의 데이터를 읽고 쓰기 위한 저수준 인터페이스를 제공합니다.

## 설명

### 엔디언

다중 바이트 숫자 자료형은 장치의 아키텍처에 따라 메모리에 다르게 표현됩니다. {{glossary("endianness", "엔디언")}} 용어 사전을 참고하세요. `DataView` 접근자는 코드를 실행하는 컴퓨터의 엔디언에 관계 없이 데이터의 접근법을 명시적으로 통제할 수 있습니다.

```js
var littleEndian = (function () {
  var buffer = new ArrayBuffer(2);
  new DataView(buffer).setInt16(0, 256, true /* littleEndian */);
  // Int16Array uses the platform's endianness.
  return new Int16Array(buffer)[0] === 256;
})();
console.log(littleEndian); // true or false
```

### 64비트 정수 자료형

JavaScript는 64비트 정수형 값에 대한 표준 지원을 아직 제공하지 않으므로 `DataView`도 64비트 연산을 지원하지 않습니다. 필요한 경우 최대 정확도 {{jsxref("Number.MAX_SAFE_INTEGER")}}의 값을 가져올 수 있는 `getUint64()` 함수를 만들 수는 있으며, 어느 정도까지는 충분할 것입니다.

```js
function getUint64(dataview, byteOffset, littleEndian) {
  // split 64-bit number into two 32-bit (4-byte) parts
  const left = dataview.getUint32(byteOffset, littleEndian);
  const right = dataview.getUint32(byteOffset + 4, littleEndian);

  // combine the two 32-bit values
  const combined = littleEndian
    ? left + 2 ** 32 * right
    : 2 ** 32 * left + right;

  if (!Number.isSafeInteger(combined))
    console.warn(combined, "exceeds MAX_SAFE_INTEGER. Precision may be lost");

  return combined;
}
```

완전한 범위의 64비트를 지원해야 할 경우 {{jsxref("BigInt")}}를 사용하세요. 단, `BigInt`는 사용자 계층 라이브러리 구현체보다는 훨씬 빠르지만, 가변 크기라는 성질로 인해 JavaScript 32비트 정수보다는 항상 느릴 수밖에 없습니다.

```js
const BigInt = window.BigInt,
  bigThirtyTwo = BigInt(32),
  bigZero = BigInt(0);
function getUint64BigInt(dataview, byteOffset, littleEndian) {
  // split 64-bit number into two 32-bit (4-byte) parts
  const left = BigInt(dataview.getUint32(byteOffset | 0, !!littleEndian) >>> 0);
  const right = BigInt(
    dataview.getUint32(((byteOffset | 0) + 4) | 0, !!littleEndian) >>> 0,
  );

  // combine the two 32-bit values and return
  return littleEndian
    ? (right << bigThirtyTwo) | left
    : (left << bigThirtyTwo) | right;
}
```

## 생성자

- {{jsxref("DataView.DataView", "DataView()")}}
  - : 새로운 `DataView` 객체를 생성합니다.

## 속성

- `DataView.prototype.constructor`
  - : 객체의 프로토타입을 생성한 함수를 나타냅니다. 초깃값은 내장 `DataView` 생성자입니다.
- {{jsxref("DataView.prototype.buffer")}} {{readonlyInline}}
  - : 뷰가 참조하는 {{jsxref("ArrayBuffer")}}입니다.
- {{jsxref("DataView.prototype.byteLength")}} {{readonlyInline}}
  - : 뷰의 시작점부터 측정한 {{jsxref("ArrayBuffer")}}의 길이(바이트 단위)입니다.
- {{jsxref("DataView.prototype.byteOffset")}} {{readonlyInline}}
  - : 뷰의 시작점 오프셋(바이트 단위)입니다.

## 메서드

### 읽기

- {{jsxref("DataView.prototype.getInt8()")}}
  - : 뷰의 시작점에서부터 주어진 오프셋을 적용한 위치의 8비트 정수(byte)를 가져옵니다.
- {{jsxref("DataView.prototype.getUint8()")}}
  - : 뷰의 시작점에서부터 주어진 오프셋을 적용한 위치의 8비트 부호 없는 정수(unsigned byte)를 가져옵니다.
- {{jsxref("DataView.prototype.getInt16()")}}
  - : 뷰의 시작점에서부터 주어진 오프셋을 적용한 위치의 16비트 정수(short)를 가져옵니다.
- {{jsxref("DataView.prototype.getUint16()")}}
  - : 뷰의 시작점에서부터 주어진 오프셋을 적용한 위치의 16비트 부호 없는 정수(unsigned short)를 가져옵니다.
- {{jsxref("DataView.prototype.getInt32()")}}
  - : 뷰의 시작점에서부터 주어진 오프셋을 적용한 위치의 32비트 정수(long)를 가져옵니다.
- {{jsxref("DataView.prototype.getUint32()")}}
  - : 뷰의 시작점에서부터 주어진 오프셋을 적용한 위치의 32비트 부호 없는 정수(unsigned short)를 가져옵니다.
- {{jsxref("DataView.prototype.getFloat32()")}}
  - : 뷰의 시작점에서부터 주어진 오프셋을 적용한 위치의 32비트 실수(float)를 가져옵니다.
- {{jsxref("DataView.prototype.getFloat64()")}}
  - : 뷰의 시작점에서부터 주어진 오프셋을 적용한 위치의 64비트 실수(double)를 가져옵니다.
- {{jsxref("DataView.prototype.getBigInt64()")}}
  - : 뷰의 시작점에서부터 주어진 오프셋을 적용한 위치의 64비트 정수(long long)를 가져옵니다.
- {{jsxref("DataView.prototype.getBigUint64()")}}
  - : 뷰의 시작점에서부터 주어진 오프셋을 적용한 위치의 64비트 부호 없는 정수(unsigned long long)를 가져옵니다.

### 쓰기

- {{jsxref("DataView.prototype.setInt8()")}}
  - : 뷰의 시작점에서부터 주어진 오프셋을 적용한 위치에 8비트 정수(byte)를 저장합니다.
- {{jsxref("DataView.prototype.setUint8()")}}
  - : 뷰의 시작점에서부터 주어진 오프셋을 적용한 위치에 8비트 부호 없는 정수(unsigned byte)를 저장합니다.
- {{jsxref("DataView.prototype.setInt16()")}}
  - : 뷰의 시작점에서부터 주어진 오프셋을 적용한 위치에 16비트 정수(short)를 저장합니다.
- {{jsxref("DataView.prototype.setUint16()")}}
  - : 뷰의 시작점에서부터 주어진 오프셋을 적용한 위치에 16비트 부호 없는 정수(unsigned short)를 저장합니다.
- {{jsxref("DataView.prototype.setInt32()")}}
  - : 뷰의 시작점에서부터 주어진 오프셋을 적용한 위치에 32비트 정수(long)를 저장합니다.
- {{jsxref("DataView.prototype.setUint32()")}}
  - : 뷰의 시작점에서부터 주어진 오프셋을 적용한 위치에 32비트 부호 없는 정수(unsigned long)를 저장합니다.
- {{jsxref("DataView.prototype.setFloat32()")}}
  - : 뷰의 시작점에서부터 주어진 오프셋을 적용한 위치에 32비트 실수(float)를 저장합니다.
- {{jsxref("DataView.prototype.setFloat64()")}}
  - : 뷰의 시작점에서부터 주어진 오프셋을 적용한 위치에 64비트 실수(double)를 저장합니다.
- {{jsxref("DataView.prototype.setBigInt64()")}}
  - : 뷰의 시작점에서부터 주어진 오프셋을 적용한 위치에 64비트 정수(long long)를 저장합니다.
- {{jsxref("DataView.prototype.setBigUint64()")}}
  - : 뷰의 시작점에서부터 주어진 오프셋을 적용한 위치에 64비트 부호 없는 정수(unsigned long long)를 저장합니다.

## 예제

```js
var buffer = new ArrayBuffer(16);
var view = new DataView(buffer, 0);

view.setInt16(1, 42);
view.getInt16(1); //42
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
