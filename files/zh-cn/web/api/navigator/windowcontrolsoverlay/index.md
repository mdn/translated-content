---
title: Navigator：windowControlsOverlay 属性
slug: Web/API/Navigator/windowControlsOverlay
l10n:
  sourceCommit: b0c8b07682c8d2cecc544f60468f3cf6fc20ac99
---

{{SecureContext_Header}}{{APIRef("")}}

{{domxref("Navigator")}} 接口的 **`windowControlsOverlay`** 只读属性返回 {{domxref("WindowControlsOverlay")}} 接口，该接口提供有关使用了[窗口控件叠加层 API](/zh-CN/docs/Web/API/Window_Controls_Overlay_API) 的桌面渐进式 Web 应用程序的标题栏几何图形的信息。

安装在桌面操作系统上的渐进式 Web 应用程序可以通过在 Web 应用程序清单成员 [`display_override`](/zh-CN/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) 中使用 `window-controls-overlay` 值来选择加入窗口控件叠加层特性。

这样做会隐藏默认的窗口标题栏，并使应用程序可以访问应用程序窗口的整个区域。

## 值

一个 {{domxref("WindowControlsOverlay")}} 接口。

## 示例

```js
if ("windowControlsOverlay" in navigator) {
  const rect = navigator.windowControlsOverlay.getTitlebarAreaRect();
  // 对标题栏矩形区域做一些处理。
} else {
  // 窗口控件叠加层特性不可用。
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
