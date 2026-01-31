---
title: HTMLMediaElement.load()
slug: Web/API/HTMLMediaElement/load
---

{{APIRef("HTML DOM")}}

**`load()`** 方法重置媒体成初始化状态，选择一个播放源，为载入媒体重新播放做准备。媒体预播放的信息是由 **`preload`** 这个参数决定的。

此方法只在对媒体做动态更改时管用，要么更改`src`属性，要么添加或删除`source` 。 `load()` 将会重置元素重新扫描可用的源，从而让改动生效。

## 语法

```plain
mediaElement.load();
```

### 参数

None.

### 返回值

`undefined`.

## 使用说明

调用 `load()` 会使媒体上所有正在进行的操作中止，然后根据 `audio` 或者 `video` 元素的 `src` 或者 `source` 属性里寻找合适的播放源并重新加载媒体内容。更多查看 [Supporting multiple formats](/zh-CN/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio#supporting_multiple_formats) 和 [Video and audio content](/zh-CN/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) 。

中止任何正在进行的活动的过程将导致 {{domxref("HTMLMediaElement.play", "play()")}} 返回的所有未完成的 {{jsxref("Promise")}} 根据其在开始加载新媒体之前的状态被适当地兑现或拒绝。待处理的播放 promise 会以 `"AbortError"` {{domxref("DOMException")}} 中止。

在 load 过程中 合适的事件会发生并通知给媒体本身，包括：

- 如果已经是 `load` 过了，则 `abort` 事件发送给媒体。
- 如果元素已经使用媒体进行了初始化，则会发送 **[`emptied`](/zh-CN/docs/Web/API/HTMLMediaElement/emptied_event)** 事件。
- 如果重置播放位置到开始，通常指修改播放位置，**timeupdate** 事件触发。
- 当已经选择了源并且已经准备加载内容了，**loadstart** 事件触发。
- 之前的几点，媒体加载并且事件已经送达

## 例子

例子中有一个 {{HTMLElement("video")}} 元素然后重置它 `load()`.

```js
var mediaElem = document.querySelector("video");
mediaElem.load();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
