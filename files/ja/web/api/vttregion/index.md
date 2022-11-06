---
title: VTTRegion
slug: Web/API/VTTRegion
---

{{APIRef("WebVTT")}}

WebVTT（メディアプレゼンテーションに関するテキストトラック）を処理するための API の一部である `VTTRegion` インターフェイスは、{{domxref("VTTCue")}} をレンダリングするための動画の一部を記述します。

## コンストラクタ

- {{domxref("VTTRegion.VTTRegion", "VTTRegion()")}}
  - : 新しく作成された `VTTRegion` オブジェクトを返します。

## プロパティ

- {{domxref("VTTRegion.id")}}
  - : 領域を識別する {{domxref("DOMString")}}。
- {{domxref("VTTRegion.width")}}
  - : 領域の幅を動画のパーセントとして表す `double` 型。
- {{domxref("VTTRegion.lines")}}
  - : 領域の高さを行数で表す `double` 型。
- {{domxref("VTTRegion.regionAnchorX")}}
  - : 領域アンカーの X オフセットを領域のパーセントとして表す `double` 型。
- {{domxref("VTTRegion.regionAnchorY")}}
  - : 領域アンカーの Y オフセットを領域のパーセントとして表す `double` 型。
- {{domxref("VTTRegion.viewportAnchorX")}}
  - : ビューポートアンカーの X オフセットを動画のパーセントとして表す `double` 型。
- {{domxref("VTTRegion.viewportAnchorY")}}
  - : ビューポートアンカーの Y オフセットを動画のパーセントとして表す `double` 型。
- {{domxref("VTTRegion.scroll")}}
  - : 新しいキューを追加すると既存のキューがどのように移動するかを表す列挙型。

## 例

```js
var region = new VTTRegion();
region.width = 50;  // 動画幅の50%を使用し、
region.lines = 4;  // 高さは4行を使用します。
region.viewportAnchorX = 25;  // 領域が左から25%で始まるようにします。
var cue = new VTTCue(2, 3, 'かっこいい文章を表示する');
cue.region = region;  // このキューはこの領域内にのみ描かれます。
```

## 仕様

| 仕様                         | 状態                     | コメント |
| ---------------------------- | ------------------------ | -------- |
| {{SpecName("WebVTT")}} | {{Spec2("WebVTT")}} |          |

## ブラウザーの互換性

{{Compat("api.VTTRegion")}}
