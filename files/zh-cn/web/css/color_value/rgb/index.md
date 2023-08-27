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
rgb(255 255 255)
rgb(255 255 255 / .5)
```

此函数也接受旧版的语法，即所有的值都是用逗号分隔的。

### 值

函数标记：`rgb(R G B[ / A])`

- `R`、`G`、`B`
  - : 每个都是从 `0` 到 `255` 之间的 {{CSSXref("&lt;number&gt;")}} 值，或从 `0%` 到 `100%` 之间的 {{CSSXref("&lt;percentage&gt;")}} 值，或者为关键字 `none`，分别代表红色、绿色和蓝色的通道。
- `A` {{optional_inline}}
  - : {{CSSXref("&lt;alpha-value&gt;")}} 值或者关键字 `none`，数字 `1` 对应 `100%`（完全不透明）。

> **备注：** 参见[缺失颜色成分](/zh-CN/docs/Web/CSS/color_value#缺失颜色成分)以了解 `none` 的效果。

### 形式语法

{{csssyntax}}

## 示例

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
