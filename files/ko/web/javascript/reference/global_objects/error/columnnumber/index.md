---
title: Error.prototype.columnNumber
slug: Web/JavaScript/Reference/Global_Objects/Error/columnNumber
tags:
  - JavaScript
  - Non-standard
  - Property
  - Prototype
browser-compat: javascript.builtins.Error.columnNumber
---
{{JSRef}} {{non-standard_header}}

**`columnNumber`** 속성은 이 오류가 발생한 파일의 행의 열 번호를 포함합니다.

## 예제

### columnNumber 사용하기

```js
var e = new Error('Could not parse input');
throw e;
console.log(e.columnNumber) // 0
```

## 명세

표준의 일부가 아닙니다.

## 브라우저 호환성

{{Compat}}

## See also

- {{jsxref("Error.prototype.stack")}}
- {{jsxref("Error.prototype.lineNumber")}}
- {{jsxref("Error.prototype.fileName")}}
