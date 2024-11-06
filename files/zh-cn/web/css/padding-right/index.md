---
title: padding-right
slug: Web/CSS/padding-right
l10n:
  sourceCommit: fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{CSSRef}}

**`padding-right`** [CSS](/zh-CN/docs/Web/CSS) 属性设置了元素右侧[内边距区域](/zh-CN/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#内边距区域)的宽度。

{{EmbedInteractiveExample("pages/css/padding-right.html")}}

元素的内边距区域是其内容和边框之间的空间。

> [!NOTE]
> 通过 {{cssxref("padding")}} 属性，只需一次声明，就可以为元素的所有四边设置内边距。

## 语法

```css
/* <length> 值 */
padding-right: 0.5em;
padding-right: 0;
padding-right: 2cm;

/* <percentage> 值 */
padding-right: 10%;

/* 全局值 */
padding-right: inherit;
padding-right: initial;
padding-right: revert;
padding-right: revert-layer;
padding-right: unset;
```

`padding-right` 属性可以从下面的列表中指定一个值。与 margin 不同，padding 不允许使用负值。

### 值

- {{cssxref("&lt;length&gt;")}}
  - : 作为定值的内边距尺寸。必须是非负值。
- {{cssxref("&lt;percentage&gt;")}}
  - : 相对于[包含块](/zh-CN/docs/Web/CSS/Containing_block)的行内尺寸（水平语言中的*宽度*，由 {{cssxref("writing-mode")}} 定义）的百分比。必须是非负值。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 使用像素和百分比值设置右内边距

```css
.content {
  padding-right: 5%;
}
.sidebox {
  padding-right: 10px;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 基本盒模型介绍](/zh-CN/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- {{cssxref("padding-top")}}、{{cssxref("padding-bottom")}}、{{cssxref("padding-left")}} 和简写属性 {{cssxref("padding")}}
- 映射的逻辑属性：{{cssxref("padding-block-start")}}、{{cssxref("padding-block-end")}}、{{cssxref("padding-inline-start")}} 和 {{cssxref("padding-inline-end")}} 以及简写属性 {{cssxref("padding-block")}} 和 {{cssxref("padding-inline")}}
