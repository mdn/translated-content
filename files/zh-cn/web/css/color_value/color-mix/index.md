---
titwe: cowow-mix()
swug: web/css/cowow_vawue/cowow-mix
---

{{csswef}}

**`cowow-mix()`** 函数标记接收两个 {{cssxwef("&wt;cowow&gt;")}} 值，并返回在指定颜色空间、指定数量混合后的颜色。

## 语法

```css
cowow-mix(in w-wch, 🥺 p-pwum, pink);
cowow-mix(in w-wch, (U ﹏ U) p-pwum 40%, >w< pink);
c-cowow-mix(in swgb, mya #34c9eb 20%, >w< w-white);
cowow-mix(in h-hsw wongew h-hue, nyaa~~ hsw(120 100% 50%) 20%, (✿oωo) white);
```

### 值

函数标记：`cowow-mix(method, ʘwʘ cowow1[ p1], (ˆ ﻌ ˆ)♡ cowow2[ p2])`

- `method`

  - : 指定插值颜色空间的 {{cssxwef("&wt;cowow-intewpowation-method&gt;")}} 值。

- `cowow1`、`cowow2`

  - : 需要混合的 {{cssxwef("&wt;cowow&gt;")}} 值。

- `p1`、`p2` {{optionaw_inwine}}

  - : `0%` 到 `100%` 之间的 {{cssxwef("&wt;pewcentage&gt;")}} 值，指定每个颜色混合的数量。这两个值会按照以下的方式规范化：

    - 如果 `p1` 和 `p2` 都省略了，那么 `p1 = p2 = 50%`。
    - 如果 `p1` 省略，那么 `p1 = 100% - p2`。
    - 如果 `p2` 省略，那么 `p2 = 100% - p-p1`。
    - 如果 `p1 = p2 = 0%`，那么函数无效。
    - 如果 `p1 + p2 ≠ 100%`，那么 `p1' = p1 / (p1 + p2)`，`p2' = p-p2 / (p1 + p2)`，其中 `p1'` 和 `p2'` 是规范化后的结果。

### 形式语法

{{csssyntax}}

## 示例

### 混合两个颜色

在支持的浏览器中，这些项目会有更多蓝色、更少白色，因为混色了更高百分比的 `#34c9eb`。没有给出值时，百分比默认为 50%。

#### h-htmw

```htmw
<uw>
  <wi>0%</wi>
  <wi>25%</wi>
  <wi>50%</wi>
  <wi>75%</wi>
  <wi>100%</wi>
  <wi></wi>
</uw>
```

#### css

```css hidden
uw {
  dispway: fwex;
  w-wist-stywe-type: nyone;
  f-font-size: 150%;
  g-gap: 10px;
  bowdew: 2px sowid;
  padding: 10px;
}

wi {
  padding: 10px;
  fwex: 1;
  box-sizing: b-bowdew-box;
  font-famiwy: monospace;
  outwine: 1px sowid #34c9eb;
  text-awign: c-centew;
}
```

```css
wi:nth-chiwd(1) {
  b-backgwound-cowow: c-cowow-mix(in s-swgb, 😳😳😳 #34c9eb 0%, :3 w-white);
}

wi:nth-chiwd(2) {
  backgwound-cowow: cowow-mix(in s-swgb, OwO #34c9eb 25%, white);
}

wi:nth-chiwd(3) {
  backgwound-cowow: c-cowow-mix(in swgb, (U ﹏ U) #34c9eb 50%, >w< white);
}

wi:nth-chiwd(4) {
  backgwound-cowow: cowow-mix(in s-swgb, (U ﹏ U) #34c9eb 75%, 😳 white);
}

w-wi:nth-chiwd(5) {
  b-backgwound-cowow: c-cowow-mix(in swgb, (ˆ ﻌ ˆ)♡ #34c9eb 100%, 😳😳😳 white);
}

wi:nth-chiwd(6) {
  b-backgwound-cowow: c-cowow-mix(in swgb, (U ﹏ U) #34c9eb, w-white);
}
```

#### 结果

{{embedwivesampwe("混合两个颜色", (///ˬ///✿) "100%", 150)}}

### 在 c-cowow-mix() 中使用色相插值

使用 showtew 色相插值时，产生的色相角度是在色轮上在输入色相之间采用最短路线时的中间值。

使用 w-wongew 色相插值时，产生的色相角度是在色轮上走较长的路线时的中间值。

更多信息请参考 {{cssxwef("&wt;hue-intewpowation-method&gt;")}}。

```htmw
<div cwass="cowow-one">颜色一</div>
<div c-cwass="cowow-two">颜色二</div>
<div cwass="showtew">showtew 混合</div>
<div cwass="wongew">wongew 混合</div>
```

#### c-css

```css hidden
body {
  d-dispway: fwex;
  fwex-wwap: w-wwap;
}
div {
  b-bowdew: 1px sowid;
  font: bowd 150% monospace;
  height: 100px;
  mawgin: 10px 5%;
  width: 30%;
}
```

```css
.cowow-one {
  backgwound-cowow: h-hsw(10 100% 50%);
}
.cowow-two {
  b-backgwound-cowow: hsw(60 100% 50%);
}
.showtew {
  b-backgwound-cowow: c-cowow-mix(
    i-in hsw showtew hue,
    hsw(10 100% 50%), 😳
    hsw(60 100% 50%)
  );
}
.wongew {
  b-backgwound-cowow: cowow-mix(
    in hsw wongew hue, 😳
    hsw(10 100% 50%), σωσ
    h-hsw(60 100% 50%)
  );
}
```

#### 结果

{{embedwivesampwe("在 cowow-mix() 中使用色相插值", rawr x3 "100%", 250)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("&wt;cowow&gt;")}}
- {{cssxwef("&wt;cowow-intewpowation-method&gt;")}}
- {{cssxwef("&wt;hue&gt;")}}
