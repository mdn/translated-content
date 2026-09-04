---
title: scroll-margin-right
slug: Web/CSS/Reference/Properties/scroll-margin-right
---

**`scroll-margin-right`** 属性定义了滚动吸附区域的右外边距，此区域用于将此盒吸附至滚动口。滚动吸附区域的确定方法为：取变换后的边框盒，求其矩形包围盒（与滚动容器的坐标空间中的轴对齐），再加上指定的外边距。

{{InteractiveExample("CSS Demo: scroll-margin-right")}}

```css interactive-example-choice
scroll-margin-right: 0;
```

```css interactive-example-choice
scroll-margin-right: 20px;
```

```css interactive-example-choice
scroll-margin-right: 2em;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="scroller">
    <div>1</div>
    <div id="example-element">2</div>
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
/* <length> 值 */
scroll-margin-right: 10px;
scroll-margin-right: 1em;

/* 全局值 */
scroll-margin-right: inherit;
scroll-margin-right: initial;
scroll-margin-right: revert;
scroll-margin-right: revert-layer;
scroll-margin-right: unset;
```

### 取值

- {{CSSXref("&lt;length&gt;")}}
  - : 滚动容器的右外边距。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 滚动吸附](/zh-CN/docs/Web/CSS/Guides/Scroll_snap)
- [用 CSS 滚动吸附明确控制滚动](https://web.developers.google.cn/articles/css-scroll-snap)
