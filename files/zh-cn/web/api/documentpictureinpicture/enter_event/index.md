---
title: DocumentPictureInPicture：enter 事件
slug: Web/API/DocumentPictureInPicture/enter_event
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Document Picture-in-Picture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

{{domxref("DocumentPictureInPicture")}} 接口的 **`enter`** 事件在画中画窗口成功打开时触发。

## 语法

在诸如 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 之类的方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("enter", (event) => {});

onenter = (event) => {};
```

## 事件类型

{{domxref("DocumentPictureInPictureEvent")}}。

## 示例

```js
documentPictureInPicture.addEventListener("enter", (event) => {
  const pipWindow = event.window;
  console.log("视频播放器已进入画中画窗口");

  const pipMuteButton = pipWindow.document.createElement("button");
  pipMuteButton.textContent = "已静音";
  pipMuteButton.addEventListener("click", () => {
    const pipVideo = pipWindow.document.querySelector("#video");
    if (!pipVideo.muted) {
      pipVideo.muted = true;
      pipMuteButton.textContent = "未静音";
    } else {
      pipVideo.muted = false;
      pipMuteButton.textContent = "已静音";
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
