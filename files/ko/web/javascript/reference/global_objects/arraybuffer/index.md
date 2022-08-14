---
title: ArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer
tags:
  - ArrayBuffer
  - JavaScript
  - Reference
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/ArrayBuffer
---
{{JSRef}}

**`ArrayBuffer`** 객체는 일반적인 고정 길이 원시 이진 데이터 버퍼를 나타냅니다.

ArrayBuffer는 바이트로 구성된 배열로, 다른 언어에서는 종종 "바이트 배열"이라고 부릅니다. `ArrayBuffer`에 담긴 정보를 직접 수정하는 것은 불가능하지만, 대신 [형식화 배열](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)이나 {{jsxref("DataView")}} 객체를 통해 버퍼를 특정 형식으로 나타내고, 이를 통해 버퍼의 내용을 읽거나 쓸 수 있습니다.

{{jsxref("ArrayBuffer.ArrayBuffer", "ArrayBuffer()")}} 생성자는 주어진 길이를 가진 새로운 `ArrayBuffer`를 생성합니다. 또한 Base64 문자열이나 [로컬 파일](/ko/docs/Web/API/FileReader/readAsArrayBuffer)처럼 기존 데이터에서 배열 버퍼를 생성할 수도 있습니다.

## 생성자

- {{jsxref("ArrayBuffer.ArrayBuffer", "ArrayBuffer()")}}
  - : 새로운 `ArrayBuffer` 객체를 생성합니다.

## 속성

- `ArrayBuffer.length`
  - : `ArrayBuffer` 생성자의 길이 속성으로, 값은 1입니다.
- {{jsxref("ArrayBuffer.@@species", "get ArrayBuffer[@@species]")}}
  - : 파생 객체를 생성할 때 사용할 생성자 함수입니다.
- `ArrayBuffer.prototype`
  - : 모든 `ArrayBuffer` 객체에 속성을 추가할 수 있습니다.

## 메서드

- {{jsxref("ArrayBuffer.isView()")}}
  - : 주어진 매개변수가 [형식화 배열](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) 객체 또는 {{jsxref("DataView")}}와 같은 `ArrayBuffer`의 뷰면 `true`를, 아니면 `false`를 반환합니다.
- {{jsxref("ArrayBuffer.transfer()")}} {{experimental_inline}}
  - : 주어진 버퍼의 내용으로 새로운 버퍼를 만들고, 그 길이를 지정한 길이만큼 자르거나 확장(0 초기화)한 후 반환합니다.

## 인스턴스

모든 `ArrayBuffer` 인스턴스는 `ArrayBuffer.prototype`을 상속합니다.

### 속성

- `ArrayBuffer.prototype.constructor`
  - : 객체의 프로토타입을 생성하는 함수를 지정합니다. 초깃값은 내장 `ArrayBuffer` 생성자입니다.
- {{jsxref("ArrayBuffer.prototype.byteLength")}} {{readonlyInline}}
  - : `ArrayBuffer`의 바이트 길이입니다. 처음 생성 시 정해지며 변경할 수 없습니다.

### 메서드

- {{jsxref("ArrayBuffer.prototype.slice()")}}
  - : `ArrayBuffer`를 지정한 위치에서 잘라낸 새로운 `ArrayBuffer`를 반환합니다.

## 예제

다음 코드는 8바이트 버퍼를 생성하고, {{jsxref("Global_Objects/Int32Array", "Int32Array")}} 뷰로 그 버퍼를 참조합니다.

```js
const buffer = new ArrayBuffer(8);
const view = new Int32Array(buffer);
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("SharedArrayBuffer")}}
