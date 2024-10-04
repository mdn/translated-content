---
title: DocumentPictureInPicture：window 属性
slug: Web/API/DocumentPictureInPicture/window
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Document Picture-in-Picture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

{{domxref("DocumentPictureInPicture")}} 接口的 **`window`** 只读属性返回一个 {{domxref("Window")}} 实例，表示画中画窗口内的浏览上下文。

## 值

如果已经使用 {{domxref("DocumentPictureInPicture.requestWindow()")}} 打开了画中画窗口，则为一个 {{domxref("Window")}} 对象实例，否则为 `null`。

## 示例

```js
const videoPlayer = document.getElementById("player");

// ...

await window.documentPictureInPicture.requestWindow({
  width: videoPlayer.clientWidth,
  height: videoPlayer.clientHeight,
});

// ...

const pipWindow = window.documentPictureInPicture.window;
if (pipWindow) {
  // 使画中画窗口中播放的视频静音。
  const pipVideo = pipWindow.document.querySelector("#video");
  pipVideo.muted = true;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Document Picture-in-Picture API", "Document Picture-in-Picture API", "", "nocode")}}
- [使用 Document Picture-in-Picture API](/zh-CN/docs/Web/API/Document_Picture-in-Picture_API/Using)
