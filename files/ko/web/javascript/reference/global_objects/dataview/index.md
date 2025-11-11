---
title: DataView
slug: Web/JavaScript/Reference/Global_Objects/DataView
l10n:
  sourceCommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{JSRef}}

**`DataView`** 뷰는 플랫폼의 자체 {{glossary("endianness", "엔디언")}}(바이트 정렬 방법)에
신경쓰지 않으면서 {{jsxref("ArrayBuffer")}}에서 다양한 숫자 자료형의 데이터를 읽고 쓰기 위한
저수준 인터페이스를 제공합니다.

## 설명

### 엔디언

다중 바이트 숫자 자료형은 장치의 아키텍처에 따라 메모리에 다르게 표현됩니다. {{glossary("endianness", "엔디언")}}
용어 사전을 참고하세요. `DataView` 접근자는 코드를 실행하는 컴퓨터의 엔디언에 관계 없이 데이터의 접근법을
명시적으로 통제할 수 있습니다.

```js
const littleEndian = (() => {
  const buffer = new ArrayBuffer(2);
  new DataView(buffer).setInt16(0, 256, true /* littleEndian */);
  // Int16Array uses the platform's endianness.
  return new Int16Array(buffer)[0] === 256;
})();
console.log(littleEndian); // true or false
```

### 64비트 정수 자료형

JavaScript는 64비트 정수형 값에 대한 표준 지원을 아직 제공하지 않으므로 `DataView`도 64비트 연산을 지원하지 않습니다.
필요한 경우 최대 정확도 {{jsxref("Number.MAX_SAFE_INTEGER")}}의 값을 가져올 수 있는 `getUint64()`
함수를 만들 수는 있으며, 어느 정도까지는 충분할 것입니다.

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

완전한 범위의 64비트를 지원해야 할 경우 {{jsxref("BigInt")}}를 사용하세요.
단, `BigInt`는 사용자 계층 라이브러리 구현체보다는 훨씬 빠르지만, 가변 크기라는 성질로 인해 JavaScript 32비트 정수보다는
항상 느릴 수밖에 없습니다.

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

## 인스턴스 속성

이 속성은 `DataView.prototype`에 정의되어 있으며 모든 `DataView` 인스턴스에 공유됩니다.

- {{jsxref("DataView.prototype.buffer")}}
  - : 이 뷰가 참조하는 {{jsxref("ArrayBuffer")}}입니다. 생성 시간에 값이 정해지기에 **읽기 전용**입니다.
- {{jsxref("DataView.prototype.byteLength")}}
  - : 이 뷰의 길이(바이트 단위)입니다. 생성 시간에 값이 정해지기에 **읽기 전용**입니다.
- {{jsxref("DataView.prototype.byteOffset")}}
  - : 이 뷰의 {{jsxref("ArrayBuffer")}}의 시작점부터의 오프셋(바이트 단위)입니다. 생성 시간에 값이 정해지기에 **읽기 전용**입니다.
- {{jsxref("Object/constructor", "DataView.prototype.constructor")}}
  - : 인스턴스 객체를 생성한 생성자 함수입니다. `DataView` 인스턴스의 경우 초기 값은 {{jsxref("DataView/DataView", "DataView")}} 생성자입니다.
