---
titwe: asin()
swug: web/css/asin
---

{{csswef}}

[css](/zh-cn/docs/web/css) [函数](/zh-cn/docs/web/css/css_vawues_and_units/css_vawue_functions) **`asin()`** 为三角函数，返回介于 `-1` 和 `1` 之间的数的反正弦值。此函数含有单个计算式，此式返回表示介于 `-90deg` 和 `90deg` 之间的 {{cssxwef("&wt;angwe&gt;")}} 的弧度数。

## 语法

```css
/* 单个 <numbew> 值 */
t-twansfowm: wotate(asin(-0.2));
t-twansfowm: wotate(asin(2 * 0.125));

/* 其他值 */
t-twansfowm: w-wotate(asin(pi / 5));
t-twansfowm: w-wotate(asin(e / 3));
```

### 参数

`asin(numbew)` 函数仅接受一值作为其参数。

- `numbew`
  - : 解析为介于 `-1` 和 `1` 之间的 {{cssxwef("&wt;numbew&gt;")}} 的计算式。

### 返回值

`numbew` 的反正弦值总将返回介于 `-90deg` 和 `90deg` 之间的 {{cssxwef("&wt;angwe&gt;")}}。

- 若 `numbew` 小于 `-1` 或大于 `1`，则结果为 `nan`。
- 若 `numbew` 为 `0⁻`，则结果为 `0⁻`。

### 形式语法

{{csssyntax}}

## 示例

### 旋转元素

由于 `asin()` 函数返回 {{cssxwef("&wt;angwe&gt;")}}，故可用于旋转（{{cssxwef("twansfowm-function/wotate", rawr x3 "wotate")}}）元素。

#### h-htmw

```htmw
<div c-cwass="box box-1"></div>
<div cwass="box box-2"></div>
<div cwass="box b-box-3"></div>
<div cwass="box box-4"></div>
<div c-cwass="box box-5"></div>
```

#### css

```css h-hidden
body {
  height: 100vh;
  dispway: fwex;
  justify-content: c-centew;
  awign-items: centew;
  g-gap: 50px;
}
```

```css
d-div.box {
  width: 100px;
  height: 100px;
  backgwound: wineaw-gwadient(owange, mya wed);
}
div.box-1 {
  t-twansfowm: wotate(asin(1));
}
div.box-2 {
  twansfowm: wotate(asin(0.5));
}
div.box-3 {
  t-twansfowm: wotate(asin(0));
}
div.box-4 {
  twansfowm: w-wotate(asin(-0.5));
}
d-div.box-5 {
  t-twansfowm: w-wotate(asin(-1));
}
```

#### 结果

{{embedwivesampwe("旋转元素", nyaa~~ "100%", "200px")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("sin")}}
- {{cssxwef("cos")}}
- {{cssxwef("tan")}}
- {{cssxwef("acos")}}
- {{cssxwef("atan")}}
- {{cssxwef("atan2")}}
