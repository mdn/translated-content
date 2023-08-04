---
title: CSS 值与单位
slug: Web/CSS/CSS_Values_and_Units
---

{{CSSRef}}

所有的 CSS 声明都包括一个“属性/值”对。由于属性不同，对应的值可能是单个整数或关键字，也可能是一串包含或不包含单位的关键字和值的集合。CSS 属性接受一组共同的数据类型（属性的值和对应的单位）。下面是大多数这些数据类型的概览。想要获知每一种数据类型的更详细信息，请分别查看它们的链接。

## 文本数据类型

- {{cssxref("&lt;custom-ident&gt;")}}
- 作为 `<ident>` 预定义的关键字
- {{cssxref("&lt;string&gt;")}}
- {{cssxref("&lt;url&gt;")}}

文本数据类型要么是 `<string>`，要么是一系列字符的合集，或者是 `<ident>` —— 一个实质上是不带引号的字符串的"CSS 标识符"。一个 `<string>` 必须被单引号或者双引号所包围。CSS 标识符，在标准中所列出的 `<ident>` 或者 `<custom-ident>` 则必须不带引号。

在 CSS 标准中，属性的值可以由 Web 开发者指定，例如关键帧动画（keyframe animations），字体的名称（font-family names），或者是被列为 {{cssxref("&lt;custom-ident&gt;")}} 和 / 或 {{cssxref("&lt;string&gt;")}} 的栅格区域（grid-areas）。

当允许使用带引号或者不带引号的两种用户定义的文本属性值时，标准列出为 `<custom-ident> | <string>`，也就是说引号是可选的。例如在指定动画的名称时：

```css
@keyframe validIdent {
  /* keyframes go here */
}
@keyframe 'validString' {
  /* keyframes go here */
}
```

有些文本属性值不允许被引号包围。例如， {{cssxref("grid-area")}} 属性对应的值可以是`<custom-ident>`，所以假设有一个栅格区域名为 `content` ，我们必须不带引号地使用：

```css
.item {
  grid-area: content;
}
```

相比之下，另一种数据类型是 {{cssxref("&lt;string&gt;")}}，例如 {{cssxref("content")}} 属性的值则必须被引号包围：

```css
.item::after {
  content: "This is my content.";
}
```

大多数时候你可以随心所欲地创建任何名称作为标识符，甚至包括使用 emoji 表情。然而标识符不能是 `none`，`unset`，`initial`，或者 `inherit`，以两条短横线开头。并且，你也不可以使用任何已经预定义的 CSS 关键字。查看 {{cssxref("&lt;custom-ident&gt;")}} 和 {{cssxref("&lt;string&gt;")}} 页面了解更多信息。

### 预定义的关键值

预定义的关键值是由 CSS 标准为属性定义的文本值。这些关键字也属于 CSS 标识符，因此在使用时无需用引号包围。

当在 CSS 标准或者 MDN 属性页面中查看某个 CSS 属性时，该属性所有允许的取值都会以下面表格的形式列出。下面的值是 {{cssxref("float")}} 属性可以取的预定义值：

```plain
left | right | none | inline-start | inline-end
```

这些值在使用时不需要引号：

```css
.box {
  float: left;
}
```

### CSS 全局范围内的值

预定义的关键值往往是针对某一个属性的。作为补充，所有 CSS 属性都可以接受 CSS 全局范围内的值：{{cssxref("initial")}}，{{cssxref("inherit")}} 和 {{cssxref("unset")}}。这些全局范围的值往往指定了一种默认的行为。

`initial`指定了当前值作为属性的初始值。`inherit`关键字则指定当前元素的属性值基于父元素进行计算，即继承。

`unset`关键字的作用是`inherit`或`initial`中的一者，取决于某个 CSS 属性是否可以自父元素继承。

{{cssxref("revert")}} 在 Cascade Level 4 标准中被引入，但这一属性值还没有较好的浏览器支持现状。

### URLs

{{cssxref("&lt;url&gt;")}} 类型使用一个函数符号，接收一个`<string>`类型的 URL。这个 URL 可以是绝对地址或者相对地址。例如，如果你想要设置一张背景图片，那么你可以采用如下两种做法：

```css
.box {
  background-image: url("images/my-background.png");
}

.box {
  background-image: url("https://www.exammple.com/images/my-background.png");
}
```

