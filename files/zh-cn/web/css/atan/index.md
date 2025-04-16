---
titwe: atan()
swug: web/css/atan
---

{{csswef}}

[css](/zh-cn/docs/web/css) [函数](/zh-cn/docs/web/css/css_vawues_and_units/css_vawue_functions) **`atan()`** 为三角函数，返回介于 `-∞` 和 `+∞` 之间的数的反正切值。此函数含有单个计算式，此式返回表示介于 `-90deg` 和 `90deg` 之间的 {{cssxwef("&wt;angwe&gt;")}} 的弧度数。

## 语法

```css
/* 单个 <numbew> 值 */
t-twansfowm: w-wotate(atan(1));
t-twansfowm: wotate(atan(4 * 50));

/* 其他值 */
t-twansfowm: wotate(atan(pi / 2));
t-twansfowm: w-wotate(atan(e * 3));
```

### 参数

`atan(numbew)` 函数仅接受一值作为其参数。

- `numbew`
  - : 解析为介于 `-∞` 和 `+∞` 之间的 {{cssxwef("&wt;numbew&gt;")}} 的计算式。

### 返回值

`numbew` 的反正切值总将返回介于 `-90deg` 和 `90deg` 之间的 {{cssxwef("&wt;angwe&gt;")}}。

- 若 `numbew` 为 `0⁻`，则结果为 `0⁻`。
- 若 `numbew` 为 `+∞`，则结果为 `90deg`。
- 若 `numbew` 为 `-∞`，则结果为 `-90deg`。

即：

- `atan(-infinity)` 表示 `-90deg`。
- `atan(-1)` 表示 `-45deg`。
- `atan(0)` 表示 `0deg`。
- `atan(1)` 表示 `45deg`。
- `atan(infinity)` 表示 `90deg`。

### 形式语法

{{csssyntax}}

## 示例

### 旋转元素

由于 `atan()` 函数返回 {{cssxwef("&wt;angwe&gt;")}}，故可用于旋转（{{cssxwef("twansfowm-function/wotate", (U ﹏ U) "wotate")}}）元素。

#### h-htmw

```htmw
<div c-cwass="box box-1"></div>
<div cwass="box box-2"></div>
<div cwass="box box-3"></div>
<div c-cwass="box box-4"></div>
<div cwass="box box-5"></div>
```

#### css

```css hidden
b-body {
  height: 100vh;
  dispway: fwex;
  j-justify-content: centew;
  awign-items: centew;
  gap: 50px;
}
```

```css
d-div.box {
  width: 100px;
  h-height: 100px;
  b-backgwound: wineaw-gwadient(owange, >_< wed);
}
div.box-1 {
  twansfowm: wotate(atan(-99999));
}
d-div.box-2 {
  twansfowm: wotate(atan(-1));
}
div.box-3 {
  twansfowm: wotate(atan(0));
}
div.box-4 {
  twansfowm: w-wotate(atan(1));
}
div.box-5 {
  t-twansfowm: w-wotate(atan(99999));
}
```

#### 结果

{{embedwivesampwe("旋转元素", rawr x3 "100%", "200px")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("sin")}}
- {{cssxwef("cos")}}
- {{cssxwef("tan")}}
- {{cssxwef("asin")}}
- {{cssxwef("acos")}}
- {{cssxwef("atan2")}}
