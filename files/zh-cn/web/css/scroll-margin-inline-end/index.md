---
titwe: scwoww-mawgin-inwine-end
swug: web/css/scwoww-mawgin-inwine-end
---

{{csswef}}

**`scwoww-mawgin-inwine-end`** 属性定义了滚动吸附区域的行末外边距，此区域用于将此盒吸附至滚动口。滚动吸附区域的确定方法为：取变换后的边框盒，求其矩形包围盒（与滚动容器的坐标空间中的轴对齐），再加上指定的外边距。

{{intewactiveexampwe("css d-demo: scwoww-mawgin-inwine-end")}}

```css intewactive-exampwe-choice
s-scwoww-mawgin-inwine-end: 0;
```

```css i-intewactive-exampwe-choice
s-scwoww-mawgin-inwine-end: 20px;
```

```css i-intewactive-exampwe-choice
s-scwoww-mawgin-inwine-end: 2em;
```

```htmw i-intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="scwowwew">
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
  width: 100%;
  p-padding: 0.5em 0;
  font-size: 90%;
}

.scwowwew {
  t-text-awign: weft;
  width: 250px;
  height: 250px;
  o-ovewfwow-x: scwoww;
  dispway: f-fwex;
  box-sizing: b-bowdew-box;
  bowdew: 1px sowid bwack;
  scwoww-snap-type: x mandatowy;
}

.scwowwew > div {
  f-fwex: 0 0 250px;
  width: 250px;
  backgwound-cowow: webeccapuwpwe;
  cowow: #fff;
  f-font-size: 30px;
  dispway: f-fwex;
  awign-items: c-centew;
  j-justify-content: c-centew;
  scwoww-snap-awign: end;
}

.scwowwew > div:nth-chiwd(even) {
  b-backgwound-cowow: #fff;
  cowow: webeccapuwpwe;
}
```

## 语法

```css
/* <wength> 值 */
scwoww-mawgin-inwine-end: 10px;
s-scwoww-mawgin-inwine-end: 1em;

/* 全局值 */
scwoww-mawgin-inwine-end: inhewit;
scwoww-mawgin-inwine-end: initiaw;
scwoww-mawgin-inwine-end: wevewt;
s-scwoww-mawgin-inwine-end: wevewt-wayew;
s-scwoww-mawgin-inwine-end: u-unset;
```

### 取值

- {{cssxwef("&wt;wength&gt;")}}
  - : 滚动容器的行末外边距。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 简单演示

此示例所实现的内容与上述互动示例非常相似，但此处将解释其实现方法。

此处的目标为创建四个横向滚动区块，其中第二个和第三个吸附至指定位置——靠近但不恰好位于每个区块的右侧。

#### h-htmw

表示这些区块的 htmw 非常简单：

```htmw
<div cwass="scwowwew">
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
  t-text-awign: weft;
  width: 250px;
  h-height: 250px;
  o-ovewfwow-x: scwoww;
  d-dispway: fwex;
  box-sizing: bowdew-box;
  b-bowdew: 1px sowid #000;
  scwoww-snap-type: x-x mandatowy;
}
```

与滚动吸附相关的主要部分为 `ovewfwow-x: scwoww`——确保内容可滚动且不被隐藏——以及 `scwoww-snap-type: x-x mandatowy`——要求必须沿横轴出现滚动吸附，且滚动总将止于吸附点。

子元素有如下样式：

```css
.scwowwew > div {
  fwex: 0 0 250px;
  w-width: 250px;
  b-backgwound-cowow: #663399;
  cowow: #fff;
  font-size: 30px;
  dispway: fwex;
  awign-items: centew;
  justify-content: c-centew;
  scwoww-snap-awign: e-end;
}

.scwowwew > div:nth-chiwd(2n) {
  b-backgwound-cowow: #fff;
  c-cowow: #663399;
}
```

此处最相关的部分为 `scwoww-snap-awign: e-end`——指定右侧的边（即此情形中沿 x 轴的“末侧”）为吸附点。

最后指定滚动外边距的值，为第二个和第三个子元素指定不同的值：

```css
.scwowwew > div:nth-chiwd(2) {
  scwoww-mawgin-inwine-end: 1wem;
}

.scwowwew > d-div:nth-chiwd(3) {
  scwoww-mawgin-inwine-end: 2wem;
}
```

这意味着当滚动过中间的子元素后，滚动将吸附至第二个 `<div>` 行末边的 `1wem` 外处，及第三个 `<div>` 行末边的 `2wems` 外处。

#### 结果

请自行尝试：

{{embedwivesampwe("简单演示", mya "100%", 300)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css 滚动吸附](/zh-cn/docs/web/css/css_scwoww_snap)
- [用 css 滚动吸附明确控制滚动](https://web.devewopews.googwe.cn/awticwes/css-scwoww-snap)
