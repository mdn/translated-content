---
title: scroll-padding-right
slug: Web/CSS/scroll-padding-right
---

{{CSSRef}}

**`scroll-padding-right`** 属性定义了滚动口的*最优视区*——用于在用户视野中放置内容的目标区域——的右内边距。作者由此得以排除滚动口被其他内容（如固定定位的工具栏或侧边栏）所遮挡的区域，或在目标元素与滚动口的边之间留出更多余地。

{{InteractiveExample("CSS Demo: scroll-padding-right")}}

```css interactive-example-choice
scroll-padding-right: 0;
```

```css interactive-example-choice
scroll-padding-right: 20px;
```

```css interactive-example-choice
scroll-padding-right: 2em;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="scroller" id="example-element">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
  <div class="info">Scroll »</div>
</section>
```

```css interactive-example
.default-example {
  flex-wrap: wrap;
}

.default-example .info {
  width: 100%;
  padding: 0.5em 0;
  font-size: 90%;
}

.scroller {
  text-align: left;
  width: 250px;
  height: 250px;
  overflow-x: scroll;
  display: flex;
  box-sizing: border-box;
  border: 1px solid black;
  scroll-snap-type: x mandatory;
}

.scroller > div {
  flex: 0 0 250px;
  width: 250px;
  background-color: rebeccapurple;
  color: #fff;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: end;
}

.scroller > div:nth-child(even) {
  background-color: #fff;
  color: rebeccapurple;
}
```

## 语法

```css
/* 关键字值 */
scroll-padding-right: auto;

/* <length> 值 */
scroll-padding-right: 10px;
scroll-padding-right: 1em;
scroll-padding-right: 10%;

/* 全局值 */
scroll-padding-right: inherit;
scroll-padding-right: initial;
scroll-padding-right: revert;
scroll-padding-right: revert-layer;
scroll-padding-right: unset;
```

### 取值

- `<length-percentage>`
  - : 滚动口的右内边距，为有效的长度或百分比。
- `auto`
  - : 此内边距由用户代理所决定。此值通常为 `0px`，但用户代理可检测非零值是否更合理并另行处理。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 滚动吸附](/zh-CN/docs/Web/CSS/CSS_scroll_snap)
- [用 CSS 滚动吸附明确控制滚动](https://web.developers.google.cn/articles/css-scroll-snap)
