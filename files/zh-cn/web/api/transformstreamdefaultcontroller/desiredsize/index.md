---
title: TransformStreamDefaultController：desiredSize 属性
short-title: desiredSize
slug: Web/API/TransformStreamDefaultController/desiredSize
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

{{domxref("TransformStreamDefaultController")}} 接口的只读属性 **`desiredSize`** 返回填充满关联的 {{domxref("ReadableStream")}} 的队列所需要的大小。

`ReadableStream` 的内部队列包含已入队但尚未读取的分块。浏览器确定填满流**所需要的大小**，并且这个值由 `desiredSize` 属性返回。

如果这个 `desiredSize` 是 `0`，则队列已满。因此你可以使用这个信息去[手动管理背压](/zh-CN/docs/Web/API/Streams_API/Concepts#背压)去管理队列。

## 值

所需的大小。

## 示例

在下面的示例中，`desiredSize` 被打印到控制台。

```js
console.log(controller.desiredSize);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
