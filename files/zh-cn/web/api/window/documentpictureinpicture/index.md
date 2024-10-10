---
title: Window：documentPictureInPicture 属性
slug: Web/API/Window/documentPictureInPicture
l10n:
  sourceCommit: bac20b9ed34bf5b6427ba9274c99c1737dc309ff
---

{{APIRef("Document Picture-in-Picture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

{{domxref("Window")}} 接口的 **`documentPictureInPicture`** 只读属性返回对当前文档上下文的 {{domxref("DocumentPictureInPicture")}} 对象的引用。

## 值

{{domxref("DocumentPictureInPicture")}} 对象实例。

## 示例

```js
const videoPlayer = document.getElementById("player");

// ...

// 打开画中画窗口。
await window.documentPictureInPicture.requestWindow({
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
