---
title: JavaScript 형식화 배열
slug: Web/JavaScript/Guide/Typed_arrays
---

{{JsSidebar("Advanced")}}

JavaScript 형식화 배열(typed array)은 배열같은 객체이고 원시(raw) 이진 데이터에 액세스하기 위한 메커니즘을 제공합니다. 이미 아시다시피, {{jsxref("Array")}} 객체는 동적으로 늘었다 줄고 어떤 JavaScript 값이든 가질 수 있습니다. JavaScript 엔진은 이러한 배열이 빨라지도록 최적화를 수행합니다. 그러나, audio 및 video 조작과 같은 기능 추가, WebSocket을 사용한 원시 데이터에 액세스 등 웹 어플리케이션이 점점 더 강력해짐에 따라, 빠르고 쉽게 형식화 배열의 원시 이진 데이터를 조작할 수 있게 하는 것이 JavaScript 코드에 도움이 될 때가 있음이 분명해 졌습니다.

그러나, 형식화 배열은 보통 배열과 혼동되지는 않습니다, 형식화 배열에 {{jsxref("Array.isArray()")}} 호출은 `false`를 반환하기에. 게다가, 보통 배열에 이용할 수 있는 모든 메서드가 형식화 배열에 의해 지원되지는 않습니다(가령 push 및 pop).

## 버퍼 및 뷰: 형식화 배열 구조

최대 유연성 및 효율을 달성하기 위해, JavaScript 형식화 배열은 구현을 **버퍼** 및 **뷰**로 나눕니다. 버퍼 ({{jsxref("ArrayBuffer")}} 객체에 의해 구현됨)는 데이터 부분(chunk, 덩어리)을 나타내는 객체입니다; 이야기 할 형식이 없으며, 그 콘텐츠에 액세스하기 위한 메커니즘을 제공하지 않습니다. 버퍼에 포함된 메모리에 액세스하기 위해, 뷰를 사용할 필요가 있습니다. 뷰는 문맥(context, 즉 데이터 형, 시작 오프셋 및 요소 수)을 제공해 데이터를 실제 형식화 배열로 바꿉니다.

![Typed arrays in an ArrayBuffer](typed_arrays.png)

### ArrayBuffer

{{jsxref("ArrayBuffer")}}는 일반 고정 길이 이진 데이터 버퍼를 나타내는 데 사용되는 데이터 형입니다. `ArrayBuffer` 콘텐츠를 직접 조작할 수는 없습니다; 대신에, 형식화 배열 뷰 또는 특정 형식으로 버퍼를 나타내는 {{jsxref("DataView")}}를 만들어 버퍼의 콘텐츠를 읽고 쓰기 위해 사용합니다.

### 형식화 배열 뷰

형식화 배열 뷰는 자체 설명형 이름이 있으며 `Int8`, `Uint32`, `Float64` 등과 같은 모든 일반 숫자 형을 위한 뷰를 제공합니다. 특별한 형식화 배열 뷰가 하나 있습니다, `Uint8ClampedArray`. 값은 0에서 255 사이로 단속(제한)합니다. 예를 들어, 이는 [Canvas 데이터 처리](/ko/docs/Web/API/ImageData)에 유용합니다.

