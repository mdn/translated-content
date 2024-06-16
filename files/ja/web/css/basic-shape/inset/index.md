---
title: inset()
slug: Web/CSS/basic-shape/inset
l10n:
  sourceCommit: 9a073e360dac285c502d509830b5f9fad245f5f2
---

{{CSSRef}}

**`inset()`** は [CSS](/ja/docs/Web/CSS) の関数は、参照ボックスの各辺から指定された内側への距離に矩形を定義します。これは、 {{cssxref("&lt;basic-shape&gt;")}} [データ型](/ja/docs/Web/CSS/CSS_Types)の一つを定義するために使用される基本図形関数です。

{{EmbedInteractiveExample("pages/css/function-inset.html")}}

## 構文

```css
shape-outside: inset(20px 50px 10px 0 round 50px);
```

### 値

- `<length-percentage>{1,4}`
  - : 4 つの引数がすべて与えられた場合、参照ボックスの内側に向けた上、右、下、左のオフセットを表し、内部の矩形の辺の位置を定義します。これらの引数は margin 一括指定の構文に従っており、4 つの内側の位置すべてに 1 つ、2 つ、または 4 つの値を設定することができます。
- `<border-radius>`
  - : オプションの [`<border-radius>`](/ja/docs/Web/CSS/border-radius) 引数は、 border-radius 一括指定の構文を使用して内部の矩形の角の丸みを定義します。

## 例

### 基本的な内側の矩形の例

下記の例では、浮動要素の上にコンテンツを引き寄せるために、 `inset()` のシェイプを使用しています。オフセット値を変更するとシェイプの変化を確認することができます。

{{EmbedGHLiveSample("css-examples/shapes/basic-shape/inset.html", '100%', 800)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このデータ型を使用するプロパティ: {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}
- [CSS シェイプ](/ja/docs/Web/CSS/CSS_shapes) モジュール
- [基本シェイプのガイド](/ja/docs/Web/CSS/CSS_shapes/Basic_shapes)
