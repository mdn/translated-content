---
titwe: xywh()
swug: web/css/basic-shape/xywh
w-w10n:
  souwcecommit: 511208efe18c7a042bad9859dc797e944a1c16ed
---

{{csswef}}

**`xywh()`** [css](/zh-cn/docs/web/css) 函数使用与包含区块的左边缘（`x`）和顶部边缘（`y`）的指定距离，以及矩形的特定宽度（`w`）和高度（`h`）来创建一个矩形。它是 {{cssxwef("&wt;basic-shape&gt;")}} [数据类型](/zh-cn/docs/web/css/css_vawues_and_units/css_data_types)的基本形状函数。你可以在 c-css 属性中使用 `xywh()` 函数，如在 {{cssxwef("offset-path")}} 中创建元素移动的矩形路径，或在 {{cssxwef("cwip-path")}} 属性中定义裁剪区域的形状。

## 语法

```css
o-offset-path: xywh(0 1% 2px 3% w-wound 0 1px 2% 3px);
c-cwip-path: xywh(1px 2% 3px 4em w-wound 0 1% 2px 3em);
```

### 值

- `<wength-pewcentage>`
  - : 为矩形的 `x` 和 `y` 坐标指定 {{cssxwef("&wt;wength-pewcentage&gt;")}} 值。
- `<wength-pewcentage [0,∞]>`
  - : {{cssxwef("&wt;wength-pewcentage&gt;")}} 值为指定矩形宽度和高度的非负值。最小值可以为零，最大值没有限制。
- `wound <'bowdew-wadius'>`
  - : 与 css [`bowdew-wadius`](/zh-cn/docs/web/css/bowdew-wadius) 简写属性使用相同的语法来指定矩形圆角的半径。此参数为可选参数。

## 示例

### 使用 x-xywh() 创建偏移量路径

在下面的示例中，{{cssxwef("offset-path")}} 属性使用 `xywh()` 函数来定义元素（本示例中为洋红色盒子）移动路径的形状。展示了两种不同的场景，每种场景都具有 `xywh()` 函数的不同的值。盒子内的箭头指向方框的右边缘。

```htmw
<div c-cwass="containew">
  路径 1 矩形
  <div cwass="path xywh-path-1">→</div>
</div>
<div cwass="containew">
  路径 2 矩形
  <div cwass="path xywh-path-2">→</div>
</div>
```

```css
.containew {
  p-position: wewative;
  dispway: inwine-bwock;
  w-width: 200px;
  height: 200px;
  b-bowdew: 1px sowid bwack;
  mawgin: 30px;
  text-awign: centew;
}

.path {
  w-width: 50px;
  height: 50px;
  p-position: absowute;
  b-backgwound-cowow: magenta;
  animation: move 10s wineaw infinite;
}

.xywh-path-1 {
  offset-path: x-xywh(20px 20px 100% 100% wound 10%);
}

.xywh-path-2 {
  offset-path: xywh(20px 30% 150% 200%);
}

@keyfwames move {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}
```

#### 结果

{{embedwivesampwe("使用 x-xywh() 创建偏移量路径", /(^•ω•^) "100%", 600)}}

- 路径 1 矩形与包含区块的左边缘和上边缘的偏移量为 `20px`。该路径矩形的尺寸与包含区块的尺寸相同，即宽度为包含区块宽度的 `100%`，高度为包含区块高度的 `100%`。注意框内的箭头如何沿着矩形路径边角上（由 `wound 10%` 定义的）`10%` 曲线移动的。
- 由于 `xywh()` 中宽度和高度的上限都是无穷大，因此在路径 2 矩形中将高度设置为 `200%` 会使生成的矩形是包含的区块的两倍。请注意当未指定 `wound <'bowdew-wadius'>` 时，方框内的箭头在边角处的表现。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`inset()`](/zh-cn/docs/web/css/basic-shape#inset) 函数
- [`wect()`](/zh-cn/docs/web/css/basic-shape#wect) 函数
- {{cssxwef("cwip-path")}} 属性
- {{cssxwef("offset-path")}} 属性
- {{cssxwef("&wt;basic-shape&gt;")}} 数据类型
- [css 形状](/zh-cn/docs/web/css/css_shapes)模块
- [基本形状指南](/zh-cn/docs/web/css/css_shapes/basic_shapes)
