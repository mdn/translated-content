---
title: <frameset>
slug: Web/HTML/Element/frameset
---

{{Deprecated_header}}

## 概要

`<frameset>` 是用以包含 {{HTMLElement("frame")}} 元素的元素。

> **備註：** 因為使用框架的推薦是 {{HTMLElement("iframe")}}，這個元素一般不會在現在的網站出現。

## 屬性

如同其他 HTML 元素，這個元素支持[全域屬性](/zh-TW/HTML/Global_attributes)。

- `cols`
  - : 這個屬性指定了橫向框架的數量和尺寸。
- `rows`
  - : 這個屬性指定了直向框架的數量和尺寸。

## 範例

```html
<frameset cols="50%,50%">
  <frame src="https://developer.mozilla.org/en/HTML/Element/frameset" />
  <frame src="https://developer.mozilla.org/en/HTML/Element/frame" />
</frameset>
```

## 參見

- {{HTMLElement("frame")}}
- {{HTMLElement("iframe")}}

{{HTMLSidebar}}
