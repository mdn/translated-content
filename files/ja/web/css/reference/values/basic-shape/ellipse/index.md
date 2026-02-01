---
title: ellipse()
slug: Web/CSS/Reference/Values/basic-shape/ellipse
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

**`ellipse()`** は [CSS](/ja/docs/Web/CSS) の関数で、{{cssxref("basic-shape")}} [データ型](/ja/docs/Web/CSS/Reference/Values/Data_types)の一つです。

{{InteractiveExample("CSS デモ: ellipse()")}}

```css interactive-example-choice
clip-path: ellipse(20px 50px);
```

```css interactive-example-choice
clip-path: ellipse(4rem 50% at right center);
```

```css interactive-example-choice
clip-path: ellipse(closest-side closest-side at 5rem 6rem);
```

```css interactive-example-choice
clip-path: ellipse(closest-side farthest-side);
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
shape-outside: ellipse(40% 50% at left);
shape-outside: ellipse(closest-side farthest-side at 30%);
```

楕円は基本的に円を潰したものなので、 `ellipse()` は、2 つの半径 x と y を指定しなければならないことを除けば、 {{cssxref("basic-shape/circle","circle()")}} とよく似た方法で動作します。

### 値

- `<shape-radius>`
  - : 2 つの半径で、x および y をその順で指定します。{{cssxref("length")}}、{{cssxref("percentage")}}、または `closest-side` および `farthest-side` の値の何れかです。
    - `closest-side`
      - : シェイプの中心から参照ボックスの最も近い辺までの長さを使用します。楕円の場合は、半径の軸で最も近い辺となります。
    - `farthest-side`
      - : シェイプの中心から参照ボックスの最も遠い辺までの長さを使用します。楕円の場合は、半径の軸で最も遠い辺となります。

- `<position>`
  - : 円の中心を移動します。{{cssxref("length")}}、{{cssxref("percentage")}}、または `left` のような値の何れかです。

## 形式文法

{{csssyntax}}

## 例

### 基本的な ellipse() の例

この例では、水平方向の半径が 40%、垂直方向の半径が 50%、位置が左の楕円を示しています。これは、楕円の中心がボックスの左端にあることを意味しており、テキストを回り込ませるための半楕円の形になります。これらの値を変更すると、楕円の変化を確認することができます。
Click "Play" in the code blocks to change these values to see how the ellipse changes:

```html-nolint live-sample___ellipse
<div class="box">
  <div class="shape"></div>
  <p>
    1782 年 11 月のある夜、伝えられるところによれば、フランスの小さな町アノネーで 2 人の兄弟が冬の暖炉のそばに座り、炉から立ち上る灰色の煙の渦が広い煙突をくねくねと登っていくのを見ていた。 2 人の名前はステファンおよびジョセフ・モンゴルフィエ、職業は紙漉き職人で、思慮深く、あらゆる科学的知識や新しい発見に深い関心を持っていた。それが記念すべき夜であったことを証明するように、その夜以前にも、何億人もの人々が、その事実から特別なインスピレーションを得ることなく、焚き火の煙が立ち昇るのを眺めていた。
  </p>
</div>
```

```css live-sample___ellipse
body {
  font: 1.2em / 1.5 sans-serif;
}
.shape {
  float: left;
  shape-outside: ellipse(40% 50% at left);
  margin: 20px;
  width: 100px;
  height: 200px;
}
```

{{EmbedLiveSample("ellipse", "", "300px")}}

### closest-side / farthest-side の値の使用

キーワード値の `closest-side` と `farthest-side` は、浮動要素の参照ボックスの大きさに基づいて、素早く楕円を作成するのに便利です。

```html-nolint live-sample___ellipse-keywords
<div class="box">
  <div class="shape"></div>
  <p>
    1782 年 11 月のある夜、伝えられるところによれば、フランスの小さな町アノネーで 2 人の兄弟が冬の暖炉のそばに座り、炉から立ち上る灰色の煙の渦が広い煙突をくねくねと登っていくのを見ていた。 2 人の名前はステファンおよびジョセフ・モンゴルフィエ、職業は紙漉き職人で、思慮深く、あらゆる科学的知識や新しい発見に深い関心を持っていた。それが記念すべき夜であったことを証明するように、その夜以前にも、何億人もの人々が、その事実から特別なインスピレーションを得ることなく、焚き火の煙が立ち昇るのを眺めていた。
  </p>
</div>
```

```css live-sample___ellipse-keywords
body {
  font: 1.2em / 1.5 sans-serif;
}
.shape {
  float: left;
  shape-outside: ellipse(closest-side farthest-side at 30%);
  margin: 20px;
  width: 100px;
  height: 140px;
}
```

{{EmbedLiveSample("ellipse-keywords", "", "300px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このデータ型を使用するプロパティ: {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}
- [基本シェイプのガイド](/ja/docs/Web/CSS/Guides/Shapes/Using_shape-outside)
