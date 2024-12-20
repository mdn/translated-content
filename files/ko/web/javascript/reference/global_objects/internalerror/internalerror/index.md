---
title: InternalError() 생성자
slug: Web/JavaScript/Reference/Global_Objects/InternalError/InternalError
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}}{{Non-standard_Header}}

**`InternalError()`** 생성자는 {{jsxref("InternalError")}} 객체를 생성합니다.

## 구문

```js-nolint
new InternalError()
new InternalError(message)
new InternalError(message, options)
new InternalError(message, fileName)
new InternalError(message, fileName, lineNumber)

InternalError()
InternalError(message)
InternalError(message, options)
InternalError(message, fileName)
InternalError(message, fileName, lineNumber)
```

> **참고:** `InternalError()`는 [`new`](/ko/docs/Web/JavaScript/Reference/Operators/new)와 함께 호출하거나 혹은 `new` 없이 호출할 수 있습니다. 두 방법 모두 새로운 `InternalError` 인스턴스를 생성합니다.

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

### 새로운 InternalError 생성하기

```js
new InternalError("Engine failure");
```

## 명세서

어떤 표준에도 속하지 않습니다.

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Error")}}
