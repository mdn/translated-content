---
title: ArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer
l10n:
  sourceCommit: c9f7361807d9b0fbf0fcf0ccc5cc166bf33d307d
---

{{JSRef}}

**`ArrayBuffer`** 객체는 일반적인 원시 바이너리 데이터 버퍼를 표현하는 데 사용됩니다.

다른 언어에서는 종종 "바이트 배열"이라고 부르는 바이트 배열입니다. `ArrayBuffer`의 내용을 직접 수정하는 것은 불가능하지만, 대신 버퍼를 특정 형식으로 나타내는 [형식화 배열](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)이나 {{jsxref("DataView")}} 객체 중 하나를 생성하여, 이를 통해 버퍼의 내용을 읽거나 쓸 수 있습니다.

{{jsxref("ArrayBuffer.ArrayBuffer", "ArrayBuffer()")}} 생성자는 주어진 길이(바이트)를 가진 새로운 `ArrayBuffer`를 생성합니다. [Base64](/ko/docs/Glossary/Base64) 문자열이나 [로컬 파일](/ko/docs/Web/API/FileReader/readAsArrayBuffer)과 같은 기존 데이터에서도 배열 버퍼를 생성할 수 있습니다.

`ArrayBuffer`는 {{glossary("Transferable objects")}}입니다.

## 설명

### ArrayBuffers 크기 조절하기

