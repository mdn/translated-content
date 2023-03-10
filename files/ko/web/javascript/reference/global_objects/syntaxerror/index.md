---
title: SyntaxError
slug: Web/JavaScript/Reference/Global_Objects/SyntaxError
---

{{JSRef}}

**`SyntaxError`** 객체는 문법적으로 유효하지 않은 코드를 해석하려고 시도할 때 발생하는 오류를
의미합니다. Javascript 엔진이 코드를 구문 분석할 때 언어의 구문에 맞지 않는
토큰이나 토큰 순서를 만나면 이 오류를 던집니다.

## 생성자

- {{jsxref("Global_Objects/SyntaxError/SyntaxError", "SyntaxError()")}}
  - : 새로운 `SyntaxError` 객체를 만듭니다.

## 인스턴스 속성

- {{jsxref("Error.prototype.message", "SyntaxError.prototype.message")}}
  - : 오류 메시지. 비록 ECMA-262에서 {{jsxref("SyntaxError")}}는 반드시 자체
    `message` 속성을 제공해야한다고 명시했지만,
    [SpiderMonkey](/ko/docs/Mozilla/Projects/SpiderMonkey)는
    {{jsxref("Error.prototype.message")}}를 상속합니다.
- {{jsxref("Error.prototype.name", "SyntaxError.prototype.name")}}
  - : 오류 이름. {{jsxref("Error")}}로부터 상속되었습니다.
- {{jsxref("Error.prototype.fileName", "SyntaxError.prototype.fileName")}}
  - : 이 오류가 발생한 파일 경로. {{jsxref("Error")}}로부터 상속되었습니다.
- {{jsxref("Error.prototype.lineNumber", "SyntaxError.prototype.lineNumber")}}
  - : 이 오류가 발생한 파일의 줄 수. {{jsxref("Error")}}로부터 상속되었습니다.
- {{jsxref("Error.prototype.columnNumber","SyntaxError.prototype.columnNumber")}}
  - : 이 오류가 발생한 줄(행)에서의 열 위치. {{jsxref("Error")}}로부터 상속되었습니다.
- {{jsxref("Error.prototype.stack", "SyntaxError.prototype.stack")}}
  - : 스택 트레이스. {{jsxref("Error")}}로부터 상속되었습니다.

## 예제

### `SyntaxError` 잡기

```js
try {
  eval('hoo bar');
} catch (e) {
  console.error(e instanceof SyntaxError);
  console.error(e.message);
  console.error(e.name);
  console.error(e.fileName);
  console.error(e.lineNumber);
  console.error(e.columnNumber);
  console.error(e.stack);
}
```

### `SyntaxError` 생성하기

```js
try {
  throw new SyntaxError('Hello', 'someFile.js', 10);
} catch (e) {
  console.error(e instanceof SyntaxError); // true
  console.error(e.message);                // Hello
  console.error(e.name);                   // SyntaxError
  console.error(e.fileName);               // someFile.js
  console.error(e.lineNumber);             // 10
  console.error(e.columnNumber);           // 0
  console.error(e.stack);                  // @debugger eval code:3:9
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Error")}}
