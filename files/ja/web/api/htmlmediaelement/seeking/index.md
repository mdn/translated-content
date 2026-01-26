---
title: "HTMLMediaElement: seeking プロパティ"
short-title: seeking
slug: Web/API/HTMLMediaElement/seeking
l10n:
  sourceCommit: 2e84c228bf55def31fcd3ac3a0227b5faed99657
---

{{APIRef("HTML DOM")}}

**`seeking`** は {{domxref("HTMLMediaElement")}} インターフェイスの読み取り専用プロパティで、リソース、すなわち {{htmlelement("audio")}} または {{htmlelement("video")}} が新しい位置へのシーク処理中であるかどうかを示す論理値です。

## 値

論理値です。

## 例

```js
const el = document.querySelector("video");
console.log(el.seeking); // true または false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLMediaElement.seeking_event", "seeking")}} イベント
- {{domxref("HTMLMediaElement.seeked_event", "seeked")}} イベント
- {{domxref("HTMLVideoElement")}}
- {{domxref("HTMLAudioElement")}}
