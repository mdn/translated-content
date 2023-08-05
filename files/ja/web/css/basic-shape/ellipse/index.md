---
title: ellipse()
slug: Web/CSS/basic-shape/ellipse
---

{{CSSRef}}

**`ellipse()`** は [CSS](/ja/docs/Web/CSS) の関数で、{{cssxref("&lt;basic-shape&gt;")}} [データ型](/ja/docs/Web/CSS/CSS_Types)の一つです。

## 構文

```css
shape-outside: ellipse(40% 50% at left);
shape-outside: ellipse(closest-side farthest-side at 30%);
```

楕円は基本的に円を潰したものなので、`ellipse()` は、2 つの半径 x と y を指定しなければならないことを除けば、 {{cssxref("basic-shape/circle()","circle()")}} とよく似た方法で動作します。

### 値

- `<shape-radius>`

  - : 2 つの半径で、x および y をその順で指定します。{{cssxref("length")}}、{{cssxref("percentage")}}、または `closest-side` および `farthest-side` の値の何れかです。

    - `closest-side`
      - : シェイプの中心から参照ボックスの最も近い辺までの長さを使用します。楕円の場合は、半径の軸で最も近い辺となります。
    - `farthest-side`
      - : シェイプの中心から参照ボックスの最も遠い辺までの長さを使用します。楕円の場合は、半径の軸で最も遠い辺となります。

- `<position>`
  - : 円の中心を移動します。{{cssxref("length")}}、{{cssxref("percentage")}}、または `left` のような値の何れかです。

## 例

### 基本的な ellipse() の例

この例では、x 半径が 40%、y 半径が 50%、位置が左の楕円を示しています。これは、楕円の中心がボックスの左端にあることを意味しており、テキストを回り込ませるための半楕円の形になります。これらの値を変更すると、楕円の変化を確認することができます。

{{EmbedGHLiveSample("css-examples/shapes/basic-shape/ellipse.html", '100%', 800)}}

### closest-side / farthest-side の値の使用

キーワード値の `closest-side` と `farthest-side` は、浮動要素の参照ボックスの大きさに基づいて、素早く楕円を作成するのに便利です。

{{EmbedGHLiveSample("css-examples/shapes/basic-shape/ellipse-keywords.html", '100%', 800)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このデータ型を使用するプロパティ: {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}
- [基本シェイプのガイド](/ja/docs/Web/CSS/CSS_Shapes/Basic_Shapes)
