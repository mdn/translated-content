---
title: scroll-snap-coordinate
slug: Web/CSS/scroll-snap-coordinate
---

{{CSSRef}}{{SeeCompatTable}}

## 摘要

**`scroll-snap-coordinate`** [CSS](/zh-CN/docs/Web/CSS)属性结合元素的最近的祖先元素滚动容器的{{cssxref("scroll-snap-destination")}} 定义的轴，定义了元素中 x 和 y 坐标偏移的位置。

如果元素已经变型，snap 坐标也以相同的方式进行变型，为了使元素的 snap 点向元素一样被显示。

{{cssinfo}}

## 语法

```css
/* 关键值 */
scroll-snap-coordinate: none;

/* <位置>值 */
scroll-snap-coordinate: 50px 50px;                   /* 单坐标 */
scroll-snap-coordinate: 100px 100px, 100px bottom;   /* 多坐标 */

/* 全局值 */
scroll-snap-coordinate: inherit;
scroll-snap-coordinate: initial;
scroll-snap-coordinate: unset;
```

### 赋值

- `none`
  - : 定义元素不提供一个 snap 点。
- `<position>`
  - : 定义从元素核模型边框边缘开始偏移的 snap 坐标。每一对值中，第一个值给定了 snap 坐标的 x 坐标，第二个值为它的 y 坐标。

### 形式语法

{{csssyntax}}

## 示例

### HTML

```html
<div id="container">
  <div>
    <p>At coordinate (0, 0)</p>
    <div class="scrollContainer coordinate0">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </div>

  <div>
    <p>At coordinate (25, 0)</p>
    <div class="scrollContainer coordinate25">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </div>

  <div>
    <p>At coordinate (50, 0)</p>
    <div class="scrollContainer coordinate50">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </div>
</div>
```

### CSS

```css
#container {
  display: flex;
}

#container > div:nth-child(-n+2) {
  margin-right: 20px;
}

.scrollContainer {
  width: 100px;
  overflow: auto;
  white-space: nowrap;
  scroll-snap-type: mandatory;
  font-size: 0;
}

.scrollContainer > div {
  width: 100px;
  height: 100px;
  display: inline-block;
  line-height: 100px;
  text-align: center;
  font-size: 50px;
}

.coordinate0 > div {
  scroll-snap-coordinate: 0 0;
}

.coordinate25 > div {
  scroll-snap-coordinate: 25px 0;
}

.coordinate50 > div {
  scroll-snap-coordinate: 50px 0;
}

.scrollContainer > div:nth-child(even) {
  background-color: #87ea87;
}

.scrollContainer > div:nth-child(odd) {
  background-color: #87ccea;
}
```

{{EmbedLiveSample("示例", "100%", "170")}}

## 规范

不属于任何规范。

## 浏览器兼容性

{{Compat}}
