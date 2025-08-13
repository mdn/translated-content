---
title: "AggregateError: errors"
slug: Web/JavaScript/Reference/Global_Objects/AggregateError/errors
l10n:
  sourceCommit: 7d5c16db5223119030cab9c064b49e8b4e9e6dfe
---

{{jsxref("AggregateError")}} 实例的 **`errors`** 数据属性包含一个数组，该数组表示已聚合的错误。

## 值

{{jsxref("Array")}} 包含的值的顺序与作为 {{jsxref("AggregateError/AggregateError", "AggregateError()")}} 构造函数第一个参数传入的可迭代对象中值的顺序相同。

{{js_property_attributes(1, 0, 1)}}

## 示例

### 使用 errors

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

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Control flow and error handling](/zh-CN/docs/Web/JavaScript/Guide/Control_flow_and_error_handling) 指南
- {{jsxref("AggregateError")}}
- [`Error`: `cause`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/cause)
