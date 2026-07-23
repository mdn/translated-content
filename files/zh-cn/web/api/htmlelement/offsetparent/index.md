---
title: HTMLElement：offsetParent 属性
short-title: offsetParent
slug: Web/API/HTMLElement/offsetParent
l10n:
  sourceCommit: 678f7ed93e03b90cae88e9a3c7e4b81b0f969664
---

{{ APIRef("HTML DOM") }}

**`HTMLElement.offsetParent`** 只读属性返回对最近的（在包含层级中最近的）已定位祖先元素的引用。

已定位祖先可能是：

- 绝对定位元素的[包含块](/zh-CN/docs/Web/CSS/Guides/Display/Containing_block#确定包含块)
- 与当前元素有效 [zoom](/zh-CN/docs/Web/CSS/Reference/Properties/zoom) 值不同的元素（即其所有父元素缩放比例的乘积）
- 当元素本身为静态定位时的 `td`、`th`、`table`

如果没有已定位的祖先元素，则返回 `body`。

> [!NOTE]
> 在下列情况下，`offsetParent` 返回 `null`：
>
> - 该元素或任一祖先元素的 `display` 属性被设置为 `none`。
> - 该元素的 `position` 属性被设置为 `fixed`，且其包含块是视口。
>   如果包含块不是视口，则 `offsetParent` 返回形成包含块的最近祖先，例如设置了 `transform`、`perspective` 或 `filter` 样式的祖先。
> - 该元素是 `<body>` 或 `<html>`。

`offsetParent` 很有用，因为 {{domxref("HTMLElement.offsetTop","offsetTop")}} 和 {{domxref("HTMLElement.offsetLeft","offsetLeft")}} 是相对于其内边距边缘的。

## 值

对当前元素在其中发生偏移的那个元素的对象引用。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
