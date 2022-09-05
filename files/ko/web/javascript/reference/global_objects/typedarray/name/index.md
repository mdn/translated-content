---
title: TypedArray.name
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/name
---
{{JSRef}}

<code><strong><em>TypedArray</em>.name</strong></code> 속성은 형식화 배열 생성자 이름의 문자열 값을 나타냅니다.

{{EmbedInteractiveExample("pages/js/typedarray-name.html")}}{{js_property_attributes(0,0,0)}}

## 설명

TypedArray 객체는 요소 당 바이트 수 및 바이트가 해석되는 방법으로 서로 다릅니다. `name` 속성은 어떤 데이터 형이 배열을 구성하는 지를 기술합니다. 첫 번째 부분은 "정수"용 `Int` 또는 "부호 없는 정수"용 `Uint`일 수 있습니다, "부동 소수점"용 `Float`도 쓰입니다 . 두 번째 부분은 배열의 비트 크기를 기술하는 숫자입니다. 끝으로, 객체 형은 `Array`입니다, 특수한 경우로 `ClampedArray`가 있는. 자세한 사항은 {{jsxref("Uint8ClampedArray")}}를 참조해 주세요.

## 예제

```js
Int8Array.name;         // "Int8Array"
Uint8Array.name;        // "Uint8Array"
Uint8ClampedArray.name; // "Uint8ClampedArray"
Int16Array.name;        // "Int16Array"
Uint16Array.name;       // "Uint16Array"
Int32Array.name;        // "Int32Array"
Uint32Array.name;       // "Uint32Array"
Float32Array.name;      // "Float32Array"
Float64Array.name;      // "Float64Array"
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("TypedArray")}}
