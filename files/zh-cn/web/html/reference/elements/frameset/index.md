---
title: <frameset>
slug: Web/HTML/Reference/Elements/frameset
---

{{Deprecated_header}}

## 概述

`<frameset>` 是一个用于包含 {{HTMLElement("frame")}} 的 HTML 元素。

> [!NOTE]
> 现在不鼓励使用 frame，而是用{{HTMLElement("iframe")}}。现今的网站一般都不使用 frame。

## 属性

像所有其他的 HTML 元素一样，这个元素支持[全局属性](/zh-CN/docs/HTML/Global_attributes)。

- `cols`
  - : 这个属性指定一个框架集中列的数目和尺寸。
- `rows`
  - : 这个属性指定一个框架集中行的数目和尺寸。

## 例子

```html
<frameset cols="50%,50%">
  <frame src="https://developer.mozilla.org/en/HTML/Element/frameset" />
  <frame src="https://developer.mozilla.org/en/HTML/Element/frame" />
</frameset>
```

## Browser compatibility

{{Compat}}

## 参见

- {{HTMLElement("frame")}}
- {{HTMLElement("iframe")}}
