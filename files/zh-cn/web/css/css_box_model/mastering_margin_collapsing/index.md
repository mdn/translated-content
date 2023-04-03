---
title: 外边距重叠
slug: Web/CSS/CSS_Box_Model/Mastering_margin_collapsing
---

{{CSSRef}}

块的[上外边距 (margin-top)](/zh-CN/docs/Web/CSS/margin-top)和[下外边距 (margin-bottom)](/zh-CN/docs/Web/CSS/margin-bottom)有时合并 (折叠) 为单个边距，其大小为单个边距的最大值 (或如果它们相等，则仅为其中一个)，这种行为称为**边距折叠**。

> **备注：** 有设定[float](/zh-CN/docs/Web/CSS/float)和[position=absolute](/zh-CN/docs/Web/CSS/position#absolute)的元素不会产生外边距重叠行为。

有三种情况会形成外边距重叠：

- 同一层相邻元素之间
  - : 相邻的两个元素之间的外边距重叠，除非后一个元素加上[clear-fix 清除浮动](/zh-CN/docs/Web/CSS/clear)。

```html
<style>
p:nth-child(1){
  margin-bottom: 13px;
}
p:nth-child(2){
  margin-top: 87px;
}
</style>

<p>下边界范围会...</p>
<p>...会跟这个元素的上边界范围重叠。</p>
```

这个例子如果以为边界会合并的话，理所当然会猜测上下 2 个元素会合并一个 100px 的边界范围，但其实会发生边界折叠，只会挑选最大边界范围留下，所以这个例子的边界范围其实是 87px。

- 没有内容将父元素和后代元素分开
  - : 如果没有边框{{cssxref("border")}}，内边距{{cssxref("padding")}}，行内内容，也没有创建[块级格式上下文](/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)或[清除浮动](/zh-CN/docs/Web/CSS/clear)来分开一个块级元素的上边界{{cssxref("margin-top")}} 与其内一个或多个后代块级元素的上边界{{cssxref("margin-top")}}；或没有边框，内边距，行内内容，高度{{cssxref("height")}}，最小高度{{cssxref("min-height")}}或 最大高度{{cssxref("max-height")}} 来分开一个块级元素的下边界{{cssxref("margin-bottom")}}与其内的一个或多个后代后代块元素的下边界{{cssxref("margin-bottom")}}，则就会出现父块元素和其内后代块元素外边界重叠，重叠部分最终会溢出到父级块元素外面。

```html
<style type="text/css">
    section    {
        margin-top: 13px;
        margin-bottom: 87px;
    }

    header {
        margin-top: 87px;
    }

    footer {
        margin-bottom: 13px;
    }
</style>

<section>
    <header>上边界重叠 87</header>
    <main></main>
    <footer>下边界重叠 87 不能再高了</footer>
</section>
```

- 空的块级元素
  - : 当一个块元素上边界{{cssxref("margin-top")}} 直接贴到元素下边界{{cssxref("margin-bottom")}}时也会发生边界折叠。这种情况会发生在一个块元素完全没有设定边框{{cssxref("border")}}、内边距{{cssxref("padding")}}、高度{{cssxref("height")}}、最小高度{{cssxref("min-height")}} 、最大高度{{cssxref("max-height")}} 、内容设定为 inline 或是加上[clear-fix](/zh-CN/docs/Web/CSS/clear)的时候。

```html
<style>
p {
  margin: 0;
}
div {
  margin-top: 13px;
  margin-bottom: 87px;
}
</style>

<p>下边界范围是 87 ...</p>
<div></div>
<p>... 上边界范围是 87</p>
```

一些需要注意的地方：

- 上述情况的组合会产生更复杂的外边距折叠。
- 即使某一外边距为 0，这些规则仍然适用。因此就算父元素的外边距是 0，第一个或最后一个子元素的外边距仍然会“溢出”到父元素的外面。
- 如果参与折叠的外边距中包含负值，折叠后的外边距的值为最大的正边距与最小的负边距（即绝对值最大的负边距）的和，；也就是说如果有 -13px 8px 100px 叠在一起，边界范围的技术就是 100px -13px 的 87px。
- 如果所有参与折叠的外边距都为负，折叠后的外边距的值为最小的负边距的值。这一规则适用于相邻元素和嵌套元素。

以上这些内容都是发生在 Block-Level 的元素，设定 floating 和 absolutely positioned 的元素完全不用担心边界重叠的问题。

## 示例

### HTML

```html
<p>The bottom margin of this paragraph is collapsed …</p>
<p>… with the top margin of this paragraph, yielding a margin of <code>1.2rem</code> in between.</p>

<div>This parent element contains two paragraphs!
  <p>This paragraph has a <code>.4rem</code> margin between it and the text above.</p>
  <p>My bottom margin collapses with my parent, yielding a bottom margin of <code>2rem</code>.</p>
</div>

<p>I am <code>2rem</code> below the element above.</p>
```

### CSS

```css
div {
  margin: 2rem 0;
  background: lavender;
}

p {
  margin: .4rem 0 1.2rem 0;
  background: yellow;
}
```

### 结果

{{EmbedLiveSample('示例', 'auto', 350)}}

## 规范

{{Specifications}}

## 参见

- CSS 重要概念：

  - [CSS 语法](/zh-CN/docs/Web/CSS/Syntax)
  - [@ 规则](/zh-CN/docs/Web/CSS/At-rule)
  - [注释](/zh-CN/docs/Web/CSS/Comments)
  - [优先级](/zh-CN/docs/Web/CSS/Specificity)
  - [继承](/zh-CN/docs/Web/CSS/inheritance)
  - [盒模型](/zh-CN/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  - [布局模式](/zh-CN/docs/Web/CSS/Layout_mode)
  - [视觉格式化模型](/zh-CN/docs/Web/CSS/Visual_formatting_model)
  - [外边距合并](/zh-CN/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
  - 值

    - [初始值](/zh-CN/docs/Web/CSS/initial_value)
    - [计算值](/zh-CN/docs/Web/CSS/computed_value)
    - [解析值](/zh-CN/docs/Web/CSS/resolved_value)
    - [指定值](/zh-CN/docs/Web/CSS/specified_value)
    - [应用值](/zh-CN/docs/Web/CSS/used_value)
    - [实际值](/zh-CN/docs/Web/CSS/actual_value)

  - [属性值定义语法](/zh-CN/docs/Web/CSS/Value_definition_syntax)
  - [简写属性](/zh-CN/docs/Web/CSS/Shorthand_properties)
  - [可替换元素](/zh-CN/docs/Web/CSS/Replaced_element)
