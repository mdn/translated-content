---
title: "IntersectionObserver: rootMargin プロパティ"
short-title: rootMargin
slug: Web/API/IntersectionObserver/rootMargin
l10n:
  sourceCommit: 1b61fe3aa68b972468514d5ab13ed93497b13a96
---

{{APIRef("Intersection Observer API")}}

**`rootMargin`** は {{domxref("IntersectionObserver")}} インターフェイスの読み取り専用プロパティで、 CSS の {{cssxref("margin")}} プロパティと同じような構文の文字列です。

`rootMargin` で表される矩形の各辺は、交差判定が行われる前にルート要素 ({{domxref("IntersectionObserver.root", "root")}}) の{{Glossary("bounding box", "境界ボックス")}}内で対応する辺に追加されます。
これにより、例えば、あるピクセル数の幅または高さが切り取られた場合でもターゲット要素が 100% 表示されるように境界を外側に調整したり、端がルートの境界ボックスの端に近すぎる場合、ターゲットを部分的に非表示として扱ったりすることができます。

ルートマージンについて、またルートの境界ボックスとの間でどのように動作するかについて、より詳しくは[交差の計算方法](/ja/docs/Web/API/Intersection_Observer_API#交差の計算方法)を参照してください。

## 値

CSS の {{cssxref("margin")}} プロパティの値と同様の書式化された文字列で、ルートの境界ボックスの一つ以上の辺のためのオフセットを含みます。これらのオフセットは、結果の矩形と対象要素の境界との間の交差の前に、ルートの境界ボックス内の対応する値に追加されます。

このプロパティが返す文字列は、 {{domxref("IntersectionObserver")}} がインスタンス化されたときに指定された文字列と一致しない場合があります
例えば、結果は常に、入力が少ない場合でも 4 つの要素が含まれています。

オブジェクトのインスタンス化時に `rootMargin` が指定されていない場合、既定では文字列 `"0px 0px 0px 0px"` となります。これは、ルート要素の変更されていない境界矩形と対象の境界線との交点を計算することを意味します。
[交差の計算方法](/ja/docs/Web/API/Intersection_Observer_API#交差の計算方法)では、 `rootMargin` がどのように使用されるか、より詳細に説明しています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
