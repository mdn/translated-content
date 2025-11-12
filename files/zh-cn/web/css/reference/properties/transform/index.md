---
title: transform
slug: Web/CSS/Reference/Properties/transform
l10n:
  sourceCommit: 4940889b79f76552b95e092d48012cb6603a324b
---

[CSS](/zh-CN/docs/Web/CSS) **`transform`** 属性允许你旋转、缩放、倾斜或平移给定元素。这是通过修改 CSS [视觉格式化模型](/zh-CN/docs/Web/CSS/Guides/Display/Visual_formatting_model)的坐标空间实现的。

{{InteractiveExample("CSS Demo: transform")}}

```css interactive-example-choice
transform: matrix(1, 2, 3, 4, 5, 6);
```

```css interactive-example-choice
transform: translate(120px, 50%);
```

```css interactive-example-choice
transform: scale(2, 0.5);
```

```css interactive-example-choice
transform: rotate(0.5turn);
```

```css interactive-example-choice
transform: skew(30deg, 20deg);
```

```css interactive-example-choice
transform: scale(0.5) translate(-100%, -100%);
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/firefox-logo.svg"
    width="200" />
</section>
```

如果属性的值不是 `none`，则将创建一个[层叠上下文](/zh-CN/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)。在这种情况下，该元素将作为任何包含的 `position: fixed;` 或 `position: absolute;` 元素的[包含块](/zh-CN/docs/Web/CSS/Guides/Display/Containing_block)。

> [!WARNING]
> 只能 `transform` 由盒模型定位的元素，也就是所有布局由 CSS 盒模型管理的元素，除了：[非替换的行内盒子](/zh-CN/docs/Glossary/Inline-level_content)、[表格列](/zh-CN/docs/Web/HTML/Reference/Elements/col)和[表格列组](/zh-CN/docs/Web/HTML/Reference/Elements/colgroup)。

## 语法

```css
/* 关键字值 */
transform: none;

/* 函数值 */
transform: matrix(1, 2, 3, 4, 5, 6);
transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
transform: perspective(17px);
transform: rotate(0.5turn);
transform: rotate3d(1, 2, 3, 10deg);
transform: rotateX(10deg);
transform: rotateY(10deg);
transform: rotateZ(10deg);
transform: translate(12px, 50%);
transform: translate3d(12px, 50%, 3em);
transform: translateX(2em);
transform: translateY(3in);
transform: translateZ(2px);
transform: scale(2, 0.5);
transform: scale3d(2.5, 1.2, 0.3);
transform: scaleX(2);
transform: scaleY(0.5);
transform: scaleZ(0.3);
transform: skew(30deg, 20deg);
transform: skewX(30deg);
transform: skewY(1.07rad);

/* 多个函数值 */
transform: translateX(10px) rotate(10deg) translateY(5px);
transform: perspective(500px) translate(10px, 0, 20px) rotateY(3deg);

/* 全局值 */
transform: inherit;
transform: initial;
transform: revert;
transform: revert-layer;
transform: unset;
```

`transform` 属性可以指定为关键字值 `none`，或者是一个/多个 `<transform-function>` 值。

### 值

- {{cssxref("&lt;transform-function&gt;")}}
  - : 要应用的一个或多个 [CSS 变换函数](/zh-CN/docs/Web/CSS/Reference/Values/transform-function)。变换函数按从左到右的顺序相乘，也就是说复合变换按从右到左的顺序有效地应用。
- `none`
  - : 不应用任何变换。

## 无障碍考虑

缩放动画存在无障碍的问题，因为它们是某些类型的偏头痛的常见触发因素。如果你需要在网站上包含这种动画，你应该提供一个控件，允许用户在网站层面关闭所有动画。

另外，考虑利用 {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}} 媒体特性——使用它编写一个[媒体查询](/zh-CN/docs/Web/CSS/Guides/Media_queries)，以便在用户在其系统首选项中指定减少动画时关闭动画。

了解更多信息：

- [MDN 对 WCAG 的理解：对指南 2.3 的解读](/zh-CN/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.3_—_seizures_and_physical_reactions_do_not_design_content_in_a_way_that_is_known_to_cause_seizures_or_physical_reactions)
- [理解成功标准 2.3.3 | W3C 对 WCAG 2.1 的解读](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions)

## 形式定义

{{CSSInfo}}

## 形式语法

{{csssyntax}}

## 示例

### 平移旋转一个元素

#### HTML

```html
<div>被变换的元素</div>
```

#### CSS

```css
div {
  border: solid red;
  transform: translate(30px, 20px) rotate(20deg);
  width: 140px;
  height: 60px;
}
```

#### 结果

{{EmbedLiveSample("平移旋转一个元素", "400", "160")}}

### 变换顺序

变换函数的顺序很重要。在这个例子中，使用相同的值对两个盒子进行了旋转和平移；只不过，变换函数的顺序不同。

#### HTML

```html
<div class="original"></div>
<div class="one">1</div>
<div class="two">2</div>
```

#### CSS

```css hidden
div {
  height: 200px;
  width: 200px;
  position: absolute;
  left: 200px;
  top: 50px;
  font-size: 4rem;
  line-height: 200px;
  text-align: center;
}
.original {
  border: 1px dashed;
}
.original:before,
.original:after {
  content: "";
  position: absolute;
  top: 100px;
  width: 500px;
  left: -150px;
  height: 1px;
  border-top: 2px dotted;
}
.original:after {
  transform: rotate(135deg);
}
.one {
  background-color: #ccc;
}
.two {
  background-color: #d6bb72;
}
```

```css
.one {
  transform: translateX(200px) rotate(135deg);
}
.two {
  transform: rotate(135deg) translateX(200px);
}
```

#### 结果

{{EmbedLiveSample("变换顺序", "400", "200")}}

当一个元素在被平移之前被旋转，它的平移方向是相对于旋转后的坐标系的。例子中的这个坐标系由一条点状直线表示。

### 更多示例

请查阅[使用 CSS 变换](/zh-CN/docs/Web/CSS/Guides/Transforms/Using)以及 {{cssxref("&lt;transform-function&gt;")}} 获取更多示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 CSS 变换](/zh-CN/docs/CSS/CSS_transforms/Using_CSS_transforms)
- {{cssxref("&lt;transform-function&gt;")}} 数据类型，包含了所有的变换函数
- 单独的 CSS 属性：{{cssxref('translate')}}、{{cssxref('rotate')}} 和 {{cssxref('scale')}}（不存在 `skew` 属性）。
- 在线直观感受 CSS Transform 函数的工具：[CSS Transform 演练场](https://css-transform.moro.es/)
