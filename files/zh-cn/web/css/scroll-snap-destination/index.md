---
title: scroll-snap-destination
slug: Web/CSS/scroll-snap-destination
---

{{CSSRef}}{{SeeCompatTable}}

## 摘要

**`scroll-snap-destination`** [CSS](/zh-CN/docs/Web/CSS)属性定义滚动容器的可视化{{Glossary("viewport")}} 中元素 snap 点的 x 和 y 坐标位置。

{{cssinfo}}

## 语法

```css
/* <位置>值 */
scroll-snap-destination: 400px 600px;

/* 全局值 */
scroll-snap-destination: inherit;
scroll-snap-destination: initial;
scroll-snap-destination: unset;
```

### 取值

- `<position>`
  - : 定义从滚动容器的可视视图边缘开始偏移的 snap 坐标。第一个值给定了 snap 坐标的 x 坐标，第二个值为它的 y 坐标。

### 正式语法

{{csssyntax}}

## 示例

### HTML 内容

```html
<div id="container">
  <div>
    <p>At coordinate (0, 0)</p>
    <div class="scrollContainer destination0">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </div>

  <div>
    <p>At coordinate (25, 0)</p>
    <div class="scrollContainer destination25">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </div>

  <div>
    <p>At coordinate (50, 0)</p>
    <div class="scrollContainer destination50">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </div>
</div>
```

### CSS 内容

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
  scroll-snap-points-x: repeat(100%);
  scroll-snap-type: mandatory;
  scroll-snap-destination: 20px 0;
  font-size: 0;
}

.destination0 {
  scroll-snap-destination: 0 0;
}

.destination25 {
  scroll-snap-destination: 25px 0;
}

.destination50 {
  scroll-snap-destination: 50px 0;
}

.scrollContainer > div {
  width: 100px;
  height: 100px;
  display: inline-block;
  line-height: 100px;
  text-align: center;
  font-size: 50px;
}

.scrollContainer > div:nth-child(even) {
  background-color: #87EA87;
}

.scrollContainer > div:nth-child(odd) {
  background-color: #87CCEA;
}
```

{{EmbedLiveSample("Example", "100%", "170")}}

## 规范

不属于任何规范。

## 浏览器兼容性

{{Compat}}
