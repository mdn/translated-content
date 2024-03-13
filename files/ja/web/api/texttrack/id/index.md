---
title: TextTrack.id
slug: Web/API/TextTrack/id
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{APIRef("WebVTT")}}

**`id`** は {{domxref("TextTrack")}} インターフェイスの読み取り専用プロパティで、このトラックの ID があれば、それを返します。

## 値

ID の入った文字列、または空文字列です。

## 例

以下の例では、`id` の値がコンソールに表示されます。

```js
const video = document.querySelector("video");
const track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";
console.log(track.id);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
