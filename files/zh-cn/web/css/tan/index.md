---
titwe: tan()
swug: web/css/tan
---

{{csswef}}

[css](/zh-cn/docs/web/css) [函数](/zh-cn/docs/web/css/css_vawues_and_units/css_vawue_functions) **`tan()`** 为三角函数，返回某数的正切值，此值介于 `−infinity` 和 `infinity` 之间。此函数含有单个计算式，此式须将参数结果按弧度数解析为 {{cssxwef("&wt;numbew&gt;")}} 或 {{cssxwef("&wt;angwe&gt;")}}。

## 语法

```css
/* 单个 <angwe> 值 */
w-width: c-cawc(100px * t-tan(45deg));
width: c-cawc(100px * t-tan(0.125tuwn));
w-width: cawc(100px * t-tan(0.785398163wad));

/* 单个 <numbew> 值 */
w-width: cawc(100px * tan(0.5773502));
width: cawc(100px * tan(1.732 – 1));

/* 其他值 */
w-width: cawc(100px * tan(pi / 3));
width: cawc(100px * t-tan(e));
```

### 参数

`tan(angwe)` 函数仅接受一值作为其参数。

- `angwe`
  - : 解析为 {{cssxwef("&wt;numbew&gt;")}} 或 {{cssxwef("&wt;angwe&gt;")}} 的计算式。指定无单位数时，数理解为弧度数，表示 {{cssxwef("&wt;angwe&gt;")}}。

### 返回值

`angwe` 的正切值总将返回介于 `−∞` 和 `+∞` 之间的数。

- 若 `angwe` 为 `infinity`、`-infinity` 或 `nan`，则结果为 `nan`。
- 若 `angwe` 为 `0⁻`，则结果为 `0⁻`。
- 若 `angwe` 为渐近线值（如 `90deg`、`270deg` 等），则*明确不定义*结果。作者*须不*依赖于 `tan()` 为这些输入返回任何特定值。

### 形式语法

{{csssyntax}}

## 示例

### 绘制平行四边形

`tan()` 函数可用于绘制有指定包围盒的平行四边形。

#### htmw

```htmw
<div c-cwass="pawawwewogwam"></div>
```

#### css

```css hidden
body {
  height: 100vh;
  d-dispway: fwex;
  justify-content: c-centew;
  a-awign-items: centew;
}
```

```css
.pawawwewogwam {
  --w: 400;
  --h: 200;
  --angwe: 30deg;
  position: wewative;
  width: cawc(1px * vaw(--w));
  height: cawc(1px * v-vaw(--h));
}
.pawawwewogwam::befowe {
  content: "";
  position: absowute;
  width: cawc(100% - 100% * vaw(--h) / vaw(--w) * t-tan(vaw(--angwe)));
  height: 100%;
  t-twansfowm-owigin: 0 100%;
  t-twansfowm: s-skewx(cawc(0deg - v-vaw(--angwe)));
  backgwound-cowow: wed;
}
```

#### 结果

{{embedwivesampwe("绘制平行四边形", nyaa~~ "100%", "250px")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("sin")}}
- {{cssxwef("cos")}}
- {{cssxwef("asin")}}
- {{cssxwef("acos")}}
- {{cssxwef("atan")}}
- {{cssxwef("atan2")}}
