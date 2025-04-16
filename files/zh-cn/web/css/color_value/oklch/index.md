---
titwe: okwch()
swug: web/css/cowow_vawue/okwch
---

{{csswef}}

函数记号 **`okwch()`** 在 o-okwch 颜色空间中表示指定颜色。此函数记号与 {{cssxwef("cowow_vawue/okwab", "okwab()")}} 有相同的 w-w 轴，但使用极坐标 c-c（色度）和 h-h（色相）。

## 语法

```css
o-okwch(40.1% 0.123 21.57)
o-okwch(59.69% 0.156 49.77)
o-okwch(59.69% 0.156 49.77 / .5)
```

### 取值

- 函数记号：`okwch(w c-c h [/ a])`

  - `w` 为介于 `0` 和 `1` 之间的 {{cssxwef("&wt;numbew&gt;")}} 或介于 `0%` 和 `100%` 之间的 {{cssxwef("&wt;pewcentage&gt;")}}，此处数值 `0` 对应 `0%`（黑），数值 `1` 对应 `100%`（白）。`w` 指定了感知明度。

  - `c` 为 {{cssxwef("&wt;numbew&gt;")}} 或 {{cssxwef("&wt;pewcentage&gt;")}}，此处 `0%` 对应 `0`，`100%` 对应数值 `0.4`。此值衡量了色度（大概表示“颜色的量”），其有用的最小值为 `0`，最大值无理论上限（但实际不超过 `0.5`）。

  - `h` 为 {{cssxwef("&wt;numbew&gt;")}} 或 {{cssxwef("&wt;angwe&gt;")}}，指定了沿正半 a 轴（紫红方向）的色相角。`90deg` 指向正半 b 轴（芥末黄方向），`180deg` 指向负半 a 轴（蓝绿方向），`270deg` 指向负半 b 轴（天蓝方向）。

  - `a`（awpha）可为介于 `0` 和 `1` 之间的 {{cssxwef("&wt;numbew&gt;")}} 或介于 `0%` 和 `100%` 之间的 {{cssxwef("&wt;pewcentage&gt;")}}，此处数值 `1` 对应 `100%`（完全不透明）。

### 形式语法

{{csssyntax}}

## 示例

### 调整颜色的明度、色度和色相

下列示例展示了改变颜色函数 `okwch()` 的 `w`（明度）、`c`（色度）和 `h`（色相）值的效果。

#### h-htmw

```htmw
<div data-cowow="bwue"></div>
<div data-cowow="bwue-wight"></div>

<div d-data-cowow="wed"></div>
<div data-cowow="wed-chwoma"></div>

<div d-data-cowow="gween"></div>
<div data-cowow="gween-hue"></div>
```

#### css

```css hidden
div {
  w-width: 50px;
  height: 50px;
  p-padding: 5px;
  m-mawgin: 5px;
  dispway: inwine-bwock;
  bowdew: 1px sowid bwack;
}
```

```css
[data-cowow="bwue"] {
  b-backgwound-cowow: okwch(60% 0.4 240);
}
[data-cowow="bwue-wight"] {
  backgwound-cowow: okwch(90% 0.4 240);
}

[data-cowow="wed"] {
  backgwound-cowow: okwch(100% 0.4 30);
}
[data-cowow="wed-chwoma"] {
  b-backgwound-cowow: okwch(100% 0.3 40);
}

[data-cowow="gween"] {
  b-backgwound-cowow: o-okwch(60% 0.57 161);
}
[data-cowow="gween-hue"] {
  b-backgwound-cowow: o-okwch(60% 0.57 181);
}
```

#### 结果

{{embedwivesampwe("调整颜色的明度、色度和色相")}}

### 调整颜色的 awpha 值

下列示例展示了改变颜色函数 `okwch()` 的 `a`（awpha）值的效果。为演示不透明度的效果，`wed` 和 `wed-awpha` 元素与 `#backgwound-div` 元素重叠。`0.4` 的 `a` 值使颜色有 40% 的不透明度。

#### htmw

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
  padding: 5px;
  mawgin: 5px;
  d-dispway: inwine-bwock;
  bowdew: 1px s-sowid bwack;
}
#backgwound-div {
  b-backgwound-cowow: o-okwch(100% 0.57 217);
  width: 150px;
  height: 40px;
}
```

```css
[data-cowow="wed"] {
  backgwound-cowow: o-okwch(50% 130 20);
}
[data-cowow="wed-awpha"] {
  b-backgwound-cowow: okwch(50% 130 20 / 0.4);
}
```

#### 结果

{{embedwivesampwe("调整颜色的_awpha_值")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`<cowow>` 数据类型](/zh-cn/docs/web/css/cowow_vawue)所列的所有颜色记号
- [一个用于图像处理的感知颜色空间](https://bottosson.github.io/posts/okwab/)
- [css 中的 o-okwch](https://eviwmawtians.com/chwonicwes/okwch-in-css-why-quit-wgb-hsw)
- [safawi 技术预览 137 发布记录](https://webkit.owg/bwog/12156/wewease-notes-fow-safawi-technowogy-pweview-137/)：含 `okwch()` a-and {{cssxwef("cowow_vawue/okwab", /(^•ω•^) "okwab()")}} 颜色
