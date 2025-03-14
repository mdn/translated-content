---
title: FencedFrameConfig
slug: Web/API/FencedFrameConfig
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

**`FencedFrameConfig`** 接口表示 {{htmlelement("fencedframe")}} 的导航，即其中将显示什么内容。

`FencedFrameConfig` 对象无法通过 JavaScript 手动构造。它们由诸如[受保护的受众 API](https://developers.google.cn/privacy-sandbox/private-advertising/protected-audience) 之类的来源返回，并被设置为 {{domxref("HTMLFencedFrameElement.config")}} 的值。

`FencedFrameConfig` 对象实例具有一个公开的方法，但它也映射到包含无法从 JavaScript 访问的不透明属性的内部配置信息。这包括诸如加载内容的来源和用于广告目的的兴趣组等信息。这是围栏框架如何在尊重用户隐私的同时实现关键用例的关键所在。

{{InheritanceDiagram}}

## 实例方法

- {{domxref("FencedFrameConfig.setSharedStorageContext", "setSharedStorageContext()")}} {{experimental_inline}}
  - : 将嵌入文档中的数据传递到 `<fencedframe>` 的共享存储中。

## 示例

### 基本用法

要设置将在 `<fencedframe>` 中显示的内容，使用 API（如[受保护的受众](https://developers.google.cn/privacy-sandbox/private-advertising/protected-audience)或[共享存储](https://developers.google.cn/privacy-sandbox/private-advertising/shared-storage)）生成一个 `FencedFrameConfig` 对象，然后设置为 `<fencedframe>` 的 `config` 属性值。

以下示例从受保护的受众 API 的广告竞价中获取 `FencedFrameConfig`，然后使用它在 `<fencedframe>` 中显示竞价成功的广告：

```js
const frameConfig = await navigator.runAdAuction({
  // 竞价配置
  resolveToConfig: true,
});

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

> [!NOTE]
> 在调用 `runAdAuction()` 时，必须传入 `resolveToConfig: true` 以获得 `FencedFrameConfig` 对象。如果没有设置，则所得的 {{jsxref("Promise")}} 将兑现为一个只能在 {{htmlelement("iframe")}} 中使用的 URN。

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

在 `reporting-worklet.js` worklet 中，我们从 `sharedStorage.context` 中读取嵌入文档的事件 ID，并从数据对象中读取框架的事件级数据，然后通过[隐私聚合](https://developers.google.cn/privacy-sandbox/private-advertising/private-aggregation)进行报告：

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
