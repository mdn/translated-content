---
title: rgb()
slug: Web/CSS/Reference/Values/color_value/rgb
l10n:
  sourceCommit: 5f13cbe7517ce96deeb521d4c8e6923266a22913
---

**`rgb()`** 函数标记根据 {{glossary("RGB", "sRGB")}} {{glossary("color space", "色彩空间")}}中颜色的红色、绿色和蓝色分量来表达颜色。可选的 alpha 分量代表了颜色的透明度。

{{InteractiveExample("CSS Demo: rgb()")}}

```css interactive-example-choice
background: rgb(31 120 50);
```

```css interactive-example-choice
background: rgb(30% 20% 50%);
```

```css interactive-example-choice
background: rgb(255 122 127 / 80%);
```

```css interactive-example-choice
background: rgb(255 122 127 / 0.2);
```

```html interactive-example
<section id="default-example">
  <div class="transition-all" id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  min-width: 100%;
  min-height: 100%;
  padding: 10%;
}
```

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

`rgba()` 函数也可以用来表达 sRGB 颜色。这是 `rgb()` 的别名，接受相同的参数。

> [!NOTE]
> `rgb()` / `rgba()` 都可使用旧版的语法编写，即所有的值都是用逗号分隔的，如 `rgb(255, 0, 0)`。在逗号分隔的旧版语法中，混合数字和百分比值类型是无效的（即 `R`、`G` 和 `B` 值必须是全部数字或全部百分比），也不允许使用 `none` 值。

### 值

下面是对绝对颜色和[相对颜色](/zh-CN/docs/Web/CSS/Guides/Colors/Using_relative_colors)的描述。

#### 绝对值语法

```plain
rgb(R G B[ / A])
```

参数如下：

- `R`、`G`、`B`
  - : 每个都是从 `0` 到 `255` 之间的 {{CSSXref("&lt;number&gt;")}} 值，或从 `0%` 到 `100%` 之间的 {{CSSXref("&lt;percentage&gt;")}} 值，或为关键字 `none`（与 `0%` 等价），分别代表红色、绿色和蓝色的通道。
- `A` {{optional_inline}}
  - : {{CSSXref("&lt;alpha-value&gt;")}} 表示输出颜色的 alpha 通道值，其中数字 `0` 对应于 `0%`（完全透明），`1` 对应 `100%`（完全不透明），关键字 `none` 用于显式地指定无 alpha 通道。未明确指定 `A` 通道值，则会默认为 100%。若包含此值，需在值的前面添加斜杠（`/`）。

