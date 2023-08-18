---
title: backdrop-filter
slug: Web/CSS/backdrop-filter
---

{{CSSRef}}

**`backdrop-filter`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の背後の領域に、ぼかしや色変化のようなグラフィック効果を適用することができます。要素の*背後*のすべてに適用されるため、効果を見るためには少なくとも一部が透明な要素またはその背景を作成する必要があります。

```css
/* キーワード値 */
backdrop-filter: none;

/* SVG フィルターへの URL */
backdrop-filter: url(commonfilters.svg#filter);

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
backdrop-filter: unset;
```

## 構文

### 値

- `none`
  - : 背後にフィルターを適用しません。
- `<filter-function-list>`
  - : 背景に適用する {{cssxref("&lt;filter-function&gt;")}} または [SVG フィルター](/ja/docs/Web/SVG/Element/filter)の空白区切りのリストです。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### CSS

```css
.box {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  font-family: sans-serif;
  text-align: center;
  line-height: 1;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  max-width: 50%;
  max-height: 50%;
  padding: 20px 40px;
}

html,
body {
  height: 100%;
  width: 100%;
}

body {
  background-image: url(https://picsum.photos/id/1080/6858/4574),
    linear-gradient(rgb(219, 166, 166), rgb(0, 0, 172));
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.container {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
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
