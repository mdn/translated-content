---
title: btoa()
slug: Web/API/btoa
page-type: web-api-global-function
tags:
  - API
  - HTML DOM
  - Method
  - Reference
  - Polyfill
  - Web
browser-compat: api.btoa
translation_of: Web/API/btoa
---
{{APIRef("HTML DOM")}}

**`btoa()`** 함수는 [이진 문자열](/ko/docs/Web/API/DOMString/Binary)({{jsxref("String")}} 객체 내 모든 문자가 이진 데이터의 바이트 한 개)로부터 {{glossary("Base64")}} 인코딩된 ASCII 문자열을 생성해 반환합니다.

ASCII 값 0부터 31까지의 제어 문자처럼 통신에 사용하면 문제가 발생할 수 있는 데이터를 `btoa()`로 인코딩해 전송하고, 받는 쪽에서는 {{domxref("atob", "atob()")}}로 디코딩하면 문제 없이 원래 데이터를 가져올 수 있습니다.

## 구문

```js
btoa(stringToEncode)
```

### 매개변수

- `stringToEncode`
  - : 인코딩할 [이진 문자열](/ko/docs/Web/API/DOMString/Binary)입니다.

### 반환 값

`stringToEncode`를 Base64로 표현한 ASCII 문자열.

### 예외

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : 문자열이 바이트 한 개로 표현할 수 없는 문자를 포함하고 있으면 발생합니다. 자세한 정보는 아래의 "유니코드 문자열"을 참고하세요.

## 예제

```js
const encodedData = btoa('Hello, world'); // 문자열 인코딩
const decodedData = atob(encodedData); // 문자열 디코딩
```

## 유니코드 문자열

`btoa()` 함수는 매개변수로 JavaScript 문자열을 받습니다. JavaScript에서는 문자열을 UTF-16 인코딩으로 표현하는데, UTF-16은 문자열을 16비트 (2바이트) 단위의 시퀀스로 나타냅니다. 모든 ASCII 문자는 단위 하나의 앞쪽 바이트만으로 표현할 수 있지만, 많은 수의 다른 문자들은 두 바이트를 모두 사용해야 합니다.

Base64는 이진 데이터를 입력으로 받도록 설계됐습니다. JavaScript 문자열로 얘기하자면 모든 문자가 바이트를 하나씩만 차지하는 경우를 의미합니다. 따라서 `btoa()`에 2바이트 문자를 포함한 문자열을 제공하면 오류가 발생합니다. 그런 문자열은 이진 데이터라고 하지 않기 때문입니다.

```js
const ok = "a";
console.log(ok.codePointAt(0).toString(16)); // 61: 1바이트 미만

const notOK = "✓"
console.log(notOK.codePointAt(0).toString(16)); // 2713: 1바이트 초과

console.log(btoa(ok));    // YQ==
console.log(btoa(notOK)); // 오휴
```

`btoa()`를 사용해서 유니코드 텍스트를 ASCII로 인코딩해야 할 때 사용할 수 있는 방법 한 가지는, 문자열의 각 16비트 단위가 한 바이트씩 차지하도록 먼저 변환하는 것입니다.

```js
// Unicode 문자열의 16비트 단위가 한 바이트씩 차지하도록 변환
function toBinary(string) {
  const codeUnits = new Uint16Array(string.length);
  for (let i = 0; i < codeUnits.length; i++) {
    codeUnits[i] = string.charCodeAt(i);
  }
  const charCodes = new Uint8Array(codeUnits.buffer);
  let result = '';
  for (let i = 0; i < charCodes.byteLength; i++) {
    result += String.fromCharCode(charCodes[i]);
  }
  return result;
}

// 1바이트를 초과하는 문자를 포함하는 문자열
const myString = "☸☹☺☻☼☾☿";

const converted = toBinary(myString);
const encoded = btoa(converted);
console.log(encoded);                 // OCY5JjomOyY8Jj4mPyY=
```

물론 이렇게 되면 디코딩한 문자열에 역변환까지 해야 원래의 문자열을 구할 수 있습니다.

```js
function fromBinary(binary) {
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  const charCodes = new Uint16Array(bytes.buffer);
  let result = '';
  for (let i = 0; i < charCodes.length; i++) {
    result += String.fromCharCode(charCodes[i]);
  }
  return result;
}

const decoded = atob(encoded);
const original = fromBinary(decoded);
console.log(original);                // ☸☹☺☻☼☾☿
```

용어집 {{glossary("Base64")}} 항목, [해결책 #1 – 인코딩 전에 문자열 이스케이핑](/ko/docs/Glossary/Base64#solution_1_%E2%80%93_escaping_the_string_before_encoding_it)의 예제 코드 `utf8_to_b64`와 `b64_to_utf8` 함수도 참고하세요.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`](https://github.com/zloirock/core-js)의 [`btoa` 폴리필](https://github.com/zloirock/core-js#base64-utility-methods)
- [`data` URL](/ko/docs/Web/HTTP/Basics_of_HTTP/Data_URLs)
- {{domxref("atob","atob()")}}
- {{Glossary("Base64")}}
