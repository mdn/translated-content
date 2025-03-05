---
title: hsl()
slug: Web/CSS/color_value/hsl
---

{{CSSRef}}

**`hsl()`** 函数标记根据其*色相*、*饱和度*和*明度*来表达 {{glossary("RGB", "sRGB")}} 颜色。可选的 _alpha_ 成分代表了颜色的透明度。

> [!NOTE]
> 旧版的 `hsla()` 语法是 `hsl()` 的别称，接收相同的参数，行为也是相同的。

{{EmbedInteractiveExample("pages/css/function-hsl.html")}}

使用 `hsl()` 来定义*互补色*可以用一个公式来完成，因为它们位于{{glossary("color wheel","色环")}}中同一直径上。如果一个颜色的色相度是 `θ`，那么其互补色的色相角就是 `180deg - θ`。

## 语法

```css
hsl(120deg 75% 25%)
hsl(120deg 75% 25% / 0.6)
```

此函数也接受旧版的语法，即所有的值都是用逗号分隔的。

### 值

函数标记：`hsl(H S L[ / A])`

- `H`
  - : {{CSSXref("&lt;number&gt;")}}、{{CSSXref("&lt;angle&gt;")}} 或者关键字 `none`，代表色相角。关于此类型的更多细节可以参见 {{CSSXref("&lt;hue&gt;")}} 文档。
- `S`
  - : {{CSSXref("&lt;percentage&gt;")}} 或者关键字 `none`，代表饱和度。在这里，`100%` 是完全饱和，而 `0%` 是完全不饱和（灰色）。
- `L`
  - : {{CSSXref("&lt;percentage&gt;")}} 或者关键字 `none`，代表明度。在这里，`100%` 是白色，`0%` 是黑色，`50%` 是“正常”。
- `A` {{optional_inline}}
  - : {{CSSXref("&lt;alpha-value&gt;")}} 或者关键字 `none`，其中数字 `1` 代表 `100%`（完全不透明）。

> [!NOTE]
> 参见[缺失颜色成分](/zh-CN/docs/Web/CSS/color_value#缺失颜色成分) 以了解 `none` 的效果。

### 形式语法

{{csssyntax}}

## 示例

### 使用 hsl() 和 conic-gradient()

`hsl()` 函数和 [`conic-gradient()`](/zh-CN/docs/Web/CSS/gradient/conic-gradient) 可以很好地配合使用，因为这两个都处理角度。

```html hidden
<div></div>
```

#### CSS

```css
div {
  width: 100px;
  height: 100px;
  background: conic-gradient(
    hsl(360 100% 50%),
    hsl(315 100% 50%),
    hsl(270 100% 50%),
    hsl(225 100% 50%),
    hsl(180 100% 50%),
    hsl(135 100% 50%),
    hsl(90 100% 50%),
    hsl(45 100% 50%),
    hsl(0 100% 50%)
  );
  clip-path: circle(closest-side);
}
```

#### 结果

{{EmbedLiveSample("使用 hsl() 和 conic-gradient()", "100%", 140)}}

### 旧版语法：逗号分隔值

由于历史原因，`hsl()` 函数接受所有值用逗号分隔的形式。

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
  background-color: hsl(0 100% 50% / 50%);
}

div.comma-separated {
  background-color: hsl(0, 100%, 50%, 50%);
}
```

#### 结果

{{EmbedLiveSample("旧版语法：逗号分隔值", "100%", 150)}}

### 旧版语法：hsla()

旧版的 `hsla()` 语法是 `hsl()` 的别称。

#### HTML

```html
<div class="hsl"></div>
<div class="hsla"></div>
```

#### CSS

```css
div {
  width: 100px;
  height: 50px;
  margin: 1rem;
}

div.hsl {
  background-color: hsl(0 100% 50% / 50%);
}

div.hsla {
  background-color: hsla(0, 100%, 50%, 50%);
}
```

#### 结果

{{EmbedLiveSample("旧版语法：hsla()", "100%", 150)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSXref("&lt;color&gt;")}}：代表颜色的数据类型
- [HSL 颜色拾取器](https://hslpicker.com/)
