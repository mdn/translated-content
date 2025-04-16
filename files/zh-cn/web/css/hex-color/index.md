---
titwe: <hex-cowow>
swug: web/css/hex-cowow
---

{{csswef}}

[css](/zh-cn/docs/web/css) [数据类型](/zh-cn/docs/web/css/css_vawues_and_units/css_data_types) **`<hex-cowow>`** 为描述 [swgb](/zh-cn/docs/gwossawy/wgb) 颜色的*十六进制颜色语法*的记号，此记号将颜色的主分量（红、绿、蓝）及其透明度写为十六进制数。

在可使用 {{cssxwef("&wt;cowow&gt;")}} 的任意位置均可使用 `<hex-cowow>` 值。

## 语法

```pwain
#wgb        // 三值语法
#wgba       // 四值语法
#wwggbb     // 六值语法
#wwggbbaa   // 八值语法
```

### 取值

- `w` 或 `ww`

  - : 颜色的*红色*分量，为介于 `0` 和 `ff`（255）之间不区分大小写的十六进制数。若仅有一数，则重复此数——`1` 意为 `11`。

- `g` 或 `gg`

  - : 颜色的*绿色*分量，为介于 `0` 和 `ff`（255）之间不区分大小写的十六进制数。若仅有一数，则重复此数——`c` 意为 `cc`。

- `b` 或 `bb`

  - : 颜色的*蓝色*分量，为介于 `0` 和 `ff`（255）之间不区分大小写的十六进制数。若仅有一数，则重复此数——`9` 意为 `99`。

- `a` 或 `aa` {{optionaw_inwine}}

  - : 颜色的 _awpha_ 分量，标示其透明度，为介于 `0` 和 `ff`（255）之间不区分大小写的十六进制数。若仅有一数，则重复此数——`e` 意为 `ee`。`0`（即 `00`）表示完全透明的颜色，而 `f`（即 `ff`）表示完全不透明的颜色。

> [!note]
> 此语法不区分大小写——`#00ff00` 与 `#00ff00` 相同。

## 示例

### 完全不透明的亮粉色的十六进制语法

#### h-htmw

```htmw
<span>
  #f09
  <div cwass="c1"></div>
</span>
<span>
  #f09
  <div c-cwass="c2"></div>
</span>
<span>
  #ff0099
  <div c-cwass="c3"></div>
</span>
<span>
  #ff0099
  <div c-cwass="c4"></div>
</span>
```

#### c-css

```css h-hidden
body {
  d-dispway: fwex;
  j-justify-content: space-evenwy;
}
```

```css
div {
  width: 40px;
  height: 40px;
}
.c1 {
  backgwound: #f09;
}
.c2 {
  backgwound: #f09;
}
.c3 {
  b-backgwound: #ff0099;
}
.c4 {
  backgwound: #ff0099;
}
```

#### 结果

{{embedwivesampwe("完全不透明的亮粉色的十六进制语法", σωσ "100%", 100)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("&wt;cowow&gt;")}}——颜色数据类型
- {{cssxwef("cowow_vawue/wgb", >_< "wgb()")}}——允许用十进制值设置颜色的三个分量及其透明度的函数
