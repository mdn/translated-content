---
title: unhandledrejection
slug: Web/API/Window/unhandledrejection_event
---

{{APIRef("HTML DOM")}}

当 {{jsxref("Promise")}} 被 reject 且没有 reject 处理器的时候，会触发 **`unhandledrejection`** 事件；这可能发生在 {{domxref("window")}} 下，但也可能发生在 {{domxref("Worker")}} 中。这对于调试和为意外情况提供后备错误处理非常有用。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">是否冒泡</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">是否可取消</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">接口</th>
      <td>{{domxref("PromiseRejectionEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">事件处理器属性</th>
      <td>
        {{domxref("WindowEventHandlers.onunhandledrejection", "onunhandledrejection")}}
      </td>
    </tr>
  </tbody>
</table>

## 事件属性

`unhandledrejection` 继承自 {{domxref("PromiseRejectionEvent")}}，而 {{domxref("PromiseRejectionEvent")}} 又继承自 {{domxref("Event")}}。因此`unhandledrejection` 含有 `PromiseRejectionEvent` 和 `Event` 的属性和方法。主要包含两个有用的属性：

- `promise`
  - : 特定的被 reject 且没有 reject 处理器的 {{jsxref("Promise")}}
- `reason`
  - : 将会传入异常处理方法中的错误原因（如果存在），查看 {{jsxref("Promise.catch", "catch()")}} 相关以获取更多细节。

## 使用说明

允许 `unhandlejection` 事件冒泡将最终导致向控制台输出错误消息。可以通过调用 {{domxref("PromiseRejectionEvent")}} 上的 {{domxref("Event.preventDefault", "preventDefault()")}} 来阻止这种情况；请参阅下面的[阻止默认处理](#阻止默认处理)示例。

## 例子

我们将通过几个例子来展示 `unhandledrejection` 事件的使用方式。

### 基本的异常上报

此示例只是将有关未处理的 Promise rejection 信息打印到控制台。

```js
window.addEventListener("unhandledrejection", (event) => {
  console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
});
```

您还可以使用 {{domxref("WindowEventHandlers.onunhandledrejection", "onunhandledrejection")}} 事件处理程序属性来设置事件侦听器：

```js
window.onunhandledrejection = (event) => {
  console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
};
```

### 阻止默认处理

许多环境 (例如 {{Glossary("Node.js")}} ) 默认情况下会向控制台打印未处理的 Promise rejections。你可以通过为 `unhandledrejection` 事件添加一个处理程序来避免这种情况的发生，该处理程序除了执行你希望执行的任何其他任务之外，还可以调用 {{domxref("Event.preventDefault()", "preventDefault()")}} 来取消该事件，从而阻止该事件冒泡并由运行时的日志代码处理。这种方法之所以有效，是因为 `unhandledrejection` 事件是可以取消的。

```js
window.addEventListener("unhandledrejection", function (event) {
  // ...您的代码可以处理未处理的 rejection...

  // 阻止默认处理（例如将错误输出到控制台）

  event.preventDefault();
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Promise 拒绝事件](/zh-CN/docs/Web/JavaScript/Guide/Using_promises#promise_拒绝事件)
- {{domxref("Window/rejectionhandled_event", "rejectionhandled")}} 事件
- {{domxref("Promise")}}
