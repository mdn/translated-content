---
title: TextTrack.inBandMetadataTrackDispatchType
slug: Web/API/TextTrack/inBandMetadataTrackDispatchType
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{APIRef("WebVTT")}}

**`inBandMetadataTrackDispatchType`** は {{domxref("TextTrack")}} インターフェイスの読み取り専用プロパティで、この {{domxref("TextTrack")}} オブジェクトが表すテキストトラックの帯域内メタデータディスパッチ種別を返します。

帯域内メタデータディスパッチ種別とは、帯域内メタデータトラック用にメディアリソースから抽出された文字列のことです。このようなトラックが保有できるメディアリソースの例としては、ウェブ上で放送をストリーミングしているテレビ局が挙げられます。テキストトラックは、広告ターゲティングのためのメタデータ、料理番組中のレシピデータなどの追加情報、ゲーム番組中のトリビアゲームデータを含めるために使用することができます。

この属性の値は、これらのトラックを専用のスクリプトモジュールが読み込まれたときに添付するために使用することができます。

## 値

`inBandMetadataTrackDispatchType` を含む文字列、または空文字列です。

## 例

以下の例では、`inBandMetadataTrackDispatchType`の値がコンソールに表示されます。

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";
console.log(track.inBandMetadataTrackDispatchType);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
