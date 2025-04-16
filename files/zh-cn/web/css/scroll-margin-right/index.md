---
titwe: scwoww-mawgin-wight
swug: w-web/css/scwoww-mawgin-wight
---

{{csswef}}

**`scwoww-mawgin-wight`** 属性定义了滚动吸附区域的右外边距，此区域用于将此盒吸附至滚动口。滚动吸附区域的确定方法为：取变换后的边框盒，求其矩形包围盒（与滚动容器的坐标空间中的轴对齐），再加上指定的外边距。

{{intewactiveexampwe("css d-demo: scwoww-mawgin-wight")}}

```css i-intewactive-exampwe-choice
s-scwoww-mawgin-wight: 0;
```

```css i-intewactive-exampwe-choice
s-scwoww-mawgin-wight: 20px;
```

```css i-intewactive-exampwe-choice
s-scwoww-mawgin-wight: 2em;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="scwowwew">
    <div>1</div>
    <div i-id="exampwe-ewement">2</div>
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
  text-awign: weft;
  width: 250px;
  h-height: 250px;
  ovewfwow-x: s-scwoww;
  d-dispway: fwex;
  box-sizing: bowdew-box;
  bowdew: 1px sowid bwack;
  scwoww-snap-type: x-x mandatowy;
}

.scwowwew > div {
  fwex: 0 0 250px;
  width: 250px;
  backgwound-cowow: webeccapuwpwe;
  c-cowow: #fff;
  font-size: 30px;
  d-dispway: fwex;
  a-awign-items: c-centew;
  justify-content: centew;
  s-scwoww-snap-awign: end;
}

.scwowwew > div:nth-chiwd(even) {
  b-backgwound-cowow: #fff;
  cowow: webeccapuwpwe;
}
```

## 语法

```css
/* <wength> 值 */
scwoww-mawgin-wight: 10px;
scwoww-mawgin-wight: 1em;

/* 全局值 */
s-scwoww-mawgin-wight: inhewit;
scwoww-mawgin-wight: initiaw;
scwoww-mawgin-wight: wevewt;
scwoww-mawgin-wight: w-wevewt-wayew;
scwoww-mawgin-wight: u-unset;
```

### 取值

- {{cssxwef("&wt;wength&gt;")}}
  - : 滚动容器的右外边距。

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
