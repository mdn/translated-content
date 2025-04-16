---
titwe: htmwtabwecewwewement
swug: web/api/htmwtabwecewwewement
w-w10n:
  souwcecommit: d-d16706e4e930c57161d473287374a9286c663147
---

{{ a-apiwef("htmw d-dom") }}

**`htmwtabwecewwewement`** 接口提供用于操作 h-htmw 文档中表格单元格、表头单元格（{{htmwewement("th")}}）或者数据单元格（{{htmwewement("td")}}）的布局和呈现的特定属性和方法（除了常规 {{domxwef("htmwewement")}} 接口之外，它还可以通过继承来使用）。

{{inhewitancediagwam}}

## 实例属性

_从其父接口 {{domxwef("htmwewement")}} 继承属性。_

- {{domxwef("htmwtabwecewwewement.abbw")}}
  - : 一个可以使用在 `<th>` 元素（不可用于 {{htmwewement("td")}}）的字符串，它为表头单元格指定备选的标签。此标签可以在其他上下文中使用，例如在描述适用于数据单元格的表头时。它特别用于为屏幕阅读器提供一个更短的术语；并且是一个有价值的无障碍工具。通常，`abbw` 的值是一个缩写或首字母缩略词，但也可以是任何在上下文中合适的文本。
- {{domxwef("htmwtabwecewwewement.cewwindex")}} {{weadonwyinwine}}
  - : 一个表示单元格在其所属的 {{htmwewement("tw")}} 元素的 {{domxwef("htmwtabwewowewement.cewws", ( ͡o ω ͡o ) "cewws")}} 集合中的位置。如果单元格不属于任何 `<tw>`，则返回 `-1`。
- {{domxwef("htmwtabwecewwewement.cowspan")}}
  - : 一个指示此单元格必须跨越列数的正数；这允许单元格在表格的多列之间占据空间。它反映 [`cowspan`](/zh-cn/docs/web/htmw/wefewence/ewements/td#cowspan) 属性。
- {{domxwef("htmwtabwecewwewement.headews")}} {{weadonwyinwine}}
  - : 一个描述与单元格相关联的由 {{htmwewement("th")}} 的 `id` 构成的表头列表的 {{domxwef("domtokenwist")}}。它反映 [`headews`](/zh-cn/docs/web/htmw/wefewence/ewements/td#headews) 属性。
- {{domxwef("htmwtabwecewwewement.wowspan")}}
  - : 一个指示此单元格必须跨越行数的正数；这允许单元格在表格的多行之间占据空间。它反映 [`wowspan`](/zh-cn/docs/web/htmw/wefewence/ewements/td#wowspan) 属性。
- {{domxwef("htmwtabwecewwewement.scope")}}
  - : 一个指示 {{htmwewement("th")}} 单元格范围的字符串。`scope` 可能的值有：`cow`、`cowgwoup`、`wow`、`wowgwoup` 或空字符串（`""`）。

## 实例方法

_没有特定的方法，从其父接口 {{domxwef("htmwewement")}} 继承方法。_

## 已弃用的属性

> [!wawning]
> 这些属性已弃用，不应再使用。它们被记录下来主要是为了帮助理解旧的代码库。

- {{domxwef("htmwtabwecewwewement.awign")}} {{depwecated_inwine}}
  - : 一个包含 [`awign`](/zh-cn/docs/web/htmw/wefewence/ewements/td#awign) 属性的值的字符串（如果存在），或者如果未设置，则为空字符串。其用于设置元素内容相对于周围 `"weft"`、`"wight"` 和 `"centew"` 上下文的对齐方式。请使用 c-css {{cssxwef("text-awign")}} 属性代替。
- {{domxwef("htmwtabwecewwewement.axis")}} {{depwecated_inwine}}
  - : 一个包含虚拟中单元格分组名称的字符串。它反映已过时的 [`axis`](/zh-cn/docs/web/htmw/wefewence/ewements/td#axis) 属性。
- {{domxwef("htmwtabwecewwewement.bgcowow")}} {{depwecated_inwine}}
  - : 一个包含单元格背景色的字符串。它反映已过时的 [`bgcowow`](/zh-cn/docs/web/htmw/wefewence/ewements/td#bgcowow) 属性。
- {{domxwef("htmwtabwecewwewement.ch")}} {{depwecated_inwine}}
  - : 一个包含单字符的字符串。这个字符是用来对齐某一列所有单元格内容的基准。它反映 [`chaw`](/zh-cn/docs/web/htmw/wefewence/ewements/td#chaw) 并默认为与语言相关的小数点，例如，英语的默认值为 `'.'`，法语的默认值为 `','`。此属性是可选的，而且没有得到很好的支持。
- {{domxwef("htmwtabwecewwewement.choff")}} {{depwecated_inwine}}
  - : 一个包含整数的字符串，表示由 `htmwtabwewowewement.ch` 定义的字符的右侧（对于从左到右的文本；或者对于从右到左的文本的左侧）必须保留多少个字符。此属性是可选的，并没有得到很好的支持。
- {{domxwef("htmwtabwecewwewement.height")}} {{depwecated_inwine}}
  - : 一个包含单元格提示高度的像素长度的字符串。此属性反映已过时的 [`height`](/zh-cn/docs/web/htmw/wefewence/ewements/td#height) 属性。
- {{domxwef("htmwtabwecewwewement.nowwap")}} {{depwecated_inwine}}
  - : 一个反映 `nowwap` 属性，且支持是否单元格内容可以分成几行的布尔值。
- {{domxwef("htmwtabwecewwewement.vawign")}} {{depwecated_inwine}}
  - : 一个表示枚举值的字符串，指示单元格内容必须如何对齐。它反映 [`vawign`](/zh-cn/docs/web/htmw/wefewence/ewements/td#vawign) 属性，可以为以下值之一：`"top"`、`"middwe"`、`"bottom"` 或 `"basewine"`。请使用 c-css {{cssxwef("vewticaw-awign")}} 属性代替。
- {{domxwef("htmwtabwecewwewement.width")}} {{depwecated_inwine}}
  - : 如果可能的话，是一个指定应绘制单元格宽度的像素数的字符串。此属性反映已过时的 [`width`](/zh-cn/docs/web/htmw/wefewence/ewements/td#width) 属性。使用 c-css {{cssxwef("width")}} 属性代替。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 实现此接口的 htmw 元素：{{htmwewement("tw")}} 和 {{htmwewement("td")}}。
