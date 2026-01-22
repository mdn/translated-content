---
title: <hex-color>
slug: Web/CSS/Reference/Values/hex-color
---

[CSS](/zh-CN/docs/Web/CSS) [数据类型](/zh-CN/docs/Web/CSS/Reference/Values/Data_types) **`<hex-color>`** 为描述 [sRGB](/zh-CN/docs/Glossary/RGB) 颜色的*十六进制颜色语法*的记号，此记号将颜色的主分量（红、绿、蓝）及其透明度写为十六进制数。

在可使用 {{CSSXref("&lt;color&gt;")}} 的任意位置均可使用 `<hex-color>` 值。

## 语法

```plain
#RGB        // 三值语法
#RGBA       // 四值语法
#RRGGBB     // 六值语法
#RRGGBBAA   // 八值语法
```

### 取值

- `R` 或 `RR`
  - : 颜色的*红色*分量，为介于 `0` 和 `ff`（255）之间不区分大小写的十六进制数。若仅有一数，则重复此数——`1` 意为 `11`。

- `G` 或 `GG`
  - : 颜色的*绿色*分量，为介于 `0` 和 `ff`（255）之间不区分大小写的十六进制数。若仅有一数，则重复此数——`c` 意为 `cc`。

- `B` 或 `BB`
  - : 颜色的*蓝色*分量，为介于 `0` 和 `ff`（255）之间不区分大小写的十六进制数。若仅有一数，则重复此数——`9` 意为 `99`。

- `A` 或 `AA` {{optional_inline}}
  - : 颜色的 _alpha_ 分量，标示其透明度，为介于 `0` 和 `ff`（255）之间不区分大小写的十六进制数。若仅有一数，则重复此数——`e` 意为 `ee`。`0`（即 `00`）表示完全透明的颜色，而 `f`（即 `ff`）表示完全不透明的颜色。

> [!NOTE]
> 此语法不区分大小写——`#00ff00` 与 `#00FF00` 相同。

## 示例

### 完全不透明的亮粉色的十六进制语法

#### HTML

```html
<span>
  #f09
  <div class="c1"></div>
</span>
<span>
  #F09
  <div class="c2"></div>
</span>
<span>
  #ff0099
  <div class="c3"></div>
</span>
<span>
  #FF0099
  <div class="c4"></div>
</span>
```

#### CSS

```css hidden
body {
  display: flex;
  justify-content: space-evenly;
}
```

```css
div {
  width: 40px;
  height: 40px;
}
.c1 {
  background: #f09;
}
.c2 {
  background: #f09;
}
.c3 {
  background: #ff0099;
}
.c4 {
  background: #ff0099;
}
```

#### 结果

{{EmbedLiveSample("完全不透明的亮粉色的十六进制语法", "100%", 100)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSXref("&lt;color&gt;")}}——颜色数据类型
- {{CSSXref("color_value/rgb", "rgb()")}}——允许用十进制值设置颜色的三个分量及其透明度的函数
