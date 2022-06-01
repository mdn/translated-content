---
title: Error.prototype.fileName
slug: Web/JavaScript/Reference/Global_Objects/Error/fileName
tags:
  - JavaScript
  - Non-standard
  - Property
  - Prototype
browser-compat: javascript.builtins.Error.fileName
---
{{JSRef}} {{non-standard_header}}

**`fileName`** 속성은 이 오류가 발생한 파일의 경로를 포함합니다.

## 설명

이 비표준 속성은 이 오류가 발생한 파일의 경로를 포함합니다. 디버거 컨텍스트(예를 들어 Firefox 개발자 도구)에서 호출할 경우, "debugger eval code" 가 반환됩니다.

## 예제

### fileName 사용하기

```js
var e = new Error('Could not parse input');
throw e;
// e.fileName could look like "file:///C:/example.html"
```

## 명세

표준의 일부가 아닙니다.

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Error.prototype.stack")}}
- {{jsxref("Error.prototype.columnNumber")}}
- {{jsxref("Error.prototype.lineNumber")}}
