---
title: shape-margin
slug: Web/CSS/Reference/Properties/shape-margin
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

**`shape-margin`** は [CSS](/ja/docs/Web/CSS) のプロパティで、{{cssxref("shape-outside")}} を使用して作成された CSS シェイプのマージンを設定します。

{{InteractiveExample("CSS デモ: shape-margin")}}

```css interactive-example-choice
shape-margin: 0;
```

```css interactive-example-choice
shape-margin: 20px;
```

```css interactive-example-choice
shape-margin: 1em;
```

```css interactive-example-choice
shape-margin: 5%;
```

```html-nolint interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element"></div>
    私と同行者は、夕食後、遅くとも 11 時までに彼の家に迎えにいくことで合意していた。この運動神経抜群の若いフランス人は、気球乗りを趣味とするパリのスポーツ愛好家たちの小さなグループに属している。通常のスポーツで得られるあらゆる感覚、猛スピードでの「自動車運転」のスリルさえも尽くした後、「エアロクラブ」のメンバーたちは今や空へと目を向け、あらゆる種類の危険な技に興じながら、地上ではもはや探せなくなった神経をすり減らすような興奮を求めている。
  </div>
</section>
```

```css interactive-example
.example-container {
  text-align: left;
  padding: 20px;
}

#example-element {
  float: left;
  margin: 20px;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-color: rebeccapurple;
  shape-outside: circle(50%);
}
```

マージンで、シェイプ (**浮動要素**) の縁と周囲のコンテンツとの間隔を調整することができます。

## 構文

```css
/* <length> 値 */
shape-margin: 10px;
shape-margin: 20mm;

/* <percentage> 値 */
shape-margin: 60%;

/* グローバル値 */
shape-margin: inherit;
shape-margin: initial;
shape-margin: revert;
shape-margin: revert-layer;
shape-margin: unset;
```

### 値

- `<length-percentage>`
  - : シェイプのマージンを {{cssxref("&lt;length&gt;")}} 値または要素の包含ブロックの幅に対する {{cssxref("&lt;percentage&gt;")}} で設定します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 多角形にマージンを追加

#### HTML

```html-nolint
<section>
  <div class="shape"></div>
  生物学において我々は確信できることは何一つない。地質学に関する我々の知識は相対的にとてもわずかであり、社会の経済法則はそれを設定しようとする一部の個人を除いて誰にとっても不確かである。しかし世界が形作られる前から、直角三角形において斜辺の二乗は他の 2 種類の辺の二乗の和に等しく、この世界が滅びた後もそれは変わらない。火星に生命体が存在する場合、おそらく彼らは我々が知るのと同様にその真実を知っているだろう。
</section>
```

#### CSS

```css
section {
  max-width: 400px;
}

.shape {
  float: left;
  width: 150px;
  height: 150px;
  background-color: maroon;
  clip-path: polygon(0 0, 150px 150px, 0 150px);
  shape-outside: polygon(0 0, 150px 150px, 0 150px);
  shape-margin: 20px;
}
```

#### 結果

{{EmbedLiveSample("Adding_a_margin_to_a_polygon", 500, 250)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS シェイプ](/ja/docs/Web/CSS/Guides/Shapes)
- [CSS シェイプの概要](/ja/docs/Web/CSS/Guides/Shapes/Overview)
- {{cssxref("shape-outside")}}
- {{cssxref("shape-image-threshold")}}
- {{cssxref("basic-shape")}}
