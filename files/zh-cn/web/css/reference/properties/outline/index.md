---
title: outline
slug: Web/CSS/Reference/Properties/outline
---

[CSS](/zh-CN/docs/Web/CSS) 的 `outline` 属性是在一条声明中设置多个轮廓属性的[简写属性](/zh-CN/docs/Web/CSS/Guides/Cascade/Shorthand_properties) ，例如 {{cssxref("outline-style")}}, {{cssxref("outline-width")}} 和 {{cssxref("outline-color")}}。

{{InteractiveExample("CSS Demo: outline")}}

```css interactive-example-choice
outline: solid;
```

```css interactive-example-choice
outline: dashed red;
```

```css interactive-example-choice
outline: 1rem solid;
```

```css interactive-example-choice
outline: thick double #32a1ce;
```

```css interactive-example-choice
outline: 8px ridge rgba(170, 50, 220, 0.6);
border-radius: 2rem;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with an outline around it.
  </div>
</section>
```

```css interactive-example
#example-element {
  padding: 0.75rem;
  width: 80%;
  height: 100px;
}
```

与其他简写属性一样，忽略的子属性会被设为 [初始值](/zh-CN/docs/Web/CSS/Guides/Cascade/Property_value_processing#初始值)。

### border 和 outline

[border](/zh-CN/docs/Web/CSS/Reference/Properties/border) 和 outline 很类似，但有如下区别：

- outline 不占据空间，绘制于元素内容周围。
- 根据规范，outline 通常是矩形，但也可以是非矩形的。

## 语法

```css
/* 样式 */
outline: solid;

/* 样式 | 颜色 */
outline: dashed #f66;

/* 宽度 | 样式 */
outline: thick inset;

/* 宽度 | 样式 | 颜色 */
outline: 3px solid green;

/* 全局值 */
outline: inherit;
outline: initial;
outline: revert;
outline: revert-layer;
outline: unset;
```

`outline` 属性可使用以下一个、两个或三个值来声明，且顺序不重要。

> [!NOTE]
> 对于很多元素来说，如果没有设置样式，轮廓是不可见的。因为样式（style）的默认值是 `none`。但 `input` 元素是例外，其样式默认值由浏览器决定。

### 取值

- **`<'outline-color'>`**
  - : 设置轮廓的颜色。没有设置时默认值为 `currentcolor`。参见 {{cssxref("outline-color")}}。
- `<'outline-style'>`
  - : 设置轮廓的样式。没有设置时默认值为 `none`。参见 {{cssxref("outline-style")}}。
- `<'outline-width'>`
  - : 设置轮廓的宽度。没有设置时默认值为 `medium`。参见 {{cssxref("outline-width")}}。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 使用 outline 设置焦点样式

#### HTML

```html
<a href="#">该链接具有特殊的焦点样式。</a>
```

### CSS

```css
a {
  border: 1px solid;
  border-radius: 3px;
  display: inline-block;
  margin: 10px;
  padding: 5px;
}

a:focus {
  outline: 4px dotted #e73;
  outline-offset: 4px;
  background: #ffa;
}
```

#### 结果

{{EmbedLiveSample("使用 outline 设置焦点样式", "100%", 85)}}

## 无障碍考虑

将 `outline` 设置为 `0` 或 `none` 会移除浏览器的默认聚焦样式。如果一个元素可交互，这个元素必须有一个可见的聚焦提示。若移除了默认聚焦样式，记得提供一个显眼的聚焦样式。

- [How to Design Useful and Usable Focus Indicators](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)
- WCAG 2.1: [Understanding Success Criterion 2.4.7: Focus Visible](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
