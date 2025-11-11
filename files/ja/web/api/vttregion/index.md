---
title: VTTRegion
slug: Web/API/VTTRegion
l10n:
  sourceCommit: 0fe27ff068e18f54bc689577c036fd7d82a55c4a
---

{{APIRef("WebVTT")}}

`VTTRegion` インターフェイスは WebVTT（メディアプレゼンテーションに関するテキストトラック）を処理するための API の一部であり、 {{domxref("VTTCue")}} をレンダリングするための動画の一部を記述します。

## コンストラクタ

- {{domxref("VTTRegion.VTTRegion", "VTTRegion()")}}
  - : 新しく作成された `VTTRegion` オブジェクトを返します。

## プロパティ

- {{domxref("VTTRegion.id")}}
  - : 領域を識別する文字列。
- {{domxref("VTTRegion.width")}}
  - : 領域の幅を動画のパーセント値として表す `double` 値。
- {{domxref("VTTRegion.lines")}}
  - : 領域の高さを行数で表す `double` 値。
- {{domxref("VTTRegion.regionAnchorX")}}
  - : 領域アンカーの X オフセットを領域のパーセント値として表す `double` 値。
- {{domxref("VTTRegion.regionAnchorY")}}
  - : 領域アンカーの Y オフセットを領域のパーセント値として表す `double` 値。
- {{domxref("VTTRegion.viewportAnchorX")}}
  - : ビューポートアンカーの X オフセットを動画のパーセント値として表す `double` 値。
- {{domxref("VTTRegion.viewportAnchorY")}}
  - : ビューポートアンカーの Y オフセットを動画のパーセント値として表す `double` 値。
- {{domxref("VTTRegion.scroll")}}
  - : 新しいキューを追加すると既存のキューがどのように移動するかを表す列挙型。

## 例

```js
const region = new VTTRegion();
region.width = 50; // 動画幅の 50% を使用し、
region.lines = 4; // 高さは 4 行を使用します。
region.viewportAnchorX = 25; // 領域が左から 25% で始まるようにします。
const cue = new VTTCue(2, 3, "かっこいい文章を表示する");
cue.region = region; // このキューはこの領域内にのみ描かれます。
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
