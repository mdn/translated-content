---
title: FencedFrameConfig：setSharedStorageContext() 方法
slug: Web/API/FencedFrameConfig/setSharedStorageContext
l10n:
  sourceCommit: 801556b40e45c735bf7f74e6db7d10864173e44a
---

{{APIRef("Fenced Frame API")}}{{SeeCompatTable}}

{{domxref("FencedFrameConfig")}} 接口的 **`setSharedStorageContext()`** 方法用于将嵌入文档中的上下文数据传递到 `<fencedframe>` [共享存储](https://developers.google.cn/privacy-sandbox/private-advertising/shared-storage)中。

## 语法

```js-nolint
setSharedStorageContext(context)
```

### 参数

- `context`
  - : 一个表示要传递到共享存储中的上下文数据的字符串。一旦设置，它将被存储在 {{domxref("FencedFrameConfig")}} 实例的内部配置中。

### 返回值

无（`undefined`）。

## 示例

### 通过 `setSharedStorageContext()` 传递上下文数据

你可以使用[隐私聚合 API](https://developers.google.cn/privacy-sandbox/private-advertising/private-aggregation) 来创建报告，该报告将围栏框架内的事件级数据与嵌入文档的上下文数据相结合。`setSharedStorageContext()` 可用于将从嵌入方传递的上下文数据传递给由[受保护的受众 API](https://developers.google.cn/privacy-sandbox/private-advertising/protected-audience) 启动的共享存储 worklet。

在下面的示例中，我们将嵌入页面和围栏框架中的数据都存储在[共享存储](https://developers.google.cn/privacy-sandbox/private-advertising/shared-storage)中。

在嵌入页面中，我们将使用 `setSharedStorageContext()` 设置一个模拟事件 ID 作为共享存储上下文：

```js
const frameConfig = await navigator.runAdAuction({ resolveToConfig: true });

// 你想要从嵌入方传递给共享存储 worklet 的数据
frameConfig.setSharedStorageContext("some-event-id");

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

在围栏框架内，我们使用 {{domxref("Worklet.addModule","window.sharedStorage.worklet.addModule()")}} 添加 worklet 模块，然后使用 {{domxref("WindowSharedStorage.run","window.sharedStorage.run()")}} 将事件级数据发送到共享存储 worklet 中（这与来自嵌入文档的上下文数据无关）：

```js
const frameData = {
  // 数据仅在围栏框架内可用
};

await window.sharedStorage.worklet.addModule("reporting-worklet.js");

await window.sharedStorage.run("send-report", {
  data: {
    frameData,
  },
});
```

在 `reporting-worklet.js` worklet 中，我们从 `sharedStorage.context` 中读取嵌入文档的事件 ID，并从数据对象中读取框架的事件级数据，然后通过隐私聚合（Private Aggregation）进行报告：

```js
class ReportingOperation {
  convertEventIdToBucket(eventId) { ... }
  convertEventPayloadToValue(info) { ... }

  async run(data) {
    // 来自于嵌入方的数据
    const eventId = sharedStorage.context;

    // 来自于围栏框架的数据
    const eventPayload = data.frameData;

    privateAggregation.sendHistogramReport({
      bucket: convertEventIdToBucket(eventId),
      value: convertEventPayloadToValue(eventPayload)
    });
  }
}

register('send-report', ReportingOperation);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- developers.google.cn 上的[围栏框架](https://developers.google.cn/privacy-sandbox/private-advertising/fenced-frame)
- developers.google.cn 上的[隐私沙盒](https://developers.google.cn/privacy-sandbox)
