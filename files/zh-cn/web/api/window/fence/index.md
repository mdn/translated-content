---
title: Window：fence 属性
slug: Web/API/Window/fence
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

{{domxref("Window")}} 接口的只读属性 `fence` 为当前文档上下文返回一个 {{domxref("Fence")}} 对象实例。

`Fence` 对象仅对嵌入在 {{htmlelement("fencedframe")}}（通过 {{domxref("FencedFrameConfig")}} 加载）或 {{htmlelement("iframe")}}（通过不透明 URN 加载）中的文档可用。

> [!NOTE]
> 参见 [`<fencedframe>` 的工作原理](/zh-CN/docs/Web/API/Fenced_frame_API#fencedframe_的工作原理)了解有关 `FencedFrameConfig` 和不透明 URN 的一些描述。

## 值

一个 {{domxref("Fence")}} 对象实例，如果文档上下文无法访问 {{domxref("Fence")}} 对象，则为 `null`。

## 示例

```js
window.fence.reportEvent({
  eventType: "click",
  eventData: JSON.stringify({ clickX: "123", clickY: "456" }),
  destination: ["buyer", "seller"],
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- developers.google.com 上的[围栏框架](https://developers.google.cn/privacy-sandbox/private-advertising/fenced-frame)
- developers.google.com 上的[隐私沙盒](https://developers.google.cn/privacy-sandbox)
