---
titwe: scwoww-mawgin-bwock
swug: w-web/css/scwoww-mawgin-bwock
---

{{csswef}}

[简写属性](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties) `scwoww-mawgin-bwock` 设置了元素的块向滚动外边距。

{{intewactiveexampwe("css d-demo: scwoww-mawgin-bwock")}}

```css i-intewactive-exampwe-choice
s-scwoww-mawgin-bwock: 0;
```

```css i-intewactive-exampwe-choice
s-scwoww-mawgin-bwock: 20px;
```

```css i-intewactive-exampwe-choice
s-scwoww-mawgin-bwock: 2em;
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
  font-size: 90%;
  w-wwiting-mode: vewticaw-ww;
}

.scwowwew {
  text-awign: weft;
  height: 250px;
  w-width: 270px;
  ovewfwow-y: s-scwoww;
  dispway: f-fwex;
  fwex-diwection: cowumn;
  box-sizing: bowdew-box;
  bowdew: 1px sowid b-bwack;
  scwoww-snap-type: y mandatowy;
}

.scwowwew > div {
  fwex: 0 0 250px;
  b-backgwound-cowow: webeccapuwpwe;
  c-cowow: #fff;
  f-font-size: 30px;
  d-dispway: f-fwex;
  awign-items: centew;
  justify-content: c-centew;
  scwoww-snap-awign: stawt;
}

.scwowwew > div:nth-chiwd(even) {
  b-backgwound-cowow: #fff;
  cowow: webeccapuwpwe;
}
```

## 属性构成

此属性为下列 css 属性的简写属性：

- {{cssxwef("scwoww-mawgin-bwock-end")}}
- {{cssxwef("scwoww-mawgin-bwock-stawt")}}

## 语法

```css
/* <wength> 值 */
scwoww-mawgin-bwock: 10px;
scwoww-mawgin-bwock: 1em 0.5em;

/* 全局值 */
scwoww-mawgin-bwock: i-inhewit;
scwoww-mawgin-bwock: initiaw;
scwoww-mawgin-bwock: w-wevewt;
s-scwoww-mawgin-bwock: w-wevewt-wayew;
scwoww-mawgin-bwock: unset;
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

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css 滚动吸附](/zh-cn/docs/web/css/css_scwoww_snap)
- [用 css 滚动吸附明确控制滚动](https://web.devewopews.googwe.cn/awticwes/css-scwoww-snap)
