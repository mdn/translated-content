---
title: 使用 Document Picture-in-Picture API
slug: Web/API/Document_Picture-in-Picture_API/Using
l10n:
  sourceCommit: f7ddd45a6bd53eb7fc10dbacc07a3acb168c1352
---

{{SeeCompatTable}}{{DefaultAPISidebar("Document Picture-in-Picture API")}}{{securecontext_header}}

本指南提供了 {{domxref("Document Picture-in-Picture API", "Document Picture-in-Picture API", "", "nocode")}} 典型用法的详细指导。

> [!NOTE]
> 你可以在 [Document Picture-in-Picture API 示例](https://mdn.github.io/dom-examples/document-picture-in-picture/)中看到特性演示（另请参阅完整的[源代码](https://github.com/mdn/dom-examples/tree/main/document-picture-in-picture)）。

## 示例 HTML

以下 HTML 设置了一个基本的视频播放器。

```html
<div id="container">
  <p class="in-pip-message">视频播放器当前位于单独的画中画窗口中。</p>
  <div id="player">
    <video
      src="assets/bigbuckbunny.mp4"
      id="video"
      controls
      width="320"></video>

    <div id="credits">
      <a href="https://peach.blender.org/download/" target="_blank">
        Blender 的视频
      </a>
      ;
      <a href="https://peach.blender.org/about/" target="_blank">
        许可 CC-BY 3.0
      </a>
    </div>

    <div id="control-bar">
      <p class="no-picture-in-picture">
        Document Picture-in-Picture API 不可用
      </p>

      <p></p>
    </div>
  </div>
</div>
```

## 特性检测

要检查是否支持 Document Picture-in-Picture API，你可以测试 `window` 上的 `documentPictureInPicture` 属性是否可用：

```js
if ("documentPictureInPicture" in window) {
  document.querySelector(".no-picture-in-picture").remove();

  const togglePipButton = document.createElement("button");
  togglePipButton.textContent = "切换画中画";
  togglePipButton.addEventListener("click", togglePictureInPicture, false);

  document.getElementById("control-bar").appendChild(togglePipButton);
}
```

如果可用，我们将删除“Document Picture-in-Picture API 不可用”消息，并添加 {{htmlelement("button")}} 元素以在文档画中画窗口中打开视频播放器。

## 打开画中画窗口

以下 JavaScript 调用 {{domxref("DocumentPictureInPicture.requestWindow", "window.documentPictureInPicture.requestWindow()")}} 打开一个空白的画中画窗口。返回的 {{jsxref("Promise")}} 兑现画中画 {{domxref("Window")}} 对象。使用 {{domxref("Element.append()")}} 将视频播放器移动到该窗口，然后我们显示消息通知用户它已被移动。

`requestWindow()` 的 `width` 和 `height` 选项将画中画窗口设置为所需大小。如果选项值太大或太小而无法适应用户友好的窗口大小，浏览器可能会限制选项值。

```js
async function togglePictureInPicture() {
  // 如果已经打开画中画窗口，则提前返回
  if (window.documentPictureInPicture.window) {
    return;
  }

  // 打开画中画窗口。
  const pipWindow = await window.documentPictureInPicture.requestWindow({
    width: videoPlayer.clientWidth,
    height: videoPlayer.clientHeight,
  });

  // ...

  // 将播放器移至画中画窗口。
  pipWindow.document.body.append(videoPlayer);

  // 显示一条消息表明它已被移动
  inPipMessage.style.display = "block";
}
```

## 将样式表复制到画中画窗口

要从原始窗口复制所有 CSS 样式表，请循环遍历文档中明确链接或嵌入的所有样式表（通过 {{domxref("Document.styleSheets")}}），然后将其附加到画中画窗口。请注意，这是一次性复制。

```js
// ...

// 从初始文档复制样式表，以便播放器看起来相同。
[...document.styleSheets].forEach((styleSheet) => {
  try {
    const cssRules = [...styleSheet.cssRules]
      .map((rule) => rule.cssText)
      .join("");
    const style = document.createElement("style");

    style.textContent = cssRules;
    pipWindow.document.head.appendChild(style);
  } catch (e) {
    const link = document.createElement("link");

    link.rel = "stylesheet";
    link.type = styleSheet.type;
    link.media = styleSheet.media;
    link.href = styleSheet.href;
    pipWindow.document.head.appendChild(link);
  }
});

// ...
```

## 画中画模式下目标样式

{{cssxref("@media/display-mode", "display-mode")}} [媒体特性](/zh-CN/docs/Web/CSS/Reference/At-rules/@media#媒体特性) 的 `picture-in-picture` 值允许开发人员根据文档是否以画中画模式显示来将 CSS 应用于文档。基本用法如下：

```css
@media (display-mode: picture-in-picture) {
  body {
    background: red;
  }
}
```

仅当以画中画模式显示时，此代码片段才会将文档 `<body>` 的背景变为红色。

在[我们的演示](https://mdn.github.io/dom-examples/document-picture-in-picture/)中，我们将 `display-mode: picture-in-picture` 值与 {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} 媒体特性相结合，以根据用户的配色方案偏好创建仅当应用以画中画模式显示时才应用的明暗配色方案。

```css
@media (display-mode: picture-in-picture) and (prefers-color-scheme: light) {
  body {
    background: antiquewhite;
  }
}

@media (display-mode: picture-in-picture) and (prefers-color-scheme: dark) {
  body {
    background: #333;
  }

  a {
    color: antiquewhite;
  }
}
```

## 处理画中画窗口关闭时的情况

当第二次按下按钮时，切换画中画窗口再次关闭的代码如下所示：

```js
inPipMessage.style.display = "none";
playerContainer.append(videoPlayer);
window.documentPictureInPicture.window.close();
```

在这里，我们恢复 DOM 更改——隐藏消息并将视频播放器放回主应用窗口中的播放器容器中。我们还使用 {{domxref("Window.close()")}} 方法以编程方式关闭画中画窗口。

但是，你还需要考虑用户通过按下窗口本身上浏览器提供的 UI 关闭控件来关闭画中画窗口的情况。你可以通过使用 [`pagehide`](/zh-CN/docs/Web/API/Window/pagehide_event) 事件检测窗口何时关闭来处理这种情况：

```js
pipWindow.addEventListener("pagehide", (event) => {
  inPipMessage.style.display = "none";
  playerContainer.append(videoPlayer);
});
```

> [!NOTE]
> 在调用 `DocumentPictureInPicture.requestWindow()` 打开画中画窗口时，可以通过将选项对象中的 [`disallowReturnToOpener`](/zh-CN/docs/Web/API/DocumentPictureInPicture/requestWindow#disallowreturntoopener) 选项设置为 `true` 来隐藏浏览器提供的 UI 关闭控件。

## 监听网站何时进入画中画模式

监听 `DocumentPictureInPicture` 实例上的 {{domxref("DocumentPictureInPicture.enter_event", "enter")}} 事件，了解画中画窗口何时打开。

在我们的演示中，我们使用 `enter` 事件向画中画窗口添加静音切换按钮：

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

> [!NOTE]
> {{domxref("DocumentPictureInPictureEvent")}} 事件对象包含一个 `window` 属性，用于访问画中画窗口。

## 访问元素并处理事件

你可以通过多种不同的方式访问画中画窗口中的元素：

- {{domxref("DocumentPictureInPicture.requestWindow()")}} 方法返回的 {{domxref("Window")}} 实例，如上所示。
- 通过 {{domxref("DocumentPictureInPictureEvent")}} 事件对象的 `window` 属性（在 {{domxref("DocumentPictureInPicture.enter_event", "enter")}} 事件上），如上所示。
- 通过 {{domxref("DocumentPictureInPicture.window")}} 属性：

```js
const pipWindow = window.documentPictureInPicture.window;
if (pipWindow) {
  // 使画中画窗口中播放的视频静音。
  const pipVideo = pipWindow.document.querySelector("#video");
  pipVideo.muted = true;
}
```

一旦获得了对画中画 `window` 实例的引用，你就可以操作 DOM（例如创建按钮）并响应用户输入事件（例如 [`click`](/zh-CN/docs/Web/API/Element/click_event) 事件），就像在常规浏览器窗口上下文中正常执行一样。
