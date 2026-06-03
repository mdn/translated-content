---
title: border-right-color
slug: Web/CSS/Reference/Properties/border-right-color
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

**`border-right-color`** [CSS](/zh-TW/docs/Web/CSS) 屬性設定元素右[邊框](/zh-TW/docs/Web/CSS/Reference/Properties/border)的顏色。它也可以透過簡寫 CSS 屬性 {{cssxref("border-color")}} 或 {{cssxref("border-right")}} 來設定。

{{InteractiveExample("CSS Demo: border-right-color")}}

```css interactive-example-choice
border-right-color: red;
```

```css interactive-example-choice
border-right-color: #32a1ce;
```

```css interactive-example-choice
border-right-color: rgb(170 50 220 / 0.6);
```

```css interactive-example-choice
border-right-color: hsl(60 90% 50% / 0.8);
```

```css interactive-example-choice
border-right-color: transparent;
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
border-right-color: red;
border-right-color: #ffbb00;
border-right-color: rgb(255 0 0);
border-right-color: hsl(100deg 50% 25% / 75%);
border-right-color: currentcolor;
border-right-color: transparent;

/* 全域值 */
border-right-color: inherit;
border-right-color: initial;
border-right-color: revert;
border-right-color: revert-layer;
border-right-color: unset;
```

`border-right-color` 屬性被指定為單一值。

### 值

- {{cssxref("&lt;color&gt;")}}
  - : 右邊框的顏色。

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
    這是一個周圍有邊框的方塊。請注意方塊的哪一側是<span class="red-text"
      >紅色</span
    >的。
  </p>
</div>
```

#### CSS

```css
.my-box {
  border: solid 0.3em gold;
  border-right-color: red;
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

- 與邊框相關的 CSS 簡寫屬性：{{cssxref("border")}}、{{cssxref("border-right")}} 和 {{cssxref("border-color")}}。
- 其他邊框的顏色相關 CSS 屬性：{{cssxref("border-left-color")}}、{{cssxref("border-bottom-color")}} 和 {{cssxref("border-top-color")}}。
- 適用於相同邊框的其他邊框相關 CSS 屬性：{{cssxref("border-right-style")}} 和 {{cssxref("border-right-width")}}。
- 預設的 [`currentcolor`](/zh-TW/docs/Web/CSS/Reference/Values/color_value#currentcolor_關鍵字) 顏色值。
