---
title: "`backdrop-filter` プロパティ"
short-title: backdrop-filter
slug: Web/CSS/Reference/Properties/backdrop-filter
l10n:
  sourceCommit: c4e64810ce10fb5cb1eebfcd8b6f526866fd0982
---

**`backdrop-filter`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の背後の領域に、ぼかしや色変化のようなグラフィック効果を適用することができます。要素の背後にあるすべてに適用されるため、要素またはその背景が透明または部分的に透明である必要があります。

{{InteractiveExample("CSS デモ: backdrop-filter()")}}

```css interactive-example-choice
backdrop-filter: blur(10px);
```

```css interactive-example-choice
backdrop-filter: invert(80%);
```

```css interactive-example-choice
backdrop-filter: sepia(90%);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div id="example-element">例</div>
  </div>
</section>
```

```css interactive-example
.example-container {
  background-image: url("/shared-assets/images/examples/balloon.jpg");
  background-size: cover;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
}

#example-element {
  font-weight: bold;
  flex: 1;
  text-align: center;
  padding: 20px 10px;
  background-color: rgb(255 255 255 / 0.2);
}
```

## 構文

```css
/* キーワード値 */
backdrop-filter: none;

/* SVG フィルターへの URL */
backdrop-filter: url("common-filters.svg#filter");

/* <filter-function> 値 */
backdrop-filter: blur(2px);
backdrop-filter: brightness(60%);
backdrop-filter: contrast(40%);
backdrop-filter: drop-shadow(4px 4px 10px blue);
backdrop-filter: grayscale(30%);
backdrop-filter: hue-rotate(120deg);
backdrop-filter: invert(70%);
backdrop-filter: opacity(20%);
backdrop-filter: sepia(90%);
backdrop-filter: saturate(80%);

/* 複数のフィルター */
backdrop-filter: url("filters.svg#filter") blur(4px) saturate(150%);

/* グローバル値 */
backdrop-filter: inherit;
backdrop-filter: initial;
backdrop-filter: revert;
backdrop-filter: revert-layer;
backdrop-filter: unset;
```

### 値

- `none`
  - : 背後にフィルターを適用しません。
- `<filter-value-list>`
  - : 背景に適用する {{cssxref("filter-function")}} または [SVG フィルター](/ja/docs/Web/SVG/Reference/Element/filter)の空白区切りのリストです。CSS の `<filter-function>` には {{CSSxRef("filter-function/blur", "blur()")}}, {{CSSxRef("filter-function/brightness", "brightness()")}}, {{CSSxRef("filter-function/contrast", "contrast()")}}, {{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}}, {{CSSxRef("filter-function/grayscale", "grayscale()")}}, {{CSSxRef("filter-function/hue-rotate", "hue-rotate()")}}, {{CSSxRef("filter-function/invert", "invert()")}}, {{CSSxRef("filter-function/opacity", "opacity()")}}, {{CSSxRef("filter-function/saturate", "saturate()")}}, {{CSSxRef("filter-function/sepia", "sepia()")}} があります。

## 解説

`backdrop-filter` プロパティは、要素の背後に描画されたピクセルに、最も近い祖先である**バックドロップルート**までフィルター効果を適用します。バックドロップルートより上にあるコンテンツには影響しません。

### バックドロップルート

バックドロップルートは、`backdrop-filter` の効果の境界となる要素です。次の要素がバックドロップルートになります。

- ルート要素 ({{HTMLElement("html")}})
- {{cssxref("filter")}} の値が `none` 以外の要素
- {{cssxref("opacity")}} の値が `1` 未満の要素
- {{cssxref("mask")}}、{{cssxref("mask-image")}}、{{cssxref("mask-border")}}、または {{cssxref("clip-path")}} の値が `none` 以外の要素
- `backdrop-filter` の値が `none` 以外の要素
- {{cssxref("mix-blend-mode")}} の値が `normal` 以外の要素
- 上記のいずれかのプロパティが {{cssxref("will-change")}} に設定された要素

つまり、親要素に `opacity: 0.9` が設定されていると、その要素がバックドロップルートになります。この場合、子要素の `backdrop-filter` がぼかすのは親要素と子要素の間にあるコンテンツだけで、親要素の背後にあるコンテンツはぼかしません。`backdrop-filter` が正しく適用されているのに目に見える効果がない場合、これがよくある原因です。

次の例は、バックドロップルートが `backdrop-filter` に与える影響を示します。最初のコンテナーには `will-change: opacity` が設定されているため、バックドロップルートになります。ぼかしの円はコンテナー内のテキストと四角形だけに作用し、その背後にある市松模様の背景には作用しないことに注目してください。2 つ目のコンテナーはバックドロップルートではないため、ぼかしの円はページの背景を含め、その背後にあるすべてに作用します。

```html
<div class="parent backdrop-root">
  <div class="text">Text</div>
  <div class="square"></div>
  <div class="overlay"></div>
</div>
<div class="parent">
  <div class="text">Text</div>
  <div class="square"></div>
  <div class="overlay"></div>
</div>
```

```css
body {
  display: flex;
  column-gap: 16px;
  padding: 16px;
  background-image: conic-gradient(
    gray 90deg,
    silver 90deg 180deg,
    gray 180deg 270deg,
    silver 270deg
  );
  background-size: 32px 32px;
}

.parent {
  position: relative;
  width: 256px;
  height: 256px;
}

.backdrop-root {
  outline: 2px solid crimson;
  will-change: opacity;
}

.square {
  position: absolute;
  top: 35px;
  left: 40%;
  width: 25%;
  height: 25%;
  border: 10px solid white;
}

.text {
  position: absolute;
  left: 40%;
  color: white;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  line-height: 256px;
  filter: blur(1px);
}

.overlay {
  position: absolute;
  top: 25%;
  left: 50%;
  width: 50%;
  height: 50%;
  outline: 3px solid gainsboro;
  border-radius: 9999px;
  backdrop-filter: blur(10px);
}
```

{{EmbedLiveSample("Backdrop root", "", 288)}}

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### HTML

```html
<div class="container">
  <div class="box">
    <p>backdrop-filter: blur(10px)</p>
  </div>
</div>
```

### CSS

```css
.box {
  background-color: rgb(255 255 255 / 30%);
  backdrop-filter: blur(10px);
}

body {
  background-image: url("anemones.jpg");
}
```

```css hidden
html,
body {
  height: 100%;
  width: 100%;
}

.container {
  background-size: cover;
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
}
.box {
  border-radius: 5px;
  font-family: sans-serif;
  text-align: center;
  max-width: 50%;
  max-height: 50%;
  padding: 20px 40px;
}
```

### 結果

{{EmbedLiveSample("Examples", 600, 400)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("filter")}}
- {{cssxref("filter-function")}}
- {{cssxref("background-blend-mode")}}, {{cssxref("mix-blend-mode")}}
- [CSS フィルター効果](/ja/docs/Web/CSS/Guides/Filter_effects)
- [CSS 合成と混合](/ja/docs/Web/CSS/Guides/Compositing_and_blending)
