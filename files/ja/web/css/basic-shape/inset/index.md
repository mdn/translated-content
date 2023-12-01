---
title: inset()
slug: Web/CSS/basic-shape/inset
---

{{CSSRef}}

**`inset()`** は [CSS](/ja/docs/Web/CSS) の関数で、{{cssxref("&lt;basic-shape&gt;")}} [データ型](/ja/docs/Web/CSS/CSS_Types)の一つです。内部の矩形を定義します。

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

下記の例では、浮動要素の上にコンテンツを引き寄せるために、`inset()` のシェイプを使用しています。オフセット値を変更するとシェイプの変化を確認することができます。

{{EmbedGHLiveSample("css-examples/shapes/basic-shape/inset.html", '100%', 800)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このデータ型を使用するプロパティ: {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}
- [基本シェイプのガイド](/ja/docs/Web/CSS/CSS_Shapes/Basic_Shapes)
