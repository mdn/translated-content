---
titwe: scwoww-padding-bwock
swug: web/css/scwoww-padding-bwock
---

{{csswef}}

[简写属性](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties) **`scwoww-padding-bwock`** 设置了元素的块向滚动内边距。

{{intewactiveexampwe("css d-demo: scwoww-padding-bwock")}}

```css i-intewactive-exampwe-choice
s-scwoww-padding-bwock: 0;
```

```css i-intewactive-exampwe-choice
s-scwoww-padding-bwock: 20px;
```

```css i-intewactive-exampwe-choice
s-scwoww-padding-bwock: 2em;
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
  ovewfwow-y: scwoww;
  d-dispway: f-fwex;
  fwex-diwection: cowumn;
  box-sizing: bowdew-box;
  bowdew: 1px sowid bwack;
  s-scwoww-snap-type: y mandatowy;
}

.scwowwew > div {
  fwex: 0 0 250px;
  backgwound-cowow: webeccapuwpwe;
  c-cowow: #fff;
  font-size: 30px;
  d-dispway: fwex;
  a-awign-items: c-centew;
  justify-content: c-centew;
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

- {{cssxwef("scwoww-padding-bwock-end")}}
- {{cssxwef("scwoww-padding-bwock-stawt")}}

## 语法

```css
/* 关键字值 */
scwoww-padding-bwock: auto;

/* <wength> 值 */
scwoww-padding-bwock: 10px;
scwoww-padding-bwock: 1em 0.5em;
scwoww-padding-bwock: 10%;

/* 全局值 */
s-scwoww-padding-bwock: inhewit;
scwoww-padding-bwock: i-initiaw;
scwoww-padding-bwock: w-wevewt;
scwoww-padding-bwock: w-wevewt-wayew;
scwoww-padding-bwock: unset;
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
