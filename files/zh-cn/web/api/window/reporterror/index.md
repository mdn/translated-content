---
title: Window：reportError() 方法
slug: Web/API/Window/reportError
l10n:
  sourceCommit: 445eb77dbfd0bd41d443f81d89647a6dd5b25b75
---

{{APIRef("DOM")}}

{{domxref("Window")}} 接口的 **`reportError()`** 方法可模拟未捕获的 JavaScript 异常，向控制台或全局事件处理器报告错误。

此特性主要用于自定义事件分发或回调处理库。库可以借此特性以捕获回调代码中的的错误，并将其重新抛出至顶层处理器。这确保了一个回调中出现的异常不会阻碍其他回调执行，同时也确保了在顶层调试时仍可方便地获取堆栈跟踪信息。

## 语法

```js-nolint
reportError(throwable)
```

### 参数

- `throwable`
  - : error 对象，例如 {{jsxref("TypeError")}}。

### 返回值

无（{{jsxref("undefined")}}）。

### 异常

- {{jsxref("TypeError")}}
  - : 调用方法时没有传入 error 实参。

## 示例

检查特性是否可用：

```js
if (typeof window.reportError === "function") {
  // 函数已定义
}
```

以下代码展示了如何创建和报告错误，以及如何使用 `onerror` 事件处理器属性或者为 `error` 事件添加监听器来捕获错误。请注意，为 `onerror` 设置的处理器必须返回 `true` 以防事件继续传播。

```js
const newError = new Error("Some error message", "someFile.js", 11);
window.reportError(newError);

window.onerror = (message, source, lineno, colno, error) => {
  console.error(`message: ${error.message}, lineno: ${lineno}`);
  return true;
};

window.addEventListener("error", (error) => {
  console.error(error.filename);
});

// 输出
// > "message:Some error message, lineno: 11"
// > "someFile.js"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{DOMxRef("Window")}}
- {{DOMxRef("WorkerGlobalScope.reportError()")}}
- {{DOMxRef("Window/error_event", "error")}} 事件
- {{DOMxRef("WorkerGlobalScope/error_event", "error")}} 事件
- {{DOMxRef("HTMLElement/error_event", "error")}} 事件
