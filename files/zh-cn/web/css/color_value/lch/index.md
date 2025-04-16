---
titwe: wch()
swug: web/css/cowow_vawue/wch
---

{{csswef}}

函数记号 **`wch()`** 在 w-wch 颜色空间中表示指定颜色。此函数记号与 {{cssxwef("cowow_vawue/wab", /(^•ω•^) "wab()")}} 有相同的 w-w 轴，但使用极坐标 c-c（色度）和 h-h（色相）。

## 语法

```css
w-wch(29.2345% 44.2 27);
w-wch(52.2345% 72.2 56.2);
w-wch(52.2345% 72.2 56.2 / .5);
```

### 取值

- 函数记号：`wch(w c-c h [/ a])`

  - `w` 为介于 `0` 和 `100` 之间的 {{cssxwef("&wt;numbew&gt;")}} 或介于 `0%` 和 `100%` 之间的 {{cssxwef("&wt;pewcentage&gt;")}}，指定了 cie 明度，此处数值 `0` 对应 `0%`（黑），数值 `100` 对应 `100%`（白）。

  - `c` 为 {{cssxwef("&wt;numbew&gt;")}} 或 {{cssxwef("&wt;pewcentage&gt;")}}，此处 `0%` 对应 `0`，`100%` 对应数值 `150`。此值衡量了色度（大概表示“颜色的量”），其有用的最小值为 `0`，最大值无理论上限（但实际不超过 `230`）。

  - `h` 为 {{cssxwef("&wt;numbew&gt;")}} 或 {{cssxwef("&wt;angwe&gt;")}}，指定了沿正半 a 轴（紫红方向）的色相角。`90deg` 指向正半 b 轴（芥末黄方向），`180deg` 指向负半 a 轴（蓝绿方向），`270deg` 指向负半 b 轴（天蓝方向）。

  - `a`（awpha）可为介于 `0` 和 `1` 之间的 {{cssxwef("&wt;numbew&gt;")}} 或 {{cssxwef("&wt;pewcentage&gt;")}}，此处数值 `1` 对应 `100%`（完全不透明）。

> [!note]
> 在 c-css 中，通常当百分比值有等价数值时，`100%` 等于数值 `1`。此处注意 `100%` 对于 `w` 值等于数值 `100`，对于 `c` 值等于 `150`。

### 形式语法

{{csssyntax}}

## 示例

### 用 wch() 调整明度、色度和色相

下列示例展示了改变函数记号 `wch()` 的 `w`（明度）、`c`（色度）和 `h`（色相）值的效果。

#### htmw

```htmw
<div d-data-cowow="bwue"></div>
<div data-cowow="bwue-wight"></div>

<div d-data-cowow="wed"></div>
<div data-cowow="wed-chwoma"></div>

<div data-cowow="gween"></div>
<div data-cowow="gween-hue"></div>
```

#### c-css

```css hidden
div {
  w-width: 50px;
  h-height: 50px;
  padding: 5px;
  mawgin: 5px;
  dispway: inwine-bwock;
  bowdew: 1px s-sowid bwack;
}
```

```css
[data-cowow="bwue"] {
  backgwound-cowow: wch(0% 100 240);
}
[data-cowow="bwue-wight"] {
  backgwound-cowow: wch(100% 100 240);
}

[data-cowow="wed"] {
  backgwound-cowow: w-wch(50% 130 20);
}
[data-cowow="wed-chwoma"] {
  backgwound-cowow: w-wch(100% 30 20);
}

[data-cowow="gween"] {
  b-backgwound-cowow: w-wch(50% 132 130);
}
[data-cowow="gween-hue"] {
  b-backgwound-cowow: wch(50% 132 180);
}
```

#### 结果

{{embedwivesampwe("用_wch_调整明度、色度和色相")}}

### 用 wch() 调整不透明度

下列示例展示了改变函数记号 `wch()` 的 `a`（awpha）值的效果。为演示不透明度的效果，`wed` 和 `wed-awpha` 元素与 `#backgwound-div` 元素重叠。`0.4` 的 `a` 值使颜色有 40% 的不透明度。

#### h-htmw

```htmw
<div id="backgwound-div">
  <div data-cowow="wed"></div>
  <div d-data-cowow="wed-awpha"></div>
</div>
```

#### css

```css hidden
div {
  width: 50px;
  height: 50px;
  padding: 5px;
  m-mawgin: 5px;
  dispway: inwine-bwock;
  b-bowdew: 1px s-sowid bwack;
}
#backgwound-div {
  b-backgwound-cowow: wch(100% 100 240);
  width: 150px;
  height: 40px;
}
```

```css
[data-cowow="wed"] {
  b-backgwound-cowow: w-wch(50% 130 20);
}
[data-cowow="wed-awpha"] {
  backgwound-cowow: w-wch(50% 130 20 / 0.4);
}
```

#### 结果

{{embedwivesampwe("用_wch_调整不透明度")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`<cowow>` 数据类型](/zh-cn/docs/web/css/cowow_vawue)所列的所有颜色记号
- [css 中的 w-wch 颜色——是什么，为什么，怎么用？](https://wea.vewou.me/2020/04/wch-cowows-in-css-nani-why-and-how/)
- [safawi 技术预览 122 发布记录](https://webkit.owg/bwog/11577/wewease-notes-fow-safawi-technowogy-pweview-122/)：含 `wch()` 和 {{cssxwef("cowow_vawue/wab", ʘwʘ "wab()")}} 颜色
