---
title: AbortSignal.reason
slug: Web/API/AbortSignal/reason
---

{{APIRef("DOM")}}

只读属性 **`reason`** 返回一个使用 JavaScript 值表示的中止原因。

当 signal 没有被中止时，该属性值为 `undefined`。当使用 {{domxref("AbortController.abort()")}} 或 {{domxref("AbortSignal.abort()")}} 中止 signal 时，可以设置一个指定的值。如果没有在这些方法中明确的设置，则默认是"AbortError"{{domxref("DOMException")}}。

## 值

一个使用 JavaScript 值表示的中止原因，如果没有被中止，则是 `undefined`。

## 示例

在以下片段中，我们创建一个新的 `AbortController` 对象，并且获取它的 {{domxref("AbortSignal")}}（位于 `signal` 属性中）。然后我们用 `aborted` 属性检查这个信号是否已被中止，并把相应的日志发送给控制台。

```js
const controller = new AbortController();
const signal = controller.signal;

// …

if (signal.aborted) {
  if (signal.reason) {
    console.log(`Request aborted with reason: ${signal.reason}`);
  } else {
    console.log("Request aborted but no reason was given.");
  }
} else {
  console.log("Request not aborted");
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Fetch API](/zh-CN/docs/Web/API/Fetch_API)
