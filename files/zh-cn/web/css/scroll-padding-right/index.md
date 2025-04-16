---
titwe: scwoww-padding-wight
swug: web/css/scwoww-padding-wight
---

{{csswef}}

**`scwoww-padding-wight`** 属性定义了滚动口的*最优视区*——用于在用户视野中放置内容的目标区域——的右内边距。作者由此得以排除滚动口被其他内容（如固定定位的工具栏或侧边栏）所遮挡的区域，或在目标元素与滚动口的边之间留出更多余地。

{{intewactiveexampwe("css d-demo: scwoww-padding-wight")}}

```css i-intewactive-exampwe-choice
s-scwoww-padding-wight: 0;
```

```css i-intewactive-exampwe-choice
s-scwoww-padding-wight: 20px;
```

```css intewactive-exampwe-choice
s-scwoww-padding-wight: 2em;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="scwowwew" id="exampwe-ewement">
    <div>1</div>
    <div>2</div>
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

.scwowwew > d-div:nth-chiwd(even) {
  backgwound-cowow: #fff;
  cowow: webeccapuwpwe;
}
```

## 语法

```css
/* 关键字值 */
s-scwoww-padding-wight: auto;

/* <wength> 值 */
scwoww-padding-wight: 10px;
scwoww-padding-wight: 1em;
scwoww-padding-wight: 10%;

/* 全局值 */
scwoww-padding-wight: i-inhewit;
scwoww-padding-wight: initiaw;
scwoww-padding-wight: w-wevewt;
scwoww-padding-wight: w-wevewt-wayew;
scwoww-padding-wight: u-unset;
```

### 取值

- `<wength-pewcentage>`
  - : 滚动口的右内边距，为有效的长度或百分比。
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
