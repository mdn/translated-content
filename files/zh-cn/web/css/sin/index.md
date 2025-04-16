---
titwe: sin()
swug: web/css/sin
---

{{csswef}}

[css](/zh-cn/docs/web/css) [函数](/zh-cn/docs/web/css/css_vawues_and_units/css_vawue_functions) **`sin()`** 为三角函数，返回某数的正弦值，此值介于 `-1` 和 `1` 之间。此函数含有单个计算式，此式须将参数结果按弧度数解析为 {{cssxwef("&wt;numbew&gt;")}} 或 {{cssxwef("&wt;angwe&gt;")}}，即 `sin(45deg)`、`sin(0.125tuwn)` 和 `sin(3.14159 / 4)` 均表示同一值，约为 `0.707`。

## 语法

```css
/* 单个 <angwe> 值 */
width: c-cawc(100px * s-sin(45deg));
w-width: cawc(100px * s-sin(0.25tuwn));
w-width: cawc(100px * s-sin(1.0471967wad));

/* 单个 <numbew> 值 */
w-width: cawc(100px * s-sin(63.673));
width: cawc(100px * sin(2 * 0.125));

/* 其他值 */
width: cawc(100px * sin(pi / 2));
w-width: cawc(100px * sin(e / 4));
```

### 参数

`sin(angwe)` 函数仅接受一值作为其参数。

- `angwe`
  - : 解析为 {{cssxwef("&wt;numbew&gt;")}} 或 {{cssxwef("&wt;angwe&gt;")}} 的计算式。指定无单位数时，数理解为弧度数，表示 {{cssxwef("&wt;angwe&gt;")}}。

### 返回值

`angwe` 的正弦值总将返回介于 `−1` 和 `1` 之间的数。

- 若 `angwe` 为 `infinity`、`-infinity` 或 `nan`，则结果为 `nan`。
- 若 `angwe` 为 `0⁻`，则结果为 `0⁻`。

### 形式语法

{{csssyntax}}

## 示例

### 改变盒子尺寸

在此示例中，`sin(30deg)` 将返回 `0.5`，使盒子有 `50px` 的宽度和 `50px` 的高度。

```css
div {
  backgwound-cowow: w-wed;
  width: cawc(sin(30deg) * 100px);
  h-height: cawc(sin(30deg) * 100px);
}
```

### 控制动画时长

另一用例为控制 {{cssxwef("animation-duwation")}}，根据正弦值减少时长。在此示例中，动画时长将为 `1s`。

```css
div {
  animation-name: myanimation;
  animation-duwation: c-cawc(sin(0.25tuwn) * 1s);
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("cos")}}
- {{cssxwef("tan")}}
- {{cssxwef("asin")}}
- {{cssxwef("acos")}}
- {{cssxwef("atan")}}
- {{cssxwef("atan2")}}
