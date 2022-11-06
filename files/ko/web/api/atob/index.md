---
title: atob()
slug: Web/API/atob
page-type: web-api-global-function
tags:
  - API
  - HTML DOM
  - Method
  - Reference
  - Polyfill
  - Web
browser-compat: api.atob
translation_of: Web/API/atob
---
{{APIRef("HTML DOM")}}

**`atob()`** 함수는 {{glossary("Base64")}} 인코딩된 문자열 데이터를 디코딩합니다. ASCII 값 0부터 31까지의 제어 문자처럼 통신에 사용하면 문제가 발생할 수 있는 데이터를 {{domxref("btoa", "btoa()")}}로 인코딩해 전송하고, 받는 쪽에서는 `atob()`로 디코딩하면 문제 없이 원래 데이터를 가져올 수 있습니다.

유니코드 또는 UTF-8 문자열의 인코딩/디코딩에 대해서는 {{domxref("btoa", "btoa()")}} 문서의 "유니코드 문자열" 부분을 참고하세요.

## 구문

```js
atob(encodedData)
```

### 매개변수

- `encodedData`
  - : base64 인코딩된 데이터를 담은 [이진 문자열](/ko/docs/Web/API/DOMString/Binary)입니다.

### 반환 값

`encodedData`를 디코딩한 ASCII 문자열.

### 예외

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : `encodedData`가 유효한 base64 데이터가 아니면 발생합니다.

## 예제

```js
const encodedData = btoa('Hello, world'); // 문자열 인코딩
const decodedData = atob(encodedData); // 문자열 디코딩
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`](https://github.com/zloirock/core-js)의 [`atob` 폴리필](https://github.com/zloirock/core-js#base64-utility-methods)
- [`data` URL](/ko/docs/Web/HTTP/Basics_of_HTTP/Data_URLs)
- {{domxref("btoa","btoa()")}}
