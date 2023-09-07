---
title: ArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer
---

{{JSRef}}

**`ArrayBuffer`** 객체는 일반적인 고정 길이 원시 이진 데이터 버퍼를 나타냅니다.

ArrayBuffer는 바이트로 구성된 배열로, 다른 언어에서는 종종 "바이트 배열"이라고 부릅니다. `ArrayBuffer`에 담긴 정보를 직접 수정하는 것은 불가능하지만, 대신 [형식화 배열](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)이나 {{jsxref("DataView")}} 객체를 통해 버퍼를 특정 형식으로 나타내고, 이를 통해 버퍼의 내용을 읽거나 쓸 수 있습니다.

{{jsxref("ArrayBuffer.ArrayBuffer", "ArrayBuffer()")}} 생성자는 주어진 길이(바이트)를 가진 새로운 `ArrayBuffer`를 생성합니다. [Base64](/ko/docs/Glossary/Base64) 문자열이나 [로컬 파일](/ko/docs/Web/API/FileReader/readAsArrayBuffer)과 같은 기존 데이터에서도 배열 버퍼를 생성할 수 있습니다.

`ArrayBuffer`는 {{glossary("Transferable objects")}}입니다.

## 생성자

- {{jsxref("ArrayBuffer.ArrayBuffer", "ArrayBuffer()")}}
  - : 새로운 `ArrayBuffer` 객체를 생성합니다.

## 정적 속성

- {{jsxref("ArrayBuffer.@@species", "get ArrayBuffer[@@species]")}}
  - : 파생 개체를 만드는 데 사용되는 생성자 함수입니다.

## 정적 메서드

- {{jsxref("ArrayBuffer.isView", "ArrayBuffer.isView(<var>arg</var>)")}}
  - : `arg` 유형이 [형식화 배열 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)이거나 {{jsxref("DataView")}}와 같은 ArrayBuffer 중 하나인 경우, `true`를 반환합니다. 그렇지 않으면 `false`를 반환합니다.

## 인스턴스 속성

- {{jsxref("ArrayBuffer.prototype.byteLength")}}
  - : ArrayBuffer의 읽기 전용 크기(바이트)입니다. 배열리 구성될 때 설정되며 변경할 수 없습니다.

## 인스턴스 메서드

- {{jsxref("ArrayBuffer.prototype.slice()")}}
  - : 컨탠츠의 `begin`(포함)부터 `end`(제외)까지 해당 `ArrayBuffer`의 바이트 복사본인 새 `ArrayBuffer`를 반환합니다. `begin` 또는 `end`가 음수이면 처음부터가 아니라 배열 끝에서 인덱스를 참조합니다.

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
- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("SharedArrayBuffer")}}
- [RangeError: invalid array length](/ko/docs/Web/JavaScript/Reference/Errors/Invalid_array_length)
