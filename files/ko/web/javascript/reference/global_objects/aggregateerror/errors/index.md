---
title: "AggregateError: errors"
slug: Web/JavaScript/Reference/Global_Objects/AggregateError/errors
l10n:
  sourceCommit: b5c766f4eecb4fcf9d8ba175caddb94f7c3e9d20
---

{{JSRef}}

{{jsxref("AggregateError")}} 인스턴스의 **`errors`** 데이터 속성에는 집계된 오류를
나타내는 배열이 포함되어 있습니다.

## 값

{{jsxref("Array")}}이며, {{jsxref("AggregateError/AggregateError", "AggregateError()")}} 생성자의 첫 번째 인자로 전달된 반복과 동일한 순서의 값을 가지고 있습니다.

{{js_property_attributes(1, 0, 1)}}

## 예제

### errors 사용하기

```js
try {
  throw new AggregateError(
    // An iterable of errors
    new Set([new Error("some error"), new Error("another error")]),
    "Multiple errors thrown",
  );
} catch (err) {
  console.log(err.errors);
  // [
  //   Error: some error,
  //   Error: another error
  // ]
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Control flow and error handling](/ko/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- {{jsxref("AggregateError")}}
- [`Error`: `cause`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Error/cause)
