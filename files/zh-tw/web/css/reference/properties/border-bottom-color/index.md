---
title: border-bottom-color
slug: Web/CSS/Reference/Properties/border-bottom-color
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`border-bottom-color`** [CSS](/zh-TW/docs/Web/CSS) 屬性設定元素底部[邊框](/zh-TW/docs/Web/CSS/Reference/Properties/border)的顏色。它也可以使用 CSS 簡寫屬性 {{cssxref("border-color")}} 或 {{cssxref("border-bottom")}} 來設定。

{{InteractiveExample("CSS Demo: border-bottom-color")}}

```css interactive-example-choice
border-bottom-color: red;
```

```css interactive-example-choice
border-bottom-color: #32a1ce;
```

```css interactive-example-choice
border-bottom-color: rgb(170 50 220 / 0.6);
```

```css interactive-example-choice
border-bottom-color: hsl(60 90% 50% / 0.8);
```

```css interactive-example-choice
border-bottom-color: transparent;
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
border-bottom-color: red;
border-bottom-color: #ffbb00;
border-bottom-color: rgb(255 0 0);
border-bottom-color: hsl(100deg 50% 25% / 75%);
border-bottom-color: currentcolor;
border-bottom-color: transparent;

/* 全域值 */
border-bottom-color: inherit;
border-bottom-color: initial;
border-bottom-color: revert;
border-bottom-color: revert-layer;
border-bottom-color: unset;
```

`border-bottom-color` 屬性被指定為單一值。

### 值

- {{cssxref("&lt;color&gt;")}}
  - : 底部邊框的顏色。

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
  border-bottom-color: red;
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

- 與邊框相關的 CSS 簡寫屬性：{{Cssxref("border")}}、{{Cssxref("border-bottom")}} 與 {{Cssxref("border-color")}}。
- 其他邊框的顏色相關 CSS 屬性：{{Cssxref("border-right-color")}}、{{Cssxref("border-top-color")}} 與 {{Cssxref("border-left-color")}}。
- 適用於相同邊框的其他邊框相關 CSS 屬性：{{cssxref("border-bottom-style")}} 與 {{cssxref("border-bottom-width")}}。
- 預設的 [`currentcolor`](/zh-TW/docs/Web/CSS/Reference/Values/color_value#currentcolor_關鍵字) 顏色值。
