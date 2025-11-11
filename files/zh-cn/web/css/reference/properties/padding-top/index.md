---
title: padding-top
slug: Web/CSS/Reference/Properties/padding-top
l10n:
  sourceCommit: fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

**`padding-top`** [CSS](/zh-CN/docs/Web/CSS) 属性设置了元素顶部[内边距区域](/zh-CN/docs/Web/CSS/Guides/Box_model/Introduction#内边距区域)的高度。

{{InteractiveExample("CSS Demo: padding-top")}}

```css interactive-example-choice
padding-top: 1em;
```

```css interactive-example-choice
padding-top: 10%;
```

```css interactive-example-choice
padding-top: 20px;
```

```css interactive-example-choice
padding-top: 1ch;
```

```css interactive-example-choice
padding-top: 0;
```

```html interactive-example
<section id="default-example">
  <div class="transition-all" id="example-element">
    <div class="box">
      Far out in the uncharted backwaters of the unfashionable end of the
      western spiral arm of the Galaxy lies a small unregarded yellow sun.
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 10px solid #ffc129;
  overflow: hidden;
  text-align: left;
}

.box {
  border: dashed 1px;
}
```

内边距区域是指一个元素的内容和边框之间的区域。

![CSS padding-top 属性对元素盒子的影响](padding-top.svg)

> [!NOTE]
> 通过 {{cssxref("padding")}} 属性，只需一次声明，就可以为元素的所有四边设置内边距。

## 语法

```css
/* <length> 值 */
padding-top: 0.5em;
padding-top: 0;
padding-top: 2cm;

/* <percentage> 值 */
padding-top: 10%;

/* 全局值 */
padding-top: inherit;
padding-top: initial;
padding-top: revert;
padding-top: revert-layer;
padding-top: unset;
```

`padding-top` 属性可以从下面的列表中指定一个值。与 margin 不同，padding 不允许使用负值。

### 值

- {{cssxref("&lt;length&gt;")}}
  - : 作为定值的内边距尺寸。必须是非负值。
- {{cssxref("&lt;percentage&gt;")}}
  - : 相对于[包含块](/zh-CN/docs/Web/CSS/Guides/Display/Containing_block)的行内尺寸（水平语言中的*宽度*，由 {{cssxref("writing-mode")}} 定义）的百分比。必须是非负值。

### 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 使用像素和百分比值设置上内边距

```css
.content {
  padding-top: 5%;
}
.sidebox {
  padding-top: 10px;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 基本盒模型介绍](/zh-CN/docs/Web/CSS/Guides/Box_model/Introduction)
- {{cssxref("padding-right")}}、{{cssxref("padding-bottom")}}、{{cssxref("padding-left")}} 和简写属性 {{cssxref("padding")}}
- 映射的逻辑属性：{{cssxref("padding-block-start")}}、{{cssxref("padding-block-end")}}、{{cssxref("padding-inline-start")}} 和 {{cssxref("padding-inline-end")}} 以及简写属性 {{cssxref("padding-block")}} 和 {{cssxref("padding-inline")}}
