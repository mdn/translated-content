---
title: scroll-margin-inline-end
slug: Web/CSS/scroll-margin-inline-end
---

{{CSSRef}}

**`scroll-margin-inline-end`** 属性定义了滚动吸附区域的行末外边距，此区域用于将此盒吸附至滚动口。滚动吸附区域的确定方法为：取变换后的边框盒，求其矩形包围盒（与滚动容器的坐标空间中的轴对齐），再加上指定的外边距。

{{EmbedInteractiveExample("pages/css/scroll-margin-inline-end.html")}}

## 语法

```css
/* <length> 值 */
scroll-margin-inline-end: 10px;
scroll-margin-inline-end: 1em;

/* 全局值 */
scroll-margin-inline-end: inherit;
scroll-margin-inline-end: initial;
scroll-margin-inline-end: revert;
scroll-margin-inline-end: revert-layer;
scroll-margin-inline-end: unset;
```

### 取值

- {{CSSXref("&lt;length&gt;")}}
  - : 滚动容器的行末外边距。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 示例

### 简单演示

此示例所实现的内容与上述互动示例非常相似，但此处将解释其实现方法。

此处的目标为创建四个横向滚动区块，其中第二个和第三个吸附至指定位置——靠近但不恰好位于每个区块的右侧。

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
  scroll-snap-align: end;
}

.scroller > div:nth-child(2n) {
  background-color: #fff;
  color: #663399;
}
```

此处最相关的部分为 `scroll-snap-align: end`——指定右侧的边（即此情形中沿 x 轴的“末侧”）为吸附点。

最后指定滚动外边距的值，为第二个和第三个子元素指定不同的值：

```css
.scroller > div:nth-child(2) {
  scroll-margin-inline-end: 1rem;
}

.scroller > div:nth-child(3) {
  scroll-margin-inline-end: 2rem;
}
```

这意味着当滚动过中间的子元素后，滚动将吸附至第二个 `<div>` 行末边的 `1rem` 外处，及第三个 `<div>` 行末边的 `2rems` 外处。

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
