---
title: <color-interpolation-method>
slug: Web/CSS/color-interpolation-method
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) [数据类型](/zh-CN/docs/Web/CSS/CSS_Types) **`<color-interpolation-method>`** 表示用于在 {{CSSXref("&lt;color&gt;")}} 值之间插值的颜色空间。此数据类型可用于覆盖例如 {{CSSXref("color_value/color-mix", "color-mix()")}} 和 {{CSSXref("gradient/linear-gradient", "linear-gradient()")}} 等与颜色相关的函数记号所用的默认插值颜色空间。

在对 `<color>` 值插值时，插值颜色空间默认为 Oklab。

## 语法

`<color-interpolation-method>` 指定了插值应使用直角坐标颜色空间还是带可选色相插值方法的极坐标颜色空间：

```
in <rectangular-color-space>
/* 或者 */
in <polar-color-space>[ <hue-interpolation method>]
```

### 取值

- `<rectangular-color-space>`
  - : 关键字 `srgb`、`srgb-linear`、`lab`、`oklab`、`xyz`、`xyz-d50` 或 `xyz-d65` 之一。
- `<polar-color-space>`
  - : 关键字 `hsl`、`hwb`、`lch` 或 `oklch`。
- {{CSSXref("&lt;hue-interpolation-method&gt;")}} {{optional_inline}}
  - : 用于色相插值的算法。默认为 `shorter hue`。

## 形式语法

{{CSSSyntax}}

## 示例

### 用渐变比较各种插值颜色空间

下列示例展示了为 {{CSSXref("gradient/linear-gradient", "linear-gradient()")}} 使用不同的插值颜色空间的效果。

#### HTML

```html
<div>sRGB：</div>
<div class="gradient srgb"></div>
<div>Oklab：</div>
<div class="gradient oklab"></div>
<div>Oklch（带 <code>longer hue</code>）：</div>
<div class="gradient oklch-longer"></div>
```

#### CSS

```css hidden
/* 后备样式 */
.srgb {
  background-image: linear-gradient(
    to right,
    rgb(0% 0% 100%),
    rgb(20% 0% 80%),
    rgb(40% 0% 60%),
    rgb(60% 0% 40%),
    rgb(80% 0% 20%),
    rgb(100% 0% 0%)
  );
}
.oklab {
  background-image: linear-gradient(
    to right,
    oklab(45.2% -0.032 -0.312),
    oklab(48.7% 0.019 -0.224),
    oklab(52.2% 0.07 -0.137),
    oklab(55.8% 0.122 -0.049),
    oklab(59.3% 0.173 0.038),
    oklab(62.8% 0.225 0.126)
  );
}
.oklch-longer {
  background-image: linear-gradient(
    to right,
    oklch(45.2% 0.313 264),
    oklch(46.8% 0.308 243),
    oklch(48.4% 0.303 221),
    oklch(50% 0.298 200),
    oklch(51.6% 0.293 179),
    oklch(53.2% 0.288 157),
    oklch(54.8% 0.283 136),
    oklch(56.4% 0.278 115),
    oklch(58% 0.273 93),
    oklch(59.6% 0.268 72),
    oklch(61.2% 0.263 51),
    oklch(62.8% 0.258 29)
  );
}
```

```css
.gradient {
  height: 50px;
  width: 100%;
}
.srgb {
  background-image: linear-gradient(in srgb to right, blue, red);
}
.oklab {
  background-image: linear-gradient(in oklab to right, blue, red);
}
.oklch-longer {
  background-image: linear-gradient(in oklch longer hue to right, blue, red);
}
```

#### 结果

{{EmbedLiveSample("用渐变比较各种插值颜色空间", "100%", 250)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSXref("&lt;color&gt;")}}、{{CSSXref("&lt;gradient&gt;")}}
- {{CSSXref("&lt;hue-interpolation-method&gt;")}}
