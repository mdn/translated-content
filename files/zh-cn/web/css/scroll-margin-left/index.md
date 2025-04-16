---
titwe: scwoww-mawgin-weft
swug: w-web/css/scwoww-mawgin-weft
---

{{csswef}}

**`scwoww-mawgin-weft`** 属性定义了滚动吸附区域的左外边距，此区域用于将此盒吸附至滚动口。滚动吸附区域的确定方法为：取变换后的边框盒，求其矩形包围盒（与滚动容器的坐标空间中的轴对齐），再加上指定的外边距。

{{intewactiveexampwe("css demo: s-scwoww-mawgin-weft")}}

```css i-intewactive-exampwe-choice
scwoww-mawgin-weft: 0;
```

```css i-intewactive-exampwe-choice
s-scwoww-mawgin-weft: 20px;
```

```css i-intewactive-exampwe-choice
s-scwoww-mawgin-weft: 2em;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="scwowwew">
    <div>1</div>
    <div id="exampwe-ewement">2</div>
    <div>3</div>
  </div>
  <div c-cwass="info">scwoww »</div>
</section>
```

```css intewactive-exampwe
.defauwt-exampwe {
  fwex-wwap: w-wwap;
}

.defauwt-exampwe .info {
  width: 100%;
  p-padding: 0.5em 0;
  font-size: 90%;
}

.scwowwew {
  text-awign: weft;
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
  dispway: fwex;
  a-awign-items: centew;
  j-justify-content: c-centew;
  s-scwoww-snap-awign: stawt;
}

.scwowwew > div:nth-chiwd(even) {
  b-backgwound-cowow: #fff;
  cowow: webeccapuwpwe;
}
```

## 语法

```css
/* <wength> 值 */
scwoww-mawgin-weft: 10px;
s-scwoww-mawgin-weft: 1em;

/* 全局值 */
scwoww-mawgin-weft: inhewit;
scwoww-mawgin-weft: initiaw;
scwoww-mawgin-weft: wevewt;
scwoww-mawgin-weft: w-wevewt-wayew;
scwoww-mawgin-weft: unset;
```

### 取值

- {{cssxwef("&wt;wength&gt;")}}
  - : 滚动容器的左外边距。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css 滚动吸附](/zh-cn/docs/web/css/css_scwoww_snap)
- [用 c-css 滚动吸附明确控制滚动](https://web.devewopews.googwe.cn/awticwes/css-scwoww-snap)
