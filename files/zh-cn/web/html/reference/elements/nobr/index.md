---
title: <nobr>
slug: Web/HTML/Reference/Elements/nobr
---

{{deprecated_header}}

## 概述

HTML `<nobr>` 元素阻止文本自动拆分成新行，所以它展示为长的一行，可能还需要滚动。这个标签不是标准的 HTML，并且不应该使用。反之应该使用 CSS 属性 {{Cssxref("white-space")}}，像这样：

```css
<span style="white-space: nowrap">Long line with no breaks</span>
```

## 参见

- {{Cssxref("white-space")}}
- {{Cssxref("overflow")}}
