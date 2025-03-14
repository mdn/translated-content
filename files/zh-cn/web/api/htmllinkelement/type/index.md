---
title: HTMLLinkElement：type 属性
slug: Web/API/HTMLLinkElement/type
l10n:
  sourceCommit: 1a790d83cbfcd76ac05a1b18697597f8d110d2cf
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLLinkElement")}} 接口的 **`type`** 属性是一个字符串，它反映了链接资源的 {{glossary("MIME type", "MIME 类型")}}。

它反映 {{HTMLElement("link")}} 元素的 `type` 属性。

## 值

一个字符串，它必须是一个有效的 MIME 类型字符串。

## 示例

```html
<link
  id="el"
  rel="apple-touch-icon"
  sizes="114x114"
  href="apple-icon-114.png"
  type="image/png" />
```

```js
const el = document.getElementById("el");
console.log(el.type); // 输出：“image/png”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
