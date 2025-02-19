---
title: 堆叠时不使用 z-index 属性
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_without_z-index
l10n:
  sourceCommit: e1b6d7d2d02a07f7e86268c81678713fad4d9a5d
---

{{CSSRef}}

当没有在任何元素上指定 {{cssxref("z-index")}} 属性时，元素的堆叠顺序如下（从下到上）：

1. 根元素的背景和边框。
2. 后代非定位元素，按在 HTML 中出现的顺序排列。
3. 后代定位元素，按在 HTML 中出现的顺序排列。

请参阅[定位类型](/zh-CN/docs/Web/CSS/position#定位类型)以了解定位元素和非定位元素的解释。

请记住，当 {{cssxref("order")}} 属性在 {{cssxref("flex")}} 容器内改变渲染顺序（_基于 HTML 中的出现顺序_）时，它也会影响层叠上下文的顺序。

## 示例

在这个例子中，DIV #1 到 DIV #4 是定位元素。DIV #5 是静态定位的，因此它绘制在其他四个元素下面，即使它在 HTML 标记中出现在后面。

### HTML

```html
<div id="abs1" class="absolute">
  <strong>DIV #1</strong><br />position: absolute;
</div>
<div id="rel1" class="relative">
  <strong>DIV #2</strong><br />position: relative;
</div>
<div id="rel2" class="relative">
  <strong>DIV #3</strong><br />position: relative;
</div>
<div id="abs2" class="absolute">
  <strong>DIV #4</strong><br />position: absolute;
</div>
<div id="sta1" class="static">
  <strong>DIV #5</strong><br />position: static;
</div>
```

### CSS

```css
strong {
  font-family: sans-serif;
}

div {
  padding: 10px;
  border: 1px dashed;
  text-align: center;
}

.static {
  position: static;
  height: 80px;
  background-color: #ffc;
  border-color: #996;
}

.absolute {
  position: absolute;
  width: 150px;
  height: 350px;
  background-color: #fdd;
  border-color: #900;
  opacity: 0.7;
}

.relative {
  position: relative;
  height: 80px;
  background-color: #cfc;
  border-color: #696;
  opacity: 0.7;
}

#abs1 {
  top: 10px;
  left: 10px;
}

#rel1 {
  top: 30px;
  margin: 0px 50px 0px 50px;
}

#rel2 {
  top: 15px;
  left: 20px;
  margin: 0px 50px 0px 50px;
}

#abs2 {
  top: 10px;
  right: 10px;
}

#sta1 {
  background-color: #ffc;
  margin: 0px 50px 0px 50px;
}
```

## 结果

{{EmbedLiveSample("示例", 600, 400)}}

## 参见

- [堆叠浮动元素](/zh-CN/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_floating_elements)：浮动元素如何与堆叠一起处理。
- [使用 z-index](/zh-CN/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Using_z-index)：如何使用 `z-index` 来更改默认堆叠。
- [层叠上下文](/zh-CN/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)：关于堆叠上下文的说明。
- [层叠上下文示例 1](/zh-CN/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_1)：2 级 HTML 层级，z-index 在最后一级
- [层叠上下文示例 2](/zh-CN/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_2)：2 级 HTML 层级，z-index 在所有层级
- [层叠上下文示例 3](/zh-CN/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_3)：3 级 HTML 层级，z-index 在第二级
