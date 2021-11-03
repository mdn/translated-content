---
title: polygon()
slug: Web/CSS/basic-shape/polygon()
tags:
  - CSS
  - CSS データ型
  - CSS シェイプ
  - polygon
  - CSS 関数
  - データ型
  - Reference
browser-compat: css.types.basic-shape.polygon
translation_of: Web/CSS/basic-shape/polygon()
---
{{CSSRef}}

**`polygon()`** は [CSS](/ja/docs/Web/CSS) の関数で、{{cssxref("&lt;basic-shape&gt;")}} [データ型](/ja/docs/Web/CSS/CSS_Types)の一つです。

## 構文

```css
clip-path: polygon(50% 2.4%, 34.5% 33.8%, 0% 38.8%, 25% 63.1%, 19.1% 97.6%);
```

### 値

- `<fill-rule>`
  - : オプションで `nonzero` (省略時の既定値) または `evenodd` のどちらかであり、[塗りつぶしルール](/ja/docs/Web/SVG/Attribute/fill-rule)を指定します。
- `[<length-percentage><length-percentage>]#`
  - : 3 組以上の値です (多角形は少なくとも三角形を描く必要があります)。これらの値は、リファレンスボックスを基準にして描かれる座標です。

## 例

### 基本的な polygon() の例

この例では、`polygon()` を使って、テキストを回り込ませるシェイプを作成しています。値を変更するとシェイプの変化を確認することができます。

{{EmbedGHLiveSample("css-examples/shapes/basic-shape/polygon.html", '100%', 800)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このデータ型を使用するプロパティ: {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}
- [基本シェイプのガイド](/ja/docs/Web/CSS/CSS_Shapes/Basic_Shapes)
