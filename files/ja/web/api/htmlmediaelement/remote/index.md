---
title: "HTMLMediaElement: remote プロパティ"
short-title: remote
slug: Web/API/HTMLMediaElement/remote
l10n:
  sourceCommit: 0b6bfb8a3a03de5956dd1cec4b47e5e37078149d
---

{{APIRef("Remote Playback API")}}

**`remote`** は {{domxref("HTMLMediaElement")}} インターフェイスの読み取り専用プロパティで、このメディア要素に関連付けられた {{domxref("RemotePlayback")}} オブジェクトを返します。`RemotePlayback` オブジェクトは、メディアを再生するリモート端末を制御することができます。

## 値

このメディア要素に関連付けられた {{domxref("RemotePlayback")}} オブジェクトです。

## 例

```js
const el = document.createElement("audio");
const remotePlayback = el.remote;

remotePlayback.watchAvailability((availability) => {
  // 利用できる状況が変わったら何かを行う
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
