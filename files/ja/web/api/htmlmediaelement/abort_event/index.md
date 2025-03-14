---
title: "HTMLMediaElement: abort イベント"
short-title: abort
slug: Web/API/HTMLMediaElement/abort_event
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef}}

**`abort`** イベントは、リソースが完全には読み込まれなかったが、それがエラーの結果ではなかった場合に発生します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("abort", (event) => {});

onabort = (event) => {};
```

## イベント型

一般の {{domxref("Event")}} です。

## 例

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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLAudioElement")}}
- {{domxref("HTMLVideoElement")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
