---
title: backdrop-filter
slug: Web/CSS/backdrop-filter
l10n:
  sourceCommit: 50c8e290f11b061bbf2267e1a3279f28180a5fcb
---

{{CSSRef}}

**`backdrop-filter`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の背後の領域に、ぼかしや色変化のようなグラフィック効果を適用することができます。要素の背後にあるすべてに適用されるため、要素またはその背景が透明または部分的に透明である必要があります。

{{EmbedInteractiveExample("pages/css/backdrop-filter.html")}}

## 構文

```css
/* キーワード値 */
backdrop-filter: none;

/* SVG フィルターへの URL */
backdrop-filter: url(common-filters.svg#filter);

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
backdrop-filter: url(filters.svg#filter) blur(4px) saturate(150%);

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
- `<filter-function-list>`
  - : 背景に適用する {{cssxref("&lt;filter-function&gt;")}} または [SVG フィルター](/ja/docs/Web/SVG/Element/filter)の空白区切りのリストです。CSS の `<filter-function>` には {{CSSxRef("filter-function/blur", "blur()")}}, {{CSSxRef("filter-function/brightness", "brightness()")}}, {{CSSxRef("filter-function/contrast", "contrast()")}}, {{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}}, {{CSSxRef("filter-function/grayscale", "grayscale()")}}, {{CSSxRef("filter-function/hue-rotate", "hue-rotate()")}}, {{CSSxRef("filter-function/invert", "invert()")}}, {{CSSxRef("filter-function/opacity", "opacity()")}}, {{CSSxRef("filter-function/saturate", "saturate()")}}, {{CSSxRef("filter-function/sepia", "sepia()")}} があります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

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

### HTML

```html
<div class="container">
  <div class="box">
    <p>backdrop-filter: blur(10px)</p>
  </div>
</div>
```

### 結果

{{EmbedLiveSample("Examples", 600, 400)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("filter")}}
- {{cssxref("&lt;filter-function&gt;")}}
- {{cssxref("background-blend-mode")}}, {{cssxref("mix-blend-mode")}}
- [CSS フィルター効果](/ja/docs/Web/CSS/CSS_filter_effects)
- [CSS 合成と混合](/ja/docs/Web/CSS/CSS_compositing_and_blending)
