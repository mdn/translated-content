---
title: EvalError() 생성자
slug: Web/JavaScript/Reference/Global_Objects/EvalError/EvalError
l10n:
  sourceCommit: 6558de67a347fee30c303da8a0b262a9270a6885
---

{{JSRef}}

**`EvalError()`** 생성자는 {{jsxref("EvalError")}} 객체를 생성합니다.

## 구문

```js-nolint
new EvalError()
new EvalError(message)
new EvalError(message, options)
new EvalError(message, fileName)
new EvalError(message, fileName, lineNumber)

EvalError()
EvalError(message)
EvalError(message, options)
EvalError(message, fileName)
EvalError(message, fileName, lineNumber)
```

> [!NOTE]
> `EvalError()`는 [`new`](/ko/docs/Web/JavaScript/Reference/Operators/new)와 함께 호출하거나 혹은 `new` 없이 호출할 수 있습니다. 두 방법 모두 새로운 `EvalError` 인스턴스를 생성합니다.

### 매개변수

- `message` {{optional_inline}}
  - : 사람이 읽을 수 있는 오류에 대한 설명
- `options` {{optional_inline}}
  - : 다음의 속성을 가지는 객체
    - `cause` {{optional_inline}}
      - : 오류의 구체적인 원인을 나타내는 속성입니다.
        보다 구체적이거나 유용한 오류 메시지가 포함된 오류를 처리 및 다시 예외를 발생시킬 때 이 속성을 사용하여 원래 오류를 전달할 수 있습니다.
- `fileName` {{optional_inline}} {{non-standard_inline}}
  - : 이 예외가 발생한 코드가 초함된 파일의 이름
- `lineNumber` {{optional_inline}} {{non-standard_inline}}
  - : 이 예외가 발생한 코드의 라인 수

## 예제

`EvalError`는 현재 ECMAScript 명세에서 사용되지 않으므로 런타임이 이 예외를 발생시키지 않습니다. 그러나 이전 버전의 명세와 하위 호환을 위해 객체 자체는 그대로 유지합니다.

### EvalError 생성하기

```js
try {
  throw new EvalError("Hello");
} catch (e) {
  console.log(e instanceof EvalError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "EvalError"
  console.log(e.stack); // Stack of the error
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Error")}}
- {{jsxref("Global_Objects/eval", "eval()")}}
