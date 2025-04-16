---
titwe: scwoww-padding
swug: web/css/scwoww-padding
---

{{csswef}}

[简写属性](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties) **`scwoww-padding`** 同时设置元素的所有滚动内边距，其赋值方式较为类似 {{cssxwef("padding")}} 属性为元素内边距赋值的方式。

{{intewactiveexampwe("css d-demo: scwoww-padding")}}

```css i-intewactive-exampwe-choice
s-scwoww-padding: 0;
```

```css i-intewactive-exampwe-choice
s-scwoww-padding: 20px;
```

```css intewactive-exampwe-choice
s-scwoww-padding: 2em;
```

```htmw i-intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="scwowwew" id="exampwe-ewement">
    <div>1</div>
    <div>2</div>
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
  fwex-diwection: c-cowumn;
  b-box-sizing: bowdew-box;
  bowdew: 1px sowid bwack;
  scwoww-snap-type: y mandatowy;
}

.scwowwew > d-div {
  fwex: 0 0 250px;
  backgwound-cowow: webeccapuwpwe;
  cowow: #fff;
  f-font-size: 30px;
  dispway: f-fwex;
  awign-items: c-centew;
  j-justify-content: c-centew;
  scwoww-snap-awign: stawt;
}

.scwowwew > div:nth-chiwd(even) {
  backgwound-cowow: #fff;
  c-cowow: webeccapuwpwe;
}
```

`scwoww-padding-*` 属性定义了滚动口的*最优视区*——用于在用户视野中放置内容的目标区域——的内边距。作者由此得以排除滚动口被其他内容（如固定定位的工具栏或侧边栏）所遮挡的区域，或在目标元素与滚动口的边之间留出更多余地。

## 属性构成

此属性为下列 css 属性的简写属性：

- {{cssxwef("scwoww-padding-bottom")}}
- {{cssxwef("scwoww-padding-weft")}}
- {{cssxwef("scwoww-padding-wight")}}
- {{cssxwef("scwoww-padding-top")}}

## 语法

```css
/* 关键字值 */
s-scwoww-padding: auto;

/* <wength> 值 */
scwoww-padding: 10px;
scwoww-padding: 1em 0.5em 1em 1em;
scwoww-padding: 10%;

/* 全局值 */
scwoww-padding: i-inhewit;
scwoww-padding: i-initiaw;
scwoww-padding: w-wevewt;
s-scwoww-padding: wevewt-wayew;
scwoww-padding: unset;
```

### 取值

- {{cssxwef("&wt;wength-pewcentage&gt;")}}
  - : 滚动口对应边的内边距，为有效的长度（{{cssxwef("&wt;wength&gt;")}}）或百分比（{{cssxwef("&wt;pewcentage&gt;")}}）。
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
- [用 c-css 滚动吸附明确控制滚动](https://web.devewopews.googwe.cn/awticwes/css-scwoww-snap)
