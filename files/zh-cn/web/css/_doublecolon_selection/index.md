---
title: "::selection"
slug: Web/CSS/::selection
---

{{CSSRef}}

**`::selection`** CSS 伪元素应用于文档中被用户高亮的部分（比如使用鼠标或其他选择设备选中的部分）。

```css
::selection {
  background-color: cyan;
}
```

## 允许属性

只有一小部分 CSS 属性可以用于`::selection` 选择器：

- {{CSSxRef("color")}}
- {{CSSxRef("background-color")}}
- {{CSSxRef("cursor")}}
- {{CSSxRef("caret-color")}}
- {{CSSxRef("outline")}} and its longhands
- {{CSSxRef("text-decoration")}} and its associated properties
- {{CSSxRef("text-emphasis-color")}}
- {{CSSxRef("text-shadow")}}

> **警告：** 要特别注意的是，{{ cssxref("background-image") }} 会如同其他属性一样被忽略。

## 语法

```
/* Legacy Firefox syntax (version 61 and below) */
::-moz-selection

{{CSSSyntax}}
```

## 示例

### HTML

```html
This text has special styles when you highlight it.
<p>Also try selecting text in this paragraph.</p>
```

### CSS

```css
::-moz-selection {
  color: gold;
  background-color: red;
}

p::-moz-selection {
  color: white;
  background-color: blue;
}
```

```css
/* 选中的文本是红色背景，金黄色的字体 */
::selection {
  color: gold;
  background-color: red;
}

/*选中的是蓝色背景，白色的字体的段落*/
p::selection {
  color: white;
  background-color: blue;
}
```

### 结果

{{EmbedLiveSample('示例')}}

## 规范

{{Specifications}}

> **备注：** `::selection` CSS 伪元素选择器是 CSS 第 3 级选择器的草案，但是在被推荐使用前就被废弃。它现在在第 4 级伪元素选择器草案中。

## 浏览器兼容性

{{Compat}}
