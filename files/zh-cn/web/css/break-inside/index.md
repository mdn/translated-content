---
title: break-inside
slug: Web/CSS/break-inside
---

{{CSSRef}}

**`break-inside`** [CSS](/zh-CN/docs/CSS) 属性描述了在多列布局页面下的内容盒子如何中断，如果多列布局没有内容盒子，这个属性会被忽略。

```css
break-inside: auto;
break-inside: avoid;
break-inside: avoid-page;
break-inside: avoid-column;
break-inside: avoid-region;
```

每一个可能的断点（可以理解为元素的边界）由三个属性来定义。前一个元素的{{cssxref("break-after")}}，后一个元素的{{cssxref("break-before")}}，以及当前元素的**`break-inside`**。

如果需要定义一个中断点，必须遵循以下原则：

1. 如果这三个中断属性的值有一个是*强制中断值*（这些强制中断值包括了 `always`, `left`, `right`, `page`, `column`, `region`），那么这个属性的值就具有优先权。如果其中一个以上是这样的断点，则使用流中最新出现的元素的值。因此，`break-before`值优先于`break-after`值，而后者又优先于`break-inside`值。
2. 如果三个相关值中的任何一个是避免中断值，相关值包括 `avoid`, `avoid-page`, `avoid-region`, `avoid-column`, 则在该点上不应用此类中断。

一旦应用了强制中断，如果需要，可以添加软中断，但不能在元素边界上添加相应的`avoid`值。

{{cssinfo}}

## Syntax

### Values

- `auto`
  - : 允许 (既不禁止也不强制) 在主框中插入任何中断 (页、列或区域)。
- `avoid-page`
  - : 避免主框中任何页的中断点
- `avoid-column`
  - : 避免主框中任何列的中断点
- `avoid-region` {{experimental_inline}}
  - : 避免原则框内的任何区域中断。

### Formal syntax

{{csssyntax}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
