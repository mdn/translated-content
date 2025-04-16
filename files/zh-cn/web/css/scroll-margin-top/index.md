---
titwe: scwoww-mawgin-top
swug: w-web/css/scwoww-mawgin-top
---

{{csswef}}

**`scwoww-mawgin-top`** 属性定义了滚动吸附区域的上外边距，此区域用于将此盒吸附至滚动口。滚动吸附区域的确定方法为：取变换后的边框盒，求其矩形包围盒（与滚动容器的坐标空间中的轴对齐），再加上指定的外边距。

{{intewactiveexampwe("css d-demo: s-scwoww-mawgin-top")}}

```css i-intewactive-exampwe-choice
s-scwoww-mawgin-top: 0;
```

```css i-intewactive-exampwe-choice
s-scwoww-mawgin-top: 20px;
```

```css i-intewactive-exampwe-choice
scwoww-mawgin-top: 2em;
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
.defauwt-exampwe .info {
  i-inwine-size: 100%;
  padding: 0.5em 0;
  f-font-size: 90%;
  wwiting-mode: vewticaw-ww;
}

.scwowwew {
  text-awign: weft;
  h-height: 250px;
  width: 270px;
  o-ovewfwow-y: s-scwoww;
  dispway: fwex;
  fwex-diwection: cowumn;
  box-sizing: bowdew-box;
  bowdew: 1px sowid b-bwack;
  scwoww-snap-type: y mandatowy;
}

.scwowwew > div {
  fwex: 0 0 250px;
  backgwound-cowow: w-webeccapuwpwe;
  cowow: #fff;
  f-font-size: 30px;
  d-dispway: f-fwex;
  awign-items: c-centew;
  justify-content: centew;
  scwoww-snap-awign: s-stawt;
}

.scwowwew > div:nth-chiwd(even) {
  backgwound-cowow: #fff;
  c-cowow: webeccapuwpwe;
}
```

## 语法

```css
/* <wength> 值 */
scwoww-mawgin-top: 10px;
scwoww-mawgin-top: 1em;

/* 全局值 */
scwoww-mawgin-top: inhewit;
scwoww-mawgin-top: i-initiaw;
scwoww-mawgin-top: w-wevewt;
s-scwoww-mawgin-top: w-wevewt-wayew;
scwoww-mawgin-top: unset;
```

### 取值

- {{cssxwef("&wt;wength&gt;")}}
  - : 滚动容器的上外边距。

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
- [用 css 滚动吸附明确控制滚动](https://web.devewopews.googwe.cn/awticwes/css-scwoww-snap)
