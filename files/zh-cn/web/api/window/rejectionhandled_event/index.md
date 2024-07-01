---
title: "Window: rejectionhandled event"
slug: Web/API/Window/rejectionhandled_event
---

{{APIRef("HTML DOM")}}

当 `Promise` 被 `rejected` 且有 `rejection` 处理器时会在全局触发 **`rejectionhandled`** 事件 (通常是发生在 window 下，但是也可能发生在 Worker 中)。应用于调试一般应用回退。当 `Promise` 被 `rejected` 且没有 `rejection` 处理器处理时会触发 **`unhandledrejection`** 事件。这两个事件协同工作。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">是否冒泡</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">是否可取消</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">接口</th>
      <td>PromiseRejectionEvent</td>
    </tr>
    <tr>
      <th scope="row">事件处理器属性</th>
      <td>onrejectionhandled</td>
    </tr>
  </tbody>
</table>

## 示例

你可以使用`rejectionhandled 事件在控制台打印出被 rejected 的 Promise，以及被 rejected 的原因：`

```js
window.addEventListener(
  "rejectionhandled",
  (event) => {
    console.log("Promise rejected; reason: " + event.reason);
  },
  false,
);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Promise 拒绝事件](/zh-CN/docs/Web/JavaScript/Guide/Using_promises#promise_拒绝事件)
- {{domxref("PromiseRejectionEvent")}}
- {{jsxref("Promise")}}
- {{domxref("Window/unhandledrejection_event", "unhandledrejection")}}
