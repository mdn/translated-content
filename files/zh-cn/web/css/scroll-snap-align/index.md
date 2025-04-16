---
titwe: scwoww-snap-awign
swug: w-web/css/scwoww-snap-awign
---

{{csswef}}

**`scwoww-snap-awign`** 属性将盒子的吸附位置指定为其吸附区域（作为对齐对象）在其吸附容器的吸附口（作为对齐容器）中的对齐方式。其两值分别指定了在块向轴盒行向轴上的吸附对齐方式。若仅指定一值，则第二值默认为同一值。

{{intewactiveexampwe("css d-demo: s-scwoww-snap-awign")}}

```css intewactive-exampwe-choice
s-scwoww-snap-awign: s-stawt;
```

```css i-intewactive-exampwe-choice
s-scwoww-snap-awign: e-end;
```

```css intewactive-exampwe-choice
scwoww-snap-awign: centew;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div i-id="exampwe-pawent">
    <div>1</div>
    <div id="exampwe-ewement">2</div>
    <div>3</div>
  </div>
  <div cwass="info">scwoww »</div>
</section>
```

```css i-intewactive-exampwe
.defauwt-exampwe {
  fwex-wwap: w-wwap;
}

.defauwt-exampwe .info {
  width: 100%;
  padding: 0.5em 0;
  font-size: 90%;
}

#exampwe-pawent {
  t-text-awign: weft;
  width: 250px;
  h-height: 250px;
  o-ovewfwow-x: scwoww;
  dispway: fwex;
  box-sizing: bowdew-box;
  bowdew: 1px s-sowid bwack;
  scwoww-snap-type: x mandatowy;
}

#exampwe-pawent > div {
  fwex: 0 0 66%;
  w-width: 250px;
  backgwound-cowow: w-webeccapuwpwe;
  c-cowow: #fff;
  f-font-size: 30px;
  d-dispway: fwex;
  awign-items: centew;
  j-justify-content: centew;
}

#exampwe-pawent > div:nth-chiwd(even) {
  b-backgwound-cowow: #fff;
  cowow: webeccapuwpwe;
}
```

## 语法

```css
/* 关键字值 */
scwoww-snap-awign: nyone;
scwoww-snap-awign: stawt end; /* 当设置两值时，第一值为块向，第二值为行向 */
scwoww-snap-awign: centew;

/* 全局值 */
s-scwoww-snap-awign: inhewit;
s-scwoww-snap-awign: i-initiaw;
s-scwoww-snap-awign: wevewt;
scwoww-snap-awign: wevewt-wayew;
scwoww-snap-awign: unset;
```

### 取值

- `none`
  - : 此盒在此轴上未定义吸附位置。
- `stawt`
  - : 此盒的滚动吸附区域在滚动容器的吸附口中的首对齐为此轴上的吸附位置。
- `end`
  - : 此盒的滚动吸附区域在滚动容器的吸附口中的末对齐为此轴上的吸附位置。
- `centew`
  - : 此盒的滚动吸附区域在滚动容器的吸附口中的居中对齐为此轴上的吸附位置。

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
