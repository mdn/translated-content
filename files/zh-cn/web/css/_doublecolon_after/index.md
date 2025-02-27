---
title: ::after
slug: Web/CSS/::after
l10n:
  sourceCommit: bf02c31b6f160b0df7bef4045929033dfad1961c
---

{{CSSRef}}

在 CSS 中，**`::after`** 会创建一个[伪元素](/zh-CN/docs/Web/CSS/Pseudo-elements)，作为所选元素的最后一个子元素。它通常用于为具有 {{CSSxRef("content")}} 属性的元素添加修饰内容。默认情况下，它是行向布局的。

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-after.html", "tabbed-standard")}}

> **备注：** `::before` 和 `::after` 生成的伪元素是行级盒子，就好像它们是应用它们的元素或“源元素”的直接子元素，因此不能应用于[_替换元素_](/zh-CN/docs/Web/CSS/Replaced_element)（如 {{htmlelement("img")}}），它们的内容在不受当前文档样式的影响的情况下被替换。

## 语法

```css-nolint
::after {
  content: /* 值 */;
  /* 其他属性 */
}
```

如果未指定 [`content`](/zh-CN/docs/Web/CSS/content) 属性、属性值无效或属性值为 `normal` 或 `none`，则不会渲染 `::after` 伪元素。其行为与设置了 `display: none` 相同。

> [!NOTE]
> CSS 引入 `::after` 表示法（两个冒号）是用来区分[伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)和[伪元素](/zh-CN/docs/Web/CSS/Pseudo-elements)的。同时为了向后兼容，浏览器也支持较早引入的 `:after`。

## 示例

### 简单用法

让我们创建两个类：一个用于枯燥的段落，一个用于精彩的段落。我们可以使用这些类在段落末尾添加伪元素。

#### HTML

```html
<p class="boring-text">这是些无聊的文字</p>
<p>这是不无聊也不有趣的文字</p>
<p class="exciting-text">在 MDN 上做贡献简单又轻松！</p>
```

#### CSS

```css
.exciting-text::after {
  content: "<- 让人兴兴兴奋！";
  color: green;
}

.boring-text::after {
  content: "<- 无聊！";
  color: red;
}
```

#### 结果

{{ EmbedLiveSample('简单用法', 500, 170) }}

### 装饰性用法

我们几乎可以用想要的任何方法给 {{ cssxref("content") }} 属性里的文字和图片的加上样式。

#### HTML

```html
<span class="ribbon">看看这段文字后的橙色盒子。</span>
```

#### CSS

```css
.ribbon {
  background-color: #5bc8f7;
}

.ribbon::after {
  content: "这是一个漂亮的橙色盒子。";
  background-color: #ffba10;
  border-color: black;
  border-style: dotted;
}
```

#### 结果

{{ EmbedLiveSample('装饰性用法', 450, 20) }}

### 工具提示

本例使用 `::after`，结合 [`attr()`](/zh-CN/docs/Web/CSS/attr) CSS 表达式和 `data-descr` [自定义数据属性](/zh-CN/docs/Web/HTML/Global_attributes/data-*)，创建工具提示。无需 JavaScript！

我们还可以使用此技术为键盘用户提供支持，方法是添加一个值为 `0` 的 `tabindex` 使每个 `span` 都可通过键盘操作聚焦，并使用 CSS `:focus` 选择器。这说明了 `::before` 和 `::after` 可以多么灵活，不过要获得最方便的体验，以其他方式创建的语义披露部件（如使用 [detail 和 summary](/zh-CN/docs/Web/HTML/Element/details) 元素）可能更合适。

#### HTML

```html
<p>
  这里我们有包含了一些<span tabindex="0" data-descr="鼠标悬停时出现的小弹出窗口"
    >工具提示</span
  >的<span tabindex="0" data-descr="文字和标点符号的集合">文字</span>。
</p>
```

#### CSS

```css
span[data-descr] {
  position: relative;
  text-decoration: underline;
  color: #00f;
  cursor: help;
}

span[data-descr]:hover::after,
span[data-descr]:focus::after {
  content: attr(data-descr);
  position: absolute;
  left: 0;
  top: 24px;
  min-width: 200px;
  border: 1px #aaaaaa solid;
  border-radius: 10px;
  background-color: #ffffcc;
  padding: 12px;
  color: #000000;
  font-size: 14px;
  z-index: 1;
}
```

#### 结果

{{ EmbedLiveSample('提示用法', 450, 160) }}

## 无障碍考虑

不鼓励使用 `::after` 伪元素来添加内容，因为屏幕阅读器无法可靠地访问它。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSxRef("::before")}}
- {{CSSxRef("content")}}
