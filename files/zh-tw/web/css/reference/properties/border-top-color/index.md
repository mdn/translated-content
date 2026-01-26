---
title: border-top-color
slug: Web/CSS/Reference/Properties/border-top-color
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`border-top-color`** [CSS](/zh-TW/docs/Web/CSS) 屬性設定元素頂部[邊框](/zh-TW/docs/Web/CSS/Reference/Properties/border)的顏色。它也可以透過簡寫 CSS 屬性 {{cssxref("border-color")}} 或 {{cssxref("border-top")}} 來設定。

{{InteractiveExample("CSS Demo: border-top-color")}}

```css interactive-example-choice
border-top-color: red;
```

```css interactive-example-choice
border-top-color: #32a1ce;
```

```css interactive-example-choice
border-top-color: rgb(170 50 220 / 0.6);
```

```css interactive-example-choice
border-top-color: hsl(60 90% 50% / 0.8);
```

```css interactive-example-choice
border-top-color: transparent;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    這是一個周圍有邊框的方塊。
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: #eee;
  color: #000;
  border: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

## 語法

```css
/* <color> 值 */
border-top-color: red;
border-top-color: #ffbb00;
border-top-color: rgb(255 0 0);
border-top-color: hsl(100deg 50% 25% / 75%);
border-top-color: currentcolor;
border-top-color: transparent;

/* 全域值 */
border-top-color: inherit;
border-top-color: initial;
border-top-color: revert;
border-top-color: revert-layer;
border-top-color: unset;
```

`border-top-color` 屬性被指定為單一值。

### 值

- {{cssxref("&lt;color&gt;")}}
  - : 頂部邊框的顏色。

## 形式定義

{{CSSInfo}}

## 形式語法

{{csssyntax}}

## 範例

### 帶有邊框的 div

#### HTML

```html
<div class="my-box">
  <p>
    這是一個周圍有邊框的方塊。請注意方塊的哪一邊是<span class="red-text"
      >紅色</span
    >的。
  </p>
</div>
```

#### CSS

```css
.my-box {
  border: solid 0.3em gold;
  border-top-color: red;
  width: auto;
}

.red-text {
  color: red;
}
```

#### 結果

{{EmbedLiveSample('帶有邊框的_div')}}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- 邊框相關的 CSS 簡寫屬性：{{cssxref("border")}}、{{cssxref("border-top")}} 和 {{cssxref("border-color")}}。
- 其他邊框的顏色相關 CSS 屬性：{{cssxref("border-right-color")}}、{{cssxref("border-bottom-color")}} 和 {{cssxref("border-left-color")}}。
- 應用於相同邊框的其他邊框相關 CSS 屬性：{{cssxref("border-top-style")}} 和 {{cssxref("border-top-width")}}。
- 預設的 [`currentcolor`](/zh-TW/docs/Web/CSS/Reference/Values/color_value#currentcolor_關鍵字) 顏色值。
