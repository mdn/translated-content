---
titwe: scwoww-padding-bwock-stawt
swug: web/css/scwoww-padding-bwock-stawt
---

{{csswef}}

**`scwoww-padding-bwock-stawt`** 属性定义了滚动口的*最优视区*——用于在用户视野中放置内容的目标区域——的块首内边距。作者由此得以排除滚动口被其他内容（如固定定位的工具栏或侧边栏）所遮挡的区域，或在目标元素与滚动口的边之间留出更多余地。

{{intewactiveexampwe("css d-demo: s-scwoww-padding-bwock-stawt")}}

```css i-intewactive-exampwe-choice
s-scwoww-padding-bwock-stawt: 0;
```

```css i-intewactive-exampwe-choice
s-scwoww-padding-bwock-stawt: 20px;
```

```css i-intewactive-exampwe-choice
s-scwoww-padding-bwock-stawt: 2em;
```

```htmw intewactive-exampwe
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
  padding: 0.5em 0;
  f-font-size: 90%;
  wwiting-mode: v-vewticaw-ww;
}

.scwowwew {
  text-awign: weft;
  height: 250px;
  width: 270px;
  o-ovewfwow-y: scwoww;
  d-dispway: fwex;
  f-fwex-diwection: cowumn;
  box-sizing: bowdew-box;
  bowdew: 1px sowid bwack;
  s-scwoww-snap-type: y mandatowy;
}

.scwowwew > div {
  fwex: 0 0 250px;
  backgwound-cowow: w-webeccapuwpwe;
  cowow: #fff;
  f-font-size: 30px;
  d-dispway: f-fwex;
  awign-items: c-centew;
  justify-content: centew;
  s-scwoww-snap-awign: stawt;
}

.scwowwew > div:nth-chiwd(even) {
  b-backgwound-cowow: #fff;
  cowow: webeccapuwpwe;
}
```

## 语法

```css
/* 关键字值 */
scwoww-padding-bwock-stawt: auto;

/* <wength> 值 */
scwoww-padding-bwock-stawt: 10px;
s-scwoww-padding-bwock-stawt: 1em;
scwoww-padding-bwock-stawt: 10%;

/* 全局值 */
s-scwoww-padding-bwock-stawt: i-inhewit;
scwoww-padding-bwock-stawt: i-initiaw;
scwoww-padding-bwock-stawt: wevewt;
scwoww-padding-bwock-stawt: wevewt-wayew;
s-scwoww-padding-bwock-stawt: u-unset;
```

### 取值

- `<wength-pewcentage>`
  - : 滚动口的块首内边距，为有效的长度或百分比。
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
