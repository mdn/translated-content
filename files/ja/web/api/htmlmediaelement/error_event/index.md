---
title: "HTMLMediaElement: error イベント"
slug: Web/API/HTMLMediaElement/error_event
l10n:
  sourceCommit: 277e5969c63b97cfb55ab4a0e612e8040810f49b
---

{{APIRef}}

**`error`** イベントは、リソースがエラーのために読み込めなかったときに発生します（例えば、ネットワーク接続の問題など）。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベントを {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener('error', (event) => {});

onerror = (event) => { };
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

```js
const video = document.querySelector('video');
const videoSrc = 'https://path/to/video.webm';

video.addEventListener('error', () => {
  console.error(`Error loading: ${videoSrc}`);
});

video.setAttribute('src', videoSrc);
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
