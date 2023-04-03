---
title: HTMLMediaElement.defaultMuted
slug: Web/API/HTMLMediaElement/defaultMuted
l10n:
  sourceCommit: 277e5969c63b97cfb55ab4a0e612e8040810f49b
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.defaultMuted`** プロパティは、 HTML の {{htmlattrxref("muted", "video")}} 属性を反映し、メディア要素の音声出力を既定でミュートするかどうかを示します。このプロパティは動的な効果はありません。 音声出力をミュートおよびミュート解除するには、{{domxref("HTMLMediaElement.muted", "muted")}} プロパティを使用してください。

## 値

論理値です。値が `true` の場合、既定で音声出力がミュートされることを意味します。

## 例

```js
const videoEle = document.createElement('video');
videoEle.defaultMuted = true;
console.log(videoEle.outerHTML); // <video muted=""></video>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 定義している {{domxref("HTMLMediaElement")}} インターフェイス
- {{domxref("HTMLMediaElement.muted")}}
- {{domxref("HTMLMediaElement.volume")}}
