---
title: shape-image-threshold
slug: Web/CSS/Reference/Properties/shape-image-threshold
original_slug: Web/CSS/shape-image-threshold
---

**`shape-image-threshold`** は [CSS](/ja/docs/Web/CSS) のプロパティで、 {{cssxref("shape-outside")}} の値に指定された画像によってシェイプを抽出するために使用するアルファチャネルのしきい値を設定します。

{{InteractiveExample("CSS デモ: shape-image-threshold")}}

```css interactive-example-choice
shape-outside: linear-gradient(
  50deg,
  rgb(77, 26, 103),
  transparent 80%,
  transparent
);
shape-image-threshold: 0.2;
```

```css interactive-example-choice
shape-outside: linear-gradient(
  50deg,
  rgb(77, 26, 103),
  transparent 80%,
  transparent
);
shape-image-threshold: 0.4;
```

```css interactive-example-choice
shape-outside: linear-gradient(
  50deg,
  rgb(77, 26, 103),
  transparent 80%,
  transparent
);
shape-image-threshold: 0.6;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element"></div>
    We had agreed, my companion and I, that I should call for him at his house,
    after dinner, not later than eleven o’clock. This athletic young Frenchman
    belongs to a small set of Parisian sportsmen, who have taken up “ballooning”
    as a pastime. After having exhausted all the sensations that are to be found
    in ordinary sports, even those of “automobiling” at a breakneck speed, the
    members of the “Aéro Club” now seek in the air, where they indulge in all
    kinds of daring feats, the nerve-racking excitement that they have ceased to
    find on earth.
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
    rgb(77, 26, 103),
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

<h3 id="Aligning_text_to_a_gradient">グラデーションへのテキストの配置</h3>

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

シェイプの部分として扱うグラデーション内のピクセルは 20% の不透過度がしきい値なので、 `shape-image-threadhold` の値を `0.2` にして使用して作成しています。

#### 結果

{{EmbedLiveSample('Aligning_text_to_a_gradient', 600, 230)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS シェイプ](/ja/docs/Web/CSS/Guides/Shapes)
- [CSS シェイプの概要](/ja/docs/Web/CSS/Guides/Shapes/Overview)
- {{cssxref("&lt;basic-shape&gt;")}}
- {{cssxref("shape-outside")}}
- {{cssxref("shape-margin")}}
