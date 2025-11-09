---
title: inset()
slug: Web/CSS/Reference/Values/basic-shape/inset
original_slug: Web/CSS/basic-shape/inset
l10n:
  sourceCommit: 9a073e360dac285c502d509830b5f9fad245f5f2
---

**`inset()`** は [CSS](/ja/docs/Web/CSS) の関数は、参照ボックスの各辺から指定された内側への距離に矩形を定義します。これは、 {{cssxref("&lt;basic-shape&gt;")}} [データ型](/ja/docs/Web/CSS/Reference/Values/Data_types)の一つを定義するために使用される基本図形関数です。

{{InteractiveExample("CSS デモ: inset()")}}

```css interactive-example-choice
clip-path: inset(30px);
```

```css interactive-example-choice
clip-path: inset(1rem 2rem 3rem 4rem);
```

```css interactive-example-choice
clip-path: inset(20% 30% round 20px);
```

```css interactive-example-choice
clip-path: inset(4rem 20% round 1rem 2rem 3rem 4rem);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element"></div>
</section>
```

```css interactive-example
#default-example {
  background: #fe9;
}

#example-element {
  background: linear-gradient(to bottom right, #f52, #05f);
  width: 100%;
  height: 100%;
}
```

## 構文

```css
shape-outside: inset(20px 50px 10px 0 round 50px);
```

### 値

- `<length-percentage>{1,4}`
  - : 4 つの引数がすべて与えられた場合、参照ボックスの内側に向けた上、右、下、左のオフセットを表し、内部の矩形の辺の位置を定義します。これらの引数は margin 一括指定の構文に従っており、4 つの内側の位置すべてに 1 つ、2 つ、または 4 つの値を設定することができます。
- `<border-radius>`
  - : オプションの [`<border-radius>`](/ja/docs/Web/CSS/Reference/Properties/border-radius) 引数は、 border-radius 一括指定の構文を使用して内部の矩形の角の丸みを定義します。

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
- [CSS シェイプ](/ja/docs/Web/CSS/Guides/Shapes) モジュール
- [基本シェイプのガイド](/ja/docs/Web/CSS/Guides/Shapes/Using_shape-outside)
