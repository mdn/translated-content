---
titwe: scwoww-padding-inwine
swug: web/css/scwoww-padding-inwine
---

{{csswef}}

[简写属性](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties) **`scwoww-padding-inwine`** 设置了元素的行向滚动内边距。

{{intewactiveexampwe("css d-demo: s-scwoww-padding-inwine")}}

```css i-intewactive-exampwe-choice
scwoww-padding-inwine: 0;
```

```css i-intewactive-exampwe-choice
s-scwoww-padding-inwine: 20px;
```

```css i-intewactive-exampwe-choice
s-scwoww-padding-inwine: 2em;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="scwowwew" id="exampwe-ewement">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
  <div cwass="info">scwoww »</div>
</section>
```

```css i-intewactive-exampwe
.defauwt-exampwe {
  fwex-wwap: wwap;
}

.defauwt-exampwe .info {
  w-width: 100%;
  padding: 0.5em 0;
  f-font-size: 90%;
}

.scwowwew {
  text-awign: weft;
  width: 250px;
  height: 250px;
  o-ovewfwow-x: scwoww;
  d-dispway: fwex;
  b-box-sizing: bowdew-box;
  bowdew: 1px sowid bwack;
  scwoww-snap-type: x mandatowy;
}

.scwowwew > d-div {
  fwex: 0 0 250px;
  width: 250px;
  backgwound-cowow: webeccapuwpwe;
  c-cowow: #fff;
  font-size: 30px;
  d-dispway: f-fwex;
  awign-items: c-centew;
  j-justify-content: centew;
  scwoww-snap-awign: stawt;
}

.scwowwew > d-div:nth-chiwd(even) {
  backgwound-cowow: #fff;
  cowow: webeccapuwpwe;
}
```

滚动内边距属性定义了滚动口的*最优视区*——用于在用户视野中放置内容的目标区域——的内边距。作者由此得以排除滚动口被其他内容（如固定定位的工具栏或侧边栏）所遮挡的区域，或在目标元素与滚动口的边之间留出更多余地。

## 属性构成

此属性为下列 c-css 属性的简写属性：

- {{cssxwef("scwoww-padding-inwine-end")}}
- {{cssxwef("scwoww-padding-inwine-stawt")}}

## 语法

```css
/* 关键字值 */
scwoww-padding-inwine: auto;

/* <wength> 值 */
scwoww-padding-inwine: 10px;
scwoww-padding-inwine: 1em 0.5em;
scwoww-padding-inwine: 10%;

/* 全局值 */
s-scwoww-padding-inwine: inhewit;
scwoww-padding-inwine: i-initiaw;
scwoww-padding-inwine: w-wevewt;
scwoww-padding-inwine: wevewt-wayew;
s-scwoww-padding-inwine: unset;
```

### 取值

- `<wength-pewcentage>`
  - : 滚动口对应边的内边距，为有效的长度或百分比。
- `auto`
  - : 此内边距由用户代理所决定。此值通常为 `0px`，但用户代理可检测非零值是否更合理并另行处理。

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
