---
title: scroll-snap-type
slug: Web/CSS/scroll-snap-type
---

{{CSSRef}}{{SeeCompatTable}}

## 摘要

**`scroll-snap-type`** [CSS](/zh-CN/docs/Web/CSS) 属性定义在滚动容器中的一个临时点（snap point）如何被严格的执行。

{{EmbedInteractiveExample("pages/css/scroll-snap-type.html")}}

此属性不能用来指定任何精确的动画或者物理运动效果来执行临时点，而是交给用户代理来处理。

```css
/* 关键值 */
scroll-snap-type: none;
scroll-snap-type: x;
scroll-snap-type: y;
scroll-snap-type: block;
scroll-snap-type: inline;
scroll-snap-type: both;

/* 可选 mandatory | proximity*/
scroll-snap-type: x mandatory;
scroll-snap-type: y proximity;
scroll-snap-type: both mandatory;

/* etc */

/* 全局值 */
scroll-snap-type: inherit;
scroll-snap-type: initial;
scroll-snap-type: unset;
```

{{cssinfo}}

## 语法

### 取值

- `none`
  - : 当这个滚动容器的可视的 {{Glossary("viewport")}} 是滚动的，它必须忽略临时点。
- `x`
  - : 滚动容器只捕捉其水平轴上的捕捉位置。
- `y`
  - : 滚动容器只捕捉其垂直轴上的捕捉位置。
- `block`
  - : 滚动容器仅捕捉到其块轴上的捕捉位置。
- `inline`
  - : 滚动容器仅捕捉到其内联轴上的捕捉位置。
- `both`
  - : 滚动容器会独立捕捉到其两个轴上的位置（可能会捕捉到每个轴上的不同元素）
- `mandatory`
  - : 如果它当前没有被滚动，这个滚动容器的可视视图将静止在临时点上。意思是当滚动动作结束，如果可能，它会临时在那个点上。如果内容被添加、移动、删除或者重置大小，滚动偏移将被调整为保持静止在临时点上。
- `proximity`
  - : 如果它当前没有被滚动，这个滚动容器的可视视图将基于基于用户代理滚动的参数去到临时点上。如果内容被添加、移动、删除或者重置大小，滚动偏移将被调整为保持静止在临时点上。

### 形式语法

{{csssyntax}}

## 示例

### HTML

```html
<div class="holster">
  <div class="container x mandatory-scroll-snapping" dir="ltr">
    <div>X Mand. LTR</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>

  <div class="container x proximity-scroll-snapping" dir="ltr">
    <div>X Prox. LTR</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>

  <div class="container y mandatory-scroll-snapping" dir="ltr">
    <div>Y Mand. LTR</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>

  <div class="container y proximity-scroll-snapping" dir="ltr">
    <div>Y Prox. LTR</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>

  <div class="container x mandatory-scroll-snapping" dir="rtl">
    <div>X Mand. RTL</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>

  <div class="container x proximity-scroll-snapping" dir="rtl">
    <div>X Prox. RTL</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>

  <div class="container y mandatory-scroll-snapping" dir="rtl">
    <div>Y Mand. RTL</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>

  <div class="container y proximity-scroll-snapping" dir="rtl">
    <div>Y Prox. RTL</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>
</div>
```

### CSS

```css
/* setup */
html,
body,
.holster {
  height: 100%;
}
.holster {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column nowrap;
  font-family: monospace;
}

.container {
  display: flex;
  overflow: auto;
  outline: 1px dashed lightgray;
  flex: none;
}

.container.x {
  width: 100%;
  height: 128px;
  flex-flow: row nowrap;
}

.container.y {
  width: 256px;
  height: 256px;
  flex-flow: column nowrap;
}
/* scroll-snap */
.x.mandatory-scroll-snapping {
  scroll-snap-type: x mandatory;
}

.y.mandatory-scroll-snapping {
  scroll-snap-type: y mandatory;
}

.x.proximity-scroll-snapping {
  scroll-snap-type: x proximity;
}

.y.proximity-scroll-snapping {
  scroll-snap-type: y proximity;
}

.container > div {
  text-align: center;
  scroll-snap-align: center;
  flex: none;
}

.x.container > div {
  line-height: 128px;
  font-size: 64px;
  width: 100%;
  height: 128px;
}

.y.container > div {
  line-height: 256px;
  font-size: 128px;
  width: 256px;
  height: 100%;
}
/* appearance fixes */
.y.container > div:first-child {
  line-height: 1.3;
  font-size: 64px;
}
/* coloration */
.container > div:nth-child(even) {
  background-color: #87ea87;
}

.container > div:nth-child(odd) {
  background-color: #87ccea;
}
```

{{EmbedLiveSample("示例", "100%", "260")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
