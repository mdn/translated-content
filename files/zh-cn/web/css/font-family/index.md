---
title: font-family
slug: Web/CSS/font-family
---

{{CSSRef}}

CSS 属性 `font-family` 允许您通过给定一个有先后顺序的，由字体名或者字体族名组成的列表来为选定的元素设置字体。

{{EmbedInteractiveExample("pages/css/font-family.html")}}

属性值用逗号隔开。浏览器会选择列表中第一个该计算机上有安装的字体，或者是通过 {{cssxref("@font-face")}} 指定的可以直接下载的字体。

通常会使用属性缩写 {{cssxref("font")}} 来设置 `font-size` 和其他与字体相关的属性。

应当至少在使用的 `font-family` 列表中添加一个通用的字体族名，因为无法保证用户的计算机内已经安装了指定的字体，也不能保证使用 {{cssxref("@font-face")}} 提供的字体移动能够正确地下载。提供通用的字体族使得浏览器可以在无法得到最佳字体的情况下使用一个相对接近的备选字体。

`font-family` 属性指定的是一个优先级从高到低的字体列表。字体的选定*不是*在发现用户计算机上安装的列表中的第一个字体时停止。相反，对字体的选择是*逐字*进行的。也就是说即使某个字符周围都在某个字体中可以显示，但该字符在当前的字体文件中没有适合的图形，那么会继续尝试列表中靠后的字体。当一个字体只在某些特定的[样式](/zh-CN/docs/Web/CSS/font-style)、[变体](/zh-CN/docs/Web/CSS/font-variant)或[大小](/zh-CN/docs/Web/CSS/font-size)下有效时，这些属性的值也可能对字体族的选择造成影响。

## 语法

```css
/* 一个字体族名和一个通用字体族名 */
font-family: "Gill Sans Extrabold", sans-serif;
font-family: "Goudy Bookletter 1911", sans-serif;

/* 仅有一个通用字体族名 */
font-family: serif;
font-family: sans-serif;
font-family: monospace;
font-family: cursive;
font-family: fantasy;
font-family: system-ui;
font-family: ui-serif;
font-family: ui-sans-serif;
font-family: ui-monospace;
font-family: ui-rounded;
font-family: emoji;
font-family: math;
font-family: fangsong;

/* 全局值 */
font-family: inherit;
font-family: initial;
font-family: revert;
font-family: revert-layer;
font-family: unset;
```

属性 `font-family` 列举一个或多个由逗号隔开的字体族。每个字体族由 [`<family-name>`](#family-name) 或 [`<generic-name>`](#generic-name) 值指定。

下面的例子列举了两个字体族，其中第一个是 `<family-name>`，第二个是 `<generic-name>`：

```css
font-family: "Gill Sans Extrabold", sans-serif;
```

### 取值

- `<family-name>`
  - : 一个字体族的名字。例如"Times" 和 "Helvetica" 都是字体族名。字体族名可以包含空格，但包含空格时应该用引号。
- `<generic-name>`

  - : 通用字体族名是一种备选机制，用于在指定的字体不可用时给出较好的字体。通用字体族名都是关键字，所以不可以加引号。在列表的末尾应该至少有一个通用字体族名。以下是该属性可能的取值以及他们的定义。

    - `serif`

      - : 带衬线字体，笔画结尾有特殊的装饰线或衬线。

        例如：Lucida Bright、Lucida Fax、Palatino、Palatino Linotype、Palladio、URW Palladio、serif。

    - `sans-serif`

      - : 无衬线字体，即笔画结尾是平滑的字体。

        例如：Open Sans、Fira Sans、Lucida Sans、Lucida Sans Unicode、Trebuchet MS、Liberation Sans、Nimbus Sans L、sans-serif。

    - `monospace`

      - : 等宽字体，即字体中每个字宽度相同。

        例如：Fira Mono、DejaVu Sans Mono、Menlo、Consolas、Liberation Mono、Monaco、Lucida Console、monospace。

    - `cursive`

      - : 草书字体。这种字体有的有连笔，有的还有特殊的斜体效果。因为一般这种字体都有一点连笔效果，所以会给人一种手写的感觉。

        例如：Brush Script MT、Brush Script Std、Lucida Calligraphy、Lucida Handwriting、Apple Chancery、cursive。

    - `fantasy`

      - : Fantasy 字体主要是那些具有特殊艺术效果的字体。

        例如：Papyrus、Herculanum、Party LET、Curlz MT、Harrington、fantasy。

    - `system-ui`
      - : 从浏览器所处平台处获取的默认用户界面字体。由于世界各地的排版习惯之间有很大的差异，因此为那些不适合其他通用字体的字体提供了这个通用字体。
    - `ui-serif`
      - : 默认用户界面的带衬线字体。
    - `ui-sans-serif`
      - : 默认用户界面的无衬线字体。
    - `ui-monospace`
      - : 默认用户界面的等宽字体。
    - `ui-rounded`
      - : 默认用户界面的圆体。
    - `math`
      - : 针对显示数学相关字符的特殊样式问题而设计的字体：支持上标和下标、跨行括号、嵌套表达式和具有不同含义的 double struck glyphs。
    - `emoji`
      - : 专门用于呈现 Emoji 表情符号的字体。
    - `fangsong`
      - : 一种汉字字体，介于宋体和楷体之间。这种字体常用于某些政府文件。

### 有效的字体族名

字体族名或者是引号包括的字符串，或者是不含引号的一个或多个合法标识串构成的。这意味着在没有带引号的字体族名的开头是不能使用标点符号字符和数字字符的。

例如，以下的声明是有效的：

```css example-good
font-family: "Gill Sans Extrabold", sans-serif;
font-family: "Goudy Bookletter 1911", sans-serif;
```

以下的声明是**无效的**：

```css example-bad
font-family:
  Goudy Bookletter 1911,
  sans-serif;
font-family: Red/Black, sans-serif;
font-family:
  "Lucida" Grande,
  sans-serif;
font-family: Ahem!, sans-serif;
font-family:
  test @foo,
  sans-serif;
font-family: #POUND, sans-serif;
font-family:
  Hawaii 5-0,
  sans-serif;
```

### 形式语法

{{CSSSyntax}}

## 示例

### 一些通用字体

```css
.serif {
  font-family: Times, "Times New Roman", Georgia, serif;
}

.sansserif {
  font-family: Verdana, Arial, Helvetica, sans-serif;
}

.monospace {
  font-family: "Lucida Console", Courier, monospace;
}

.cursive {
  font-family: cursive;
}

.fantasy {
  font-family: fantasy;
}

.emoji {
  font-family: emoji;
}

.math {
  font-family: math;
}

.fangsong {
  font-family: fangsong;
}
```

```html hidden
<div class="serif">This is an example of a serif font.</div>

<div class="sansserif">This is an example of a sans-serif font.</div>

<div class="monospace">This is an example of a monospace font.</div>

<div class="cursive">This is an example of a cursive font.</div>

<div class="fantasy">This is an example of a fantasy font.</div>

<div class="math">This is an example of a math font.</div>

<div class="emoji">This is an example of an emoji font.</div>

<div class="fangsong">This is an example of a fangsong font.</div>
```

{{EmbedLiveSample("一些通用字体", 600, 120)}}

## 规范

{{Specifications}}

{{CSSInfo}}

## 浏览器兼容性

{{Compat}}
