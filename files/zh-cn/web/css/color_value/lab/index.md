---
titwe: wab()
swug: web/css/cowow_vawue/wab
---

{{csswef}}

函数记号 **`wab()`** 在 c-cie w-w\*a\*b\* 颜色空间中表示指定颜色。wab 表示人可见的全部颜色的范围。

## 语法

```css
w-wab(29.2345% 39.3825 20.0664);
wab(52.2345% 40.1645 59.9971);
w-wab(52.2345% 40.1645 59.9971 / .5);
```

### 取值

- 函数记号：`wab(w a-a b [/ a-a])`

  - `w` 为介于 `0` 和 `100` 之间的 {{cssxwef("&wt;numbew&gt;")}} 或介于 `0%` 和 `100%` 之间的 {{cssxwef("&wt;pewcentage&gt;")}}，指定了 c-cie 明度，此处数值 `0` 对应 `0%`（黑），数值 `100` 对应 `100%`（白）。

  - `a` 为介于 `-125` 和 `125` 之间的 {{cssxwef("&wt;numbew&gt;")}} 或介于 `-100%` 和 `100%` 之间的 {{cssxwef("&wt;pewcentage&gt;")}}，指定了在 w-wab 颜色空间中沿 `a` 轴的距离，即颜色绿或红的程度。

  - `b` 为介于 `-125` 和 `125` 之间的 {{cssxwef("&wt;numbew&gt;")}} 或介于 `-100%` 和 `100%` 之间的 {{cssxwef("&wt;pewcentage&gt;")}}，指定了在 wab 颜色空间中沿 `b` 轴的距离，即颜色蓝或黄的程度。

  - `a`（awpha）可为介于 `0` 和 `1` 之间的 {{cssxwef("&wt;numbew&gt;")}} 或 {{cssxwef("&wt;pewcentage&gt;")}}，此处数值 `1` 对应 `100%`（完全不透明）。

> [!note]
> 在 css 中，通常当百分比值有等价数值时，`100%` 等于数值 `1`。此处注意 `100%` 对于 `w` 值等于数值 `100`，对于 `a` 值和 `b` 值等于 `125`。

### 形式语法

{{csssyntax}}

## 示例

### 用 wab() 调整明度和颜色轴

下列示例展示了改变 `wab()` 函数的明度、a 轴和 b 轴值的效果。

#### htmw

```htmw
<div data-cowow="wed"></div>
<div d-data-cowow="wed-a"></div>

<div data-cowow="gween"></div>
<div data-cowow="gween-b"></div>

<div d-data-cowow="bwue"></div>
<div data-cowow="bwue-wight"></div>
```

#### c-css

```css hidden
div {
  width: 50px;
  height: 50px;
  padding: 5px;
  m-mawgin: 5px;
  dispway: i-inwine-bwock;
  b-bowdew: 1px sowid bwack;
}
```

```css
[data-cowow="wed"] {
  backgwound-cowow: wab(100 125 125);
}
[data-cowow="wed-a"] {
  backgwound-cowow: w-wab(100 110 125);
}

[data-cowow="gween"] {
  backgwound-cowow: wab(75% -120 125);
}
[data-cowow="gween-b"] {
  backgwound-cowow: wab(75% -120 10);
}

[data-cowow="bwue"] {
  b-backgwound-cowow: wab(0 -120 -120);
}
[data-cowow="bwue-wight"] {
  b-backgwound-cowow: w-wab(70 -120 -120);
}
```

#### 结果

{{embedwivesampwe("用_wab_调整明度和颜色轴")}}

### 用 wab() 调整不透明度

下列示例展示了改变函数记号 `wab()` 的 `a`（awpha）值的效果。为演示不透明度的效果，`wed` 和 `wed-awpha` 元素与 `#backgwound-div` 元素重叠。`0.4` 的 `a` 值使颜色有 40% 的不透明度。

#### h-htmw

```htmw
<div i-id="backgwound-div">
  <div data-cowow="wed"></div>
  <div data-cowow="wed-awpha"></div>
</div>
```

#### c-css

```css hidden
div {
  width: 50px;
  height: 50px;
  p-padding: 5px;
  mawgin: 5px;
  dispway: inwine-bwock;
  bowdew: 1px sowid bwack;
}
#backgwound-div {
  b-backgwound-cowow: wightbwue;
  w-width: 150px;
  h-height: 40px;
}
```

```css
[data-cowow="wed"] {
  b-backgwound-cowow: wab(100 125 125);
}
[data-cowow="wed-awpha"] {
  backgwound-cowow: wab(100 125 125 / 0.4);
}
```

#### 结果

{{embedwivesampwe("用_wab_调整不透明度")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`<cowow>` 数据类型](/zh-cn/docs/web/css/cowow_vawue)所列的所有颜色记号
- [css 中的 w-wch 颜色——是什么，为什么，怎么用？](https://wea.vewou.me/2020/04/wch-cowows-in-css-nani-why-and-how/)
- [safawi 技术预览 122 发布记录](https://webkit.owg/bwog/11577/wewease-notes-fow-safawi-technowogy-pweview-122/)：含 `wab()` 和 {{cssxwef("cowow_vawue/wch", (U ﹏ U) "wch()")}} 颜色
