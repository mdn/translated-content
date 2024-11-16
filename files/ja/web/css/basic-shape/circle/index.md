---
title: circle()
slug: Web/CSS/basic-shape/circle
l10n:
  sourceCommit: e037be1b0e193183ecdad66b75d38862186a9eec
---

{{CSSRef}}

**`circle()`** は [CSS](/ja/docs/Web/CSS) の関数で、{{cssxref("&lt;basic-shape&gt;")}} [データ型](/ja/docs/Web/CSS/CSS_Types)の一つです。

{{EmbedInteractiveExample("pages/css/function-circle.html")}}

## 構文

```css
shape-outside: circle(50%);
clip-path: circle(6rem at 12rem 8rem);
```

### 値

- `<shape-radius>`

  - : {{cssxref("length")}}、{{cssxref("percentage")}}、または `closest-side` および `farthest-side` の値の何れかです。

    - `closest-side`
      - : シェイプの中心から参照ボックスの最も近い辺までの長さを使用します。円の場合は、あらゆる軸で最も近い辺となります。
    - `farthest-side`
      - : シェイプの中心から参照ボックスの最も遠い辺までの長さを使用します。円の場合は、あらゆる軸で最も遠い辺となります。

- `<position>`
  - : 円の中心を移動します。{{cssxref("length")}}、{{cssxref("percentage")}}、または `left` のような値の何れかです。 `<position>` の値は省略された場合、既定値は center になります。

## 例

### 基本的な円

下の例では、{{cssxref("shape-outside")}} プロパティの値が `circle(50%)` となっており、浮動要素に円を定義して、テキストが回り込むようになっています。

{{EmbedGHLiveSample("css-examples/shapes/overview/circle.html", '100%', 720)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このデータ型を使用するプロパティ: {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}
- [基本シェイプのガイド](/ja/docs/Web/CSS/CSS_shapes/Basic_shapes)
