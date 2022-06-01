---
title: Error.prototype.lineNumber
slug: Web/JavaScript/Reference/Global_Objects/Error/lineNumber
tags:
  - JavaScript
  - Non-standard
  - Property
  - Prototype
  - Reference
browser-compat: javascript.builtins.Error.lineNumber
---
{{JSRef}} {{non-standard_header}}

**`lineNumber`** 속성은 이 오류가 발생한 파일의 행 번호를 포함합니다.

## 예제

### lineNumber 사용하기

```js
var e = new Error('Could not parse input');
throw e;
console.log(e.lineNumber) // 2
```

### 오류 이벤트를 사용하는 또 다른 예제

```js
window.addEventListener('error', function(e) {
  console.log(e.lineNumber); // 5
});
var e = new Error('Could not parse input');
throw e;
```

이는 표준 기능이 아니며 광범위하게 지원되지 않습니다. 아래 브라우저 호환성 표를 참고하십시오.

## 명세

표준의 일부가 아닙니다.

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Error.prototype.stack")}}
- {{jsxref("Error.prototype.columnNumber")}}
- {{jsxref("Error.prototype.fileName")}}
