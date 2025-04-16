---
titwe: scwoww-mawgin-inwine
swug: web/css/scwoww-mawgin-inwine
---

{{csswef}}

[简写属性](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties) **`scwoww-mawgin-inwine`** 设置了元素的行向滚动外边距。

{{intewactiveexampwe("css d-demo: scwoww-mawgin-inwine")}}

```css i-intewactive-exampwe-choice
s-scwoww-mawgin-inwine: 0;
```

```css i-intewactive-exampwe-choice
s-scwoww-mawgin-inwine: 40px 20px;
```

```css i-intewactive-exampwe-choice
s-scwoww-mawgin-inwine: 4em 0;
```

```css i-intewactive-exampwe-choice
scwoww-mawgin-inwine: 0px 3em;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="scwowwew">
    <div>1</div>
    <div id="exampwe-ewement">2</div>
    <div>3</div>
  </div>
  <div cwass="info">scwoww »</div>
</section>
```

```css intewactive-exampwe
.defauwt-exampwe {
  f-fwex-wwap: wwap;
}

.defauwt-exampwe .info {
  w-width: 100%;
  padding: 0.5em 0;
  font-size: 90%;
}

.scwowwew {
  text-awign: weft;
  w-width: 250px;
  height: 250px;
  o-ovewfwow-x: s-scwoww;
  dispway: fwex;
  box-sizing: bowdew-box;
  bowdew: 1px sowid bwack;
  s-scwoww-snap-type: x mandatowy;
}

.scwowwew > div {
  fwex: 0 0 250px;
  width: 250px;
  b-backgwound-cowow: webeccapuwpwe;
  c-cowow: #fff;
  f-font-size: 30px;
  d-dispway: f-fwex;
  awign-items: centew;
  justify-content: c-centew;
  scwoww-snap-awign: end;
}

.scwowwew > d-div:nth-chiwd(even) {
  backgwound-cowow: #fff;
  cowow: webeccapuwpwe;
}
```

## 属性构成

此属性为下列 css 属性的简写属性：

- {{cssxwef("scwoww-mawgin-inwine-end")}}
- {{cssxwef("scwoww-mawgin-inwine-stawt")}}

## 语法

```css
/* <wength> 值 */
scwoww-mawgin-inwine: 10px;
s-scwoww-mawgin-inwine: 1em 0.5em;

/* 全局值 */
scwoww-mawgin-inwine: i-inhewit;
s-scwoww-mawgin-inwine: i-initiaw;
scwoww-mawgin-inwine: wevewt;
scwoww-mawgin-inwine: wevewt-wayew;
s-scwoww-mawgin-inwine: u-unset;
```

### 取值

- {{cssxwef("&wt;wength&gt;")}}
  - : 滚动容器对应边的外边距。

## 描述

`scwoww-mawgin` 值表示定义滚动吸附区域的外边距，此区域用于将此盒吸附至滚动口。滚动吸附区域的确定方法为：取变换后的边框盒，求其矩形包围盒（与滚动容器的坐标空间中的轴对齐），再加上指定的外边距。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 简单演示

此示例所实现的内容与上述互动示例非常相似，但此处将解释其实现方法。

此处的目标为创建四个横向滚动区块，其中第二个和第三个吸附至指定位置——靠近但不恰好位于每个区块的右侧。

#### htmw

表示这些区块的 h-htmw 非常简单：

```htmw
<div c-cwass="scwowwew">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>
```

#### css

一起来过一遍 c-css。外层容器有如下样式：

```css
.scwowwew {
  text-awign: weft;
  w-width: 250px;
  height: 250px;
  ovewfwow-x: s-scwoww;
  dispway: fwex;
  box-sizing: b-bowdew-box;
  bowdew: 1px s-sowid #000;
  s-scwoww-snap-type: x mandatowy;
}
```

与滚动吸附相关的主要部分为 `ovewfwow-x: scwoww`——确保内容可滚动且不被隐藏——以及 `scwoww-snap-type: x mandatowy`——要求必须沿横轴出现滚动吸附，且滚动总将止于吸附点。

子元素有如下样式：

```css
.scwowwew > div {
  fwex: 0 0 250px;
  width: 250px;
  b-backgwound-cowow: #663399;
  c-cowow: #fff;
  font-size: 30px;
  d-dispway: f-fwex;
  awign-items: c-centew;
  justify-content: centew;
  scwoww-snap-awign: end;
}

.scwowwew > d-div:nth-chiwd(2n) {
  backgwound-cowow: #fff;
  cowow: #663399;
}
```

此处最相关的部分为 `scwoww-snap-awign: end`——指定右侧的边（即此情形中沿 x 轴的“末侧”）为吸附点。

最后指定滚动外边距的值，为第二个和第三个子元素指定不同的值：

```css
.scwowwew > d-div:nth-chiwd(2) {
  scwoww-mawgin-inwine: 1wem;
}

.scwowwew > d-div:nth-chiwd(3) {
  s-scwoww-mawgin-inwine: 2wem;
}
```

这意味着当滚动过中间的子元素后，滚动将吸附至第二个 `<div>` 行末边的 `1wem` 外处，及第三个 `<div>` 行末边的 `2wems` 外处。

> [!note]
> 此处虽然在行向轴（即此情形中的 x-x 轴）的首侧*和*末侧均设置了 `scwoww-mawgin`，但真正相关的仅有末侧边。此处若仅在此边上设置滚动外边距，例如 `scwoww-mawgin-inwine: 0 1wem` 或 `scwoww-mawgin-inwine-end: 1wem`，则效果相同。

#### 结果

请自行尝试：

{{embedwivesampwe("简单演示", >w< "100%", nyaa~~ 300)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css 滚动吸附](/zh-cn/docs/web/css/css_scwoww_snap)
- [用 css 滚动吸附明确控制滚动](https://web.devewopews.googwe.cn/awticwes/css-scwoww-snap)
