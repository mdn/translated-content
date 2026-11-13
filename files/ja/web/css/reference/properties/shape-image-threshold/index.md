---
title: shape-image-threshold
slug: Web/CSS/Reference/Properties/shape-image-threshold
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

**`shape-image-threshold`** は [CSS](/ja/docs/Web/CSS) のプロパティで、 {{cssxref("shape-outside")}} の値に指定された画像によってシェイプを抽出するために使用するアルファチャネルのしきい値を設定します。

{{InteractiveExample("CSS デモ: shape-image-threshold")}}

```css interactive-example-choice
shape-outside: linear-gradient(
  50deg,
  rgb(77 26 103),
  transparent 80%,
  transparent
);
shape-image-threshold: 0.2;
```

```css interactive-example-choice
shape-outside: linear-gradient(
  50deg,
  rgb(77 26 103),
  transparent 80%,
  transparent
);
shape-image-threshold: 0.4;
```

```css interactive-example-choice
shape-outside: linear-gradient(
  50deg,
  rgb(77 26 103),
  transparent 80%,
  transparent
);
shape-image-threshold: 0.6;
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
  width: 150px;
  height: 150px;
  margin: 20px;
  background-image: linear-gradient(
    50deg,
    rgb(77 26 103),
    transparent 80%,
    transparent
  );
}
```

アルファコンポーネントの値がしきい値よりも大きいピクセルはすべて、境界を特定するためのシェイプの一部とみなされます。例えば、 `0.5` の値は不透過度が 50% よりも大きいピクセルをすべて含めた図形になるという意味です。

## 構文

```css
/* <number> 値 */
shape-image-threshold: 0.7;

/* グローバル値 */
shape-image-threshold: inherit;
shape-image-threshold: initial;
shape-image-threshold: revert;
shape-image-threshold: revert-layer;
shape-image-threshold: unset;
```

### 値

- {{cssxref("&lt;alpha-value&gt;")}}
  - : 画像からシェイプを抽出するために使用されるしきい値を設定します。シェイプはアルファ値がしきい値より大きいピクセルによって定義されます。 0.0 (完全に透過) から 1.0 (完全に不透過) の範囲を外れた値は、この範囲に収められます。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### グラデーションへのテキストの配置

この例では、グラデーションの背景画像を持つ {{HTMLElement("div")}} ブロックを作成します。グラデーションは `shape-outside` を使用して CSS シェイプとして確立されているので、グラデーションの中のピクセルのうち 20% よりも大きい不透過度 (つまり、アルファコンポーネントが 0.2 よりも大きいピクセル) はシェイプの一部とみなされます。

#### HTML

```html
<div id="gradient-shape"></div>

<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel at commodi
  voluptates enim, distinctio officia. Saepe optio accusamus doloribus sint
  facilis itaque ab nulla, dolor molestiae assumenda cum sit placeat adipisci,
  libero quae nihil porro debitis laboriosam inventore animi impedit nostrum
  nesciunt quisquam expedita! Dolores consectetur iure atque a mollitia dicta
  repudiandae illum exercitationem aliquam repellendus ipsum porro modi, id nemo
  eligendi, architecto ratione quibusdam iusto nisi soluta? Totam inventore ea
  eum sed velit et eligendi suscipit accusamus iusto dolore, at provident eius
  alias maxime pariatur non deleniti ipsum sequi rem eveniet laboriosam magni
  expedita?
</p>
```

#### CSS

```css
#gradient-shape {
  width: 150px;
  height: 150px;
  float: left;
  background-image: linear-gradient(30deg, black, transparent 80%, transparent);
  shape-outside: linear-gradient(30deg, black, transparent 80%, transparent);
  shape-image-threshold: 0.2;
}
```

シェイプは画像ファイルではなく、線形グラデーションの {{cssxref("background-image")}} を使用して定義されています。同じグラデーションが、 {{cssxref("shape-outside")}} プロパティを使用して、浮動領域を設定するためにシェイプが取得される画像としても使用されます。

シェイプの部分として扱うグラデーション内のピクセルは 20% の不透過度がしきい値なので、 `shape-image-threshold` の値を `0.2` にして使用して作成しています。

#### 結果

{{EmbedLiveSample('Aligning_text_to_a_gradient', 600, 230)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS シェイプ](/ja/docs/Web/CSS/Guides/Shapes)
- [CSS シェイプの概要](/ja/docs/Web/CSS/Guides/Shapes/Overview)
- {{cssxref("basic-shape")}}
- {{cssxref("shape-outside")}}
- {{cssxref("shape-margin")}}
