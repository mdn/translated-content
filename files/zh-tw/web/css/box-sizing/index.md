---
title: box-sizing
slug: Web/CSS/box-sizing
---

{{CSSRef}}{{SeeCompatTable}}

## 概要

The **`box-sizing`** property is used to alter the default [CSS box model](/zh-TW/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model) used to calculate width and height of the elements. It is possible to use this property to emulate the behavior of browsers that do not correctly support the CSS box model specification.

**`box-sizing`** 屬性用於更改預設 [CSS 盒子模型](/zh-TW/docs/CSS/Box_model)中所計算的寬度和高度。可以使用此屬性來模擬不正確支持 CSS 盒子模型規範的瀏覽器的行為。

{{cssinfo}}

## 句法

```css
/* Keyword values */
box-sizing: content-box;
box-sizing: border-box;

/* Global values */
box-sizing: inherit;
box-sizing: initial;
box-sizing: unset;
```

### 值

- `content-box`
  - : 這是根據 CSS 標準的起始值和預設值。 {{Cssxref("width")}} 與 {{Cssxref("height")}} 只包括內容本身的寬和高， 不包括邊框（border）、內邊距（padding）、外邊距（margin）。注意：內邊距、邊框和外邊距都在這個盒子的外部。例如，如果 `.box {width: 350px};` 而且 `{border: 10px solid black;}`，那麼在瀏覽器中的渲染該容器的實際寬度將是370px，簡單來說，尺寸計算公式：width = 內容的寬度，height = 內容的高度。寬度和高度都不包含內容的邊框（border）和內邊距（padding）。
- `border-box`
  - : {{Cssxref("width")}} 和 {{Cssxref("height")}} 屬性包括內容（content），內邊距（padding）和邊框（border），但不包括外邊距（margin）。這是當文檔處於 Quirks 模式時 Internet Explorer 所使用的[盒模型](/zh-TW/docs/CSS/Box_model)。注意，內邊距和邊框都將在盒子內 ，例如，`.box {width: 350px; border: 10px solid black;}`，渲染出的容器寬度會固定在 350px，而內容（content）的寬度就會變成 330px，因為邊框（border）佔了20px。內容框不能為負，並且進位到 0，使得不可能使用 border-box 使元素消失。

  這裡的維度計算為：

    _width = border + padding + 內容的 width_，
    _height = border + padding + 內容的 height_。

- `padding-box` {{non-standard_inline}} {{deprecated_inline}}
  - : The {{Cssxref("width")}} and {{Cssxref("height")}} properties include the content, the padding but neither the border, nor the margin. Only Firefox implemented this value, and it was removed in Firefox 50.

### Formal syntax

{{csssyntax}}

## Examples

```css
/* support Firefox, Chrome, Safari, Opera, IE8+ and old Android */

.example {
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS box model](/zh-TW/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
