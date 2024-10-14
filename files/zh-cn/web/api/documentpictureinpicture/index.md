---
title: DocumentPictureInPicture
slug: Web/API/DocumentPictureInPicture
l10n:
  sourceCommit: 26aaa0b6f92933d915563b1d1210cc46f4ec0e09
---

{{APIRef("Document Picture-in-Picture API")}}{{SeeCompatTable}}{{securecontext_header}}

{{domxref("Document Picture-in-Picture API", "Document Picture-in-Picture API", "", "nocode")}} 的 **`DocumentPictureInPicture`** 接口是创建和处理文档画中画窗口的入口点。

它是通过 {{domxref("Window.documentPictureInPicture")}} 属性访问的。

{{InheritanceDiagram}}

## 实例属性

_从其父接口 {{DOMxRef("EventTarget")}} 继承属性。_

- {{domxref("DocumentPictureInPicture.window", "window")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回一个 {{domxref("Window")}} 实例，代表画中画窗口内的浏览上下文。

## 实例方法

_从其父接口 {{DOMxRef("EventTarget")}} 继承方法。_

- {{domxref("DocumentPictureInPicture.requestWindow", "requestWindow()")}} {{Experimental_Inline}}
  - : 为当前主浏览环境打开画中画窗口。返回一个 {{jsxref("Promise")}}，其兑现一个 {{domxref("Window")}} 实例，代表画中画窗口内的浏览环境。

## 事件

_从其父接口 {{DOMxRef("EventTarget")}} 继承事件。_

- {{domxref("DocumentPictureInPicture/enter_event", "enter")}} {{Experimental_Inline}}
  - : 当画中画窗口成功打开时触发。

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

请参阅 [Document Picture-in-Picture API 示例](https://mdn.github.io/dom-examples/document-picture-in-picture/)获取完整的可运行演示（另请参阅完整的[源代码](https://github.com/mdn/dom-examples/tree/main/document-picture-in-picture)）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Document Picture-in-Picture API", "Document Picture-in-Picture API", "", "nocode")}}
- [使用 Document Picture-in-Picture API](/zh-CN/docs/Web/API/Document_Picture-in-Picture_API/Using)
