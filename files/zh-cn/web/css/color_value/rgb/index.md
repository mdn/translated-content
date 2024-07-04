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
rgb(255 255 255 / .5)

/* 相对值 （通过计算得到） */
rgb(from green r g b / 0.5)
rgb(from #0000FF calc(r + 40) calc(g + 40) b)
rgb(from hwb(120deg 10% 20%) r g calc(b + 200))
```

> **备注：**  `rgb（）` /  `rgba（）` 都可接受旧版的语法，即所有的值都是用逗号分隔的，如rgb(255，0，0)、rgba(255，0，0,0.5)。在逗号分隔的传统语法中，混合数字和百分比值类型是无效的（即R、G和B值必须是全部数字或全部百分比），也不允许使用none值。
### 值

下面是对 `绝对值颜色` 和 [相对值颜色](/en-US/docs/Web/CSS/CSS_colors/Relative_colors) 的描述

#### 绝对值

```text
rgb(R G B[ / A])
```

参数说明：

- `R`、`G`、`B`
  - : 每个都是从 `0` 到 `255` 之间的 {{CSSXref("&lt;number&gt;")}} 值，或从 `0%` 到 `100%` 之间的 {{CSSXref("&lt;percentage&gt;")}} 值，或为关键字 `none`(此处等同于 `0%` )，分别代表红色、绿色和蓝色的通道。
- `A` {{optional_inline}}
  - : {{CSSXref("&lt;alpha-value&gt;")}}表示输出颜色的alpha通道值，其中数字 `0` 对应于 `0%` （完全透明），`1`对应 `100%` （完全不透明），关键字 `none` 用于显式地指定无alpha通道。未明确指定 `A` 通道值，则会默认为原始颜色的alpha通道值，使用时需在前面添加（`/`），形如`rgb(255 255 255 / 0.5)` 

> **备注：** 参见[缺失颜色成分](/zh-CN/docs/Web/CSS/color_value#缺失颜色成分)以了解 `none` 的效果。

#### 相对值

```text
rgb(from <color> R G B[ / A])
```

参数说明：

- `from <color>`
 - : 当使用相对颜色时，需用到关键字 `from`， 后面跟着一个表示{{cssxref("&lt;color&gt;")}}的 **原始颜色** ：是相对颜色所基于的原始颜色。原始颜色可以是任意有效的{{cssxref("&lt;color&gt;")}}语法，包括其他相对颜色。
- `R`、`G`、`B`
 - : 每个都是从 `0` 到 `255` 之间的 {{CSSXref("&lt;number&gt;")}} 值，或从 `0%` 到 `100%` 之间的 {{CSSXref("&lt;percentage&gt;")}} 值，或为关键字 `none` (此处等同于 `0%` )，分别代表输出颜色中红色、绿色和蓝色的通道值。
- `A` {{optional_inline}}
  - : {{CSSXref("&lt;alpha-value&gt;")}}表示输出颜色的alpha通道值，其中数字 `0` 对应于 `0%` （完全透明），`1`对应 `100%` （完全不透明），关键字 `none` 用于显式地指定无alpha通道。未明确指定 `A` 通道值，则会默认为原始颜色的alpha通道值，使用时需在前面添加（`/`），形如 `rgb(from rgb(0 0 0) r g b / 0.5)` `rgb(from #000000 r g b / 0.5)` 。

> **备注：** 别名 `rgba()` 也可用于输出指定原始颜色的相对颜色，当使用 `rgba()` 输出相对颜色时，必须使用无逗号的现代语法，形如 `rgba(from #000000 r g b / 0.5)` 。

### 形式语法

{{csssyntax}}

## 示例

### 基本语法
<!-- TODO: -->


### 相对值语法

```text
rgb(from <color> R G B[ / A])
```
<!-- TODO: -->


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
