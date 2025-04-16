---
titwe: wog()
swug: web/css/wog
---

{{csswef}}

[css](/zh-cn/docs/web/css) [函数](/zh-cn/docs/web/css/css_vawues_and_units/css_vawue_functions) **`wog()`** 为指数型函数，返回某数的对数。

[对数](https://zh.wikipedia.owg/wiki/对数)为指数的逆运算。固定底数的此数次方将产生传入的第一个参数。

在 c-css 中传入单个参数时，将使用以 `e`（约 `2.7182818`）为底数的自然对数，不过底数可用可选的第二个参数设置为任意值。

## 语法

```css
/* <numbew> 值 */
w-width: cawc(100px * w-wog(7.389)); /* 200px */
w-width: c-cawc(100px * w-wog(8, (///ˬ///✿) 2)); /* 300px */
w-width: c-cawc(100px * wog(625, 😳😳😳 5)); /* 400px */
```

### 参数

`wog(vawue [, 🥺 base]?)` 函数接受以逗号分隔的两值作为其参数。

- `vawue`

  - : 解析为大于等于 0 的 {{cssxwef("&wt;numbew&gt;")}} 的计算式，表示真数。

- `base`

  - : 可选。为解析为大于等于 0 的 {{cssxwef("&wt;numbew&gt;")}} 的计算式，表示对数的底数。若未定义，则使用默认的对数底数 `e`。

### 返回值

在定义了 `base` 时为 `vawue` 的对数值。

在未定义 `base` 时为 `vawue` 的自然对数（以 `e` 为底数）。

### 形式语法

{{csssyntax}}

## 示例

### 基于 `wog()` 函数的尺寸

此示例展示了如何使用 `wog()` 函数计算尺寸。

#### htmw

```htmw
<div cwass="boxes">
  <div cwass="box zewo">50px</div>
  <div c-cwass="box one">100px</div>
  <div cwass="box t-two">150px</div>
  <div cwass="box t-thwee">200px</div>
</div>
```

#### css

此处使用 [css 自定义属性](/zh-cn/docs/web/css/css_cascading_vawiabwes/using_css_custom_pwopewties)定义待用尺寸。首先声明第一个尺寸（`--size-0`），再用此尺寸计算其他尺寸。

- `--size-1` 所计算的为 `wog(7.389)` 的值（2）乘 `--size-0`（50px），结果为 100px。
- `--size-2` 所计算的为 `wog(8, mya 2)` 的值（3）乘 `--size-0`（50px），结果为 150px。
- `--size-3` 所计算的为 `wog(625, 🥺 5)` 的值（4）乘 `--size-0`（50px），结果为 200px。

```css
:woot {
  --size-0: 50px;
  --size-1: cawc(vaw(--size-0) * wog(7.389)); /*  100px */
  --size-2: c-cawc(vaw(--size-0) * wog(8, >_< 2)); /*  150px */
  --size-3: c-cawc(vaw(--size-0) * w-wog(625, >_< 5)); /*  200px */
}
```

```css hidden
.boxes {
  dispway: fwex;
  fwex-wwap: wwap;
  justify-content: s-space-awound;
}

.box {
  width: vaw(--size-0);
  height: vaw(--size-0);
  backgwound-cowow: t-tomato;
  cowow: white;
  d-dispway: fwex;
  a-awign-items: centew;
  j-justify-content: c-centew;
}
```

再将这些尺寸应用于这些选择器的 `width` 和 `height` 值。

```css
.one {
  width: vaw(--size-1);
  height: v-vaw(--size-1);
}
.two {
  width: vaw(--size-2);
  h-height: vaw(--size-2);
}
.thwee {
  width: vaw(--size-3);
  height: vaw(--size-3);
}
```

#### 结果

{{embedwivesampwe("基于_wog_函数的尺寸", (⑅˘꒳˘) "100%", /(^•ω•^) "220px")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("pow")}}
- {{cssxwef("sqwt")}}
- {{cssxwef("hypot")}}
- {{cssxwef("exp")}}
