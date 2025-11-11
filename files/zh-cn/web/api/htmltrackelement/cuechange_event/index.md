---
title: HTMLTrackElement：cuechange 事件
slug: Web/API/HTMLTrackElement/cuechange_event
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("WebVTT")}}

**`cuechange`** 事件在 {{domxref("TextTrack")}} 更改当前显示提示（cue）时触发。此事件在 `TextTrack` 和显示它的 {{domxref("HTMLTrackElement")}}（如果有的话）上触发。

## 语法

在像 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用此事件名，或设置事件处理器属性。

```js
addEventListener("cuechange", (event) => {});

oncuechange = (event) => {};
```

## 事件类型

没有添加属性的通用 {{DOMxRef("Event")}}。

## 示例

每当当前呈现的 cue 更改时，由 {{domxref("HTMLTrackElement.track", "track")}} 属性指示的底层 {{domxref("TextTrack")}} 会接收 `cuechange` 事件。即使轨道并未与媒体元素关联，也会发生。

如果轨道和媒体元素*是*关联的，使用 {{HTMLElement("track")}} 元素作为 {{HTMLElement("audio")}} 或 {{HTMLElement("video")}} 的子元素，`cuechange` 事件也发送给 {{domxref("HTMLTrackElement")}}。

```js
let textTrackElem = document.getElementById("texttrack");

textTrackElem.addEventListener("cuechange", (event) => {
  let cues = event.target.track.activeCues;
});
```

或者，你可以使用 `oncuechange` 事件处理器。

```js
let textTrackElem = document.getElementById("texttrack");

textTrackElem.oncuechange = (event) => {
  let cues = event.target.track.activeCues;
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{glossary("WebVTT")}}
- {{domxref("TextTrack")}} 上的同一事件：{{domxref("TextTrack.cuechange_event", "cuechange")}}