> [!NOTE]
> 参见[缺失颜色分量](/zh-CN/docs/Web/CSS/Reference/Values/color_value#缺失颜色分量)以了解 `none` 的效果。

#### 相对值语法

```plain
rgb(from <color> R G B[ / A])
```

参数如下：

- `from <color>`
  - : 当使用相对颜色时，需用到关键字 `from`，其后跟着一个表示**原始颜色**的 {{cssxref("&lt;color&gt;")}}：这是相对颜色所基于的原始颜色。原始颜色可以是*任意*有效的 {{cssxref("&lt;color&gt;")}} 语法，包括其他相对颜色。
- `R`、`G`、`B`
  - : 每个都是从 `0` 到 `255` 之间的 {{CSSXref("&lt;number&gt;")}} 值，或从 `0%` 到 `100%` 之间的 {{CSSXref("&lt;percentage&gt;")}} 值，或为关键字 `none`（与 `0%` 等价），分别代表输出颜色中红色、绿色和蓝色的通道值。
- `A` {{optional_inline}}
  - : {{CSSXref("&lt;alpha-value&gt;")}} 表示输出颜色的 alpha 通道值，其中数字 `0` 对应于 `0%`（完全透明），`1` 对应 `100%`（完全不透明），关键字 `none` 用于显式地指定无 alpha 通道。未明确指定 `A` 通道值，则会默认为原始颜色的 alpha 通道值。若包含此值，需在值的前面添加斜杠（`/`）。

> [!NOTE]
> 别名 `rgba()` 也可用于输出指定原始颜色的相对颜色，当使用 `rgba()` 输出相对颜色时，必须使用无逗号的现代语法。

> [!NOTE]
> 要完全启用可见颜色的全光谱表示，相对 `rgb()` 颜色函数的输出会被序列化为 `color(srgb)`。这意味着通过 {{DOMxRef("HTMLElement.style")}} 属性或 {{DOMxRef("CSSStyleDeclaration.getPropertyValue()")}} 方法查询输出颜色值时，会以 [`color(srgb ...)`](/zh-CN/docs/Web/CSS/Reference/Values/color_value/color) 值返回输出颜色。

#### 定义相对颜色输出通道分量

在 `rgb()` 函数中使用相对颜色语法时，浏览器会将原始颜色转换为等价的 RGB 颜色（如果尚未指定）。颜色定义为三个不同的颜色通道值——`r`（红色）、`g`（绿色）和 `b`（蓝色）——加上 alpha 通道值。这些通道值在定义输出颜色通道值时要使用的函数内部可用：

- `r`、`g` 和 `b` 值均被解析为取值范围在 `0` 到 `255` 之间（包含）的 `<number>`。
- `alpha` 通道会被解析为取值范围在 `0` 到 `1` 之间（包含）的 `<number>`。

定义相对颜色时，输出颜色的不同通道可以用几种不同的方式表示。下面，我们将探索一些示例来说明这一点。

在下面的前两个示例中，我们都使用了相对颜色语法。但是，示例一输出与原始颜色相同的颜色，示例二输出完全不基于原始颜色的颜色。它们不能真正地创造相对颜色！你也不太可能会在真正的代码仓库中去使用这些，更多只会使用绝对值颜色。我们将这些示例作为学习相对 `rgb()` 语法的起点。

让我们从 `hsl(0 100% 50%)`（与 `rgb(255 0 0)` 等价）作为原始颜色开始。以下函数输出与原始颜色相同的颜色——它使用原始颜色的 `r`、`g` 和 `b` 通道值（`255`、`0` 和 `0`）作为输出通道值：

```css
rgb(from hsl(0 100% 50%) r g b)
```

此函数的输出颜色是与 `rgb(255 0 0)` 等价的 sRGB `color()`：`color(srgb 1 0 0)`。

下一个函数在输出颜色通道值中使用了绝对值，输出一种完全不基于原始颜色的不同颜色：

```css
rgb(from hsl(0 100% 50%) 132 132 224)
```

在上述情况下，输出颜色是与 `rgb(132 132 224)` 等价的 sRGB `color()`：`color(srgb 0.517647 0.517647 0.878431)`。

下一个函数会基于原始颜色来创造一个相对颜色：

```css
rgb(from hsl(0 100% 50%) r 80 80)
```

在这个例子中：

- 将原始颜色（`hsl(0 100% 50%)`）转换为等价的 `rgb()`（`rgb(255 0 0)`）。
- 将输出颜色的 `R` 通道值设置为原始颜色 `rgb()` 的等价 `R` 通道值——`255`。
- 将输出颜色的 `G` 和 `B` 通道值设置为不基于原始颜色的新值：分别为 `80` 和 `80`。

最终输出颜色为 `rgb(255 80 80)` 在 sRGB 颜色空间中的等价——`color(srgb 1 0.313726 0.313726)`。

> [!NOTE]
> 如上所述，如果输出颜色使用了与原始颜色不同的颜色模型，则原始颜色会在后台转换为与输出颜色相同的模型或空间，从而可以以兼容的方式表示（即使用相同的通道）。

在本节之前我们看到的示例中，均未明确指定 alpha 通道值用于原始颜色或输出颜色。如果未指定输出颜色的 alpha 通道值，默认为与原始颜色的 alpha 通道值相同。如果未指定原始颜色的 alpha 通道（并且它不是相对颜色），则默认为 `1`。因此，对于上述示例，原始颜色和输出颜色的 alpha 通道值都为 `1`

```css
rgb(from hsl(0 100% 50% / 0.8) r g b / alpha)
/* 计算的输出颜色：color(srgb 1 0 0 / 0.8) */

rgb(from hsl(0 100% 50% / 0.8) r g b / 0.5)
/* 计算的输出颜色：color(srgb 1 0 0 / 0.5) */
```

在接下来的示例中，`hsl()` 表示形式的原始颜色再次转换为 `rgb()`——`rgb(255 0 0)`。{{cssxref("calc")}} 计算会应用于 `R`、`G`、`B` 和 `A` 值。经过计算，`R`、`G`、`B` 和 `A` 的值分别为 `127.5`、`25`、`175` 和 `0.9`。最终输出颜色为 `rgb(127.5 25 175 / 0.9)` 在 sRGB 颜色空间中的等价：`color(srgb 0.5 0.0980392 0.686275 / 0.9)`。

```css
rgb(from hsl(0 100% 50%) calc(r/2) calc(g + 25) calc(b + 175) / calc(alpha - 0.1))
```

> [!NOTE]
> 因为原始颜色通道值会被解析为 `<number>` 值，所以在使用它们进行计算时，即使通道能够接受 `<percenter>`、`<angle>` 或其他值类型，我们也必须使用 `<number>` 进行运算。例如在 `<number>` 中添加 `<percenter>` 是不起作用的。

### 形式语法

{{csssyntax}}

## 示例

### 基础语法

在这个例子中，下面我们会有三个展示在条纹背景上，且具有不同背景颜色的 {{htmlelement("div")}} 元素。

#### HTML

```html
<div>
  <div id="integer"></div>
  <div id="percent"></div>
  <div id="alpha"></div>
</div>
```

#### CSS

背景颜色是使用 `rgb()` color 函数设置的。这三种颜色是一样的。第三个是半透明的，所以我们在 {{htmlelement("body")}} 上使用了 {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}，以更好地展示 alpha 通道的透明度。

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

#### 结果

{{ EmbedLiveSample("基础语法", "100%", "75") }}

### 在 rgb() 中使用相对值

本示例使用了不同的背景颜色来设置三个 {{htmlelement("div")}} 元素样式。左边元素被赋予未修改的 `--base-color`，而中间和右边的元素被赋予 `--base-color` 的变体，会逐渐减小红色通道的值，增大蓝色通道的值。

这些变体是使用了相对颜色定义的——`--base-color` [自定义属性](/zh-CN/docs/Web/CSS/Reference/Properties/--*)被传递到 `rgb()` 函数中，然后通过 `calc()` 函数修改输出颜色的红色和蓝色通道值，得到预期效果，同时绿色通道值保持不变。

```html hidden
<div id="container">
  <div class="item" id="one"></div>
  <div class="item" id="two"></div>
  <div class="item" id="three"></div>
</div>
```

#### CSS

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
  /* 等价于 rgb(255 165 0) */
}

