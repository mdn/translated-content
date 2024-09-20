---
title: DocumentPictureInPictureEvent：DocumentPictureInPictureEvent() 构造函数
slug: Web/API/DocumentPictureInPictureEvent/DocumentPictureInPictureEvent
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Document Picture-in-Picture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

**`DocumentPictureInPictureEvent()`** 构造函数创建一个新的 {{domxref("DocumentPictureInPictureEvent")}} 对象实例。

## 语法

```js-nolint
new DocumentPictureInPictureEvent(type, init)
```

### 参数

- `type`
  - : 一个表示事件类型的字符串。在 `DocumentPictureInPictureEvent` 的情况下，这始终是 `enter`。
- `init`
  - : 一个包含以下属性的对象：
    - `window`
      - : 一个 {{domxref("Window")}} 实例，表示事件触发时的 `DocumentPictureInPicture` 窗口中的浏览上下文。

## 示例

开发者通常不会手动使用此构造函数。当由于触发 {{domxref("DocumentPictureInPicture.enter_event", "enter")}} 事件而调用处理器时，会自动构造一个新的 `DocumentPictureInPictureEvent` 对象。

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
