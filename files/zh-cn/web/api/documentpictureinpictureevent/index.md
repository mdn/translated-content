---
title: DocumentPictureInPictureEvent
slug: Web/API/DocumentPictureInPictureEvent
l10n:
  sourceCommit: bac20b9ed34bf5b6427ba9274c99c1737dc309ff
---

{{APIRef("Document Picture-in-Picture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

**`DocumentPictureInPictureEvent`** 接口是 {{domxref("Document Picture-in-Picture API", "Document Picture-in-Picture API", "", "nocode")}} 的 {{domxref("DocumentPictureInPicture/enter_event", "enter")}} 事件（会在画中画窗口打开时触发）的对象。

{{InheritanceDiagram}}

## 构造函数

- {{domxref("DocumentPictureInPictureEvent.DocumentPictureInPictureEvent", "DocumentPictureInPictureEvent()")}} {{Experimental_Inline}}
  - : 创建一个新的 `DocumentPictureInPictureEvent` 对象实例。

## 实例属性

_继承其父接口 {{DOMxRef("Event")}} 的属性。_

- {{domxref("DocumentPictureInPictureEvent.window", "window")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回一个 {{domxref("Window")}} 实例，表示触发事件的 `DocumentPictureInPicture` 窗口的浏览上下文。

## 实例方法

_继承其父接口 {{DOMxRef("Event")}} 的方法。_

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
