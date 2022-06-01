---
title: Blob()
slug: Web/API/Blob/Blob
tags:
  - API
  - Blob
  - Constructor
  - File API
  - Reference
browser-compat: api.Blob.Blob
translation_of: Web/API/Blob/Blob
---
{{APIRef("File API")}}

**`Blob()`** 생성자는 새로운 {{domxref("Blob")}} 객체를 반환합니다. 반환하는 블롭의 데이터는 `array` 매개변수에 제공한 배열을 이어붙인 값입니다.

## 구문

```js
new Blob(array);
new Blob(array, options);
```

### 매개변수

- `array`
  - : {{jsxref("ArrayBuffer")}}, {{domxref("ArrayBufferView")}}, {{domxref("Blob")}}, {{domxref("USVString")}} 또는 이 값들을 혼합해 구성한 {{jsxref("Array")}}입니다. {{domxref("Blob")}}의 데이터를 구성하게 됩니다. `USVString`은 UTF-8로 인코딩됩니다.
- `options` {{optional_inline}}
  - : 다음 속성을 지정할 수 있는 {{domxref("BlobPropertyBag")}} 객체입니다.
    - `type` {{optional_inline}}
      - : 블롭에 저장할 데이터의 {{Glossary("MIME type", "MIME 유형")}}입니다. 기본 값은 빈 문자열(`''`)입니다.
    - `endings` {{optional_inline}} {{non-standard_inline}}
      - : 데이터가 텍스트일 때, 개행 문자(`\n`)를 어떻게 해석할지 지정합니다. 기본 값인 `transparent`는 개행 문자를 바꾸지 않고 블롭 데이터로 복사합니다. `native`를 지정하면 호스트 시스템 컨벤션에 맞춰서 변환합니다.

### 반환 값

지정한 데이터를 담은 새로운 {{domxref("Blob")}} 객체.

## 예제

```js
const array = ['<a id="a"><b id="b">hey!</b></a>']; // 하나의 DOMString을 포함한 배열
const blob = new Blob(array, {type : 'text/html'}); // 생성한 블롭
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}