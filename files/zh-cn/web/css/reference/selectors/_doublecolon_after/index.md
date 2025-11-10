---
title: ::after
slug: Web/CSS/Reference/Selectors/::after
l10n:
  sourceCommit: c8ff2398fa61950fe46f2d9155a105c125bfea83
---

在 CSS 中，**`::after`** 会创建一个[伪元素](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-elements)，作为所选元素的最后一个子元素。它通常用于为具有 {{CSSxRef("content")}} 属性的元素添加修饰内容。默认情况下，它是行向布局的。

{{InteractiveExample("CSS Demo: ::after", "tabbed-standard")}}

```css interactive-example
a::after {
  content: " (" attr(href) ")";
}

.dead-link {
  text-decoration: line-through;
}

.dead-link::after {
  content: url("/shared-assets/images/examples/warning.svg");
  display: inline-block;
  width: 12px;
  height: 12px;
}
```

```html interactive-example
<p>
  The sailfish is named for its sail-like dorsal fin and is widely considered
  the fastest fish in the ocean.
  <a href="https://en.wikipedia.org/wiki/Sailfish"
    >You can read more about it here</a
  >.
</p>

<p>
  The red lionfish is a predatory scorpionfish that lives on coral reefs of the
  Indo-Pacific Ocean and more recently in the western Atlantic.
  <a href="" class="dead-link">You can read more about it here</a>.
</p>
```

> [!NOTE]
> `::before` 和 `::after` 生成的伪元素是行级盒子，就好像它们是应用它们的元素或“源元素”的直接子元素，因此不能应用于*{{glossary("Replaced elements", "可替换元素")}}*（如 {{htmlelement("img")}}），它们的内容在不受当前文档样式的影响的情况下被替换。

## 语法

```css-nolint
::after {
  content: /* 值 */;
  /* 其他属性 */
}
```

如果未指定 [`content`](/zh-CN/docs/Web/CSS/Reference/Properties/content) 属性、属性值无效或属性值为 `normal` 或 `none`，则不会渲染 `::after` 伪元素。其行为与设置了 `display: none` 相同。

> [!NOTE]
> CSS 引入 `::after` 表示法（两个冒号）是用来区分[伪类](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-classes)和[伪元素](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-elements)的。同时为了向后兼容，浏览器也支持较早引入的 `:after`。

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

本例使用 `::after`，结合 [`attr()`](/zh-CN/docs/Web/CSS/Reference/Values/attr) CSS 表达式和 `data-descr` [自定义数据属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes/data-*)，创建工具提示。无需 JavaScript！

我们还可以使用此技术为键盘用户提供支持，方法是添加一个值为 `0` 的 `tabindex` 使每个 `span` 都可通过键盘操作聚焦，并使用 CSS `:focus` 选择器。这说明了 `::before` 和 `::after` 可以多么灵活，不过要获得最方便的体验，以其他方式创建的语义披露部件（如使用 [detail 和 summary](/zh-CN/docs/Web/HTML/Reference/Elements/details) 元素）可能更合适。

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

{{ EmbedLiveSample('工具提示', 450, 120) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSxRef("::before")}}
- {{CSSxRef("content")}}
