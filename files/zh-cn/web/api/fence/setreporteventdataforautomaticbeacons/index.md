---
title: Fence：setReportEventDataForAutomaticBeacons() 方法
slug: Web/API/Fence/setReportEventDataForAutomaticBeacons
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

{{domxref("Fence")}} 接口的 **`setReportEventDataForAutomaticBeacons()`** 方法指定在 `<fencedframe>` 内部发生导航时将发送的事件数据。这些数据将通过自动[信标](/zh-CN/docs/Web/API/Beacon_API)发送到通过[受保护的受众 API](https://developers.google.cn/privacy-sandbox/private-advertising/protected-audience) 的 {{domxref("InterestGroupReportingScriptRunnerGlobalScope.registerAdBeacon", "registerAdBeacon()")}} 方法注册的一个或多个特定 URL，以收集广告竞价结果的报告数据。

> **备注：** {{domxref("Fence.reportEvent", "reportEvent()")}} 提供类似的报告数据提交功能，除非提交是通过显式方法调用而不是导航触发的。

## 语法

```js-nolint
setReportEventDataForAutomaticBeacons(event)
```

### 参数

- `event`
  - : 表示要发送数据的对象。可能的属性如下：
    - `eventType`
      - : 一个字符串，表示正在报告的事件类型。可用值包括：
        - `reserved.top_navigation_start`：当顶级导航开始时触发的事件。
        - `reserved.top_navigation_commit`：当顶级导航完成时触发的事件。
    - `eventData`
      - : 表示要发送的数据的字符串。
    - `destination`
      - : 包含一个或多个枚举值的数组，这些值代表目标类型。这些是将接收数据到其注册 URL（即通过 {{domxref("InterestGroupReportingScriptRunnerGlobalScope.registerAdBeacon", "registerAdBeacon()")}}）的涉及方。可能的值包括：
        - `"buyer"`：广告竞价中的出价方。
        - `"seller"`：运行广告竞价的顶级卖方。
        - `"component-seller"`：多级竞价中组成竞价的卖方。
        - `"direct-seller"`：直接运行买家投标竞价的卖方。如果广告是单级竞价，则使用的值为 `"seller"`。如果广告是多级竞价，则使用的值为 `"component-seller"`。
        - `"shared-storage-select-url"`：[共享存储 API](https://developers.google.cn/privacy-sandbox/private-advertising/shared-storage) 存储位置，如在 {{domxref("WindowSharedStorage.selectURL", "Window.sharedStorage.selectURL()")}} 方法调用中所定义。
    - `once` {{optional_inline}}
      - : 一个布尔值。如果设置为 `true`，则仅会为下一个事件发送自动信标，并且在再次调用 `setReportEventDataForAutomaticBeacons()` 之前，不会为后续事件发送信标。例如，当与 `click` 处理程序一起使用时，这可用于仅为特定的顶级导航发送信标数据，而不是为每次顶级导航都发送。此属性的默认值为 `false`。

### 返回值

无（`undefined`）。

## 示例

```js
window.fence.setReportEventDataForAutomaticBeacons({
  eventType: "reserved.top_navigation_start",
  eventData: "示例字符串",
  destination: ["seller", "buyer"],
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- developers.google.cn 上的[围栏框架](https://developers.google.cn/privacy-sandbox/private-advertising/fenced-frame)
- developers.google.cn 上的[隐私沙盒](https://developers.google.cn/privacy-sandbox)
