---
title: border-top-color
slug: Web/CSS/border-top-color
---

{{CSSRef}}

**`border-top-color`** 是一種 CSS 屬性，用來設定元件上側[邊框](/zh-TW/docs/Web/CSS/border)的顏色。也可由含括此屬性功能的簡寫屬性 {{cssxref("border-color")}} 或 {{cssxref("border-top")}} 設定該屬性值。

{{EmbedInteractiveExample("pages/css/border-top-color.html")}}

## 語法

```css
/* <color> values */
border-top-color: red;
border-top-color: #ffbb00;
border-top-color: rgb(255, 0, 0);
border-top-color: hsla(100%, 50%, 25%, 0.75);
border-top-color: currentcolor;
border-top-color: transparent;

/* Global values */
border-top-color: inherit;
border-top-color: initial;
border-top-color: revert;
border-top-color: revert-layer;
border-top-color: unset;
```

`border-top-color`只能宣告一個屬性值。

### 屬性值

- {{cssxref("&lt;color&gt;")}}
  - : 定義上側邊框色彩。

## Formal definition 標準定義

{{CSSInfo}}

## Formal syntax 語法規則

{{csssyntax}}

## 範例

### 簡易邊框範例

#### HTML

```html
<div class="mybox">
  <p>
    這是一個帶有框線的方框。 請注意某側框線顏色已設為
    <span class="redtext">紅色</span>。
  </p>
</div>
```

#### CSS

```css
.mybox {
  border: solid 0.3em gold;
  border-top-color: red;
  width: auto;
}

.redtext {
  color: red;
}
```

#### 成果

{{EmbedLiveSample('簡易邊框範例')}}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- 與框線相關的簡寫屬性：{{Cssxref("border")}}、{{Cssxref("border-top")}}、{{Cssxref("border-color")}}。
- 與顏色相關的其他框線屬性：{{Cssxref("border-right-color")}}、{{Cssxref("border-bottom-color")}}、{{Cssxref("border-left-color")}}。
- 與同側框線相關的其他屬性：{{cssxref("border-top-style")}}、{{cssxref("border-top-width")}}。
