---
title: WindowControlsOverlay：getTitlebarAreaRect() 方法
short-title: getTitlebarAreaRect()
slug: Web/API/WindowControlsOverlay/getTitlebarAreaRect
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef("Window Controls Overlay API")}}{{SeeCompatTable}}

{{domxref('WindowControlsOverlay')}} 接口的 **`getTitlebarAreaRect()`** 方法用于查询渐进式 Web 应用程序窗口标题栏区域的当前几何形状。

这仅适用于安装在桌面操作系统上并使用[窗口空间叠加 API](/zh-CN/docs/Web/API/Window_Controls_Overlay_API) 的渐进式 Web 应用。

## 语法

```js-nolint
getTitlebarAreaRect()
```

### 参数

无。

### 返回值

提供应用内容内标题栏区域的坐标和尺寸的 {{domxref("DOMRect")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
