---
title: AbortSignal.aborted
slug: Web/API/AbortSignal/aborted
---

{{APIRef("DOM")}}

**`aborted`** 是一个只读属性，它返回一个 {{domxref("Boolean")}} 表示与之通信的请求是否被终止（`true`）或未终止（`false`）

### 值

`true`（中止）或 `false`

## 示例

在下面的代码段中，我们创建了一个新的 `AbortController` 对象，并获取它的 {{domxref("AbortSignal")}}（位于 `signal` 属性中）。然后我们用 `aborted` 属性检查这个信号是否已被中止，并把相应的日志发送给控制台。

```js
const controller = new AbortController();
const signal = controller.signal;

// …

if (signal.aborted) {
  console.log("Request has been aborted");
} else {
  console.log("Request not aborted");
}
```

## 规格

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Fetch API](/zh-CN/docs/Web/API/Fetch_API)
