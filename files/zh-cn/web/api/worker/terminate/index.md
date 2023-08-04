---
title: Worker.terminate()
slug: Web/API/Worker/terminate
---

{{APIRef("Web Workers API")}}

{{domxref("Worker")}} 接口中的 **`terminate()`** 方法用于立即终止 {{domxref("Worker")}} 的行为。本方法并不会等待 worker 去完成它剩余的操作；worker 将会被立刻停止。

## 语法

```js-nolint
terminate()
```

### 参数

无。

### 返回值

无 ({{jsxref("undefined")}})。

## 示例

以下代码示例表明，通过使用 {{domxref("Worker.Worker", "Worker()")}} 构造器创建出的 {{domxref("Worker")}} 对象，在下一步操作之后会被立即终止。

```js
var myWorker = new Worker("worker.js");

myWorker.terminate();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

它属于 {{domxref("Worker")}} 接口。
