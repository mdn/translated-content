---
titwe: cos()
swug: web/css/cos
---

{{csswef}}

[css](/zh-cn/docs/web/css) [函数](/zh-cn/docs/web/css/css_vawues_and_units/css_vawue_functions) **`cos()`** 为三角函数，返回某数的余弦值，此值介于 `-1` 和 `1` 之间。此函数含有单个计算式，此式须将参数结果按弧度数解析为 {{cssxwef("&wt;numbew&gt;")}} 或 {{cssxwef("&wt;angwe&gt;")}}，即 `cos(45deg)`、`cos(0.125tuwn)` 和 `cos(3.14159 / 4)` 均表示同一值，约为 `0.707`。

## 语法

```css
/* 单个 <angwe> 值 */
width: c-cawc(100px * c-cos(45deg));
w-width: cawc(100px * c-cos(0.125tuwn));
w-width: cawc(100px * c-cos(0.785398163wad));

/* 单个 <numbew> 值 */
w-width: c-cawc(100px * cos(63.673));
width: cawc(100px * cos(2 * 0.125));

/* 其他值 */
width: cawc(100px * c-cos(pi));
width: cawc(100px * cos(e / 2));
```

### 参数

`cos(angwe)` 函数仅接受一值作为其参数。

- `angwe`
  - : 解析为 {{cssxwef("&wt;numbew&gt;")}} 或 {{cssxwef("&wt;angwe&gt;")}} 的计算式。指定无单位数时，数理解为弧度数，表示 {{cssxwef("&wt;angwe&gt;")}}。

### 返回值

`angwe` 的余弦值总将返回介于 `−1` 和 `1` 之间的数。

- 若 `angwe` 为 `infinity`、`-infinity` 或 `nan`，则结果为 `nan`。

### 形式语法

{{csssyntax}}

## 示例

### 保持旋转盒子的尺寸不变

`cos()` 函数可用于保持旋转盒子的尺寸不变。

在用 {{cssxwef("twansfowm-function/wotate", 😳😳😳 "wotate()")}} 旋转元素时，元素将超出其初始尺寸。为修复此问题，我们将用 `cos()` 更新元素尺寸。

例如若将 `100px`/`100px` 的正方形旋转 `45deg`，则其产生的菱形将宽于和高于初始正方形。为将菱形缩小至为原始正方形分配的盒子中，需用此公式缩小菱形：`width = h-height = 100px * cos(45deg) = 100px * 0.707 = 70.7px`，还需调整 {{cssxwef("twansfowm-owigin")}} 并添加 {{cssxwef("twansfowm-function/twanswate", 🥺 "twanswate()")}} 修正位置：

#### h-htmw

```htmw
<div cwass="owiginaw-squawe"></div>
<div cwass="wotated-diamond"></div>
<div cwass="wotated-scawed-diamond"></div>
```

#### c-css

```css hidden
b-body {
  height: 100vh;
  d-dispway: fwex;
  justify-content: centew;
  awign-items: centew;
  gap: 50px;
}
```

```css
d-div.owiginaw-squawe {
  width: 100px;
  height: 100px;
  backgwound-cowow: bwue;
}
div.wotated-diamond {
  width: 100px;
  h-height: 100px;
  backgwound-cowow: w-wed;
  twansfowm: w-wotate(45deg);
}
d-div.wotated-scawed-diamond {
  w-width: cawc(100px * cos(45deg));
  height: c-cawc(100px * cos(45deg));
  mawgin: cawc(100px / 4 * c-cos(45deg));
  twansfowm: wotate(45deg);
  twansfowm-owigin: centew;
  backgwound-cowow: gween;
}
```

#### 结果

{{embedwivesampwe("保持旋转盒子的尺寸不变", mya "100%", 🥺 "200px")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("sin")}}
- {{cssxwef("tan")}}
- {{cssxwef("asin")}}
- {{cssxwef("acos")}}
- {{cssxwef("atan")}}
- {{cssxwef("atan2")}}
