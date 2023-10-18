---
title: URIError() constructor
slug: Web/JavaScript/Reference/Global_Objects/URIError/URIError
---

{{JSRef}}

**`URIError()`** 생성자는 전역 URI 핸들링 함수가 잘못 사용될 때 오류를 생성합니다.

## 구문

```js
new URIError();
new URIError(message);
new URIError(message, fileName);
new URIError(message, fileName, lineNumber);
```

### 매개변수

- `message` {{optional_inline}}
  - : 사람이 읽을 수 있는 에러에 대한 설명.
- `fileName` {{optional_inline}}
  - : 예외를 일으킨 코드가 들어있는 파일 이름.
- `lineNumber` {{optional_inline}}
  - : 예외를 일으킨 코드의 줄 수.

## 예제

### URIError 잡기

```js
try {
  decodeURIComponent("%");
} catch (e) {
  console.log(e instanceof URIError); // true
  console.log(e.message); // "malformed URI sequence"
  console.log(e.name); // "URIError"
  console.log(e.fileName); // "Scratchpad/1"
  console.log(e.lineNumber); // 2
  console.log(e.columnNumber); // 2
  console.log(e.stack); // "@Scratchpad/2:2:3\n"
}
```

### URIError 생성하기

```js
try {
  throw new URIError("Hello", "someFile.js", 10);
} catch (e) {
  console.log(e instanceof URIError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "URIError"
  console.log(e.fileName); // "someFile.js"
  console.log(e.lineNumber); // 10
  console.log(e.columnNumber); // 0
  console.log(e.stack); // "@Scratchpad/2:2:9\n"
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Error")}}
- {{jsxref("Global_Objects/decodeURI", "decodeURI()")}}
- {{jsxref("Global_Objects/decodeURIComponent", "decodeURIComponent()")}}
- {{jsxref("Global_Objects/encodeURI", "encodeURI()")}}
- {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent()")}}
