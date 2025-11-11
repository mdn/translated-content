---
title: HTMLMediaElement：error 事件
slug: Web/API/HTMLMediaElement/error_event
---

{{APIRef}}

**`error`** 事件会在因为一些错误（如网络连接错误）导致无法加载资源的时候触发。

事件不可取消也不会冒泡。

## 语法

在类似 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## 事件类型

一个通用的 {{domxref("Event")}}。

## 示例

```js
const video = document.querySelector("video");
const videoSrc = "https://path/to/video.webm";

video.addEventListener("error", () => {
  console.error(`Error loading: ${videoSrc}`);
});

video.setAttribute("src", videoSrc);
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
