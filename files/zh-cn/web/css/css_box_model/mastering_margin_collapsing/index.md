---
title: 掌握外边距折叠
slug: Web/CSS/CSS_box_model/Mastering_margin_collapsing
---

{{CSSRef}}

区块的[上](/zh-CN/docs/Web/CSS/margin-top)[下](/zh-CN/docs/Web/CSS/margin-bottom)外边距有时会合并（折叠）为单个边距，其大小为两个边距中的最大值（或如果它们相等，则仅为其中一个），这种行为称为**外边距折叠**。注意：有设定[浮动](/zh-CN/docs/Web/CSS/float)和[绝对定位](/zh-CN/docs/Web/CSS/position#定位类型)的元素不会发生外边距折叠。

有三种情况会形成外边距折叠：

- 相邻的兄弟元素
  - : 相邻的同级元素之间的外边距会被折叠（除非后面的元素需要[清除](/zh-CN/docs/Web/CSS/clear)之前的浮动）。
- 没有内容将父元素和后代元素分开
  - : 如果没有设定边框（border）、内边距（padding）、行级（inline）内容，也没有创建[区块格式化上下文](/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)或[_间隙_](/zh-CN/docs/Web/CSS/clear)来分隔块级元素的上边距（{{cssxref("margin-top")}}）与其内一个或多个子代块级元素的上边距（{{cssxref("margin-top")}}）；或者没有设定边框、内边距、行级内容、高度（{{cssxref("height")}}）或最小高度（{{cssxref("min-height")}}）来分隔块级元素的下边距（{{cssxref("margin-bottom")}}）与其内部的一个或多个后代后代块元素的下边距（{{cssxref("margin-bottom")}}），则会出现这些外边距的折叠，重叠部分最终会溢出到父代元素的外面。
- 空的区块
  - : 如果块级元素没有设定边框、内边距、行级内容、高度（{{cssxref("height")}}）、最小高度（{{cssxref("min-height")}}）来分隔块级元素的上边距（{{cssxref("margin-top")}}）及其下边距（{{cssxref("margin-bottom")}}），则会出现其上下外边距的折叠。

一些需要注意的地方：

- 上述情况的组合会产生更复杂的（超过两个外边距的）外边距折叠。
- 即使某一外边距为 0，这些规则仍然适用。因此就算父元素的外边距是 0，第一个或最后一个子元素的外边距仍然会（根据上述规则）“溢出”到父元素的外面。
- 如果包含负边距，折叠后的外边距的值为最大的正边距与最小（绝对值最大）的负边距的和。
- 如果所有的外边距都为负值，折叠后的外边距的值为最小（绝对值最大）的负边距的值。这一规则适用于相邻元素和嵌套元素。
- 外边距折叠仅与垂直方向有关。
- `display` 设置为 `flex` 或 `grid` 的容器中不会发生外边距折叠。

## 示例

### HTML

```html
<p>这一段落的下边距与…</p>
<p>
  … 这一段落的上边距被折叠了，在两者之间产生了一个
  <code>1.2rem</code> 的边距。
</p>

<div>
  这个父元素包含两个段落！
  <p>该段落与上面的文本之间有一个 <code>.4rem</code> 的边距。</p>
  <p>我的下边距与我的父元素折叠，产生了一个 <code>2rem</code> 的边距。</p>
</div>

<p>我在上面元素的下方 <code>2rem</code> 处。</p>
```

### CSS

```css
div {
  margin: 2rem 0;
  background: lavender;
}

p {
  margin: 0.4rem 0 1.2rem 0;
  background: yellow;
}
```

### 结果

{{EmbedLiveSample('示例', 'auto', 350)}}

## 参见

- CSS 关键概念：
  - [CSS 语法](/zh-CN/docs/Web/CSS/Syntax)
  - [At 规则](/zh-CN/docs/Web/CSS/At-rule)
  - [注释](/zh-CN/docs/Web/CSS/Comments)
  - [优先级](/zh-CN/docs/Web/CSS/Specificity)
  - [继承](/zh-CN/docs/Web/CSS/Inheritance)
  - [盒模型](/zh-CN/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [布局模式](/zh-CN/docs/Web/CSS/Layout_mode)
  - [视觉格式化模型](/zh-CN/docs/Web/CSS/Visual_formatting_model)
  - 值
    - [初始值](/zh-CN/docs/Web/CSS/initial_value)
    - [计算值](/zh-CN/docs/Web/CSS/computed_value)
    - [应用值](/zh-CN/docs/Web/CSS/used_value)
    - [实际值](/zh-CN/docs/Web/CSS/actual_value)
  - [属性值定义语法](/zh-CN/docs/Web/CSS/Value_definition_syntax)
  - [简写属性](/zh-CN/docs/Web/CSS/Shorthand_properties)
  - [可替换元素](/zh-CN/docs/Web/CSS/Replaced_element)
