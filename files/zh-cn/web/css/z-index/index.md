---
title: z-index
slug: Web/CSS/z-index
---

{{CSSRef}}

`z-index` 属性设定了一个定位元素及其后代元素或 flex 项目的 z-order。当元素之间重叠的时候，z-index 较大的元素会覆盖较小的元素在上层进行显示。

{{EmbedInteractiveExample("pages/css/z-index.html")}}

对于一个已经定位的盒子（即其 `position` 属性值不是 `static`，这里要注意的是 CSS 把元素看作盒子），`z-index` 属性指定：

1. 盒子在当前堆叠上下文中的堆叠层级。
2. 盒子是否创建一个本地堆叠上下文。

## 语法

```css
/* 字符值 */
z-index: auto;

/* 整数值 */
z-index: 0;
z-index: 3;
z-index: 289;
z-index: -1; /* 使用负值降低优先级 */

/* 全局值 */
z-index: inherit;
z-index: initial;
z-index: unset;
```

`z-index` 属性可以被设定为关键词 [`auto`](/zh-CN/docs/Web/CSS/z-index#auto) 或 [`<integer>`](/zh-CN/docs/Web/CSS/z-index#integer)。

### 取值

- `auto`
  - : 盒子不会创建一个新的本地堆叠上下文。在当前堆叠上下文中生成的盒子的堆叠层级和父级盒子相同。
- `<integer>`
  - : {{cssxref("&lt;integer&gt;")}}（整型数字）是生成的盒子在当前堆叠上下文中的堆叠层级。此盒子也会创建一个堆叠层级为 0 的本地堆叠上下文。这意味着后代（元素）的 z-indexes 不与此元素的外部元素的 z-indexes 进行对比。

### 格式化语法

{{csssyntax("z-index")}}

## 示例

### HTML

```html
<div class="wrapper">
  <div class="dashed-box">Dashed box</div>
  <div class="gold-box">Gold box</div>
  <div class="green-box">Green box</div>
</div>
```

### CSS

```css
.wrapper {
  position: relative;
}

.dashed-box {
  position: relative;
  z-index: 1;
  border: dashed;
  height: 8em;
  margin-bottom: 1em;
  margin-top: 2em;
}
.gold-box {
  position: absolute;
  z-index: 3; /* put .gold-box above .green-box and .dashed-box */
  background: gold;
  width: 80%;
  left: 60px;
  top: 3em;
}
.green-box {
  position: absolute;
  z-index: 2; /* put .green-box above .dashed-box */
  background: lightgreen;
  width: 20%;
  left: 65%;
  top: -25px;
  height: 7em;
  opacity: 0.9;
}
```

### 结果

{{ EmbedLiveSample('示例', '550', '200', '') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- CSS {{Cssxref("position")}} 属性
- [理解 CSS z-indexes](/zh-CN/docs/CSS/Understanding_z-index)
