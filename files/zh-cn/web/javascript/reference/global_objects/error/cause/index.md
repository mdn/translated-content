---
title: "Error: cause"
slug: Web/JavaScript/Reference/Global_Objects/Error/cause
---

{{JSRef}}

{{jsxref("Error")}} 实例中的 **`cause`** 数据属性指示导致该错误的具体原始原因。

在捕获错误时，我们可能会使用更具体或更加实用的信息对错误进行包装，再将其重新抛出。`cause` 属性就用于这一场景，以便仍然可以访问原始的错误。

## 取值

它通过 `options.cause` 参数被传入 [`Error()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/Error) 构造函数，并且有可能不存在。

{{js_property_attributes(1, 0, 1)}}

## 描述

`cause` 的值可以是任何类型。你不应该假设捕获错误的 `cause` 属性是一个 `Error`，正如在 `catch` 语句中绑定的变量未必一定是 `Error`。下文“将结构化的数据作为 cause”示例展示了刻意不提供 `Error` 作为 `cause` 的情况。

## 示例

### 重新抛出包含 cause 的错误

有时，捕获错误并使用新的错误信息将其重新抛出是很有用的。在这种情况下，你应该将原始错误传递给新的 `Error` 的构造函数，如下所示：

```js
try {
  connectToDatabase();
} catch (err) {
  throw new Error("Connecting to database failed.", { cause: err });
}
```

更详细的示例请参阅[错误 > 区分相似的错误](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error#区分相似的错误)。

### 将结构化的数据作为 cause

为开发者理解而编写的错误消息可能并不适合机器解析，因为它们会受到表达方式改变（rewording），或标点符号改变的影响，破坏已有解析器的正常使用。因此，当从函数中抛出错误时，你可以提供结构化的数据作为错误原因（即 `cause` 字段）供机器解析，以此替代人类可读的错误消息。

```js
function makeRSA(p, q) {
  if (!Number.isInteger(p) || !Number.isInteger(q)) {
    throw new Error("RSA key generation requires integer inputs.", {
      cause: { code: "NonInteger", values: [p, q] },
    });
  }
  if (!areCoprime(p, q)) {
    throw new Error("RSA key generation requires two co-prime integers.", {
      cause: { code: "NonCoprime", values: [p, q] },
    });
  }
  // rsa algorithm…
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Error.prototype.message")}}
- {{jsxref("Error.prototype.toString()")}}