| Type                            | Value Range                                                     | Size in bytes | Description                                                                  | Web IDL type          | Equivalent C type               |
| ------------------------------- | --------------------------------------------------------------- | ------------- | ---------------------------------------------------------------------------- | --------------------- | ------------------------------- |
| {{jsxref("Int8Array")}}         | `-128` to `127`                                                 | 1             | 8-bit two's complement signed integer                                        | `byte`                | `int8_t`                        |
| {{jsxref("Uint8Array")}}        | `0` to `255`                                                    | 1             | 8-bit unsigned integer                                                       | `octet`               | `uint8_t`                       |
| {{jsxref("Uint8ClampedArray")}} | `0` to `255`                                                    | 1             | 8-bit unsigned integer (clamped)                                             | `octet`               | `uint8_t`                       |
| {{jsxref("Int16Array")}}        | `-32768` to `32767`                                             | 2             | 16-bit two's complement signed integer                                       | `short`               | `int16_t`                       |
| {{jsxref("Uint16Array")}}       | `0` to `65535`                                                  | 2             | 16-bit unsigned integer                                                      | `unsigned short`      | `uint16_t`                      |
| {{jsxref("Int32Array")}}        | `-2147483648` to `2147483647`                                   | 4             | 32-bit two's complement signed integer                                       | `long`                | `int32_t`                       |
| {{jsxref("Uint32Array")}}       | `0` to `4294967295`                                             | 4             | 32-bit unsigned integer                                                      | `unsigned long`       | `uint32_t`                      |
| {{jsxref("Float32Array")}}      | `-3.4E38` to `3.4E38` and `1.2E-38` is the min positive number  | 4             | 32-bit IEEE floating point number (7 significant digits e.g., `1.123456`)    | `unrestricted float`  | `float`                         |
| {{jsxref("Float64Array")}}      | `-1.8E308` to `1.8E308` and `5E-324` is the min positive number | 8             | 64-bit IEEE floating point number (16 significant digits e.g., `1.123...15`) | `unrestricted double` | `double`                        |
| {{jsxref("BigInt64Array")}}     | `-2^63` to `2^63 - 1`                                           | 8             | 64-bit two's complement signed integer                                       | `bigint`              | `int64_t (signed long long)`    |
| {{jsxref("BigUint64Array")}}    | `0` to `2^64 - 1`                                               | 8             | 64-bit unsigned integer                                                      | `bigint`              | `uint64_t (unsigned long long)` |

### DataView

{{jsxref("DataView")}}는 버퍼에 임의 데이터를 읽고 쓰기 위해 getter/setter API를 제공하는 저레벨 인터페이스입니다. 예를 들어, 서로 다른 유형의 데이터를 처리하는 경우 유용합니다. 형식화 배열 뷰는 플랫폼의 본디(native) 바이트 순서(byte-order, {{Glossary("Endianness")}} 참조)에 속합니다. `DataView`로 바이트 순서를 제어할 수 있습니다. 기본으로 big-endian이고 getter/setter 메서드로 little-endian으로 설정될 수 있습니다.

## 형식화 배열을 사용하는 웹 API

