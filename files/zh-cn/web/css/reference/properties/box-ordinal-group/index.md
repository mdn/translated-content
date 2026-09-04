---
title: box-ordinal-group
slug: Web/CSS/Reference/Properties/box-ordinal-group
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_Header}}{{Deprecated_Header}}

> [!WARNING]
> 这是最初版 CSS 弹性盒布局模块草案中的一个属性。它在规范中已经被替代。关于当前标准的信息，请参见[弹性盒子](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)。

[CSS](/zh-CN/docs/Web/CSS) 属性 **`box-ordinal-group`** 用于将弹性盒子的子元素分配到一个序号组中。

序号组可以与 {{CSSxRef("box-direction")}} 属性配合使用，用于控制盒子的直接子元素的显示顺序。当计算得到的 `box-direction` 为 normal 时，盒子会从编号最小的序号组开始显示其元素，并确保这些元素出现在容器的左侧（对于水平盒子）或顶部（对于垂直盒子）。具有相同序号组的元素会按照它们在源文档树中的顺序进行排列。在反向方向下，序号组依然按照相同的顺序被检查，但元素的显示顺序会反转。

## 语法

```css
/* <integer> 值 */
box-ordinal-group: 1;
box-ordinal-group: 5;

/* 全局值 */
box-ordinal-group: inherit;
box-ordinal-group: initial;
box-ordinal-group: unset;
```

`box-ordinal-group` 属性指定为任意正整数 {{CSSxRef("&lt;integer&gt;")}}。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntaxRaw(`box-ordinal-group = <integer>`)}}

## 示例

### 基本用法示例

在较早版本的规范中，`box-ordinal-group` 被引入，用于改变弹性容器中子元素的显示顺序。

```css
article:nth-child(1) {
  -webkit-box-ordinal-group: 2;
  -moz-box-ordinal-group: 2;
  box-ordinal-group: 2;
}

article:nth-child(2) {
  -webkit-box-ordinal-group: 1;
  -moz-box-ordinal-group: 1;
  box-ordinal-group: 1;
}
```

现代的弹性盒子等价属性是 {{cssxref("order")}}。

## 规范

不属于任何标准。

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSxRef("flex")}}
- {{CSSxRef("flex-basis")}}
- {{CSSxRef("flex-grow")}}
- {{CSSxRef("flex-shrink")}}
