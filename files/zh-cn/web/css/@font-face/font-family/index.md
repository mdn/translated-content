---
title: font-family
slug: Web/CSS/@font-face/font-family
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`font-family`** [CSS](/zh-CN/docs/Web/CSS) 属性为选定元素指定了一个或多个字体族名称和/或通用族名称的优先级列表。

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

各值之间用逗号隔开，表示它们是备选值。浏览器将选择列表中第一种已安装的字体，或使用 {{CSSxRef("@font-face")}} At 规则可以下载的字体。

使用简写属性 {{CSSxRef("font")}} 来一次性设置 `font-size` 和其他与字体相关的属性通常很方便。

应始终在 `font-family` 列表中包含至少一个通用字体族名，因为无法保证任何指定字体都可用。这可以让浏览器在必要时选择可接受的备用字体。

`font-family` 属性指定了一个字体列表，从最高优先级到最低优先级。字体选择*不会*停留在用户系统上的列表中的第一种字体。相反，字体选择是按一个字符一个字符地进行的，因此，如果一个可用字体没有所需字符的字形，就会尝试后面的字体。当一种字体只有某些[样式](/zh-CN/docs/Web/CSS/font-style)、[变体](/zh-CN/docs/Web/CSS/font-variant)或[尺寸](/zh-CN/docs/Web/CSS/font-size)时，这些属性也可能会影响选择哪个字体系列。

## 语法

```css
/* 一个字体族名和一个通用字体族名 */
font-family: "Gill Sans Extrabold", sans-serif;
font-family: "Goudy Bookletter 1911", sans-serif;

/* 仅通用字体族名 */
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

`font-family` 属性列出一个或多个字体系列，以逗号分隔。每个字体族可以指定为一个 `<family-name>` 或 `<generic-name>` 值。

下面的示例列出了两个字体系列，第一个是 `<family-name>`，第二个是 `<generic-name>`：

```css
font-family: "Gill Sans Extrabold", sans-serif;
```

### 值

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
      - : 字形的笔画末尾是普通的。

        例如：Open Sans、Fira Sans、Lucida Sans、Lucida Sans Unicode、Trebuchet MS、Liberation Sans、Nimbus Sans L、sans-serif。

    - `monospace`
      - : 所有字形的宽度均相同。

        例如：Fira Mono、DejaVu Sans Mono、Menlo、Consolas、Liberation Mono、Monaco、Lucida Console、monospace。

    - `cursive`
      - : 草书字体中的字形通常具有连接笔画或其他草书特征，超出了斜体字体的特征。字形部分或完全相连，看起来更像是手写钢笔或毛笔字，而不是印刷字母。

        例如：Brush Script MT、Brush Script Std、Lucida Calligraphy、Lucida Handwriting、Apple Chancery、cursive。

    - `fantasy`
      - : 幻想字体主要是装饰性字体，其中包含有趣的字符表现形式。

        例如：Papyrus、Herculanum、Party LET、Curlz MT、Harrington、fantasy。

    - `system-ui`
      - : 字形取自特定平台上的默认用户界面字体。由于世界各地的排版传统差异很大，因此本通用字体适用于无法清晰映射到其他通用字体的字体。
    - `ui-serif`
      - : 默认的用户界面衬线字体。
    - `ui-sans-serif`
      - : 默认的用户界面无衬线字体。
    - `ui-monospace`
      - : 默认的用户界面等宽字体。
    - `ui-rounded`
      - : 具有圆角特征的默认用户界面字体。
    - `math`
      - : 这是出于对数学表达式的特殊关注：上标和下标、跨行的括号、嵌套表达式以及具有不同含义的双击字形。
    - `emoji`
      - : 专门用于呈现表情符号的字体。
    - `fangsong`
      - : 介于衬线体宋体和草书楷体之间的一种特殊汉字书体。这种书体常用于政府文件。

## 形式定义

{{cssinfo}}

### 形式语法

{{csssyntax}}

## 示例

### 一些常用的字体族

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
<div class="serif">此示例使用了衬线（serif）字体。</div>

<div class="sansserif">此示例使用了无衬线（sans-serif）字体。</div>

<div class="monospace">此示例使用了等宽（monospace）字体。</div>

<div class="cursive">此示例使用了草书（cursive）字体。</div>

<div class="fantasy">此示例使用了幻想（fantasy）字体。</div>

<div class="math">此示例使用了数学（math）字体。</div>

<div class="emoji">此示例使用了绘文字（emoji）字体。</div>

<div class="fangsong">此示例使用了仿宋（fangsong）字体。</div>
```

{{EmbedLiveSample("一些常用的字体族", 600, 220)}}

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
