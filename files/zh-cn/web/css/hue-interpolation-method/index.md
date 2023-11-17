---
title: <hue-interpolation-method>
slug: Web/CSS/hue-interpolation-method
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) [数据类型](/zh-CN/docs/Web/CSS/CSS_Types) **`<hue-interpolation-method>`** 表示用于在 {{CSSXref("&lt;hue&gt;")}} 值之间插值的算法。此插值方法指定了如何根据色轮求两个色相值之间的中点。此数据类型用作数据类型 {{CSSXref("&lt;color-interpolation-method&gt;")}} 的分量。

在对 `<hue>` 值进行插值时，色相插值算法默认为 [`shorter`](#shorter)。

## 语法

`<hue-interpolation-method>` 值由色相插值算法的名称后接字面标记 `hue` 所构成：

```
shorter hue
longer hue
increasing hue
decreasing hue
```

### 取值

任意一对色相角 `θ1` 和 `θ2` 对应{{Glossary("color wheel", "色轮")}}上的两条半径，且将圆周切为两段可用于插值的弧。两段弧均起于第一条半径并止于第二条半径，但一段为顺时针方向而另一段为逆时针方向。

> **备注：** 下列描述和图示均基于色相角沿顺时针方向递增的色轮。注意在其他某些色轮中色相角递增对应逆时针操作。

有四种确定所用弧的算法：

- `shorter`

  - : 使用劣弧。当两条半径重合时，此弧退化为单点。当两段弧长度相等时：

    - 若 `θ1 < θ2`，则使用顺时针弧；
    - 若 `θ1 > θ2`，则使用逆时针弧。

    | `θ1 = 45deg`、`θ2 = 135deg`                                   | `θ1 = -225deg`、`θ2 = 45deg`                                   |
    | ------------------------------------------------------------- | -------------------------------------------------------------- |
    | ![shorter，θ1 = 45deg 且 θ2 = 135deg](shorter_increasing.png) | ![shorter，θ1 = -225deg 且 θ2 = 45deg](shorter_decreasing.png) |

- `longer`

  - : 使用优弧。当两条半径重合时：

    - 若 `θ1 ≤ θ2`，则此弧变为顺时针定向的整个圆周。
    - 若 `θ1 > θ2`，则此弧变为逆时针定向的整个圆周。

    当两段弧长度相等时：

    - 若 `θ1 < θ2`，则使用顺时针弧。
    - 若 `θ1 > θ2`，则使用逆时针弧。

    | `θ1 = 45deg`、`θ2 = -225deg`                                 | `θ1 = 135deg`、`θ2 = 45deg`                                 |
    | ------------------------------------------------------------ | ----------------------------------------------------------- |
    | ![longer，θ1 = 45deg 且 θ2 = -225deg](longer_decreasing.png) | ![longer，θ1 = 135deg 且 θ2 = 45deg](longer_increasing.png) |

- `increasing`

  - : 使用顺时针弧。当两条半径重合时：

    - 若 `θ1 < θ2`，则此弧变为顺时针定向的整个圆周。
    - 若 `θ1 ≥ θ2`，则此弧退化为单点。

    | `θ1 = 45deg`、`θ2 = 135deg`                                      | `θ1 = 495deg`、`θ2 = 45deg`                                     |
    | ---------------------------------------------------------------- | --------------------------------------------------------------- |
    | ![increasing，θ1 = 45deg 且 θ2 = 135deg](shorter_increasing.png) | ![increasing，θ1 = 495deg 且 θ2 = 45deg](longer_increasing.png) |

- `decreasing`

  - : 使用逆时针弧。当两条半径重合时：

    - 若 `θ1 ≤ θ2`，则此弧退化为单点。
    - 若 `θ1 > θ2`，则此弧变为逆时针定向的整个圆周。

    | `θ1 = 45deg`、`θ2 = 495deg`                                     | `θ1 = 135deg`、`θ2 = 45deg`                                      |
    | --------------------------------------------------------------- | ---------------------------------------------------------------- |
    | ![decreasing，θ1 = 45deg 且 θ2 = 495deg](longer_decreasing.png) | ![decreasing，θ1 = 135deg 且 θ2 = 45deg](shorter_decreasing.png) |

## 形式语法

{{CSSSyntax}}

## 示例

### 比较各种色相插值算法

下列示例展示了在 {{CSSXref("gradient/linear-gradient", "linear-gradient()")}} 中使用不同的色相插值算法的效果。

#### HTML

```html
<div class="hsl">
  <p>HSL</p>
</div>
<div class="hsl-increasing">
  <p>HSL increasing</p>
</div>
<div class="hsl-decreasing">
  <p>HSL decreasing</p>
</div>
<div class="hsl-longer">
  <p>HSL longer</p>
</div>
<div class="hsl-named">
  <p>HSL 具名颜色</p>
</div>
<div class="hsl-named-longer">
  <p>HSL 具名颜色（longer）</p>
</div>
```

#### CSS

```css hidden
div {
  border: 1px solid black;
  height: 50px;
  margin: 10px;
  width: 90%;
}
p {
  color: white;
  margin: 6px;
}
```

```css
.hsl {
  background: linear-gradient(
    to right in hsl,
    hsl(39deg 100% 50%),
    hsl(60deg 100% 50%)
  );
}
.hsl-increasing {
  background: linear-gradient(
    to right in hsl increasing hue,
    hsl(190deg 100% 50%),
    hsl(180deg 100% 50%)
  );
}
.hsl-decreasing {
  background: linear-gradient(
    to right in hsl decreasing hue,
    hsl(39deg 100% 50%),
    hsl(60deg 100% 50%)
  );
}
.hsl-longer {
  background: linear-gradient(
    to right in hsl longer hue,
    hsl(39deg 100% 50%),
    hsl(60deg 100% 50%)
  );
}
.hsl-named {
  background: linear-gradient(to right in hsl, orange, yellow);
}
.hsl-named-longer {
  background: linear-gradient(to right in hsl longer hue, orange, yellow);
}
```

#### 结果

{{EmbedLiveSample("比较各种色相插值算法", "100%", 400)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSXref("&lt;color-interpolation-method&gt;")}}
- {{CSSXref("&lt;hue&gt;")}}
