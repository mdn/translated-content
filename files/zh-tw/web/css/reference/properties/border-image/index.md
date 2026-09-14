---
title: border-image
slug: Web/CSS/Reference/Properties/border-image
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`border-image`** [CSS](/zh-TW/docs/Web/CSS) 屬性會在給定元素的周圍繪製一個圖片。它會取代元素的一般[邊框](/zh-TW/docs/Web/CSS/Reference/Properties/border)。

{{InteractiveExample("CSS Demo: border-image")}}

```css interactive-example-choice
border-image: url("/shared-assets/images/examples/border-diamonds.png") 30;
```

```css interactive-example-choice
border-image: url("/shared-assets/images/examples/border-diamonds.png") 30 /
  19px round;
```

```css interactive-example-choice
border-image: url("/shared-assets/images/examples/border-diamonds.png") 30
  fill / 30px / 30px space;
```

```css interactive-example-choice
border-image: linear-gradient(#f6b73c, #4d9f0c) 30;
```

```css interactive-example-choice
border-image: repeating-linear-gradient(30deg, #4d9f0c, #9198e5, #4d9f0c 20px)
  60;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">這是一個周圍有邊框的方塊。</div>
</section>
```

```css interactive-example
#example-element {
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background: #fff3d4;
  color: #000;
  border: 30px solid;
  border-image: url("/shared-assets/images/examples/border-diamonds.png") 30
    round;
  font-size: 1.2em;
}
```

> [!NOTE]
> 你應該指定一個獨立的 {{cssxref("border-style")}}，以防邊框圖片載入失敗。雖然規範沒有嚴格要求，但如果 {{cssxref("border-style")}} 是 `none` 或 {{cssxref("border-width")}} 是 `0`，有些瀏覽器不會算繪邊框圖片。

## 組成屬性

此屬性是以下 CSS 屬性的簡寫：

- [`border-image-outset`](/zh-TW/docs/Web/CSS/Reference/Properties/border-image-outset)
- [`border-image-repeat`](/zh-TW/docs/Web/CSS/Reference/Properties/border-image-repeat)
- [`border-image-slice`](/zh-TW/docs/Web/CSS/Reference/Properties/border-image-slice)
- [`border-image-source`](/zh-TW/docs/Web/CSS/Reference/Properties/border-image-source)
- [`border-image-width`](/zh-TW/docs/Web/CSS/Reference/Properties/border-image-width)

## 語法

```css
/* source | slice */
border-image: linear-gradient(red, blue) 27;

/* source | slice | repeat */
border-image: url("/images/border.png") 27 space;

/* source | slice | width */
border-image: linear-gradient(red, blue) 27 / 35px;

/* source | slice | width | outset | repeat */
border-image: url("/images/border.png") 27 23 / 50px 30px / 1rem round space;

/* 全域值 */
border-image: inherit;
border-image: initial;
border-image: revert;
border-image: revert-layer;
border-image: unset;
```

`border-image` 屬性可以用下面列出的一到五個值來指定。

