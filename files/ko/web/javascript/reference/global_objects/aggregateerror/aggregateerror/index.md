---
title: AggregateError() constructor
slug: Web/JavaScript/Reference/Global_Objects/AggregateError/AggregateError
l10n:
  sourceCommit: 6a0f9553932823cd0c4dcf695d4b4813474964fb
---

{{JSRef}}

**`AggregateError()`** 생성자는 {{jsxref("AggregateError")}} 객체를 생성합니다.

## 구문

```js-nolint
new AggregateError(errors)
new AggregateError(errors, message)
new AggregateError(errors, message, options)

AggregateError(errors)
AggregateError(errors, message)
AggregateError(errors, message, options)
```

> **참고:** `AggregateError()`는 [`new`](/ko/docs/Web/JavaScript/Reference/Operators/new)와 함께 혹은 없이도 호출할 수 있습니다. 두 방법 모두 `AggregateError` 인스턴스를 생성합니다.

### 매개변수

- `errors`
  - : 순회 가능한 오류들. 실제 {{JSxRef("Error")}} 객체가 아닐 수 있습니다.
- `message` {{optional_inline}}
  - : 사람이 읽을 수 있는 `AggregateError`의 선택적 설명입니다.
- `options` {{optional_inline}}
  - : 다음 속성을 가진 객체입니다.
    - `cause` {{optional_inline}}
      - : 오류의 특정 원인을 명시하는 속성입니다.
        보다 구체적이거나 유용한 오류 메시지로 오류를 잡아서 다시 오류를 발생시킬 때 이 속성을 사용하여 원래 오류를 전달할 수 있습니다.

## 예제

### AggregateError 생성하기

```js
try {
  throw new AggregateError([new Error("some error")], "Hello");
} catch (e) {
  console.log(e instanceof AggregateError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "AggregateError"
  console.log(e.errors); // [ Error: "some error" ]
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `AggregateError` in `core-js`](https://github.com/zloirock/core-js#ecmascript-promise)
- {{jsxref("Promise.any")}}
