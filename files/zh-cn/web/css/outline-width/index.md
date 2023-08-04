---
title: outline-width
slug: Web/CSS/outline-width
---

{{CSSRef}}

CSS 属性 **`outline-width`** 用于设置一个元素的轮廓的厚度。元素轮廓是绘制于元素周围的一条线，位于 {{cssxref("border")}} 的外围。

{{EmbedInteractiveExample("pages/css/outline-width.html")}}

大多情况下用简写属性 {{cssxref("outline")}} 定义轮廓外观会更方便。

## Syntax

```css
/* Keyword values */
outline-width: thin;
outline-width: medium;
outline-width: thick;

/* <length> values */
outline-width: 1px;
outline-width: 0.1em;

/* Global values */
outline-width: inherit;
```

`outline-width` 的值可以是下面列表中的任一项。

### Values

- {{cssxref("&lt;length&gt;")}}
  - : The width of the outline specified as a `<length>`.
- `thin`
  - : 取决于用户代理。通常等同于桌面浏览器的 `1px` （包括 Firefox）。
- `medium`
  - : 取决于用户代理。通常等同于桌面浏览器的 `3px` （包括 Firefox）。
- `thick`
  - : 取决于用户代理。通常等同于桌面浏览器的 `5px`（包括 Firefox）。

### Formal syntax

{{csssyntax}}

## Examples

### HTML

```html
<span id="thin">thin</span>
<span id="medium">medium</span>
<span id="thick">thick</span>
<span id="twopixels">2px</span>
<span id="oneex">1ex</span>
<span id="em">1.2em</span>
```

### CSS

```css
span {
  outline-style: solid;
  display: inline-block;
  margin: 20px;
}

#thin {
  outline-width: thin;
}

#medium {
  outline-width: medium;
}

#thick {
  outline-width: thick;
}

#twopixels {
  outline-width: 2px;
}

#oneex {
  outline-width: 1ex;
}

#em {
  outline-width: 1.2em;
}
```

{{EmbedLiveSample('Examples', '100%', '80')}}

## Specifications

{{Specifications}}

{{cssinfo}}

## Browser compatibility

{{Compat}}
