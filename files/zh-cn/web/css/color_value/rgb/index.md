---
title: rgb()
slug: Web/CSS/color_value/rgb
---

{{CSSRef}}

**`rgb()`** 函数标记根据颜色的红色、绿色和蓝色成分来表达颜色。可选的 alpha 成分代表了颜色的透明度。

> **备注：** 旧版的 `rgba()` 语法是 `rgb()` 的别称，接收相同的参数，行为也是相同的。

{{EmbedInteractiveExample("pages/css/function-rgb.html")}}

## 语法

```css
/* 绝对值 */
rgb(255 255 255)
rgb(255 255 255 / 50%)

/* 相对值 */
rgb(from green r g b / 0.5)
rgb(from #0000FF calc(r + 40) calc(g + 40) b)
rgb(from hwb(120deg 10% 20%) r g calc(b + 200))
```

> **备注：** `rgb()` / `rgba()` 都可使用旧版的语法编写，即所有的值都是用逗号分隔的，如 `rgb(255, 0, 0)`。在逗号分隔的传统语法中，混合数字和百分比值类型是无效的（即 `R`、`G` 和 `B` 值必须是全部数字或全部百分比），也不允许使用 `none` 值。
### 值

下面是对`绝对值颜色`和[相对值颜色](/zh-CN/docs/Web/CSS/CSS_colors/Relative_colors)的描述

#### 绝对值语法

```text
rgb(R G B[ / A])
```

参数说明：

- `R`、`G`、`B`
  - : 每个都是从 `0` 到 `255` 之间的 {{CSSXref("&lt;number&gt;")}} 值，或从 `0%` 到 `100%` 之间的 {{CSSXref("&lt;percentage&gt;")}} 值，或为关键字 `none`（与 `0%` 等价），分别代表红色、绿色和蓝色的通道。
- `A` {{optional_inline}}
  - : {{CSSXref("&lt;alpha-value&gt;")}} 表示输出颜色的 alpha 通道值，其中数字 `0` 对应于 `0%` （完全透明），`1` 对应 `100%`（完全不透明），关键字 `none` 用于显式地指定无 alpha 通道。未明确指定 `A` 通道值，则会默认为原始颜色的 alpha 通道值，使用时需在前面添加（`/`），如 `rgb(0 0 0 / 0.5)`。

> **备注：** 参见[缺失颜色成分](/zh-CN/docs/Web/CSS/color_value#缺失颜色成分)以了解 `none` 的效果。

#### 相对值语法

```text
rgb(from <color> R G B[ / A])
```

参数说明：

- `from <color>`
  - : 当使用相对颜色时，需用到关键字 `from`，其后跟着一个表示 {{cssxref("&lt;color&gt;")}} 的**原始颜色**：这是相对颜色所基于的原始颜色。原始颜色可以是任意有效的 {{cssxref("&lt;color&gt;")}} 语法，包括其他相对颜色。
- `R`、`G`、`B`
  - : 每个都是从 `0` 到 `255` 之间的 {{CSSXref("&lt;number&gt;")}} 值，或从 `0%` 到 `100%` 之间的 {{CSSXref("&lt;percentage&gt;")}} 值，或为关键字 `none`（与 `0%` 等价），分别代表输出颜色中红色、绿色和蓝色的通道值。
- `A` {{optional_inline}}
  - : {{CSSXref("&lt;alpha-value&gt;")}} 表示输出颜色的 alpha 通道值，其中数字 `0` 对应于 `0%` （完全透明），`1` 对应 `100%` （完全不透明），关键字 `none` 用于显式地指定无 alpha 通道。未明确指定 `A` 通道值，则会默认为原始颜色的 alpha 通道值，使用时需在前面添加（`/`），如 `rgb(from rgb(0 0 0) r g b / 0.5)`。

> **备注：** 别名 `rgba()` 也可用于输出指定原始颜色的相对颜色，当使用 `rgba()` 输出相对颜色时，必须使用无逗号的现代语法，如 `rgba(from #000000 r g b / 0.5)` 。

#### 相对颜色输出通道的定义

在 `rgb()` 函数中使用相对颜色语法时，浏览器会将原始颜色转换为等价的 RGB 颜色。颜色定义为三个不同的颜色通道值——r（红色）、g（绿色）和 b（蓝色）——加上 alpha 通道值。这些通道值在定义输出颜色通道值时要使用的函数内部可用：

- `r`、`g` 和 `b` 值均被解析为 `<number>` ，取值范围在 `0` 到 `255` 之间（含 `0` 和 `255` ）。
- `alpha` 通道会被解析为 `<number>` ，取值范围在 `0` 到 `1` 之间（含 `0` 和 `1` ）。

定义相对颜色时，输出颜色的不同通道可以用几种不同的方式表示。

第一个例子将输出与原始颜色相同的颜色。我们使用 `hsl(0 100% 50%)` （与 `rgb(255 0 0)` 等价）作为原始颜色，以下函数将把原始颜色的 `r`、`g` 和 `b` 通道值（`255` `0` 和 `0`）作为输出通道值。

> **备注：** 参见 [hsl()](/zh-CN/docs/Web/CSS/color_value/hsl) 函数以了解其定义。

```css
rgb(from hsl(0 100% 50%) r g b)
/* 等价于 */
rgb(from rgb(255 0 0) r g b)
rgb(255 0 0)
```

第二个例子我们将输出固定颜色通道值。

```css
rgb(from hsl(0 100% 50%) 132 132 132)
/* 等价于 */
rgb(132 132 132)
```

第三个例子我们将使用 {{cssxref("calc")}} 函数去修改 `r`、`g`、`b` 和 `a` 的通道值。

```css
rgb(from hsl(0 100% 50%) calc(r - 55) calc(g + 25) calc(b + 175) / calc(alpha - 0.6))
/* 等价于 */
rgb(200 25 175 / 0.4)
```

> **Note:** 因为原始颜色通道值会被解析为 `<number>` 值，所以在使用它们进行计算时，即使通道能够接受 `<percenter>` 、 `<angle>` 或其他值类型，我们也必须使用 `<number>` 进行运算。

### 形式语法

{{csssyntax}}

## 示例

### 基本语法

下面我们会将三个不同背景颜色的 {{htmlelement("div")}} 元素放在条纹背景上。

#### HTML

```html
<div>
  <div id="integer"></div>
  <div id="percent"></div>
  <div id="alpha"></div>
</div>
```

#### CSS

在本例中，三个 {{htmlelement("div")}} 元素的背景色都会使用 `rgb()` 函数进行设置，同时为了体现第三个元素的透明通道，我们在 {{htmlelement("body")}} 上使用了 {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}} 函数设置斜条纹背景。

