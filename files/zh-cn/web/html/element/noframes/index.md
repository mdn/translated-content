---
title: <noframes>
slug: Web/HTML/Element/noframes
---

{{HTMLSidebar}}{{deprecated_header}}

## 概述

`<noframes>` 是个 HTML 元素，用于支持不支持 {{HTMLElement("frame")}} 元素的浏览器，或者这样配置的浏览器。

你可以在 `<noframes>` 中使用任何 HTML 元素，它预期可以在 {{HTMLElement("body")}} 中看到，除了 {{HTMLElement("frameset")}} 和 {{HTMLElement("frame")}} 元素。

> **备注：** 由于所有主流浏览器都支持帧，这个元素一般不需要使用。它也在 HTML5 中完全过时，并且应该避免使用，来遵循标准。

## 属性

就像其他 HTML 元素那样，这个元素支持 [全局属性](/zh-CN/HTML/Global_attributes)。

## 示例

```html
<frameset cols="50%,50%">
  <frame src="https://developer.mozilla.org/en/HTML/Element/frameset" />
  <frame src="https://developer.mozilla.org/en/HTML/Element/frame" />
  <noframes>
    <p>
      It seems your browser does not support frames or is not configured do so.
    </p>
  </noframes>
</frameset>
```

## 另见

- {{HTMLElement("frameset")}}
- {{HTMLElement("frame")}}

{{HTMLSidebar}}
