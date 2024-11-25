---
title: FencedFrameConfig：setSharedStorageContext() 方法
slug: Web/API/FencedFrameConfig/setSharedStorageContext
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{APIRef("Fenced Frame API")}}{{SeeCompatTable}}

{{domxref("FencedFrameConfig")}} 接口的 **`setSharedStorageContext()`** 方法用于将嵌入文档中的上下文数据传递到 `<fencedframe>` [共享存储](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage)中。

## 语法

```js-nolint
setSharedStorageContext(context)
```

### 参数

- `context`
  - : 一个表示要传递到共享存储中的上下文数据的字符串。一旦设置，它将被存储在[内部配置](/zh-CN/docs/Web/API/FencedFrameConfig#internal_config)的 `storageContext` 属性中。

### 返回值

无（`undefined`）。

## 示例

### 通过 `setSharedStorageContext()` 传递上下文数据

你可以使用[隐私聚合 API](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation) 来创建报告，该报告将围栏框架内的事件级数据与嵌入文档的上下文数据相结合。`setSharedStorageContext()` 可用于将从嵌入器传递的上下文数据传递给由[受保护的受众 API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) 启动的共享存储工作线程。

在下面的示例中，我们将嵌入页面和围栏框架中的数据都存储在[共享存储](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage)中。

在嵌入页面中，我们将使用 `setSharedStorageContext()` 设置一个模拟事件 ID 作为共享存储上下文：

```js
const frameConfig = await navigator.runAdAuction({ resolveToConfig: true });

// 你想要从嵌入器传递给共享存储工作线程的数据
frameConfig.setSharedStorageContext("some-event-id");

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

在围栏框架内，我们使用 {{domxref("Worklet.addModule","window.sharedStorage.worklet.addModule()")}} 添加工作线程模块，然后使用 {{domxref("WindowSharedStorage.run","window.sharedStorage.run()")}} 将事件级数据发送到共享存储工作线程中（这与来自嵌入文档的上下文数据无关）：

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

在 `reporting-worklet.js` 工作线程中，我们从 `sharedStorage.context` 中读取嵌入文档的事件 ID，并从数据对象中读取框架的事件级数据，然后通过隐私聚合（Private Aggregation）进行报告：

```js
class ReportingOperation {
  convertEventIdToBucket(eventId) { ... }
  convertEventPayloadToValue(info) { ... }

  async run(data) {
    // 来自于嵌入器的数据
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

- developers.google.com 上的[围栏框架](https://developers.google.com/privacy-sandbox/private-advertising/fenced-frame)
- developers.google.com 上的[隐私沙盒](https://developers.google.com/privacy-sandbox)
