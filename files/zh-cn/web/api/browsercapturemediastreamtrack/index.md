---
title: BrowserCaptureMediaStreamTrack
slug: Web/API/BrowserCaptureMediaStreamTrack
l10n:
  sourceCommit: d9879ec9fe29b627ea1bde790d981dd13d602794
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}

{{domxref("Screen Capture API", "屏幕捕获 API", "", "nocode")}} 的 **`BrowserCaptureMediaStreamTrack`** 接口用于表示单个视频轨道。它扩展了 {{domxref("MediaStreamTrack")}} 类，并添加了方法来限制自捕获流（例如用户的屏幕或窗口）中被捕获的部分。

{{InheritanceDiagram}}

## 实例方法

- {{domxref("BrowserCaptureMediaStreamTrack.clone", "clone()")}} {{Experimental_Inline}}
  - : 返回原始 `BrowserCaptureMediaStreamTrack` 的未裁剪、无限制的克隆对象。
- {{domxref("BrowserCaptureMediaStreamTrack.cropTo", "cropTo()")}} {{Experimental_Inline}}
  - : 将自捕获流裁剪到指定 DOM 元素渲染的区域。
- {{domxref("BrowserCaptureMediaStreamTrack.restrictTo", "restrictTo()")}} {{Experimental_Inline}}
  - : 将自捕获流限制到特定的 DOM 元素。

## 示例

参见[使用元素捕获和区域捕获 API](/zh-CN/docs/Web/API/Screen_Capture_API/Element_Region_Capture) 获取上下文中的示例代码。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [屏幕捕获 API](/zh-CN/docs/Web/API/Screen_Capture_API)
- [使用元素捕获和区域捕获 API](/zh-CN/docs/Web/API/Screen_Capture_API/Element_Region_Capture)
