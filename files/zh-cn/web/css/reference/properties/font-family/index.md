---
title: font-family
slug: Web/CSS/Reference/Properties/font-family
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`font-family`** [CSS](/zh-CN/docs/Web/CSS) 属性允许你通过给定一个有先后顺序的，由字体名或者字体族名组成的列表来为选定的元素设置字体。

{{InteractiveExample("CSS Demo: font-family")}}

```css interactive-example-choice
font-family: Georgia, serif;
```

```css interactive-example-choice
font-family: "Gill Sans", sans-serif;
```

```css interactive-example-choice
font-family: sans-serif;
```

```css interactive-example-choice
font-family: serif;
```

```css interactive-example-choice
font-family: cursive;
```

```css interactive-example-choice
font-family: system-ui;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    London. Michaelmas term lately over, and the Lord Chancellor sitting in
    Lincoln's Inn Hall. Implacable November weather. As much mud in the streets
    as if the waters had but newly retired from the face of the earth, and it
    would not be wonderful to meet a Megalosaurus, forty feet long or so,
    waddling like an elephantine lizard up Holborn Hill.
  </p>
</section>
```

```css interactive-example
section {
  font-size: 1.2em;
}
```

属性值用逗号隔开，表示它们是备选值。浏览器会选择列表中第一个该计算机上有安装的字体，或者是通过 {{cssxref("@font-face")}} At 规则指定的可以下载的字体。

使用简写属性 {{cssxref("font")}} 来设置 `font-size` 和其他与字体相关的属性通常很方便。

应当至少在使用的 `font-family` 列表中添加一个通用的字体族名，，因为无法保证任何指定字体都可用。这可以让浏览器在必要时选择可接受的备用字体。

`font-family` 属性指定的是一个优先级从高到低的字体列表。字体的选定*不是*在发现用户计算机上安装的列表中的第一个字体时停止。相反，对字体的选择是*逐字*进行的。也就是说即使某个字符周围都在某个字体中可以显示，但该字符在当前的字体文件中没有适合的图形，那么会继续尝试列表中靠后的字体。当一个字体只在某些特定的[样式](/zh-CN/docs/Web/CSS/Reference/Properties/font-style)、[变体](/zh-CN/docs/Web/CSS/Reference/Properties/font-variant)或[大小](/zh-CN/docs/Web/CSS/Reference/Properties/font-size)下有效时，这些属性的值也可能对字体族的选择造成影响。

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

属性 `font-family` 列举一个或多个由逗号隔开的字体族。每个字体族由 `<family-name>` 或 `<generic-name>` 值指定。

下面的例子列举了两个字体族，其中第一个是 `<family-name>`，第二个是 `<generic-name>`：

```css
font-family: "Gill Sans Extrabold", sans-serif;
```

### 取值

- `<family-name>`
  - : 字体族名称。该名称必须是单个 {{cssxref("string")}} 值或以空格分隔的 {{cssxref("custom-ident")}} 值序列。字符串值必须加引号，但可以包含任何 Unicode 字符。自定义标识符不加引号，但某些字符必须转义。

    用引号包裹包含空白、数字或标点符号（连字符除外）的字体族名称是一种良好做法。

    参见[有效的字体族名称](#有效的字体族名称)。

- `<generic-name>`
  - : 通用字体族是一种后备机制，是在没有指定字体可用时保留样式表作者部分意图的一种方法。通用字体族名称是关键字，不得加引号。通用字体族应是字体族名称列表中的最后一项。定义了以下关键字：
    - `serif`
      - : 字形有修饰笔画、喇叭形或锥形末端，或有实际的锯齿末端。

        例如：Lucida Bright、Lucida Fax、Palatino、Palatino Linotype、Palladio、URW Palladio、serif。

    - `sans-serif`
      - : 字形的笔画末尾是平滑的。

        例如：Open Sans、Fira Sans、Lucida Sans、Lucida Sans Unicode、Trebuchet MS、Liberation Sans、Nimbus Sans L、sans-serif。

    - `monospace`
      - : 所有字形的宽度均相同。

        例如：Fira Mono、DejaVu Sans Mono、Menlo、Consolas、Liberation Mono、Monaco、Lucida Console、monospace。

    - `cursive`
      - : 草书字体中的字形通常具有连接笔画或其他草书特征，超出了斜体字体的特征。字形部分或完全相连，看起来更像是手写钢笔或毛笔字，而不是印刷字母。

        例如：Brush Script MT、Brush Script Std、Lucida Calligraphy、Lucida Handwriting、Apple Chancery、cursive。

    - `fantasy`
      - : Fantasy 字体主要是装饰性字体，其中包含有趣的字符表现形式。

        例如：Papyrus、Herculanum、Party LET、Curlz MT、Harrington、fantasy。

    - `system-ui`
      - : 从浏览器所处平台处获取的默认用户界面字体。由于世界各地的排版习惯之间有很大的差异，因此为那些不适合其他通用字体的字体提供了这个通用字体。
    - `ui-serif`
      - : 默认用户界面的衬线字体。
    - `ui-sans-serif`
      - : 默认用户界面的无衬线字体。
    - `ui-monospace`
      - : 默认用户界面的等宽字体。
    - `ui-rounded`
      - : 默认用户界面的圆体。
    - `math`
      - : 针对显示数学相关字符的特殊样式问题而设计的字体：支持上标和下标、跨行括号、嵌套表达式和具有不同含义的双线体字形。
    - `emoji`
      - : 专门用于呈现 Emoji 表情符号的字体。
    - `fangsong`
      - : 一种汉字字体，介于衬线体宋体和草书楷体之间。这种字体常用于某些政府文件。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 一些通用字体族

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

{{EmbedLiveSample("一些通用字体族", 600, 120)}}

### 有效的字体族名称

以下声明是有效的：

```css example-good
font-family: "Goudy Bookletter 1911", sans-serif;
```

以下声明是无效的：

```css-nolint example-bad
font-family: Goudy Bookletter 1911, sans-serif;
font-family: Red/Black, sans-serif;
font-family: "Lucida" Grande, sans-serif;
font-family: Ahem!, sans-serif;
font-family: test@foo, sans-serif;
font-family: #POUND, sans-serif;
font-family: Hawaii 5-0, sans-serif;
```

以下示例是技术上有效的，但不推荐这样做：

```css
font-family:
  Gill Sans Extrabold,
  sans-serif;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("font-style")}}
- {{cssxref("font-weight")}}
- SVG {{SVGAttr("font-family")}} 属性
- [学习：基本的文本和字体样式](/zh-CN/docs/Learn_web_development/Core/Text_styling/Fundamentals)
