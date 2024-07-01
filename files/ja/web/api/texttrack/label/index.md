---
title: TextTrack.label
slug: Web/API/TextTrack/label
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{APIRef("WebVTT")}}

**`label`** は {{domxref("TextTrack")}} インターフェイスの読み取り専用プロパティで、このテキストトラックの人間可読なラベルがあれば、それを返します。

## 値

`label` を含む文字列、または空文字列です。

## 例

以下の例では、 `label` の値がコンソールに表示されます。

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";
console.log(track.label);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
