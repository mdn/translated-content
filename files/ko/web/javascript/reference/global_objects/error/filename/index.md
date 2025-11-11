---
title: "Error: fileName"
slug: Web/JavaScript/Reference/Global_Objects/Error/fileName
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}} {{Non-standard_Header}}

{{jsxref("Error")}} 인스턴스의 **`fileName`** 데이터 속성은 이 오류가 발생한 파일의 경로를 포함합니다.

## 값

문자열.

{{js_property_attributes(1, 0, 1)}}

## 설명

이 비표준 속성은 이 오류가 발생한 파일의 경로를 포함합니다. 디버거 컨텍스트(예를 들어 Firefox 개발자 도구)에서 호출할 경우, "debugger eval code" 가 반환됩니다.

## 예제

### fileName 사용하기

```js
const e = new Error("Could not parse input");
throw e;
// e.fileName은 "file:///C:/example.html" 처럼 보일 수 있습니다.
```

## 명세

표준의 일부가 아닙니다.

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Error.prototype.stack")}}
- {{jsxref("Error.prototype.columnNumber")}}
- {{jsxref("Error.prototype.lineNumber")}}