- `DataView.prototype[@@toStringTag]`
  - : [`@@toStringTag`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 속성의 초기 값은 문자열 `"DataView"`입니다. 이 속성은 {{jsxref("Object.prototype.toString()")}}에서 사용됩니다.

## 인스턴스 메서드

- {{jsxref("DataView.prototype.getBigInt64()")}}
  - : 이 `DataView`의 특정 바이트 오프셋에서부터 8바이트를 읽어와서 64비트 부호 있는 정수로 해석합니다.
- {{jsxref("DataView.prototype.getBigUint64()")}}
  - : 이 `DataView`의 특정 바이트 오프셋에서부터 8바이트를 읽어와서 64비트 부호 없는 정수로 해석합니다.
- {{jsxref("DataView.prototype.getFloat32()")}}
  - : 이 `DataView`의 특정 바이트 오프셋에서부터 4바이트를 읽어와서 32비트 실수로 해석합니다.
- {{jsxref("DataView.prototype.getFloat64()")}}
  - : 이 `DataView`의 특정 바이트 오프셋에서부터 8바이트를 읽어와서 64비트 실수로 해석합니다.
- {{jsxref("DataView.prototype.getInt16()")}}
  - : 이 `DataView`의 특정 바이트 오프셋에서부터 2바이트를 읽어와서 16비트 부호 있는 정수로 해석합니다.
- {{jsxref("DataView.prototype.getInt32()")}}
  - : 이 `DataView`의 특정 바이트 오프셋에서부터 4바이트를 읽어와서 32비트 부호 있는 정수로 해석합니다.
- {{jsxref("DataView.prototype.getInt8()")}}
  - : 이 `DataView`의 특정 바이트 오프셋에서부터 1바이트를 읽어와서 8비트 부호 있는 정수로 해석합니다.
- {{jsxref("DataView.prototype.getUint16()")}}
  - : 이 `DataView`의 특정 바이트 오프셋에서부터 2바이트를 읽어와서 16비트 부호 없는 정수로 해석합니다.
- {{jsxref("DataView.prototype.getUint32()")}}
  - : 이 `DataView`의 특정 바이트 오프셋에서부터 4바이트를 읽어와서 32비트 부호 없는 정수로 해석합니다.
- {{jsxref("DataView.prototype.getUint8()")}}
  - : 이 `DataView`의 특정 바이트 오프셋에서부터 1바이트를 읽어와서 8비트 부호 없는 정수로 해석합니다.
- {{jsxref("DataView.prototype.setBigInt64()")}}
  - : BigInt를 받아 이 `DataView`의 지정된 바이트 오프셋에서 시작하여 8바이트의 공간에 64비트 부호 있는 정수로 저장합니다.
- {{jsxref("DataView.prototype.setBigUint64()")}}
  - : BigInt를 받아 이 `DataView`의 지정된 바이트 오프셋에서 시작하여 8바이트의 공간에 64비트 부호 없는 정수로 저장합니다.
- {{jsxref("DataView.prototype.setFloat32()")}}
  - : 숫자를 받아 이 `DataView`의 지정된 바이트 오프셋에서 시작하여 4바이트의 공간에 32비트 실수로 저장합니다.
- {{jsxref("DataView.prototype.setFloat64()")}}
  - : 숫자를 받아 이 `DataView`의 지정된 바이트 오프셋에서 시작하여 8바이트의 공간에 64비트 실수로 저장합니다.
- {{jsxref("DataView.prototype.setInt16()")}}
  - : 숫자를 받아 이 `DataView`의 지정된 바이트 오프셋에서 시작하여 2바이트의 공간에 16비트 부호 있는 정수로 저장합니다.
- {{jsxref("DataView.prototype.setInt32()")}}
  - : 숫자를 받아 이 `DataView`의 지정된 바이트 오프셋에서 시작하여 4바이트의 공간에 32비트 부호 있는 정수로 저장합니다.
- {{jsxref("DataView.prototype.setInt8()")}}
  - : 숫자를 받아 이 `DataView`의 지정된 바이트 오프셋에서 시작하여 1바이트의 공간에 8비트 부호 있는 정수로 저장합니다.
- {{jsxref("DataView.prototype.setUint16()")}}
  - : 숫자를 받아 이 `DataView`의 지정된 바이트 오프셋에서 시작하여 2바이트의 공간에 16비트 부호 없는 정수로 저장합니다.
- {{jsxref("DataView.prototype.setUint32()")}}
  - : 숫자를 받아 이 `DataView`의 지정된 바이트 오프셋에서 시작하여 4바이트의 공간에 32비트 부호 없는 정수로 저장합니다.
- {{jsxref("DataView.prototype.setUint8()")}}
  - : 숫자를 받아 이 `DataView`의 지정된 바이트 오프셋에서 시작하여 1바이트의 공간에 8비트 부호 있는 정수로 저장합니다.

## 예제

### DataView 사용하기

```js
const buffer = new ArrayBuffer(16);
const view = new DataView(buffer, 0);

view.setInt16(1, 42);
view.getInt16(1); // 42
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `DataView` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
