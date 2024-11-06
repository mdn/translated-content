---
title: "HTMLMediaElement: error イベント"
short-title: error
slug: Web/API/HTMLMediaElement/error_event
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef}}

**`error`** イベントは、リソースがエラーのために読み込めなかったときに発生します（例えば、ネットワーク接続の問題など）。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベントを {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

```js
const video = document.querySelector("video");
const videoSrc = "https://path/to/video.webm";

video.addEventListener("error", () => {
  console.error(`Error loading: ${videoSrc}`);
});

video.setAttribute("src", videoSrc);
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
