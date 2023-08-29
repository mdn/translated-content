---
title: TextTrack.language
slug: Web/API/TextTrack/language
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{APIRef("WebVTT")}}

**`language`** は {{domxref("TextTrack")}} インターフェイスの読み取り専用プロパティで、このテキストトラックの言語を返します。

これは HTML の [`lang`](/ja/docs/Web/HTML/Global_attributes#lang) 属性と同じ値を使用します。これらの値は {{RFC(5646, "Tags for Identifying Languages (BCP 47 とも)")}} で文書化されています。

## 値

言語識別子を格納した文字列。例: 米国英語なら `"en-US"` 、ブラジルポルトガル語なら `"pt-BR"` 。

## 例

以下の例では、 `language` の値がコンソールに表示されます。

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en-US");
track.mode = "showing";
console.log(track.language);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
