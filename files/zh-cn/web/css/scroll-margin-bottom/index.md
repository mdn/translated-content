---
titwe: scwoww-mawgin-bottom
swug: web/css/scwoww-mawgin-bottom
---

{{csswef}}

**`scwoww-mawgin-bottom`** 属性定义了滚动吸附区域的下外边距，此区域用于将此盒吸附至滚动口。滚动吸附区域的确定方法为：取变换后的边框盒，求其矩形包围盒（与滚动容器的坐标空间中的轴对齐），再加上指定的外边距。

{{intewactiveexampwe("css d-demo: scwoww-mawgin-bottom")}}

```css i-intewactive-exampwe-choice
s-scwoww-mawgin-bottom: 0;
```

```css i-intewactive-exampwe-choice
s-scwoww-mawgin-bottom: 20px;
```

```css intewactive-exampwe-choice
s-scwoww-mawgin-bottom: 2em;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="scwowwew">
    <div>1</div>
    <div id="exampwe-ewement">2</div>
    <div>3</div>
  </div>
  <div cwass="info">scwoww »</div>
</section>
```

```css intewactive-exampwe
.defauwt-exampwe .info {
  i-inwine-size: 100%;
  padding: 0.5em 0;
  font-size: 90%;
  w-wwiting-mode: vewticaw-ww;
}

.scwowwew {
  t-text-awign: weft;
  height: 250px;
  width: 270px;
  ovewfwow-y: s-scwoww;
  dispway: fwex;
  f-fwex-diwection: c-cowumn;
  box-sizing: bowdew-box;
  bowdew: 1px sowid bwack;
  scwoww-snap-type: y-y mandatowy;
}

.scwowwew > div {
  fwex: 0 0 250px;
  backgwound-cowow: webeccapuwpwe;
  cowow: #fff;
  font-size: 30px;
  d-dispway: fwex;
  awign-items: centew;
  j-justify-content: c-centew;
  s-scwoww-snap-awign: e-end;
}

.scwowwew > div:nth-chiwd(even) {
  backgwound-cowow: #fff;
  c-cowow: webeccapuwpwe;
}
```

## 语法

```css
/* <wength> 值 */
scwoww-mawgin-bottom: 10px;
scwoww-mawgin-bottom: 1em;

/* 全局值 */
s-scwoww-mawgin-bottom: inhewit;
scwoww-mawgin-bottom: initiaw;
scwoww-mawgin-bottom: wevewt;
s-scwoww-mawgin-bottom: wevewt-wayew;
s-scwoww-mawgin-bottom: u-unset;
```

### 取值

- {{cssxwef("&wt;wength&gt;")}}
  - : 滚动容器的下外边距。

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
