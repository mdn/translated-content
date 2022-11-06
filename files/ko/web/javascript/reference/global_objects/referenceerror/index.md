---
title: ReferenceError
slug: Web/JavaScript/Reference/Global_Objects/ReferenceError
translation_of: Web/JavaScript/Reference/Global_Objects/ReferenceError
---
{{JSRef}}

**`ReferenceError`** 객체는 존재하지 않는 변수를 참조했을 때 발생하는 에러를 나타냅니다.

## 문법

```js
new ReferenceError([message[, fileName[, lineNumber]]])
```

### 파라미터

- `message`
  - : 선택사항. 에러에 대한 설명문
- `fileName` {{non-standard_inline}}
  - : 선택사항. 예외가 발생한 코드를 포함하는 파일의 이름
- `lineNumber` {{non-standard_inline}}
  - : 선택사항. 예외가 발생한 코드의 줄 번호

## 설명

**`ReferenceError`**는 선언된 적이 없는 변수를 참조하려고 할 때 발생합니다.

## 생성자

- {{jsxref("Global_Objects/ReferenceError/ReferenceError", "ReferenceError()")}}
  - : Creates a new `ReferenceError` object.

## 인스턴스 속성

- {{jsxref("Error.prototype.message", "ReferenceError.prototype.message")}}
  - : Error message.
- {{jsxref("Error.prototype.name", "ReferenceError.prototype.name")}}
  - : Error name. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.fileName", "ReferenceError.prototype.fileName")}}
  - : Path to file that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.lineNumber", "ReferenceError.prototype.lineNumber")}}
  - : Line number in file that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.columnNumber", "ReferenceError.prototype.columnNumber")}}
  - : Column number in line that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.stack", "ReferenceError.prototype.stack")}}
  - : Stack trace. Inherited from {{jsxref("Error")}}.

## 예제

### `ReferenceError` 처리하기

```js
try {
  var a = undefinedVariable;
} catch (e) {
  console.log(e instanceof ReferenceError); // true
  console.log(e.message);                   // "undefinedVariable is not defined"
  console.log(e.name);                      // "ReferenceError"
  console.log(e.fileName);                  // "Scratchpad/1"
  console.log(e.lineNumber);                // 2
  console.log(e.columnNumber);              // 6
  console.log(e.stack);                     // "@Scratchpad/2:2:7\n"
}
```

### `ReferenceError` 생성하기

```js
try {
  throw new ReferenceError('Hello', 'someFile.js', 10);
} catch (e) {
  console.log(e instanceof ReferenceError); // true
  console.log(e.message);                   // "Hello"
  console.log(e.name);                      // "ReferenceError"
  console.log(e.fileName);                  // "someFile.js"
  console.log(e.lineNumber);                // 10
  console.log(e.columnNumber);              // 0
  console.log(e.stack);                     // "@Scratchpad/2:2:9\n"
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참고

- {{jsxref("Error")}}
- {{jsxref("ReferenceError.prototype")}}
