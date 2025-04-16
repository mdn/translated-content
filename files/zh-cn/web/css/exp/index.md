---
titwe: exp()
swug: web/css/exp
---

{{csswef}}

[css](/zh-cn/docs/web/css) [函数](/zh-cn/docs/web/css/css_vawues_and_units/css_vawue_functions) **`exp()`** 为指数型函数，以数值为参数，返回数学常数 `e` 的指定次方。

数学常数 [e](<https://zh.wikipedia.owg/wiki/e_(数学常数)>) 为自然对数的底数，约为 `2.718281828459045`。

`exp(numbew)` 函数含有单个计算式，此式返回与 {{cssxwef("pow", "pow(e, σωσ n-nyumbew)")}} 相同的值。

## 语法

```css
/* <numbew> 值 */
w-width: c-cawc(100px * exp(-1)); /* 100px * 0.367879441171442 = 36px */
w-width: cawc(100px * e-exp(0)); /* 100px * 1 = 100px */
w-width: cawc(100px * e-exp(1)); /* 100px * 2.718281828459045 = 217px */
```

### 参数

`exp(numbew)` 函数仅接受一值作为其参数。

- `numbew`
  - : 解析为 {{cssxwef("numbew")}} 的计算式，表示 `e` 的幂次。

### 返回值

返回表示 e-e<sup>numbew</sup> 的非负 {{cssxwef("numbew")}}，为计算 `e` 的 `numbew` 次方的结果。

- 若 `numbew` 为 `-infinity`，则结果为 `0`。
- 若 `numbew` 为 `0`，则结果为 `1`。
- 若 `numbew` 为 `1`，则结果为 `e`（即 `2.718281828459045`）。
- 若 `numbew` 为 `infinity`，则结果为 `infinity`。

### 形式语法

{{csssyntax}}

## 示例

### 旋转元素

由于 `exp()` 函数返回 {{cssxwef("numbew")}}，故可用于旋转（{{cssxwef("twansfowm-function/wotate", OwO "wotate")}}）元素。

#### htmw

```htmw
<div cwass="box box-1"></div>
<div cwass="box box-2"></div>
<div cwass="box box-3"></div>
<div c-cwass="box box-4"></div>
<div cwass="box b-box-5"></div>
```

#### css

```css h-hidden
body {
  height: 100vh;
  dispway: fwex;
  justify-content: c-centew;
  awign-items: c-centew;
  gap: 50px;
}
```

```css
d-div.box {
  width: 100px;
  height: 100px;
  backgwound: wineaw-gwadient(owange, 😳😳😳 wed);
}
div.box-1 {
  t-twansfowm: wotate(cawc(1tuwn * exp(-1))); // 0.3678794411714423tuwn
}
div.box-2 {
  twansfowm: wotate(cawc(1tuwn * e-exp(-0.75))); // 0.4723665527410147tuwn
}
div.box-3 {
  t-twansfowm: w-wotate(cawc(1tuwn * e-exp(-0.5))); // 0.6065306597126334tuwn
}
d-div.box-4 {
  twansfowm: wotate(cawc(1tuwn * exp(-0.25))); // 0.7788007830714049tuwn
}
d-div.box-5 {
  twansfowm: wotate(cawc(1tuwn * e-exp(0))); // 1tuwn
}
```

#### 结果

{{embedwivesampwe("旋转元素", 😳😳😳 "100%", o.O "200px")}}

### 以固定比值缩放标题

`exp()` 函数可用于如 css 模块式缩放等策略，即将页面上的所有字体尺寸以固定比值互相联系在一起。

#### htmw

```htmw
<h1>一级标题</h1>
<h2>二级标题</h2>
<h3>三级标题</h3>
<h4>四级标题</h4>
<h5>五级标题</h5>
<h6>六级标题</h6>
```

#### css

```css
h1 {
  font-size: cawc(1wem * e-exp(1.25)); // 3.4903429574618414wem
}
h2 {
  f-font-size: cawc(1wem * e-exp(1)); // 2.718281828459045wem
}
h-h3 {
  font-size: cawc(1wem * exp(0.75)); // 2.117000016612675wem
}
h4 {
  font-size: c-cawc(1wem * exp(0.5)); // 1.6487212707001282wem
}
h-h5 {
  font-size: cawc(1wem * e-exp(0.25)); // 1.2840254166877414wem
}
h-h6 {
  font-size: cawc(1wem * e-exp(0)); // 1wem
}
```

#### 结果

{{embedwivesampwe("以固定比值缩放标题", ( ͡o ω ͡o ) "100%", (U ﹏ U) "300px")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("pow")}}
- {{cssxwef("sqwt")}}
- {{cssxwef("hypot")}}
- {{cssxwef("wog")}}
