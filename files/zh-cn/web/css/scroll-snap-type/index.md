---
title: scroll-snap-type
slug: Web/CSS/scroll-snap-type
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`scroll-snap-type`** 设置了在有滚动容器的情形下吸附至吸附点的严格程度。

{{EmbedInteractiveExample("pages/css/scroll-snap-type.html")}}

此属性不为吸附至吸附点指定任何确切的动画或运动规律，留待用户代理处理。

```css
/* 不吸附 */
scroll-snap-type: none;

/* 表示吸附轴的关键字 */
scroll-snap-type: x;
scroll-snap-type: y;
scroll-snap-type: block;
scroll-snap-type: inline;
scroll-snap-type: both;

/* 表示吸附程度的可选关键字 */
/* mandatory 或 proximity */
scroll-snap-type: x mandatory;
scroll-snap-type: y proximity;
scroll-snap-type: both mandatory;

/* 全局值 */
scroll-snap-type: inherit;
scroll-snap-type: initial;
scroll-snap-type: revert;
scroll-snap-type: revert-layer;
scroll-snap-type: unset;
```

## 语法

### 取值

- `none`
  - : 在滚动此滚动容器的可见{{Glossary("viewport", "视口")}}时，必须忽略吸附点。
- `x`
  - : 滚动容器仅在其横轴上吸附至吸附位置。
- `y`
  - : 滚动容器仅在其纵轴上吸附至吸附位置。
- `block`
  - : 滚动容器仅在其块向轴上吸附至吸附位置。
- `inline`
  - : 滚动容器仅在其行向轴上吸附至吸附位置。
- `both`
  - : 滚动容器在其两轴上独立地吸附至吸附位置（可能在各轴上吸附至不同的元素）。
- `mandatory`
  - : 若滚动容器当前未在滚动，则其可见视口必须吸附至吸附位置。
- `proximity`
  - : 若滚动容器当前未在滚动，则其可见视口可以吸附至吸附位置。是否吸附由用户代理根据滚动参数决定。若指定了吸附轴，则此为默认的吸附程度。

> **备注：** 若吸附口中的内容发生变动（如被添加、移动、删除或改变尺寸）或者与滚动吸附相关的任意属性（如 `scroll-snap-type` 或 `scroll-margin`）的值发生变化，则滚动容器将按照 `scroll-snap-type` 最新的值[重新吸附](https://drafts.csswg.org/css-scroll-snap/#re-snap)。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 示例

### 不同轴上的吸附

#### HTML

```html
<div class="holster">
  <div class="container x mandatory-scroll-snapping" dir="ltr">
    <div>x 轴强制、从左往右</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>
  <div class="container x proximity-scroll-snapping" dir="ltr">
    <div>x 轴靠近、从左往右</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>
  <div class="container y mandatory-scroll-snapping" dir="ltr">
    <div>y 轴强制、从左往右</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>
  <div class="container y proximity-scroll-snapping" dir="ltr">
    <div>y 轴靠近、从左往右</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>
  <div class="container x mandatory-scroll-snapping" dir="rtl">
    <div>x 轴强制、从右往左</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>
  <div class="container x proximity-scroll-snapping" dir="rtl">
    <div>x 轴靠近、从右往左</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>
  <div class="container y mandatory-scroll-snapping" dir="rtl">
    <div>y 轴强制、从右往左</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>
  <div class="container y proximity-scroll-snapping" dir="rtl">
    <div>y 轴靠近、从右往左</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>
</div>
```

#### CSS

```css hidden
.holster {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column nowrap;
  font-family: monospace;
}
.container {
  display: flex;
  margin: 1em auto;
  outline: 1px dashed lightgray;
  flex: none;
  overflow: auto;
}
.container.x {
  width: 100%;
  height: 128px;
  flex-flow: row nowrap;
  overflow-y: hidden;
}
.container.y {
  width: 256px;
  height: 256px;
  flex-flow: column nowrap;
  overflow-x: hidden;
}
```

```css
/* 滚动吸附 */
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
```

```css hidden
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

/* 修补外观 */
.y.container > div:first-child {
  line-height: 1.3;
  font-size: 64px;
}

/* 上色 */
.container > div:nth-child(even) {
  background-color: #87ea87;
}
.container > div:nth-child(odd) {
  background-color: #87ccea;
}
```

#### 结果

{{EmbedLiveSample("不同轴上的吸附", "100%", 1800)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 滚动吸附](/zh-CN/docs/Web/CSS/CSS_scroll_snap)
- [用 CSS 滚动吸附明确控制滚动](https://web.dev/css-scroll-snap/)
