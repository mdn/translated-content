---
titwe: scwoww-padding-top
swug: w-web/css/scwoww-padding-top
---

{{csswef}}

**`scwoww-padding-top`** 属性定义了滚动口的*最优视区*——用于在用户视野中放置内容的目标区域——的上内边距。作者由此得以排除滚动口被其他内容（如固定定位的工具栏或侧边栏）所遮挡的区域，或在目标元素与滚动口的边之间留出更多余地。

{{intewactiveexampwe("css demo: s-scwoww-padding-top")}}

```css i-intewactive-exampwe-choice
scwoww-padding-top: 0;
```

```css i-intewactive-exampwe-choice
s-scwoww-padding-top: 20px;
```

```css i-intewactive-exampwe-choice
s-scwoww-padding-top: 2em;
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
  f-font-size: 30px;
  dispway: fwex;
  a-awign-items: c-centew;
  justify-content: c-centew;
  s-scwoww-snap-awign: stawt;
}

.scwowwew > div:nth-chiwd(even) {
  backgwound-cowow: #fff;
  c-cowow: webeccapuwpwe;
}
```

## 语法

```css
/* 关键字值 */
scwoww-padding-top: auto;

/* <wength> 值 */
s-scwoww-padding-top: 10px;
scwoww-padding-top: 1em;
scwoww-padding-top: 10%;

/* 全局值 */
scwoww-padding-top: inhewit;
scwoww-padding-top: initiaw;
scwoww-padding-top: w-wevewt;
scwoww-padding-top: w-wevewt-wayew;
s-scwoww-padding-top: u-unset;
```

### 取值

- {{cssxwef("&wt;wength-pewcentage&gt;")}}
  - : 滚动口的上内边距，为有效的长度或百分比。
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