`url()`的参数可以也可以不使用引号。如果使用引号包围了 URL，那么它会被解析为一个`<url-token>`，包含对某些字符的额外转义。查看 {{cssxref("&lt;url&gt;")}} 以获取更多信息。

## 数值数据类型

- {{cssxref("&lt;integer&gt;")}}
- {{cssxref("&lt;number&gt;")}}
- {{cssxref("&lt;dimension&gt;")}}
- {{cssxref("&lt;percentage&gt;")}}

### 整数

一个整数包含 `0` 到 `9`的一个或多个十进制数字，例如 `1024` 或 `-55`。一个整数可能额外包含 `+` 或 `-` 前缀，在正负号和数值之间没有任何空格。

### 数值

{{cssxref("&lt;number&gt;")}} 表示一个真正的数，有可能又或者没有小数点和小数部分。例如 `0.255`，`128` 或 `-1.2`。数值也可能包含前缀 `+` 或 `-` 标识正负。

### 尺寸

{{cssxref("&lt;dimension&gt;")}} 是一个包含单位的 `<number>`，例如 `45deg`，`100ms`，或者 `10px`。单位是大小写敏感的，且数值和单位之间不允许有任何的空格或其他字符。例如 `1 cm` 不是一个合法的值。

CSS 使用尺寸来指定：

- {{cssxref("&lt;length&gt;")}} （距离单位）
- {{cssxref("&lt;angle&gt;")}}
- {{cssxref("&lt;time&gt;")}}
- {{cssxref("&lt;frequency&gt;")}}
- {{cssxref("&lt;resolution&gt;")}}

这些都将在下面的部分里一一介绍。

#### 距离单位

一个距离单位，或这也称为长度（length），允许作为属性的值。它被描述为 {{cssxref("&lt;length&gt;")}} 类型。CSS 中有两种长度：相对和绝对。

相对长度单位基于其他元素的长度。例如 `em` 基于该元素的字号大小，`vh` 则与设备视口的高度有关。

| 单位   | 基于...                                                                                                                               |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| `em`   | 元素的字号                                                                                                                            |
| `ex`   | 字体的 X 字高（x-height）                                                                                                             |
| `cap`  | 字体中大写字母的标称高度                                                                                                              |
| `ch`   | Average character advance of a narrow glyph in the element’s font, as represented by the “0” (ZERO, U+0030) glyph.                    |
| `ic`   | Average character advance of a full width glyph in the element’s font, as represented by the“水” (CJK water ideograph, U+6C34) glyph. |
| `rem`  | 根元素的字体大小。                                                                                                                    |
| `lh`   | 元素的行高。                                                                                                                          |
| `rlh`  | 根元素的行高。                                                                                                                        |
| `vw`   | 1% of viewport's width.                                                                                                               |
| `vh`   | 1% of viewport's height.                                                                                                              |
| `vi`   | 1% of viewport's size in the root element's inline axis.                                                                              |
| `vb`   | 1% of viewport's size in the root element's block axis.                                                                               |
| `vmin` | 1% of viewport's smaller dimension.                                                                                                   |
| `vmax` | 1% of viewport's larger dimension.                                                                                                    |

Absolute length units are fixed to a physical length: either an inch or a centimeter. Many of these units are therefore more useful when the output is a fixed size media, such as print. For example, `mm` is a physical millimeter, 1/10th of a centimeter.

| Unit | Name                | Equivalent to       |
| ---- | ------------------- | ------------------- |
| `cm` | Centimeters         | 1cm = 96px/2.54     |
| `mm` | Millimeters         | 1mm = 1/10th of 1cm |
| `Q`  | Quarter-millimeters | 1Q = 1/40th of 1cm  |
| `in` | Inches              | 1in = 2.54cm = 96px |
| `pc` | Picas               | 1pc = 1/16th of 1in |
| `pt` | Points              | 1pt = 1/72th of 1in |
| `px` | Pixels              | 1px = 1/96th of 1in |

When including a length value, if the length is `0`, the unit identifier is not required. Otherwise, the unit identifier is required, is case insensitive, and must come immediately after the numeric part of the value, with no space in-between.

#### Angle units

Angle values are represented by the type {{cssxref("&lt;angle&gt;")}} and accept the following values:

| Unit   | Name     | Description                              |
| ------ | -------- | ---------------------------------------- |
| `deg`  | Degrees  | There are 360 degrees in a full circle.  |
| `grad` | Gradians | There are 400 gradians in a full circle. |
| `rad`  | Radians  | There are 2π radians in a full circle.   |
| `turn` | Turns    | There is 1 turn in a full circle.        |

