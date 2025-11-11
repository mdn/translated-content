---
title: Worker：error 事件
slug: Web/API/Worker/error_event
---

{{APIRef("Web Workers API")}}

{{domxref("Worker")}} 接口的 **`error`** 事件会在 worker 发生错误时触发。

## 语法

在如 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或者使用事件处理器属性。

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## 事件类型

通用的 {{domxref("Event")}}。

## 示例

下面的代码片段使用 {{domxref("Worker.Worker", "Worker()")}} 构造函数创建了一个 {{domxref("Worker")}} 对象，并在生成的对象上设置了一个 `onerror` 事件处理器：

```js
const myWorker = new Worker("worker.js");

myWorker.onerror = (event) => {
  console.log("There is an error with your worker!");
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
