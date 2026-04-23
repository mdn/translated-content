---
title: padding-left
slug: Web/CSS/Reference/Properties/padding-left
l10n:
  sourceCommit: fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

**`padding-left`** [CSS](/zh-CN/docs/Web/CSS) 属性设置了元素左侧[内边距区域](/zh-CN/docs/Web/CSS/Guides/Box_model/Introduction#内边距区域)的宽度。

{{InteractiveExample("CSS Demo: padding-left")}}

```css interactive-example-choice
padding-left: 1.5em;
```

```css interactive-example-choice
padding-left: 10%;
```

```css interactive-example-choice
padding-left: 20px;
```

```css interactive-example-choice
padding-left: 1ch;
```

```css interactive-example-choice
padding-left: 0;
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

元素的内边距区域是其内容和边框之间的空间。

> [!NOTE]
> 通过 {{cssxref("padding")}} 属性，只需一次声明，就可以为元素的所有四边设置内边距。

## 语法

```css
/* <length> 值 */
padding-left: 0.5em;
padding-left: 0;
padding-left: 2cm;

/* <percentage> 值 */
padding-left: 10%;

/* 全局值 */
padding-left: inherit;
padding-left: initial;
padding-left: revert;
padding-left: revert-layer;
padding-left: unset;
```

`padding-left` 属性可以从下面的列表中指定一个值。与 margin 不同，padding 不允许使用负值。

### 值

- {{cssxref("&lt;length&gt;")}}
  - : 作为定值的内边距尺寸。必须是非负值。
- {{cssxref("&lt;percentage&gt;")}}
  - : 相对于[包含块](/zh-CN/docs/Web/CSS/Guides/Display/Containing_block)的行内尺寸（水平语言中的*宽度*，由 {{cssxref("writing-mode")}} 定义）的百分比。必须是非负值。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 使用像素和百分比值设置左内边距

```css
.content {
  padding-left: 5%;
}
.sidebox {
  padding-left: 10px;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 基本盒模型介绍](/zh-CN/docs/Web/CSS/Guides/Box_model/Introduction)
- {{cssxref("padding-top")}}、{{cssxref("padding-right")}}、{{cssxref("padding-bottom")}} 和简写属性 {{cssxref("padding")}}
- 映射的逻辑属性：{{cssxref("padding-block-start")}}、{{cssxref("padding-block-end")}}、{{cssxref("padding-inline-start")}} 和 {{cssxref("padding-inline-end")}} 以及简写属性 {{cssxref("padding-block")}} 和 {{cssxref("padding-inline")}}