- [`FileReader.prototype.readAsArrayBuffer()`](</ko/docs/Web/API/FileReader#readAsArrayBuffer()>)
  - : `FileReader.prototype.readAsArrayBuffer()` 메서드는 지정된 [`Blob`](/ko/docs/Web/API/Blob) 또는 [`File`](/ko/docs/Web/API/File)의 콘텐츠를 읽기 시작합니다.
- [`XMLHttpRequest.prototype.send()`](</ko/docs/Web/API/XMLHttpRequest#send()>)
  - : `XMLHttpRequest` 인스턴스의 `send()` 메서드는 이제 형식화 배열 및 인수로 {{jsxref("ArrayBuffer")}} 객체를 지원합니다.
- [`ImageData.data`](/ko/docs/Web/API/ImageData)
  - : `0`에서 `255`까지 정수값으로 RGBA 순 데이터를 포함하는 1차원 배열을 나타내는 {{jsxref("Uint8ClampedArray")}}입니다.

## 예

### 버퍼와 뷰 사용하기

우선, 여기서 16바이트 고정 길이로 버퍼를 만들어야 합니다:

```js
var buffer = new ArrayBuffer(16);
```

이 시점에서, 바이트가 모두 0으로 미리 초기화된 메모리 덩어리가 있습니다. 그렇지만 이거 가지고 할 수 있는 게 많지 않습니다. 실제 16바이트 길이인지 확인할 수 있고 대략 그런 정도입니다:

```js
if (buffer.byteLength === 16) {
  console.log("Yes, it's 16 bytes.");
} else {
  console.log("Oh no, it's the wrong size!");
}
```

정말 이 버퍼로 작업할 수 있기 전에, 뷰를 만들어야 합니다. 32비트 부호있는 정수 배열로 버퍼의 데이터를 다루는 뷰를 만듭시다:

```js
var int32View = new Int32Array(buffer);
```

이제 보통 배열처럼 배열 내 필드에 액세스할 수 있습니다:

```js
for (var i = 0; i < int32View.length; i++) {
  int32View[i] = i * 2;
}
```

이는 배열의 4항목을 값 0, 2, 4 및 6으로 채웁니다 (4항목이 각각 4바이트에 총 16바이트가 됩니다).

### 같은 데이터에 여러 뷰

상황은 당신이 같은 데이터에 여러 뷰를 만들 수 있음을 고려하는 경우 정말 흥미로워지기 시작합니다. 예를 들어, 위 코드가 주어지면 다음과 같이 계속할 수 있습니다:

```js
var int16View = new Int16Array(buffer);

for (var i = 0; i < int16View.length; i++) {
  console.log("Entry " + i + ": " + int16View[i]);
}
```

여기서 우리는 기존 32비트 뷰와 같은 버퍼를 공유하는 16비트 정수 뷰를 만들고 16비트 정수로 버퍼 내 모든 값을 출력합니다. 이제 우리는 출력 0, 0, 2, 0, 4, 0, 6, 0을 얻습니다.

그렇지만 한 단계 더 앞으로 갈 수 있습니다. 다음을 생각해 보세요:

```js
int16View[0] = 32;
console.log("Entry 0 in the 32-bit array is now " + int32View[0]);
```

이로부터 출력은 "Entry 0 in the 32-bit array is now 32"입니다. 즉, 두 배열은 확실히 그저 같은 데이터 버퍼 상의 뷰입니다, 버퍼를 서로 다른 형식으로 다루는. 모든 [뷰 유형](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects)으로 이를 할 수 있습니다.

### 복잡한 데이터 구조(체)와 작업하기

단일 버퍼를 서로 다른 형인 여러 뷰(버퍼 내 서로 다른 오프셋에서 시작하는)와 결합시켜, 여러 데이터 형을 포함하는 데이터 객체와 상호 작용할 수 있습니다. 예를 들어, 이는 [WebGL](/ko/docs/Web/WebGL), 데이터 파일 또는 [js-ctypes](/ko/docs/Mozilla/js-ctypes)를 쓰는 동안 사용해야 하는 C 구조체에서 복잡한 데이터 구조와 상호 작용케 합니다.

이 C 구조체를 생각해 보세요:

```cpp
struct someStruct {
  unsigned long id;
  char username[16];
  float amountDue;
};
```

이 같은 형식으로 데이터를 포함하는 버퍼에 액세스할 수 있습니다:

```js
var buffer = new ArrayBuffer(24);

// ... 버퍼 내의 데이터를 읽어들임 ...

var idView = new Uint32Array(buffer, 0, 1);
var usernameView = new Uint8Array(buffer, 4, 16);
var amountDueView = new Float32Array(buffer, 20, 1);
```

그런 뒤, 예를 들어 `amountDueView[0]`로 지불할 요금(amount due)을 액세스할 수 있습니다.

> **참고:** **주의:** C 구조체에서 [데이터 구조 정렬](http://en.wikipedia.org/wiki/Data_structure_alignment)은 플랫폼에 의존합니다. 이러한 패딩(padding) 차이에 대해 조심하고 고려하세요.

### 보통 배열로 변환

형식화 배열을 처리한 뒤, 때때로 {{jsxref("Array")}} 프로토타입의 도움을 받기 위해 보통 배열로 다시 변환하는 게 유용합니다. 이는 {{jsxref("Array.from")}} 또는 `Array.from`이 지원되지 않는 경우 다음 코드를 사용하여 수행할 수 있습니다.

```js
var typedArray = new Uint8Array([1, 2, 3, 4]),
  normalArray = Array.prototype.slice.call(typedArray);
normalArray.length === 4;
normalArray.constructor === Array;
```

## 참조

- [*Base64*로 인코딩된 문자열에서 `ArrayBuffer` 또는 형식화 배열 얻기](/ko/docs/Web/JavaScript/Base64_encoding_and_decoding#Appendix.3A_Decode_a_Base64_string_to_Uint8Array_or_ArrayBuffer)
- [`StringView` - 형식화 배열에 기반을 둔 문자열의 C-like 표현](/ko/docs/Code_snippets/StringView)
- [형식화 배열로 빠른 Canvas 픽셀 조작](https://hacks.mozilla.org/2011/12/faster-canvas-pixel-manipulation-with-typed-arrays)
- [형식화 배열: 브라우저에서 이진 데이터](http://www.html5rocks.com/en/tutorials/webgl/typed_arrays)
- {{Glossary("Endianness")}}
