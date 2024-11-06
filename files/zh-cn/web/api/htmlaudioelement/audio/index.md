---
title: Audio()
slug: Web/API/HTMLAudioElement/Audio
---

{{APIRef("HTML DOM")}}

**`Audio()`** 构造器创建并返回一个 {{domxref("HTMLAudioElement")}}，可以将它附加到文档中以供用户交互，也可以用于管理和播放背景音乐。

## 语法

```plain
audioObj = new Audio(url);
```

### 参数

- `url` {{optional_inline}}
  - : 一个可选的、包含音频文件 URL 的 {{domxref("DOMString")}}。

### 返回值

新创建的 {{domxref("HTMLAudioElement")}} 对象，被设置为播放指定 `url`的音频文件。新对象的 {{domxref("HTMLMediaElement.preload", "preload")}} 属性被设置为 `auto` 且它的 `src` 属性被设置为具体的 URL 或 `null` （当没有提供 URL 时）。如果提供了 URL，浏览器在返回新对象之前开始异步加载媒体资源。

## 使用说明

你也可以使用其他元素创建方法，例如 {{domxref("document")}} 对象的 {{domxref("Document.createElement", "createElement()")}} 方法，去构建一个新的 {{domxref("HTMLAudioElement")}}.

### 检测回放时机

提供三种方法给开发者，判断音频文件是否已经加载，允许开始回放：

- 检测 {{domxref("HTMLMediaElement.readyState", "readyState")}} 属性的值。如果值是 `HTMLMediaElement.HAVE_FUTURE_DATA`，说明有足够的数据开始回放并能至少播放一小段时间。如果值是 `HTMLMediaElement.HAVE_ENOUGH_DATA`，根据当前的下载速率，说明有足够的数据，你可以无干扰地播放至结束。
- 监听 {{domxref("HTMLMediaElement.canplay_event", "canplay")}} 事件。当足够的音频数据被发送至 `<audio>` 元素，能开始回放，即使可能出现中断时，会触发该事件。
- 监听 {{domxref("HTMLMediaElement.canplaythrough_event", "canplaythrough")}} 事件。当音频应该没有干扰能够顺利播放时将会触发该事件。

基于事件的方法是最优的：

```js
myAudioElement.addEventListener("canplaythrough", (event) => {
  /* 音频可以播放；如果权限允许则播放 */
  myAudioElement.play();
});
```

### 内存使用与管理

如果所有使用 `Audio()` 构造函数创建的 audio 元素被删除，根据 JavaScript 垃圾回收机制，如果播放正在进行，内存中的 audio 元素不会被移除。相反，音频将会继续播放并且它的对象会保留在内存中，直到播放结束或是被暂停（例如调用 {{domxref("HTMLMediaElement.pause", "pause()")}}）。在那个时候，这个对象才会成为垃圾回收的目标。

## 规范

{{Specifications}}

## 浏览器兼容性

The compatibility table on this page is generated from structured data. If you'd like to contribute to the data, please check out <https://github.com/mdn/browser-compat-data> and send us a pull request.

{{Compat}}

## 参见

- [Web media technologies](/zh-CN/docs/Web/Media)
- 实现了此接口的 HTML 元素：{{HTMLElement("audio")}}。
