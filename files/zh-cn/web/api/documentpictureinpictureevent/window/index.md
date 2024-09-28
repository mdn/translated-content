---
title: DocumentPictureInPictureEvent：window 属性
slug: Web/API/DocumentPictureInPictureEvent/window
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Document Picture-in-Picture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

{{domxref("DocumentPictureInPictureEvent")}} 接口的 **`window`** 只读属性返回一个 {{domxref("Window")}} 实例，表示事件触发时 `DocumentPictureInPicture` 窗口中的浏览上下文。

## 值

一个 {{domxref("Window")}} 对象实例。

## 示例

```js
documentPictureInPicture.addEventListener("enter", (event) => {
  const pipWindow = event.window;
  console.log("视频播放器已进入画中画窗口");

  const pipMuteButton = pipWindow.document.createElement("button");
  pipMuteButton.textContent = "静音";
  pipMuteButton.addEventListener("click", () => {
    const pipVideo = pipWindow.document.querySelector("#video");
    if (!pipVideo.muted) {
      pipVideo.muted = true;
      pipMuteButton.textContent = "取消静音";
    } else {
      pipVideo.muted = false;
      pipMuteButton.textContent = "静音";
    }
  });

  pipWindow.document.body.append(pipMuteButton);
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Document Picture-in-Picture API", "Document Picture-in-Picture API", "", "nocode")}}
- [使用 Document Picture-in-Picture API](/zh-CN/docs/Web/API/Document_Picture-in-Picture_API/Using)
