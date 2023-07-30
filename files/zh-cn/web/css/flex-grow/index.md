---
title: flex-grow
slug: Web/CSS/flex-grow
---

{{CSSRef}}

CSS 属性 **`flex-grow`** [CSS](/zh-CN/docs/Web/CSS) 设置 flex 项 [主尺寸](https://www.w3.org/TR/css-flexbox/#main-size) 的 flex 增长系数。

{{EmbedInteractiveExample("pages/css/flex-grow.html")}}

## 语法

满足[CSS 属性值定义语法](/zh-CN/docs/CSS/Value_definition_syntax) {{csssyntax("flex-grow")}}。

```css
/* <number> 值 */
flex-grow: 3;
flex-grow: 0.6;

/* 全局值 */
flex-grow: inherit;
flex-grow: initial;
flex-grow: revert;
flex-grow: unset;
```

`flex-grow` 的属性规定为一个 `<number>`。

### 值

- `<number>`
  - : 参见 {{cssxref("&lt;number&gt;")}}。负值无效，默认为 0。

## 描述

这个属性规定了 `flex-grow` 项在 flex 容器中分配剩余空间的相对比例。
[主尺寸](https://www.w3.org/TR/css-flexbox/#main-size)是项的宽度或高度，这取决于{{cssxref("flex-direction")}}值。

剩余空间是 flex 容器的大小减去所有 flex 项的大小加起来的大小。如果所有的兄弟项目都有相同的 flex-grow 系数，那么所有的项目将剩余空间按相同比例分配，否则将根据不同的 flex-grow 定义的比例进行分配。

`flex-grow` 与其他的 flex 属性{{cssxref("flex-shrink")}}和{{cssxref("flex-basis")}}一起使用，通常使用{{cssxref("flex")}} 速记来定义，以确保所有的值都被设置。</p>

## 正式定义

{{cssinfo}}

## 正式语法

{{csssyntax}}

## 样例

### 设置 flex 项目增长因子

#### HTML

```html
<h4>这展示了 flex 增长</h4>
<h5>A,B,C 和 F 具有 flex-grow:1。D 和 E 具有 flex-grow:2 .</h5>
<div id="content">
  <div class="box" style="background-color:red;">A</div>
  <div class="box" style="background-color:lightblue;">B</div>
  <div class="box" style="background-color:yellow;">C</div>
  <div class="box1" style="background-color:brown;">D</div>
  <div class="box1" style="background-color:lightgreen;">E</div>
  <div class="box" style="background-color:brown;">F</div>
</div>
```

#### CSS

```css
#content {
  display: flex;

  justify-content: space-around;
  flex-flow: row wrap;
  align-items: stretch;
}

.box {
  flex-grow: 1;
  border: 3px solid rgba(0, 0, 0, 0.2);
}

.box1 {
  flex-grow: 2;
  border: 3px solid rgba(0, 0, 0, 0.2);
}
```

#### 结果

{{EmbedLiveSample('设置 flex 项目增长因子', '700px', '300px')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 CSS 弹性盒子](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Using_CSS_flexible_boxes)
- CSS Flexbox 指南：[弹性盒子的基本概念](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- CSS Flexbox 指南：[控制 Flex 子元素在主轴上的比例](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [`flex-grow` is weird. Or is it?](https://css-tricks.com/flex-grow-is-weird/) Manuel Matuzovic 在 CSS-Tricks 上的文章，说明了 flex-grow 的工作原理
