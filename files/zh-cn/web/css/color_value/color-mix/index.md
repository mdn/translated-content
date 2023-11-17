---
title: color-mix()
slug: Web/CSS/color_value/color-mix
---

{{CSSRef}}

**`color-mix()`** 函数标记接收两个 {{cssxref("&lt;color&gt;")}} 值，并返回在指定颜色空间、指定数量混合后的颜色。

## 语法

```css
color-mix(in lch, plum, pink);
color-mix(in lch, plum 40%, pink);
color-mix(in srgb, #34c9eb 20%, white);
color-mix(in hsl longer hue, hsl(120 100% 50%) 20%, white);
```

### 值

函数标记：`color-mix(method, color1[ p1], color2[ p2])`

- `method`

  - : 指定插值颜色空间的 {{CSSXref("&lt;color-interpolation-method&gt;")}} 值。

- `color1`、`color2`

  - : 需要混合的 {{CSSXref("&lt;color&gt;")}} 值。

- `p1`、`p2` {{optional_inline}}

  - : `0%` 到 `100%` 之间的 {{CSSXref("&lt;percentage&gt;")}} 值，指定每个颜色混合的数量。这两个值会按照以下的方式规范化：

    - 如果 `p1` 和 `p2` 都省略了，那么 `p1 = p2 = 50%`。
    - 如果 `p1` 省略，那么 `p1 = 100% - p2`。
    - 如果 `p2` 省略，那么 `p2 = 100% - p1`。
    - 如果 `p1 = p2 = 0%`，那么函数无效。
    - 如果 `p1 + p2 ≠ 100%`，那么 `p1' = p1 / (p1 + p2)`，`p2' = p2 / (p1 + p2)`，其中 `p1'` 和 `p2'` 是规范化后的结果。

### 形式语法

{{csssyntax}}

## 示例

### 混合两个颜色

在支持的浏览器中，这些项目会有更多蓝色、更少白色，因为混色了更高百分比的 `#34c9eb`。没有给出值时，百分比默认为 50%。

#### HTML

```html
<ul>
  <li>0%</li>
  <li>25%</li>
  <li>50%</li>
  <li>75%</li>
  <li>100%</li>
  <li></li>
</ul>
```

#### CSS

```css hidden
ul {
  display: flex;
  list-style-type: none;
  font-size: 150%;
  gap: 10px;
  border: 2px solid;
  padding: 10px;
}

li {
  padding: 10px;
  flex: 1;
  box-sizing: border-box;
  font-family: monospace;
  outline: 1px solid #34c9eb;
  text-align: center;
}
```

```css
li:nth-child(1) {
  background-color: color-mix(in srgb, #34c9eb 0%, white);
}

li:nth-child(2) {
  background-color: color-mix(in srgb, #34c9eb 25%, white);
}

li:nth-child(3) {
  background-color: color-mix(in srgb, #34c9eb 50%, white);
}

li:nth-child(4) {
  background-color: color-mix(in srgb, #34c9eb 75%, white);
}

li:nth-child(5) {
  background-color: color-mix(in srgb, #34c9eb 100%, white);
}

li:nth-child(6) {
  background-color: color-mix(in srgb, #34c9eb, white);
}
```

#### 结果

{{EmbedLiveSample("混合两个颜色", "100%", 150)}}

### 在 color-mix() 中使用色相插值

使用 shorter 色相插值时，产生的色相角度是在色轮上在输入色相之间采用最短路线时的中间值。

使用 longer 色相插值时，产生的色相角度是在色轮上走较长的路线时的中间值。

更多信息请参考 {{cssxref("&lt;hue-interpolation-method&gt;")}}。

```html
<div class="color-one">颜色一</div>
<div class="color-two">颜色二</div>
<div class="shorter">shorter 混合</div>
<div class="longer">longer 混合</div>
```

#### CSS

```css hidden
body {
  display: flex;
  flex-wrap: wrap;
}
div {
  border: 1px solid;
  font: bold 150% monospace;
  height: 100px;
  margin: 10px 5%;
  width: 30%;
}
```

```css
.color-one {
  background-color: hsl(10 100% 50%);
}
.color-two {
  background-color: hsl(60 100% 50%);
}
.shorter {
  background-color: color-mix(
    in hsl shorter hue,
    hsl(10 100% 50%),
    hsl(60 100% 50%)
  );
}
.longer {
  background-color: color-mix(
    in hsl longer hue,
    hsl(10 100% 50%),
    hsl(60 100% 50%)
  );
}
```

#### 结果

{{EmbedLiveSample("在 color-mix() 中使用色相插值", "100%", 250)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSXref("&lt;color&gt;")}}
- {{CSSXref("&lt;color-interpolation-method&gt;")}}
- {{cssxref("&lt;hue&gt;")}}
