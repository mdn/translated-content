---
title: <baseline-position>
slug: Web/CSS/Reference/Values/baseline-position
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**`<baseline-position>`** {{glossary("enumerated", "枚举")}}值类型表示 `baseline` 关键字值以及 `first` 和 `last` 两个修饰符。它用于 {{cssxref("align-content")}}、{{cssxref("align-items")}}、{{cssxref("align-self")}}、{{cssxref("justify-items")}} 和 {{cssxref("justify-self")}} 属性，以及 {{cssxref("place-content")}}、{{cssxref("place-items")}} 和 {{cssxref("place-self")}} 这些简写属性。

`first` 和 `last` 值为盒子指定基线对齐偏好，如果省略修饰符则默认为 `first`。

## 语法

```plain
<baseline-position> = [ first | last ]? && baseline
```

## 值

`<baseline-position>` 枚举值类型通过 `baseline` 值和一个可选的 `first` 或 `last` 修饰符来指定。如果一个盒不属于共享的对齐上下文，那么将使用回退对齐方式。回退对齐方式也用于在{{glossary("alignment container", "对齐容器")}}内对齐基线共享组。

- `baseline`
  - : 计算为 `first baseline`，定义如下。
- `first baseline`
  - : 将盒的第一个基线集的对齐基线与其基线共享组的相应基线对齐。对于自对齐，回退对齐是 `safe self-start`；对于内容分布，则是 `safe start`。
- `last baseline`
  - : 将盒的最后一个基线集的对齐基线与其基线共享组的相应基线对齐。对于自对齐，回退对齐是 `safe self-end`；对于内容分布，则是 `safe end`。

## 规范

{{Specifications}}

## 参见

- 使用此数据类型的属性：{{cssxref("align-content")}}、{{cssxref("align-items")}}、{{cssxref("align-self")}}、{{cssxref("justify-items")}}、{{cssxref("justify-self")}}、{{cssxref("place-content")}}、{{cssxref("place-items")}} 和 {{cssxref("place-self")}}
- 其他盒模型对齐数据类型：{{cssxref("content-distribution")}}、{{cssxref("content-position")}}、{{cssxref("overflow-position")}} 和 {{cssxref("self-position")}}
- [CSS 盒模型对齐](/zh-CN/docs/Web/CSS/Guides/Box_alignment)模块
- [CSS 弹性盒布局](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout)模块
- [CSS 网格布局](/zh-CN/docs/Web/CSS/Guides/Grid_layout)模块