#### Time units

Time values are represented by the type {{cssxref("&lt;time&gt;")}}. When including a time value, the unit identifier — the `s` or `ms` — is required. It accepts the following values.

| Unit | Name         | Description                               |
| ---- | ------------ | ----------------------------------------- |
| `s`  | Seconds      |                                           |
| `ms` | Milliseconds | There are 1,000 milliseconds in a second. |

#### Frequency units

Frequency values are represented by the type {{cssxref("&lt;frequency&gt;")}}. It accepts the following values.

| Unit  | Name      | Description                                      |
| ----- | --------- | ------------------------------------------------ |
| `Hz`  | Hertz     | Represents the number of occurrences per second. |
| `kHz` | KiloHertz | A kiloHertz is 1000 Hertz.                       |

`1Hz`, which can also be written as `1hz` or `1HZ`, is one cycle per second.

#### Resolution unit

Resolution units are represented by the type {{cssxref("&lt;resolution&gt;")}}. They represent the size of a single dot in a graphical representation, such as a screen, by indicating how many of these dots fit in a CSS inch, centimeter, or pixel. It accepts the following values:

| Unit        | Description          |
| ----------- | -------------------- |
| `dpi`       | Dots per inch.       |
| `dpcm`      | Dots per centimetre. |
| `dppx`, `x` | Dots per px unit.    |

### Percentages

A {{cssxref("&lt;percentage&gt;")}} is a type that represents a fraction of some other value.

Percentage values are always relative to another quantity, for example a length. Each property that allows percentages also defines the quantity to which the percentage refers. This quantity can be a value of another property of the same element, the value of a property of an ancestor element, a measurement of a containing block, or something else.

As an example, if you specify the {{cssxref("width")}} of a box as a percentage, it refers to the percentage of the box's parent's computed width:

```css
.box {
  width: 50%;
}
```

### Mixing percentages and dimensions

Some properties accept a dimension that could be either one of two types, for example a `<length>` **or** a `<percentage>`. In this case the allowed value is detailed in the specification as a combination unit, e.g. {{cssxref("&lt;length-percentage&gt;")}}. Other possible combinations are as follows:

- {{cssxref("&lt;frequency-percentage&gt;")}}
- {{cssxref("&lt;angle-percentage&gt;")}}
- {{cssxref("&lt;time-percentage&gt;")}}

### Special data types (defined in other specs)

- {{cssxref("&lt;color&gt;")}}
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("&lt;position&gt;")}}

#### Color

The {{cssxref("&lt;color&gt;")}} value specifies the color of an element feature (e.g. it's background color), and is defined in the [CSS Color Module](https://drafts.csswg.org/css-color-3/).

#### Image

The {{cssxref("&lt;image&gt;")}} value specifies all the different types of image that can be used in CSS, and is defined in the [CSS Image Values and Replaced Content Module](https://www.w3.org/TR/css-images-4/).

#### Position

The {{cssxref("&lt;position&gt;")}} type defines 2D positioning of an object inside a positioning area, for example a background image inside a container. This type is interpreted as a {{cssxref("background-position")}} and therefore specified in the [CSS Backgrounds and Borders specification](https://www.w3.org/TR/css-backgrounds-3/).

### Functional notation

- {{cssxref("calc()")}}
- {{cssxref("min", "min()")}}
- {{cssxref("max", "max()")}}
- {{cssxref("clamp", "clamp()")}}
- {{cssxref("toggle", "toggle()")}}
- {{cssxref("attr", "attr()")}}

Functional notation is a type of value that can represent more complex types or invoke special processing by CSS. The syntax starts with the name of the function immediately followed by a left parenthesis `(` followed by the argument(s) to the notation followed by a right parenthesis `)`. Functions can take multiple arguments, which are formatted similarly to a CSS property value.

White space is allowed, but optional inside the parentheses. (But see notes regarding whitespace within pages for `min()`, `max()` and `clamp()` functions.)

Some legacy functional notations such as `rgba()` use commas, but generally commas are only used to separate items in a list. If a comma is used to separate arguments, white space is optional before and after the comma.

## Specifications

{{Specifications}}

## See also

- [CSS Basic Data Types](/zh-CN/docs/Web/CSS/CSS_Types)
- [Introduction to CSS: Values and Units](/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Values_and_units)
