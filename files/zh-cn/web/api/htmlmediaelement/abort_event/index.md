---
title: HTMLMediaElement：abort 事件
slug: Web/API/HTMLMediaElement/abort_event
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef}}

资源没有被完全加载时就会触发 **`abort`** 事件，但错误不会触发该事件。

此事件无法被取消也不会冒泡。

## 语法

在类似 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 的方法中使用此事件名，或者设置一个事件处理器属性。

```js
addEventListener("abort", (event) => {});

onabort = (event) => {};
```

## 事件类型

一个通用型 {{domxref("Event")}} 。

## 示例

```js
const video = document.querySelector("video");
const videoSrc = "https://example.org/path/to/video.webm";

video.addEventListener("abort", () => {
  console.log(`Abort loading: ${videoSrc}`);
});

const source = document.createElement("source");
source.setAttribute("src", videoSrc);
source.setAttribute("type", "video/webm");

video.appendChild(source);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLAudioElement")}}
- {{domxref("HTMLVideoElement")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}