```css hidden
div {
  display: flex;
  gap: 20px;
  height: 50px;
  flex: 1;
}
body {
  height: calc(100vh - 20px);
}
```

```css
body {
  background: repeating-linear-gradient(-45deg, #eee 0 2px, #fff 2px 6px);
  padding: 10px;
}

#integer {
  background-color: rgb(189 85 218);
}

#percent {
  background-color: rgb(74% 33% 85%);
}

#alpha {
  background-color: rgb(189 85 218 / 0.25);
}
```

#### Result

{{ EmbedLiveSample("基本语法", "100%", "75") }}

### 如何使用相对值

```text
rgb(from <color> R G B[ / A])
```

在本例中，三个 {{htmlelement("div")}} 元素的背景会被设置成不同颜色： `#one` 被赋予我们设定的原始颜色，`#two` 和 `#three` 都会通过 {{cssxref("calc")}} 函数进行计算，得到想要的红色和蓝色通道值，同时我们保持绿色通道值不变，其中 `#three` 的修改幅度更大。

#### HTML

```html
<div id="container">
  <div class="item" id="one"></div>
  <div class="item" id="two"></div>
  <div class="item" id="three"></div>
</div>
```

#### CSS

下面例子中的 `--base-color` 为[自定义属性：CSS 变量](/zh-CN/docs/Web/CSS/--*)

```css hidden
#container {
  display: flex;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
}

.item {
  flex: 1;
  margin: 20px;
}
```

```css
:root {
  --base-color: orange;
  /* 等同于 --base-color: rgb(255 165 0) */
}

#one {
  background-color: var(--base-color);
}

#two {
  background-color: rgb(from var(--base-color) calc(r - 76.5) g calc(b + 76.5));
  /* 红蓝通道增加 30% 的值，即 255*30% = 76.5，上列语句等价于 background-color: rgb(178.5 165 76.5)  */
}

#three {
  background-color: rgb(from var(--base-color) calc(r - 153) g calc(b + 153));
  /* 红蓝通道增加 60% 的值，即 255*60% = 153，上列语句等价于 background-color: rgb(102 165 153) */
}
```

#### Result

{{ EmbedLiveSample("如何使用相对值", "100%", "200") }}

### 旧版语法：逗号分隔值

由于历史原因，`rgb()` 函数接受所有值用逗号分隔的形式。

#### HTML

```html
<div class="space-separated"></div>
<div class="comma-separated"></div>
```

#### CSS

```css
div {
  width: 100px;
  height: 50px;
  margin: 1rem;
}

div.space-separated {
  background-color: rgb(255 0 0 / 0.5);
}

div.comma-separated {
  background-color: rgb(255, 0, 0, 0.5);
}
```

#### 结果

{{EmbedLiveSample('旧版语法：逗号分隔值', '100%', '150px')}}

### 旧版语法：rgba()

旧版的 `rgba()` 语法是 `rgb()` 的别称。

#### HTML

```html
<div class="rgb"></div>
<div class="rgba"></div>
```

#### CSS

```css
div {
  width: 100px;
  height: 50px;
  margin: 1rem;
}

div.rgb {
  background-color: rgb(255 0 0 / 0.5);
}

div.rgba {
  background-color: rgba(255 0 0 / 0.5);
}
```

#### 结果

{{EmbedLiveSample('旧版语法：rgba()', '100%', '150px')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSXref("&lt;color&gt;")}} 数据类型，以了解所有颜色标记的列表
