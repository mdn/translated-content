---
title: Fence：reportEvent() 方法
slug: Web/API/Fence/reportEvent
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

{{domxref("Fence")}} 接口的 **`reportEvent()`** 方法通过[信标](/zh-CN/docs/Web/API/Beacon_API)触发报告数据的提交，将数据发送到通过[受保护的受众 API](https://developers.google.cn/privacy-sandbox/private-advertising/protected-audience) 的 {{domxref("InterestGroupReportingScriptRunnerGlobalScope.registerAdBeacon", "registerAdBeacon()")}} 方法注册的一个或多个特定 URL，以收集广告竞价结果。

> [!NOTE]
> {{domxref("Fence.setReportEventDataForAutomaticBeacons", "setReportEventDataForAutomaticBeacons()")}} 提供类似的报告数据提交功能，除非提交是通过导航而不是显式的方法调用触发的。

## 语法

```js-nolint
reportEvent(event)
```

### 参数

- `event`
  - : 表示要发送的数据的对象或字符串。
    - 对象值定义一个你想要发送的特定报告事件。必需属性如下：
      - `eventType`
        - : 表示正在报告的事件类型的字符串——例如，你可能想要了解广告被点击的次数。这个字符串可以是任何相关的事件名称（例如 [`click`](/zh-CN/docs/Web/API/Element/click_event)）。这需要与[受保护的受众 API](https://developers.google.cn/privacy-sandbox/private-advertising/protected-audience) worklet 中关联的 {{domxref("InterestGroupReportingScriptRunnerGlobalScope.registerAdBeacon", "registerAdBeacon()")}} 调用指定的事件类型相匹配。
      - `eventData`
        - : 表示要发送的数据的字符串。
      - `destination`
        - : 包含一个或多个枚举值的数组，这些值代表目标类型。这些是将接收数据到其注册 URL（即通过 {{domxref("InterestGroupReportingScriptRunnerGlobalScope.registerAdBeacon", "registerAdBeacon()")}}）的涉及方。可能的值包括：
          - `"buyer"`：广告竞价中的出价方。
          - `"seller"`：运行广告竞价的顶级卖方。
          - `"component-seller"`：多级竞价中组成竞价的卖方。
          - `"direct-seller"`：直接运行买家投标竞价的卖方。如果广告是单级竞价，则使用的值为 `"seller"`。如果广告是多级竞价，则使用的值为 `"component-seller"`。
          - `"shared-storage-select-url"`：[共享存储 API](https://developers.google.cn/privacy-sandbox/private-advertising/shared-storage) 存储位置，如在 {{domxref("WindowSharedStorage.selectURL", "Window.sharedStorage.selectURL()")}} 方法调用中所定义。
    - 字符串值表示一个 `eventType`，例如 `"click"`（参见前面 `eventType` 的定义）。当将 `eventType` 字符串作为 `reportEvent()` 的值传递时，它会触发所有基于该事件类型（例如通过 {{domxref("PrivateAggregation.contributeToHistogramOnEvent()")}}）做出的隐私聚合贡献的发送。

### 返回值

无（`undefined`）。

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
