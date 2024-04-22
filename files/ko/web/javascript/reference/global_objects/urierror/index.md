---
title: URIError
slug: Web/JavaScript/Reference/Global_Objects/URIError
---

{{JSRef}}

**`URIError`** 객체는 전역 URI 핸들링 함수가 잘못된 방식으로 사용되었을 때의 오류를 표현합니다.

## 생성자

- {{jsxref("Global_Objects/URIError/URIError", "URIError()")}}
  - : 새로운 `URIError` 객체를 만듭니다.

## 인스턴스 속성

- {{jsxref("Error.prototype.message", "URIError.prototype.message")}}
  - : 오류 메시지. 비록 ECMA-262에서 {{jsxref("RangeError")}}는 반드시 자체 `message` 속성을 제공해야한다고 명시했지만,
    [SpiderMonkey](/ko/docs/Mozilla/Projects/SpiderMonkey)는 {{jsxref("Error.prototype.message")}}를 상속합니다.
- {{jsxref("Error.prototype.name", "URIError.prototype.name")}}
  - : 오류 이름. {{jsxref("Error")}}로부터 상속되었습니다.
- {{jsxref("Error.prototype.fileName", "URIError.prototype.fileName")}}
  - : 오류가 발생한 파일 경로. {{jsxref("Error")}}로부터 상속되었습니다.
- {{jsxref("Error.prototype.lineNumber", "URIError.prototype.lineNumber")}}
  - : 오류가 발생한 곳의 줄 위치. {{jsxref("Error")}}로부터 상속되었습니다.
- {{jsxref("Error.prototype.columnNumber", "URIError.prototype.columnNumber")}}
  - : 오류가 발생한 곳의 열 위치. {{jsxref("Error")}}로부터 상속되었습니다.
- {{jsxref("Error.prototype.stack", "URIError.prototype.stack")}}
  - : 스택 추적. {{jsxref("Error")}}로부터 상속되었습니다.

## 예제

### URIError 잡아내기

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
