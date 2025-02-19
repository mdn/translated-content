---
title: ::first-letter
slug: Web/CSS/::first-letter
l10n:
  sourceCommit: 190e65c92aa1d1be81106fd431f49230f98b8224
---

{{CSSRef}}

**`::first-letter`** [CSS](/zh-CN/docs/Web/CSS) [伪元素](/zh-CN/docs/Web/CSS/Pseudo-elements)将样式应用于[区块容器](/zh-CN/docs/Web/CSS/Visual_formatting_model#区块容器)第一行的第一个字母，但仅当其前面没有其他内容（例如图像或行内表格）时才有效。

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-first-letter.html", "tabbed-shorter")}}

元素的第一个字母并不总是容易识别：

- 第一个字母之前或紧随其后的标点符号也包含在匹配中。标点符号包括在 Unicode 中定义的*开始括号*（Ps）、_结束括号_（Pe）、_起始引号_（Pi）、_结束引号_（pf）和*其他标点符号*（po）类别的任何字符。
- 有些语言的数字符总是一起大写，如荷兰语中的 `IJ`。在这种情况下，数字的两个字母都应与 `::first-letter` 伪元素匹配。
- {{ cssxref("::before") }} 伪元素和 {{ cssxref("content") }} 属性的组合可能会在元素开头注入一些文本。在这种情况下，`::first-letter` 将匹配生成内容的第一个字母。

> [!NOTE]
> CSS 引入了 `::first-letter` 符号（带两个冒号），以区分[伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)和[伪元素](/zh-CN/docs/Web/CSS/Pseudo-elements)。为了向后兼容，浏览器也接受早先引入的 `:first-letter`。
>
> 浏览器对荷兰语中 `IJ` 等数字字符的支持较差。请查看下面的兼容性表，以了解当前的支持情况。

## 允许的属性

只有一小部分 CSS 属性可以与 `::first-letter` 伪元素一起使用：

- 所有字体属性：{{ Cssxref("font") }}、{{ Cssxref("font-style") }}、{{cssxref("font-feature-settings")}}、{{cssxref("font-kerning")}}、{{cssxref("font-language-override")}}、{{cssxref("font-stretch")}}、{{cssxref("font-synthesis")}}、{{ Cssxref("font-variant") }}、{{cssxref("font-variant-alternates")}}、{{cssxref("font-variant-caps")}}、{{cssxref("font-variant-east-asian")}}、{{cssxref("font-variant-ligatures")}}、{{cssxref("font-variant-numeric")}}、{{cssxref("font-variant-position")}}、{{ Cssxref("font-weight") }}、{{ Cssxref("font-size") }}、{{cssxref("font-size-adjust")}}、{{ Cssxref("line-height") }} 和 {{ Cssxref("font-family") }}
- 所有背景属性：{{ Cssxref("background") }}、{{ Cssxref("background-color") }}、{{ Cssxref("background-image") }}、{{cssxref("background-clip")}}、{{cssxref("background-origin")}}、{{ Cssxref("background-position") }}、{{ Cssxref("background-repeat") }}、{{ cssxref("background-size") }}、{{ Cssxref("background-attachment") }} 和 {{cssxref("background-blend-mode")}}
- 所有外边距属性：{{ Cssxref("margin") }}、{{ Cssxref("margin-top") }}、{{ Cssxref("margin-right") }}、{{ Cssxref("margin-bottom") }}、{{ Cssxref("margin-left") }}
- 所有内边距属性：{{ Cssxref("padding") }}、{{ Cssxref("padding-top") }}、{{ Cssxref("padding-right") }}、{{ Cssxref("padding-bottom") }}、{{ Cssxref("padding-left") }}
- 所有边界属性：简写 {{ Cssxref("border") }}、{{ Cssxref("border-style") }}、{{ Cssxref("border-color") }}、{{ cssxref("border-width") }}、{{ cssxref("border-radius") }}、{{cssxref("border-image")}}，以及详细属性
- {{ cssxref("color") }} 属性
- {{ cssxref("text-decoration") }}、{{cssxref("text-shadow")}}、{{ cssxref("text-transform") }}、{{ cssxref("letter-spacing") }}、{{ cssxref("word-spacing") }}（在适当的时候）、{{ cssxref("line-height") }}、{{cssxref("text-decoration-color")}}、{{cssxref("text-decoration-line")}}、{{cssxref("text-decoration-style")}}、{{cssxref("box-shadow")}}、{{ cssxref("float") }}、{{ cssxref("vertical-align") }}（仅当 `float` 为 `none` 时）CSS 属性

## 语法

```css
::first-letter {
  /* ... */
}
```

## 示例

### 简单的下沉式首字母

在此示例中，我们将使用 `::first-letter` 伪元素在紧接 `<h2>` 后的段落的首字母上创建一个简单的下沉式首字母效果。

#### HTML

```html
<h2>我的标题</h2>
<p>
  人的心只容得下一定程度的绝望，海绵已经吸够了水，即使大海从它上面流过，也不能再给它增添一滴水了。文学就像炉中的火一样，我们从人家借得火来，把自己点燃，而后传给别人，以致为大家所共同拥有。魂牵梦萦在江南，有一片土地，名唤故乡；对酒当歌在烟雨，有一份情愫，称作痴迷。
</p>
<p>世界上最宽阔的是海洋，比海洋更宽阔的是天空，比天空更宽阔的是人的心灵。</p>
```

#### CSS

```css
p {
  width: 500px;
  line-height: 1.5;
}

h2 + p::first-letter {
  color: white;
  background-color: black;
  border-radius: 2px;
  box-shadow: 3px 3px 0 red;
  font-size: 250%;
  padding: 6px 3px;
  margin-right: 6px;
  float: left;
}
```

#### 结果

{{ EmbedLiveSample('简单的下沉式首字母', '100%', 350) }}

### 对特殊标点符号和非拉丁字符的影响

此示例说明了 `::first-letter` 对特殊标点符号和非拉丁字符的影响。

#### HTML

```html
<p>一些段落，一些段落，一些段落，一些段落。</p>
<p>-特殊标点符号的开头。</p>
<p>_特殊标点符号的开头。</p>
<p>"特殊标点符号的开头。</p>
<p>'特殊标点符号的开头。</p>
<p>*特殊标点符号的开头。</p>
<p>#特殊标点符号的开头。</p>
<p>「特殊的汉字标点符号开头。</p>
<p>《特殊的汉字标点符号开头。</p>
<p>"特殊的汉字标点符号开头。</p>
```

#### CSS

```css
p::first-letter {
  color: red;
  font-size: 150%;
}
```

#### 结果

{{ EmbedLiveSample('对特殊标点符号和非拉丁字符的影响', '100%', 350) }}

### 为 SVG 文本元素中的第一个字母设置样式

在此示例中，我们使用 `::first-letter` 伪元素来设置 SVG {{SVGElement("text")}} 元素中第一个字母的样式。

> [!NOTE]
> 在撰写本文时，此功能已获得[有限支持](#浏览器兼容性)。

#### HTML

```html
<svg viewBox="0 0 300 40">
  <text y="30">&lt;text&gt; SVG 中的首个字母</text>
</svg>
```

#### CSS

```css
text {
  font-family: sans-serif;
}

text::first-letter {
  font-family: serif;
  font-size: 2rem;
  font-weight: 600;
  fill: tomato;
  stroke: indigo;
}
```

#### 结果

{{ EmbedLiveSample("为 SVG 文本元素中的第一个字母设置样式", "100%", "100") }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("::first-line")}}
