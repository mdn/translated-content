---
title: circle()
slug: Web/CSS/Reference/Values/basic-shape/circle
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

**`circle()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、半径と位置を使用して円を定義します。これは {{cssxref("basic-shape")}} データ型の一つです。

{{InteractiveExample("CSS デモ: circle()")}}

```css interactive-example-choice
clip-path: circle(50px);
```

```css interactive-example-choice
clip-path: circle(6rem at right center);
```

```css interactive-example-choice
clip-path: circle(10% at 2rem 90%);
```

```css interactive-example-choice
clip-path: circle(closest-side at 5rem 6rem);
```

```css interactive-example-choice
clip-path: circle(farthest-side);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element"></div>
</section>
```

```css interactive-example
#default-example {
  background: #ffee99;
}

#example-element {
  background: linear-gradient(to bottom right, #ff5522, #0055ff);
  width: 100%;
  height: 100%;
}
```

## 構文

```css
shape-outside: circle(50%);
clip-path: circle(6rem at 12rem 8rem);
```

### 値

- `<shape-radius>`
  - : {{cssxref("length")}}、{{cssxref("percentage")}}、または `closest-side` および `farthest-side` の値のいずれかです。
    - `closest-side`
      - : シェイプの中心から参照ボックスの最も近い辺までの長さを使用します。円の場合は、あらゆる軸で最も近い辺となります。
    - `farthest-side`
      - : シェイプの中心から参照ボックスの最も遠い辺までの長さを使用します。円の場合は、あらゆる軸で最も遠い辺となります。

- `<position>`
  - : 円の中心を移動します。{{cssxref("length")}}、{{cssxref("percentage")}}、または `left` のような値のいずれかです。 `<position>` の値は省略された場合、既定値は center になります。

## 形式文法

{{csssyntax}}

## 例

### 基本的な円

下の例では、{{cssxref("shape-outside")}} プロパティの値が `circle(50%)` となっており、浮動要素に円を定義して、テキストが回り込むようになっています。

```html-nolint live-sample___circle
<div class="box">
  <img
    alt="熱気球"
    src="https://mdn.github.io/shared-assets/images/examples/round-balloon.png" />
  <p>
    1782 年 11 月のある夜、伝えられるところによれば、フランスの小さな町アノネーで 2 人の兄弟が冬の暖炉のそばに座り、炉から立ち上る灰色の煙の渦が広い煙突をくねくねと登っていくのを見ていた。 2 人の名前はステファンおよびジョセフ・モンゴルフィエ、職業は紙漉き職人で、思慮深く、あらゆる科学的知識や新しい発見に深い関心を持っていた。それが記念すべき夜であったことを証明するように、その夜以前にも、何億人もの人々が、その事実から特別なインスピレーションを得ることなく、焚き火の煙が立ち昇るのを眺めていた。
  </p>
</div>
```

```css live-sample___circle
body {
  font: 1.2em / 1.5 sans-serif;
}
img {
  float: left;
  shape-outside: circle(50%);
}
```

{{EmbedLiveSample("circle", "", "300px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このデータ型を使用するプロパティ: {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}
- [基本シェイプのガイド](/ja/docs/Web/CSS/Guides/Shapes/Using_shape-outside)
