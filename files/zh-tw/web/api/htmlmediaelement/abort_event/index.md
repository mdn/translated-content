---
title: HTMLMediaElement：abort 事件
short-title: abort
slug: Web/API/HTMLMediaElement/abort_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("HTML DOM")}}

**`abort`** 事件會在資源未完全載入，且非因錯誤導致時觸發。

此事件不可取消且不會冒泡。

## 語法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名稱，或設定事件處理器屬性。

```js-nolint
addEventListener("abort", (event) => { })

onabort = (event) => { }
```

## 事件類型

通用的 {{domxref("Event")}}。

## 範例

```js
const video = document.querySelector("video");
const videoSrc = "https://example.org/path/to/video.webm";

video.addEventListener("abort", () => {
  console.log(`中止載入：${videoSrc}`);
});

const source = document.createElement("source");
source.setAttribute("src", videoSrc);
source.setAttribute("type", "video/webm");

video.appendChild(source);
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{domxref("HTMLAudioElement")}}
- {{domxref("HTMLVideoElement")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
