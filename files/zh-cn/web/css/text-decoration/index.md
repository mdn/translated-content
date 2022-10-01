---
title: text-decoration
slug: Web/CSS/text-decoration
---

{{ CSSRef() }}

## 简介

{{EmbedInteractiveExample("pages/css/text-decoration.html")}}

`text-decoration` 这个 CSS 属性是用于设置文本的修饰线外观的（下划线、上划线、贯穿线/删除线 或 闪烁）它是 {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-style")}}, 和新出现的 {{cssxref("text-decoration-thickness")}} 属性的缩写。

文本修饰属性会延伸到子元素。这意味着如果祖先元素指定了文本修饰属性，子元素则不能将其删除。例如，在如下标记中 `<p>This text has <em>some emphasized words</em> in it.</p>`，应用样式 `p { text-decoration: underline }` 会对整个段落添加下划线，此时再添加样式 `em { text-decoration: none }` 则不会引起任何改变，整个段落仍然有下划线修饰。然而，新加样式 `em { text-decoration: overline }` 则会在\<em>标记的文字上再添加上这种 overline 样式。

## 语法

text-decoration 属性是一种简写属性，并且可以使用普通属性三个值中的任何一个。普通属性如下：{{cssxref("text-decoration-line")}}，{{cssxref("text-decoration-color")}}和{{cssxref("text-decoration-style")}}

### 值

- {{cssxref("text-decoration-line")}}
  - : 文本修饰的位置，如下划线`underline`，删除线`line-through`
- {{cssxref("text-decoration-color")}}
  - : 文本修饰的颜色
- {{cssxref("text-decoration-style")}}
  - : 文本修饰的样式，如波浪线`wavy`实线`solid`虚线`dashed`
- {{cssxref("text-decoration-thickness")}}
  - : 文本修饰线的粗细

### 语法形式

{{csssyntax("text-decoration")}}

## 示例

```html
<p class="under">This text has a line underneath it.</p>
<p class="over">This text has a line over it.</p>
<p class="line">This text has a line going through it.</p>
<p>This <a class="plain" href="#">link will not be underlined</a>,
    as links generally are by default. Be careful when removing
    the text decoration on anchors since users often depend on
    the underline to denote hyperlinks.</p>
<p class="underover">This text has lines above <em>and</em> below it.</p>
<p class="blink">This text might blink for you,
    depending on the browser you use.</p>
```

```css
.under {
  text-decoration: underline red;
}

.over {
  text-decoration: wavy overline lime;
}

.line {
  text-decoration: line-through;
}

.plain {
  text-decoration: none;
}

.underover {
  text-decoration: dashed underline overline;
}

.blink {
  text-decoration: blink;
}
```

### 结果

{{EmbedLiveSample('示例','auto','280')}}

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}

## 参见

- The individual text-decoration properties are {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-color")}}, and {{cssxref("text-decoration-style")}}.
- The {{cssxref("list-style")}} attribute controls the appearance of items in HTML {{HTMLElement("ol")}} and {{HTMLElement("ul")}} lists.
