---
title: "::first-line (:first-line)"
slug: Web/CSS/::first-line
---

{{CSSRef}}

**`::first-line`** [CSS](/zh-CN/docs/Web/CSS) [pseudo-element](/zh-CN/docs/Web/CSS/Pseudo-elements) （CSS 伪元素）在某 [block-level element](/zh-CN/docs/Web/CSS/Visual_formatting_model#Block-level_elements_and_block_boxes) （块级元素）的第一行应用样式。第一行的长度取决于很多因素，包括元素宽度，文档宽度和文本的文字大小。

和其他所有的 伪元素一样，::first-line 不能匹配任何真实存在的 html 元素。

::first-line 伪元素只能在块容器中，所以，`::first-line`伪元素只能在一个 display 值为 block, `inline-block`, `table-cell` 或者 `table-caption`中有用.。在其他的类型中，`::first-line` 是不起作用的。

## 允许的属性值

在一个使用了 `::first-line` 伪元素的选择器中，只有很小的一部分 css 属性能被使用：

- 所有和字体有关的属性：{{Cssxref("font")}}, {{cssxref("font-kerning")}}, {{Cssxref("font-style")}}, {{Cssxref("font-variant")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-synthesis")}}, {{cssxref("font-feature-settings")}}, {{cssxref("font-language-override")}}, {{Cssxref("font-weight")}}, {{Cssxref("font-size")}}, {{cssxref("font-size-adjust")}}, {{cssxref("font-stretch")}}, and {{Cssxref("font-family")}}
- {{cssxref("color")}}
- 所有和背景有关的属性： {{Cssxref("background-color")}}, {{cssxref("background-clip")}}, {{Cssxref("background-image")}}, {{cssxref("background-origin")}}, {{Cssxref("background-position")}}, {{Cssxref("background-repeat")}}, {{cssxref("background-size")}}, {{Cssxref("background-attachment")}}, and {{cssxref("background-blend-mode")}}
- {{cssxref("word-spacing")}}, {{cssxref("letter-spacing")}}, {{cssxref("text-decoration")}}, {{cssxref("text-transform")}}, and {{cssxref("line-height")}}
- {{cssxref("text-shadow")}}, {{cssxref("text-decoration")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}}, and {{cssxref("vertical-align")}}.

这个列表将来可能会被扩展，但是推荐的是，你不要使用任何上述没有提到的属性。

> **备注：** 在 CSS 2 中，伪元素是以 : 开头的。由于伪类也遵循同一规则，使得他们之间难以区分。为了解决这个问题，在 CSS 2.1 中，伪元素支持以 :: 开头。现在，使用伪元素时更推荐以 :: 开头，而使用伪类时使用 : 开头。
>
> 因为过去的浏览器都实现过 CSS 2 的规则，所以现在那些支持 :: 的浏览器通常同时也支持 : 的形式。
>
> 如果需要支持老旧的浏览器，那么 `:first-line` 是唯一的选择，反之，更推荐使用 `::first-line`。

## 语法

{{csssyntax}}

## 示例

### text-transform

将每个段落中的第一行字母转换成大写

#### HTML

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore.
</p>
```

#### CSS

```css
p::first-line {
  text-transform: uppercase;
}
```

#### 输出

{{ EmbedLiveSample('text-transform', 250, 100) }}

### margin-left

`margin-left` 在 first-line 伪元素上无效

#### HTML

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore.
</p>
```

#### CSS

```css
p::first-line {
  margin-left: 20px;
}
```

#### 输出

{{ EmbedLiveSample('margin-left', 250, 100) }}

### text-indent

`text-indent` 在 first-line 伪元素上无效

#### HTML

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore.
</p>
```

#### CSS

```css
p::first-line {
  text-indent: 20px;
}
```

#### 输出

{{ EmbedLiveSample('text-indent', 250, 100) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- The {{cssxref("::first-letter")}} pseudo-element.
