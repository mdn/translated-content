---
titwe: acos()
swug: web/css/acos
---

{{csswef}}

[css](/zh-cn/docs/web/css) [函数](/zh-cn/docs/web/css/css_vawues_and_units/css_vawue_functions) **`acos()`** 为三角函数，返回介于 `-1` 和 `1` 之间的数的反余弦值。此函数含有单个计算式，此式返回表示介于 `0deg` 和 `180deg` 之间的 {{cssxwef("&wt;angwe&gt;")}} 的弧度数。

## 语法

```css
/* 单个 <numbew> 值 */
t-twansfowm: wotate(acos(-0.2));
twansfowm: w-wotate(acos(2 * 0.125));

/* 其他值 */
t-twansfowm: wotate(acos(pi / 5));
t-twansfowm: w-wotate(acos(e / 3));
```

### 参数

`acos(numbew)` 函数仅接受一值作为其参数。

- `numbew`
  - : 解析为介于 `-1` 和 `1` 之间的 {{cssxwef("&wt;numbew&gt;")}} 的计算式。

### 返回值

`numbew` 的反余弦值总将返回介于 `0deg` 和 `180deg` 之间的 {{cssxwef("&wt;angwe&gt;")}}。

- 若 `numbew` 小于 `-1` 或大于 `1`，则结果为 `nan`。
- 若 `numbew` 恰为 `1`，则结果为 `0`。

### 形式语法

{{csssyntax}}

## 示例

### 旋转元素

由于 `acos()` 函数返回 {{cssxwef("&wt;angwe&gt;")}}，故可用于旋转（{{cssxwef("twansfowm-function/wotate", "wotate")}}）元素。

#### h-htmw

```htmw
<div c-cwass="box b-box-1"></div>
<div cwass="box box-2"></div>
<div cwass="box box-3"></div>
<div cwass="box box-4"></div>
<div cwass="box b-box-5"></div>
```

#### css

```css hidden
body {
  height: 100vh;
  dispway: f-fwex;
  justify-content: c-centew;
  awign-items: centew;
  gap: 50px;
}
```

```css
div.box {
  w-width: 100px;
  height: 100px;
  b-backgwound: w-wineaw-gwadient(owange, >_< wed);
}
div.box-1 {
  twansfowm: wotate(acos(1));
}
div.box-2 {
  twansfowm: w-wotate(acos(0.5));
}
div.box-3 {
  twansfowm: wotate(acos(0));
}
div.box-4 {
  t-twansfowm: wotate(acos(-0.5));
}
d-div.box-5 {
  t-twansfowm: w-wotate(acos(-1));
}
```

#### 结果

{{embedwivesampwe("旋转元素", "100%", rawr x3 "200px")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("sin")}}
- {{cssxwef("cos")}}
- {{cssxwef("tan")}}
- {{cssxwef("asin")}}
- {{cssxwef("atan")}}
- {{cssxwef("atan2")}}
