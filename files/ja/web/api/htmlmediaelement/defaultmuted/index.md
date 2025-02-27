---
title: "HTMLMediaElement: defaultMuted プロパティ"
short-title: defaultMuted
slug: Web/API/HTMLMediaElement/defaultMuted
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.defaultMuted`** プロパティは、 HTML の [`muted`](/ja/docs/Web/HTML/Element/video#muted) 属性を反映し、メディア要素の音声出力を既定でミュートするかどうかを示します。このプロパティは動的な効果はありません。 音声出力をミュートおよびミュート解除するには、{{domxref("HTMLMediaElement.muted", "muted")}} プロパティを使用してください。

## 値

論理値です。値が `true` の場合、既定で音声出力がミュートされることを意味します。

## 例

```js
const videoEle = document.createElement("video");
videoEle.defaultMuted = true;
console.log(videoEle.outerHTML); // <video muted=""></video>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLMediaElement")}}: `HTMLMediaElement.defaultMuted` プロパティを定義しているインターフェイス
- {{domxref("HTMLMediaElement.muted")}}
- {{domxref("HTMLMediaElement.volume")}}
