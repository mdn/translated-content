---
title: DocumentPictureInPicture：requestWindow() 方法
slug: Web/API/DocumentPictureInPicture/requestWindow
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Document Picture-in-Picture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

{{domxref("DocumentPictureInPicture")}} 接口的 **`requestWindow()`** 方法为当前主浏览上下文打开画中画窗口。它返回一个 {{jsxref("Promise")}}，其兑现一个 {{domxref("Window")}} 实例，表示画中画窗口内的浏览上下文。

`requestWindow()` 方法需要[瞬态激活](/zh-CN/docs/Glossary/Transient_activation)，也就是说，它必须在响应鼠标单击或按钮按下等用户操作时调用。

## 语法

```js-nolint
requestWindow()
requestWindow(options)
```

### 参数

- `options` {{optional_inline}}
  - : 包含以下属性的选项对象：
    - `height`
      - : 一个非负数，表示要为画中画窗口的视口设置的高度（以像素为单位）。如果未指定 `options`，则使用默认值 0。
    - `width`
      - : 一个非负数，表示要设置的画中画窗口视口宽度（以像素为单位）。如果未指定 `options`，则使用默认值 0。

> [!NOTE]
> 如果指定了其中一个选项，则必须同时指定另一个选项，否则会抛出错误。如果两个值均未指定、指定为 0 或设置过大，则浏览器将根据需要限制或忽略这些值以提供合理的用户体验。限制的大小将根据浏览器实现、显示器尺寸和其他因素而有所不同。

### 返回值

一个兑现 {{domxref("Window")}} 对象实例的 {{jsxref("Promise")}}，该实例代表画中画窗口内的浏览上下文。

### 异常

- `NotSupportedError` {{domxref("DOMException")}}
  - : 如果 API 已被明确禁用（例如通过浏览器设置），则抛出此异常。
- `NotAllowedError` {{domxref("DOMException")}}
  - : 在符合以下条件时抛出此异常：
    - `requestWindow()` 不是从顶级 `window` 对象调用的。
    - `requestWindow()` 是从画中画窗口的 `window` 对象调用的（即 {{domxref("DocumentPictureInPicture.window")}}）。
    - 调用 `requestWindow()` 时不满足 {{Glossary("Transient_activation", "瞬态激活")}}。
- `RangeError` {{domxref("DOMException")}}
  - : 如果仅设置了 `height` 和 `width` 中的一个，或者 `height` 和 `width` 设置为负值，则抛出。

## 示例

```js
const videoPlayer = document.getElementById("player");

// ...

// 打开画中画窗口。
const pipWindow = await window.documentPictureInPicture.requestWindow({
  width: videoPlayer.clientWidth,
  height: videoPlayer.clientHeight,
});

// ...
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Document Picture-in-Picture API", "Document Picture-in-Picture API", "", "nocode")}}
- [使用 Document Picture-in-Picture API](/zh-CN/docs/Web/API/Document_Picture-in-Picture_API/Using)
