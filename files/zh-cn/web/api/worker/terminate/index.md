---
title: Worker.terminate()
slug: Web/API/Worker/terminate
---

{{APIRef("Web Workers API")}}

{{domxref("Worker")}} 接口中的 **`terminate()`** 方法用于立即终止 {{domxref("Worker")}} 的行为。本方法并不会等待 worker 去完成它剩余的操作；worker 将会被立刻停止

## Syntax

```js
myWorker.terminate();
```

### 参数

没有。

### 返回值

Void.

## Example

以下代码示例表明，通过使用 {{domxref("Worker.Worker", "Worker()")}} 构造器创建出的{{domxref("Worker")}} 对象，在下一步操作之后会被立即终止。

```js
var myWorker = new Worker('worker.js');

myWorker.terminate();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

{{domxref("Worker")}} 接口。
