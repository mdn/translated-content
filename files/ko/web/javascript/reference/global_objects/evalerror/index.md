---
title: EvalError
slug: Web/JavaScript/Reference/Global_Objects/EvalError
---

{{JSRef}}

**`EvalError`** 객체는 전역 {{jsxref("Global_Objects/eval", "eval()")}} 함수에 관한 오류를 나타냅니다. 이 예외는 JavaScript에 의해 더 이상 발생하지 않지만 `EvalError` 객체는 하위 호환성을 위해 남아있습니다.

## Constructor

- {{jsxref("EvalError/EvalError", "EvalError()")}}
  - : Creates a new `EvalError` object.

## Instance properties

- {{jsxref("Error.prototype.message", "EvalError.prototype.message")}}
  - : Error message.
- {{jsxref("Error.prototype.name", "EvalError.prototype.name")}}
  - : Error name. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.fileName", "EvalError.prototype.fileName")}}
  - : Path to file that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.lineNumber", "EvalError.prototype.lineNumber")}}
  - : Line number in file that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.columnNumber", "EvalError.prototype.columnNumber")}}
  - : Column number in line that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.stack", "EvalError.prototype.stack")}}
  - : Stack trace. Inherited from {{jsxref("Error")}}.

## 예제

`EvalError`는 현재 ECMAScript 사양에서 사용되지 않으므로 런타임에 의해 throw되지 않습니다. 그러나 개체 자체는 이전 버전의 사양과의 하위 호환성을 유지합니다.

### Creating an EvalError

```js
try {
  throw new EvalError("Hello", "someFile.js", 10);
} catch (e) {
  console.log(e instanceof EvalError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "EvalError"
  console.log(e.fileName); // "someFile.js"
  console.log(e.lineNumber); // 10
  console.log(e.columnNumber); // 0
  console.log(e.stack); // "@Scratchpad/2:2:9\n"
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Error")}}
- {{jsxref("Global_Objects/eval", "eval()")}}