#one {
  background-color: var(--base-color);
}

#two {
  background-color: rgb(from var(--base-color) calc(r - 76.5) g calc(b + 76.5));
  /* 76.5 是 255 的 30%  */
}

#three {
  background-color: rgb(from var(--base-color) calc(r - 153) g calc(b + 153));
  /* 153 是 255 的 60% */
}

/*  使用 @supports 添加对旧语法的支持，该语法要求在计算中将 r g b 值指定为百分比（带单位）。
    这对于 Safari 16.4+ 是必需的。 */
@supports (color: rgb(from red r g calc(b + 30%))) {
  #two {
    background-color: rgb(from var(--base-color) calc(r - 30%) g calc(b + 30%));
  }

  #three {
    background-color: rgb(from var(--base-color) calc(r - 60%) g calc(b + 60%));
  }
}
```

#### 结果

{{ EmbedLiveSample("在 rgb() 中使用相对值", "100%", "200") }}

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
  background-color: rgb(255 0 0 / 50%);
}

div.comma-separated {
  background-color: rgb(255, 0, 0, 0.5);
}
```

#### 结果

{{EmbedLiveSample('旧版语法：逗号分隔值', '100%', '150px')}}

### rgba() 语法

`rgba()` 语法是 `rgb()` 的别名。

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
  background-color: rgb(255 0 0 / 50%);
}

div.rgba {
  background-color: rgba(255 0 0 / 0.5);
}
```

#### 结果

{{EmbedLiveSample('rgba() 语法', '100%', '150px')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSXref("&lt;color&gt;")}} 数据类型，以了解所有颜色标记的列表
- [sRGB 色彩选择和转换工具](/zh-CN/docs/Web/CSS/Guides/Colors/Color_format_converter)
- [使用相对颜色](/zh-CN/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- [CSS 颜色](/zh-CN/docs/Web/CSS/Guides/Colors)模块
