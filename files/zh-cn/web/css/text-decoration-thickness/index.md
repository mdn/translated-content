---
title: 文本装饰线厚度 (粗细)
slug: Web/CSS/text-decoration-thickness
---

{{CSSRef}}

[CSS](/zh-CN/docs/CSS) 属性 **`text-decoration-thickness`** 用于设置元素中文本所使用的装饰线（如 line-through、underline 或 overline）的笔触厚度。

## 语法

```css
/* Single keyword */
text-decoration-thickness: auto;
text-decoration-thickness: from-font;

/* length */
text-decoration-thickness: 0.1em;
text-decoration-thickness: 3px;

/* percentage */
text-decoration-thickness: 10%;

/* Global values */
text-decoration-thickness: inherit;
text-decoration-thickness: initial;
text-decoration-thickness: unset;
```

### 值

- `auto`
  - : 由浏览器为文本装饰线选择合适的厚度。
- `from-font`
  - : 如果字体文件中包含了首选的厚度值，则使用字体文件的厚度值。如果字体文件中没有包含首选的厚度值，则效果和设置为 `auto` 一样，由浏览器选择合适的厚度值。
- `<length>`
  - : 将文本装饰线的厚度设置为一个 {{cssxref('length')}} 类型的值，覆盖掉字体文件建议的值或浏览器默认的值。
- `<percentage>`
  - : Specifies the thickness of the text decoration line as a {{cssxref('percentage')}} of **1em** in the current font. A percentage inherits as a relative value, and so therefore scales with changes in the font. The browser must use a minimum of 1 device pixel. For a given application of this property, the thickness is constant across the whole box it is applied to, even if there are child elements with a different font size.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## 示例

### Varying thickness

#### HTML

```html
<p class="thin">Here's some text with a 1px red underline.</p>
<p class="thick">This one has a 5px red underline.</p>
<p class="shorthand">This uses the equivalent shorthand.</p>
```

#### CSS

```css
.thin {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: red;
  text-decoration-thickness: 1px;
}

.thick {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: red;
  text-decoration-thickness: 5px;
}

.shorthand {
  text-decoration: underline solid red 5px;
}
```

#### Results

{{ EmbedLiveSample('Varying_thickness', '', '', '') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{cssxref("text-decoration")}}
- {{cssxref("text-underline-offset")}}
