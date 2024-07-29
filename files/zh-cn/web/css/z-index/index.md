---
title: z-index
slug: Web/CSS/z-index
---

{{CSSRef}}

CSS **`z-index`** 属性设置定位元素及其后代元素或 flex 项目的 Z 轴顺序。z-index 较大的重叠元素会覆盖较小的元素。

{{EmbedInteractiveExample("pages/css/z-index.html")}}

对于定位盒子（即 `position` 属性值非 `static` 的盒子），`z-index` 属性会指定：

1. 盒子在当前[层叠上下文](/zh-CN/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)中的层叠等级。
2. 盒子是否会创建局部层叠上下文。

## 语法

```css
/* 关键字值 */
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

`z-index` 属性可以被设置为关键字 `auto` 或 `<integer>`。

### 取值

- `auto`
  - : 盒子不会创建一个新的局部层叠上下文。盒子在当前层叠上下文的层叠等级是 `0`。
- `<integer>`
  - : 盒子在当前层叠上下文的层叠等级就是 {{cssxref("&lt;integer&gt;")}} 的值。盒子还会创建一个局部层叠上下文。这意味着该元素的后代元素不会和该元素的外部元素比较 `z-index`。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 视觉上的分层元素

#### HTML

```html
<div class="wrapper">
  <div class="dashed-box">Dashed box</div>
  <div class="gold-box">Gold box</div>
  <div class="green-box">Green box</div>
</div>
```

#### CSS

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

#### 结果

{{ EmbedLiveSample('视觉上的分层元素', '550', '200') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- CSS {{Cssxref("position")}} 属性
- [理解 CSS z-index](/zh-CN/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index)
