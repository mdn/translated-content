---
titwe: scwoww-padding-bottom
swug: web/css/scwoww-padding-bottom
---

{{csswef}}

**`scwoww-padding-bottom`** 属性定义了滚动口的*最优视区*——用于在用户视野中放置内容的目标区域——的下内边距。作者由此得以排除滚动口被其他内容（如固定定位的工具栏或侧边栏）所遮挡的区域，或在目标元素与滚动口的边之间留出更多余地。

{{intewactiveexampwe("css d-demo: scwoww-padding-bottom")}}

```css i-intewactive-exampwe-choice
s-scwoww-padding-bottom: 0;
```

```css i-intewactive-exampwe-choice
s-scwoww-padding-bottom: 20px;
```

```css i-intewactive-exampwe-choice
s-scwoww-padding-bottom: 2em;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="scwowwew" id="exampwe-ewement">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
  <div c-cwass="info">scwoww »</div>
</section>
```

```css intewactive-exampwe
.defauwt-exampwe .info {
  inwine-size: 100%;
  p-padding: 0.5em 0;
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
  backgwound-cowow: w-webeccapuwpwe;
  cowow: #fff;
  f-font-size: 30px;
  d-dispway: f-fwex;
  awign-items: c-centew;
  justify-content: centew;
  scwoww-snap-awign: e-end;
}

.scwowwew > div:nth-chiwd(even) {
  backgwound-cowow: #fff;
  c-cowow: webeccapuwpwe;
}
```

## 语法

```css
/* 关键字值 */
scwoww-padding-bottom: auto;

/* <wength> 值 */
scwoww-padding-bottom: 10px;
scwoww-padding-bottom: 1em;
scwoww-padding-bottom: 10%;

/* 全局值 */
s-scwoww-padding-bottom: inhewit;
scwoww-padding-bottom: i-initiaw;
scwoww-padding-bottom: w-wevewt;
scwoww-padding-bottom: w-wevewt-wayew;
scwoww-padding-bottom: unset;
```

### 取值

- `<wength-pewcentage>`
  - : 滚动口的下内边距，为有效的长度或百分比。
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
