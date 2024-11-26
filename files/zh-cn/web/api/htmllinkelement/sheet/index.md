---
title: HTMLLinkElement：sheet 属性
slug: Web/API/HTMLLinkElement/sheet
l10n:
  sourceCommit: 1a790d83cbfcd76ac05a1b18697597f8d110d2cf
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLLinkElement")}} 接口的 **`sheet`** 只读属性包含与该元素相关联的样式表。

如果 `<link>` 元素使用了 `rel="stylesheet"`，则样式表就与 `HTMLLinkElement` 相关联。

## 值

一个 {{DOMxRef("StyleSheet")}} 对象，如果没有与元素关联的样式表，则为 `null`。

## 示例

```html
<html>
  <header>
    <link rel="stylesheet" href="styles.css" />
    …
  </header>
</html>
```

`HTMLLinkElement` 对象的 `sheet` 属性将返回描述为 `styles.css` 的 {{domxref("StyleSheet")}} 对象。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
