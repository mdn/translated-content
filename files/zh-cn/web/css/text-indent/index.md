---
title: text-indent
slug: Web/CSS/text-indent
---

{{CSSRef}}

`text-indent` 属性能定义一个块元素首行文本内容之前的缩进量。

{{EmbedInteractiveExample("pages/css/text-indent.html")}}

## Syntax

```
/* <length> 长度值 */
text-indent: 3mm;
text-indent: 40px;

/* <percentage>百分比值取决于其包含块（containing block）的宽度*/
text-indent: 15%;

/* 关键字 */
text-indent: 5em each-line;
text-indent: 5em hanging;
text-indent: 5em hanging each-line;

/* 全局值 */
text-indent: inherit;
text-indent: initial;
text-indent: unset;
```

### Values

- `<length>`
  - : `使用固定的<length>值来指定文本的缩进。允许使用负值。查阅可能`的 {{cssxref("&lt;length&gt;")}} 单位。
- `<percentage>`
  - : 使用包含块宽度的百分比作为缩进。
- `each-line` {{experimental_inline}}
  - : 文本缩进会影响第一行，以及使用\<br>强制断行后的第一行。
- `hanging` {{experimental_inline}}
  - : 该值会对所有的行进行反转缩进：除了第一行之外的所有的行都会被缩进，看起来就像第一行设置了一个负的缩进值。

### 正式语法

{{csssyntax}}

## 例子

### HTML

```html
<p>
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
  nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
</p>
```

### CSS

```css
p {
  text-indent: 5em;
  background: powderblue;
}
```

### 结果

{{EmbedLiveSample('例子')}}

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}
