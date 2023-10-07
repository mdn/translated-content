---
title: scroll-margin
slug: Web/CSS/scroll-margin
---

{{CSSRef}}

[简写属性](/zh-CN/docs/Web/CSS/Shorthand_properties) **`scroll-margin`** 同时设置元素的所有滚动外边距，其赋值方式较为类似 {{CSSXref("margin")}} 属性为元素外边距赋值的方式。

{{EmbedInteractiveExample("pages/css/scroll-margin.html")}}

## 属性构成

此属性为下列 CSS 属性的简写属性：

- {{CSSXref("scroll-margin-bottom")}}
- {{CSSXref("scroll-margin-left")}}
- {{CSSXref("scroll-margin-right")}}
- {{CSSXref("scroll-margin-top")}}

## 语法

```css
/* <length> 值 */
scroll-margin: 10px;
scroll-margin: 1em 0.5em 1em 1em;

/* 全局值 */
scroll-margin: inherit;
scroll-margin: initial;
scroll-margin: revert;
scroll-margin: revert-layer;
scroll-margin: unset;
```

### 取值

- {{CSSXref("&lt;length&gt;")}}
  - : 滚动容器对应边的外边距。

## 描述

通过滚动至示例内容两“页”之间的一点可见 `scroll-margin` 的效果。为 `scroll-margin` 指定的值决定了页面主要位于吸附口外的多少部分应保持可见。

因此 `scroll-margin` 值表示定义滚动吸附区域的外边距，此区域用于将此盒吸附至滚动口。滚动吸附区域的确定方法为：取变换后的边框盒，求其矩形包围盒（与滚动容器的坐标空间中的轴对齐），再加上指定的外边距。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 示例

### 简单演示

此示例所实现的内容与上述互动示例非常相似，但此处将解释其实现方法。

此处的目标为创建四个横向滚动区块，其中第二个和第三个吸附至指定位置——靠近但不恰好位于每个区块的左侧。

#### HTML

表示这些区块的 HTML 非常简单：

```html
<div class="scroller">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>
```

#### CSS

一起来过一遍 CSS。外层容器有如下样式：

```css
.scroller {
  text-align: left;
  width: 250px;
  height: 250px;
  overflow-x: scroll;
  display: flex;
  box-sizing: border-box;
  border: 1px solid #000;
  scroll-snap-type: x mandatory;
}
```

与滚动吸附相关的主要部分为 `overflow-x: scroll`——确保内容可滚动且不被隐藏——以及 `scroll-snap-type: x mandatory`——要求必须沿横轴出现滚动吸附，且滚动总将止于吸附点。

子元素有如下样式：

```css
.scroller > div {
  flex: 0 0 250px;
  width: 250px;
  background-color: #663399;
  color: #fff;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
}

.scroller > div:nth-child(2n) {
  background-color: #fff;
  color: #663399;
}
```

此处最相关的部分为 `scroll-snap-align: start`——指定左侧的边（即此情形中沿 x 轴的“首侧”）为吸附点。

最后指定滚动外边距的值，为第二个和第三个子元素指定不同的值：

```css
.scroller > div:nth-child(2) {
  scroll-margin: 1rem;
}

.scroller > div:nth-child(3) {
  scroll-margin: 2rem;
}
```

这意味着当滚动过中间的子元素后，滚动将吸附至第二个 `<div>` 左侧边的 `1rem` 外处，及第三个 `<div>` 左侧边的 `2rems` 外处。

> **备注：** 此处虽然在所有侧均设置了 `scroll-margin`，但真正相关的仅有首侧边。此处若仅在此边上设置滚动外边距，例如 `scroll-margin-inline-start: 1rem` 或 `scroll-margin: 0 0 0 1rem`，则效果相同。

#### 结果

请自行尝试：

{{EmbedLiveSample("简单演示", "100%", 300)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 滚动吸附](/zh-CN/docs/Web/CSS/CSS_scroll_snap)
- [用 CSS 滚动吸附明确控制滚动](https://web.dev/css-scroll-snap/)
