---
title: "HTMLImageElement: y プロパティ"
short-title: y
slug: Web/API/HTMLImageElement/y
l10n:
  sourceCommit: 7b3ccaec4a93584da12939587ea746acaabe30bc
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLImageElement")}} の **`y`** プロパティは読み取り専用で、ルート要素の原点からの相対座標で {{HTMLElement("img")}} 要素の上端の y 座標を示します。

{{domxref("HTMLImageElement.x", "x")}} および `y` プロパティは、その {{cssxref("display")}} プロパティの計算値が `table-column` または `table-column-group` を持つ場合にのみ画像に有効です。言い換えれば、いずれかの値が明示的に設定されているか、包含する要素からそれを継承しているか、あるいは、 {{HTMLElement("col")}} または {{HTMLElement("colgroup")}} によって記述される列内に位置していることで、その画像に設定された場合です。

## 値

その要素の直近のルート要素の上端と {{HTMLElement("img")}} 要素の境界ボックスの上端との距離をピクセル単位で示す整数値です。直近のルート要素とは、この画像を含む一番外側の {{HTMLElement("html")}} 要素です。画像が {{HTMLElement("iframe")}} の中にある場合、その `x` はそのフレームからの相対座標です。

下の図では、上境界の端は青いパディング領域の上端です。
したがって、 `y` が返す値は、その点からコンテンツ領域の上端までの距離となります。

![要素に関連するさまざまなボックスの関係を示す図](boxmodel-3.png)

> **メモ:** `y` プロパティは、画像の {{cssxref("display")}} プロパティの計算値が `table-column` または `table-column-group` である場合にのみ有効です。言い換えれば、いずれかが {{HTMLElement("img")}} に直接設定されているか、包含要素から継承されているか、または {{HTMLElement("col")}} や {{HTMLElement("colgroup")}} で記述されている列内にあることが必要です。

## 例

[`HTMLImageElement.x`](/ja/docs/Web/API/HTMLImageElement/x#例) に `HTMLImageElement.y` （および `HTMLImageElement.x`）を使用したデモのコードがあります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
