---
title: inset()
slug: Web/CSS/Reference/Values/basic-shape/inset
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

**`inset()`** は [CSS](/ja/docs/Web/CSS) の関数は、参照ボックスの各辺から指定された内側への距離で矩形を定義します。これは、 {{cssxref("basic-shape")}} [データ型](/ja/docs/Web/CSS/Reference/Values/Data_types)の一つを定義するために使用される基本シェイプ関数です。

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
shape-outside: inset(20px 50px 10px 0 round 50px);
```

### 値

- `<length-percentage>{1,4}`
  - : 4 つの引数がすべて与えられた場合、参照ボックスの内側に向けた上、右、下、左のオフセットを表し、内部の矩形の辺の位置を定義します。これらの引数は margin 一括指定の構文に従っており、4 つの内側の位置すべてに 1 つ、2 つ、または 4 つの値を設定することができます。

    ある寸法に対する辺からの距離のペアの合計がその寸法の 100% を超える場合、両方の値は比例して縮小され、その合計が 100% になるように調整されます。例えば、`inset(90% 10% 60% 10%)` の値では、上部の辺からの距離が `90%`、下部の辺からの距離が `60%` となります。これらの値は `inset(60% 10% 40% 10%)` に比例して縮小されます。領域を囲まず、{{cssxref("shape-margin")}} を持たないこのようなシェイプは、折り返しに影響を与えません。

- `<border-radius>`
  - : オプションの [`<border-radius>`](/ja/docs/Web/CSS/Reference/Properties/border-radius) 引数は、 border-radius 一括指定の構文を使用して内部の矩形の角の丸みを定義します。

## 形式文法

{{csssyntax}}

## 例

### 基本的な内側の矩形の例

下記の例では、浮動要素の上にコンテンツを引き寄せるために、 `inset()` のシェイプを使用しています。オフセット値を変更するとシェイプの変化を確認することができます。

```html-nolint
<div class="box">
  <div class="shape"></div>
  <p>
    1782 年 11 月のある夜、伝えられるところによれば、フランスの小さな町アノネーで 2 人の兄弟が冬の暖炉のそばに座り、炉から立ち上る灰色の煙の渦が広い煙突をくねくねと登っていくのを見ていた。 2 人の名前はステファンおよびジョセフ・モンゴルフィエ、職業は紙漉き職人で、思慮深く、あらゆる科学的知識や新しい発見に深い関心を持っていた。それが記念すべき夜であったことを証明するように、その夜以前にも、何億人もの人々が、その事実から特別なインスピレーションを得ることなく、焚き火の煙が立ち昇るのを眺めていた。
  </p>
</div>
```

```css
.box {
  width: 400px;
  margin: 0 auto;
}

.shape {
  float: left;
  width: 150px;
  height: 100px;
  clip-path: inset(45px 50px 15px 0 round 50px);
  shape-outside: inset(40px 40px 10px 0 round 50px);
  background-color: coral;
  border-radius: 20px;
  margin: 0;
  padding: 20px;
}
```

{{EmbedLiveSample("Basic inset example", '100%', 280)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このデータ型を使用するプロパティ: {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}
- [CSS シェイプ](/ja/docs/Web/CSS/Guides/Shapes)モジュール
- [基本シェイプのガイド](/ja/docs/Web/CSS/Guides/Shapes/Using_shape-outside)
