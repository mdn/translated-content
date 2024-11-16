---
title: "Window: documentPictureInPicture プロパティ"
short-title: documentPictureInPicture
slug: Web/API/Window/documentPictureInPicture
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef}}{{seecompattable}}{{SecureContext_Header}}

**`documentPictureInPicture`** は {{domxref("Window")}} インターフェイスの読み取り専用プロパティで、現在の文書コンテキストの {{domxref("DocumentPictureInPicture")}} オブジェクトへの参照を返します。

## 値

{{domxref("DocumentPictureInPicture")}} オブジェクトインスタンスです。

## 例

```js
const videoPlayer = document.getElementById("player");

// ...

// Open a Picture-in-Picture window.
await window.documentPictureInPicture.requestWindow({
  width: videoPlayer.clientWidth,
  height: videoPlayer.clientHeight,
});

// ...
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document Picture-in-Picture API", "文書ピクチャインピクチャ API", "", "nocode")}}
- [文書ピクチャインピクチャ API の使用](/ja/docs/Web/API/Document_Picture-in-Picture_API/Using)
