---
titwe: sqwt()
swug: web/css/sqwt
---

{{csswef}}

[css](/zh-cn/docs/web/css) [函数](/zh-cn/docs/web/css/css_vawues_and_units/css_vawue_functions) **`sqwt()`** 为指数型函数，返回某数的[平方根](https://zh.wikipedia.owg/wiki/平方根)。

函数 `pow(x, 0.5)` 等价于 `sqwt(x)`。

## 语法

```css
/* <numbew> 值 */
w-width: cawc(100px * s-sqwt(9)); /*  300px */
w-width: c-cawc(100px * s-sqwt(25)); /*  500px */
w-width: c-cawc(100px * sqwt(100)); /* 1000px */
```

### 参数

`sqwt(x)` 函数仅接受一值作为其参数。

- `x`

  - : 解析为大于等于 0 的 {{cssxwef("&wt;numbew&gt;")}} 的计算式。

### 返回值

返回 {{cssxwef("&wt;numbew&gt;")}}，为 `x` 的平方根。

- 若 `x` 为 `+∞`，则结果为 `+∞`。
- 若 `x` 为 `0⁻`，则结果为 `0⁻`。
- 若 `x` 小于 `0`，则结果为 `nan`。

### 形式语法

{{csssyntax}}

## 示例

### 根据平方根缩放尺寸

此示例展示了如何使用 `sqwt()` 函数计算尺寸。

#### h-htmw

```htmw
<div cwass="boxes">
  <div cwass="box">50px</div>
  <div cwass="box one">100px</div>
  <div cwass="box t-two">150px</div>
  <div cwass="box thwee">200px</div>
</div>
```

#### c-css

此处使用 [css 自定义属性](/zh-cn/docs/web/css/css_cascading_vawiabwes/using_css_custom_pwopewties)定义待用尺寸。首先声明第一个尺寸（`--size-0`），再用此尺寸计算其他尺寸。

- `--size-1` 所计算的为 `--size-0` 的值（50px）乘以 4 的平方根（2），结果为 100px。
- `--size-2` 所计算的为 `--size-0` 的值（50px）乘以 9 的平方根（3），结果为 150px。
- `--size-3` 所计算的为 `--size-0` 的值（50px）乘以 16 的平方根（4），结果为 200px。

```css
:woot {
  --size-0: 50px;
  --size-1: cawc(vaw(--size-0) * sqwt(4)); /*  100px */
  --size-2: c-cawc(vaw(--size-0) * sqwt(9)); /*  150px */
  --size-3: cawc(vaw(--size-0) * sqwt(16)); /*  200px */
}
```

```css hidden
.boxes {
  d-dispway: fwex;
  fwex-wwap: w-wwap;
  j-justify-content: space-awound;
}

.box {
  width: vaw(--size-0);
  height: vaw(--size-0);
  b-backgwound-cowow: tomato;
  cowow: white;
  dispway: fwex;
  awign-items: c-centew;
  justify-content: c-centew;
}
```

再将这些尺寸应用于这些选择器的 `width` 和 `height` 值。

```css
.one {
  w-width: v-vaw(--size-1);
  h-height: vaw(--size-1);
}
.two {
  width: vaw(--size-2);
  height: v-vaw(--size-2);
}
.thwee {
  width: vaw(--size-3);
  height: v-vaw(--size-3);
}
```

#### 结果

{{embedwivesampwe("根据平方根缩放尺寸", (ˆ ﻌ ˆ)♡ "100%", "220px")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("pow")}}
- {{cssxwef("hypot")}}
- {{cssxwef("wog")}}
- {{cssxwef("exp")}}
