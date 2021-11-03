---
title: scroll-snap-stop
slug: Web/CSS/scroll-snap-stop
tags:
  - CSS
  - CSS スクロールスナップ
  - Reference
  - Web
  - recipe:css-property
  - scroll-snap-stop
browser-compat: css.properties.scroll-snap-stop
translation_of: Web/CSS/scroll-snap-stop
---
{{CSSRef}}

**`scroll-snap-stop`** は [CSS](/ja/docs/Web/CSS) のプロパティで、スクロールコンテナーが可能なスナップ位置を「通り過ぎる」ことを許可するかどうかを定義します。

```css
/* キーワード値 */
scroll-snap-stop: normal;
scroll-snap-stop: always;

/* グローバル値 */
scroll-snap-type: inherit;
scroll-snap-type: initial;
scroll-snap-type: unset;
```

## 構文

### 値

- `normal`
  - : スクロールコンテナーの視覚{{Glossary("viewport", "ビューポート")}}がスクロールされた時、可能なスナップ位置を「通り過ぎる」ことを許可します。
- `always`
  - : スクロールコンテナーは可能なスナップ位置を「通り過ぎる」ことを許可しません。最初の要素のスナップ位置にスナップします。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Snapping_in_different_axes">様々な軸でのスナップ</h3>

この例は {{cssxref("scroll-snap-type")}} から複製したものに多少の修正を加えたものです。

#### CSS

```css
/* setup */
:root, body {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column nowrap;
  font-family: monospace;
}
.container {
  display: flex;
  overflow: auto;
  outline: 1px dashed lightgray;
  flex: none;
}

.container.x {
  width: 100%;
  height: 128px;
  flex-flow: row nowrap;
}

.container.y {
  width: 256px;
  height: 256px;
  flex-flow: column nowrap;
}
/* definite scroll snap */
.mandatory-scroll-snapping > div {
  scroll-snap-stop: always;
}
.proximity-scroll-snapping > div {
  scroll-snap-stop: normal;
}
/* scroll-snap */
.x.mandatory-scroll-snapping {
  scroll-snap-type: x mandatory;
}

.y.mandatory-scroll-snapping {
  scroll-snap-type: y mandatory;
}

.x.proximity-scroll-snapping {
  scroll-snap-type: x proximity;
}

.y.proximity-scroll-snapping {
  scroll-snap-type: y proximity;
}

.container > div {
  text-align: center;
  scroll-snap-align: center;
  flex: none;
}

.x.container > div {
  line-height: 128px;
  font-size: 64px;
  width: 100%;
  height: 128px;
}

.y.container > div {
  line-height: 256px;
  font-size: 128px;
  width: 256px;
  height: 256px;
}
/* appearance fixes */
.y.container > div:first-child {
  line-height: 1.3;
  font-size: 64px;
}
/* coloration */
.container > div:nth-child(even) {
  background-color: #87EA87;
}

.container > div:nth-child(odd) {
  background-color: #87CCEA;
}
```

#### HTML

```html
<div class="container x mandatory-scroll-snapping" dir="ltr">
  <div>X Mand. LTR </div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<div class="container x proximity-scroll-snapping" dir="ltr">
  <div>X Proximity LTR</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<div class="container y mandatory-scroll-snapping" dir="ltr">
  <div>Y Mand. LTR</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<div class="container y proximity-scroll-snapping" dir="ltr">
  <div>Y Prox. LTR</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<div class="container x mandatory-scroll-snapping" dir="rtl">
  <div>X Mandatory RTL</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<div class="container x proximity-scroll-snapping" dir="rtl">
  <div>X Proximity RTL</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<div class="container y mandatory-scroll-snapping" dir="rtl">
  <div>Y Mand. RTL</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<div class="container y proximity-scroll-snapping" dir="rtl">
  <div>Y Prox. RTL</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>
```

#### 結果

{{EmbedLiveSample("Snapping_in_different_axes", "100%", "1630")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS スクロールスナップ](/ja/docs/Web/CSS/CSS_Scroll_Snap)
- [Well-Controlled Scrolling with CSS Scroll Snap](https://web.dev/css-scroll-snap/)
