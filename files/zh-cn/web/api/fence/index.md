---
title: Fence
slug: Web/API/Fence
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

{{domxref("Fenced Frame API", "围栏框架 API", "", "nocode")}} 的 **`Fence`** 接口包含与 {{htmlelement("fencedframe")}} 功能相关的几个函数。

`Fence` 对象可以通过 {{domxref("Window.fence")}} 属性访问，但它们仅对嵌入在 {{htmlelement("fencedframe")}}（通过 {{domxref("FencedFrameConfig")}} 加载）或 {{htmlelement("iframe")}}（通过不透明 URN 加载）中的文档可用。

> [!NOTE]
> 参见 [`<fencedframe>` 的工作原理](/zh-CN/docs/Web/API/Fenced_frame_API#fencedframe_的工作原理)了解有关 `FencedFrameConfig` 和不透明 URN 的一些描述。

{{InheritanceDiagram}}

## 实例方法

- {{domxref("Fence.getNestedConfigs", "getNestedConfigs()")}} {{Experimental_Inline}}
  - : 返回加载到当前 `<fencedframe>` 内部嵌入的 `<fencedframe>` 中的 {{domxref("FencedFrameConfig")}} 配置。
- {{domxref("Fence.reportEvent", "reportEvent()")}} {{Experimental_Inline}}
  - : 通过[信标](/zh-CN/docs/Web/API/Beacon_API)触发报告数据的提交，将数据发送到通过[受保护的受众 API](https://developers.google.cn/privacy-sandbox/private-advertising/protected-audience) 的 {{domxref("InterestGroupReportingScriptRunnerGlobalScope.registerAdBeacon", "registerAdBeacon()")}} 方法注册的一个或多个特定 URL，以收集广告的竞价结果。
- {{domxref("Fence.setReportEventDataForAutomaticBeacons", "setReportEventDataForAutomaticBeacons()")}} {{Experimental_Inline}}
  - : 指定在 `<fencedframe>` 内部发生导航时将发送的事件数据。这些数据将通过自动信标发送到通过[受保护的受众 API](https://developers.google.cn/privacy-sandbox/private-advertising/protected-audience) 的 {{domxref("InterestGroupReportingScriptRunnerGlobalScope.registerAdBeacon", "registerAdBeacon()")}} 方法注册的一个或多个特定 URL，以收集广告竞价结果的报告数据。

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

- developers.google.cn 上的[围栏框架](https://developers.google.cn/privacy-sandbox/private-advertising/fenced-frame)
- developers.google.cn 上的[隐私沙盒](https://developers.google.cn/privacy-sandbox)