> [!NOTE]
> 如果 {{cssxref("border-image-source")}} 的[計算值](/zh-TW/docs/Web/CSS/Guides/Cascade/Property_value_processing#計算值)是 `none`，或者圖片無法顯示，則會改為顯示 {{cssxref("border-style")}}。

### 值

- `<'border-image-source'>`
  - : 來源圖片。參見 {{cssxref("border-image-source")}}。
- `<'border-image-slice'>`
  - : 將來源圖片切片成區域的尺寸。最多可以指定四個值。參見 {{cssxref("border-image-slice")}}。
- `<'border-image-width'>`
  - : 邊框圖片的寬度。最多可以指定四個值。參見 {{cssxref("border-image-width")}}。
- `<'border-image-outset'>`
  - : 邊框圖片與元素外邊緣的距離。最多可以指定四個值。參見 {{cssxref("border-image-outset")}}。
- `<'border-image-repeat'>`
  - : 定義如何調整來源圖片的邊緣區域以符合邊框圖片的尺寸。最多可以指定兩個值。參見 {{cssxref("border-image-repeat")}}。

## 無障礙

輔助技術無法解析邊框圖片。如果圖片包含理解頁面整體目的的關鍵訊息，最好在文件中以語意化的方式描述它。

- [MDN 理解 WCAG，準則 1.1 解釋](/zh-TW/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [理解成功標準 1.1.1 | 理解 WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## 形式定義

{{cssinfo}}

## 形式語法

{{csssyntax}}

## 範例

### 點陣圖

在此範例中，我們將在元素的邊框上應用菱形圖案。邊框圖片的來源是一個 81x81 像素的「.png」檔案，垂直和水平方向各有三個菱形：

![八個菱形：四個紅色菱形在四個角落，四個橘色菱形在四個邊。中間是空的。](border.png)

#### HTML

```html
<div id="bitmap">這個元素被一個基於點陣圖的邊框圖片包圍！</div>
```

#### CSS

為了匹配單一菱形的大小，我們將使用 81 除以 3 的值，也就是 `27`，來將圖片切片成角落和邊緣區域。為了將邊框圖片置中於元素背景的邊緣，我們將 outset 值設為 width 值的一半。最後，`round` 的重複值將使邊框切片均勻地貼合，也就是說，不會有裁剪或間隙。

```css
#bitmap {
  width: 200px;
  background-color: #ffa;
  border: 36px solid orange;
  margin: 30px;
  padding: 10px;

  border-image: url("border.png") 27 / 36px 28px 18px 8px / 18px 14px 9px 4px
    round;
}
```

#### 結果

{{EmbedLiveSample('點陣圖', '100%', 200)}}

### 漸層

#### HTML

```html
<div id="gradient">這個元素被一個基於漸層的邊框圖片包圍！</div>
```

#### CSS

```css
#gradient {
  width: 200px;
  border: 30px solid;
  border-image: repeating-linear-gradient(45deg, #f33, #3bf, #f33 30px) 60;
  padding: 20px;
}
```

#### 結果

{{EmbedLiveSample('漸層')}}

### 圓角邊框

{{cssxref("border-radius")}} 對邊框圖片沒有影響。這是因為 {{cssxref("border-image-outset")}} 能夠將圖片放置在邊框方塊之外，所以讓邊框圖片被邊框區域裁剪是沒有意義的。要在使用邊框圖片時建立圓角邊框，你應該建立本身帶有圓角的圖片，或者在漸層的情況下，將其繪製為背景。下面，我們展示了一種方法，即使用兩個 {{cssxref("background-image")}}：一個擴展到邊框方塊，另一個用於內距方塊。

#### HTML

```html
<div id="rounded">這個元素被一個帶有圓角的邊框圖片包圍！</div>
```

#### CSS

```css
#rounded {
  width: 200px;
  /* 使用 transparent 以便背景圖片可見 */
  border: 10px solid transparent;
  padding: 20px;
  border-radius: 20px;
  background-image:
    linear-gradient(white, white), linear-gradient(to right, cyan, lime);
  background-origin: border-box;
  background-clip: padding-box, border-box;
}
```

#### 結果

{{EmbedLiveSample('圓角邊框')}}

> [!NOTE]
> 有一個新的 `{{cssxref("background-clip")}}: border-area` 值[正在提案中](https://github.com/w3c/csswg-drafts/issues/9456)，以解決這個使用案例。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{cssxref("border")}}
- {{cssxref("outline")}}
- {{cssxref("box-shadow")}}
- {{cssxref("background-image")}}
- {{cssxref("url_value", "&lt;url&gt;")}} 型別
- 漸層函式：{{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}、{{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}、{{CSSxRef("gradient/linear-gradient", "linear-gradient()")}}、{{CSSxRef("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}、{{CSSxRef("gradient/radial-gradient", "radial-gradient()")}}、{{CSSxRef("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- [CSS 中的邊框圖片：Interop 2023 的一個關鍵焦點領域](/zh-TW/blog/border-images-interop-2023/)（MDN 部落格（2023））