`ArrayBuffer` 객체는 {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer()")}} 생성자를 호출할 때 `maxByteLength` 옵션을 포함하여 크기를 조정할 수 있도록 만들 수 있습니다. `ArrayBuffer`의 크기를 조정할 수 있는지 여부 그리고 최대 크기는 각각 {{jsxref("ArrayBuffer/resizable", "resizable")}}와 {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} 속성에 접근하여 질의 할 수 있습니다. {{jsxref("ArrayBuffer/resize", "resize()")}} 호출로 크기 조정이 가능한 `ArrayBuffer`에 새 크기를 할당할 수 있습니다. 새 바이트는 0으로 초기화됩니다.

이러한 기능을 사용하면 `ArrayBuffer`의 크기를 더 효율적으로 조정할 수 있습니다.
그렇지 않으면 새로운 크기로 버퍼의 복사본을 만들어야 합니다. 또한 이와 관련하여 WebAssembly와 JavaScript 패리티를 제공합니다(Wasm 선형 메모리는 [`WebAssembly.Memory.prototype.grow()`](/ko/docs/WebAssembly/JavaScript_interface/Memory/grow)로 크기를 조정할 수 있습니다).

### ArrayBuffers 전송하기

`ArrayBuffer` 객체는 [Web Workers](/ko/docs/Web/API/Web_Workers_API) 혹은 [서비스 워커](/ko/docs/Web/API/Service_Worker_API), [structured clone algorithm](/ko/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) 사용과 같이 각기 다른 실행 문맥 간에 전송될 수 있습니다. 이는 {{domxref("Worker.postMessage()")}} 혹은 {{domxref("ServiceWorker.postMessage()")}} 호출에서 [전송 가능한 객체](/ko/docs/Web/API/Web_Workers_API/Transferable_objects)로 `ArrayBuffer`를 전달함으로서 처리될 수 있습니다. 순수한 JavaScript에서는 {{jsxref("ArrayBuffer/transfer", "transfer()")}} 혹은 {{jsxref("ArrayBuffer/transferToFixedLength", "transferToFixedLength()")}} 메서드를 사용하여 메모리 소유권을 하나의 `ArrayBuffer`에서 다른 `ArrayBuffer`로 이전할 수도 있습니다.

`ArrayBuffer`가 전송되면 원본은 더 이상 사용할 수 없게 되는 분리 상태가 됩니다. 어느 순간에든 실제로 메모리에 접근할 수 있는 `ArrayBuffer`의 복사본은 하나만 존재하게 됩니다. 분리된 버퍼는 다음과 같은 동작을 합니다.

- {{jsxref("ArrayBuffer/byteLength", "byteLength")}}는 0이 됩니다(버퍼와 연관된 형식화 배열 뷰 모두에서).
- {{jsxref("ArrayBuffer/resize", "resize()")}}와 {{jsxref("ArrayBuffer/slice", "slice()")}}와 같은 메서드는 호출될 때 {{jsxref("TypeError")}}를 발생시킵니다. 연관된 타입이 지정된 배열 뷰의 메서드도 `TypeError`를 던집니다. 연관된 형식화 배열 뷰의 메서드 역시 `TypeError`를 발생시킵니다.

`ArrayBuffer`가 분리되었는지 여부는 {{jsxref("ArrayBuffer/detached", "detached")}} 속성으로 확인할 수 있습니다.

## 생성자

- {{jsxref("ArrayBuffer.ArrayBuffer", "ArrayBuffer()")}}
  - : 새로운 `ArrayBuffer` 객체를 생성합니다.

## 정적 속성

- {{jsxref("ArrayBuffer.@@species", "get ArrayBuffer[@@species]")}}
  - : 파생 객체를 만드는 데 사용되는 생성자 함수입니다.

## 정적 메서드

- {{jsxref("ArrayBuffer.isView()")}}
  - : `arg` 유형이 [형식화 배열 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)이거나 {{jsxref("DataView")}}와 같은 ArrayBuffer 중 하나인 경우, `true`를 반환합니다. 그렇지 않으면 `false`를 반환합니다.

## 인스턴스 속성

다음 속성은 `ArrayBuffer.prototype`에 정의되어 있으며 모든 `ArrayBuffer` 인스턴스와 공유됩니다.

- {{jsxref("ArrayBuffer.prototype.byteLength")}}
  - : ArrayBuffer의 읽기 전용 크기(바이트)입니다. 배열리 구성될 때 설정되며 변경할 수 없습니다.
- {{jsxref("ArrayBuffer.prototype.byteLength")}}
  - : `ArrayBuffer`의 바이트 단위의 크기입니다. 배열이 생성될 때 설정되며, `ArrayBuffer`의 크기를 변경할 수 있는 경우에만 {{jsxref("ArrayBuffer.prototype.resize()")}} 메서드를 사용하여 변경할 수 있습니다.
- {{jsxref("Object/constructor", "ArrayBuffer.prototype.constructor")}}
  - : 인스턴스 객체를 만드는 생성자 함수입니다. `ArrayBuffer` 인스턴스의 경우 {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer")}} 생성자가 초기 값입니다.
- {{jsxref("ArrayBuffer.prototype.detached")}}
  - : 읽기 전용입니다. 만약 `ArrayBuffer`가 분리(전송)되었다면 `true`를 반환하고 그렇지 않으면 `false`를 반환합니다.
- {{jsxref("ArrayBuffer.prototype.maxByteLength")}}
  - : `ArrayBuffer`의 크기가 조절 가능한 바이트 단위의 읽기 전용 최대 크기 입니다. 배열이 생성될때 설정되며 변경될 수 없습니다.
- {{jsxref("ArrayBuffer.prototype.resizable")}}
  - : 읽기 전용압니다. `ArrayBuffer`가 크기 조절이 가능하다면 `true`를 반환하고 그렇지 않으면 `false`를 반환합니다.
- `ArrayBuffer.prototype[@@toStringTag]`
  - : [`@@toStringTag`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 속성의 초기값은 문자열 `"ArrayBuffer"` 입니다. 이 속성은 {{jsxref("Object.prototype.toString()")}}에서 사용합니다.

## 인스턴스 메서드

- {{jsxref("ArrayBuffer.prototype.resize()")}}
  - : 바이트 단위의 `ArrayBuffer`의 크기를 지정된 크기로 재조정합니다.
- {{jsxref("ArrayBuffer.prototype.slice()")}}
  - : 이 `ArrayBuffer`의 `begin`을 포함한 지점부터 `end`미만의 바이트가 복사된 새 `ArrayBuffer`를 반환합니다. `begin` 또는 `end`가 음수라면 배열의 시작이 아닌 마지막 인덱스를 참조합니다.
- {{jsxref("ArrayBuffer.prototype.transfer()")}}
  - : 이 버퍼와 동일한 바이트 내용으로 새 `ArrayBuffer`를 생성합니다. 그 다음 이 버퍼를 분리합니다.
- {{jsxref("ArrayBuffer.prototype.transferToFixedLength()")}}
  - : 이 버퍼와 동일한 바이트 내용으로 크기 조절이 불가한 새 `ArrayBuffer`를 생성합니다. 그 다음 이 버퍼를 분리합니다.
- {{jsxref("ArrayBuffer.prototype.slice()")}}
  - : 컨텐츠의 `begin`을 포함한 지점부터 `end`미만까지 해당 `ArrayBuffer`의 바이트 복사본인 새 `ArrayBuffer`를 반환합니다. `begin` 또는 `end`가 음수이면 처음부터가 아니라 배열 끝에서 인덱스를 참조합니다.

## 예제

### ArrayBuffer 만들기

이 예에서는 버퍼를 참조하는 {{jsxref("Int32Array")}} 뷰가 있는 8바이트 버퍼를 만듭니다.

```js
const buffer = new ArrayBuffer(8);
const view = new Int32Array(buffer);
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `ArrayBuffer` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("SharedArrayBuffer")}}
- [RangeError: invalid array length](/ko/docs/Web/JavaScript/Reference/Errors/Invalid_array_length)
