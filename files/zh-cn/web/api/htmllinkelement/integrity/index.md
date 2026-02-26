---
title: HTMLLinkElement：integrity 属性
slug: Web/API/HTMLLinkElement/integrity
l10n:
  sourceCommit: 49d15be653576c5f73ec527ee976c5881171b53c
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLLinkElement")}} 接口的 **`integrity`** 属性是一个字符串，包含浏览器可以用来验证所获取资源是否未经意外篡改的内联元数据。

它反映 {{HTMLElement("link")}} 元素的 `integrity` 属性。

## 值

一个字符串。

## 示例

```html
<link
  id="el"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
  crossorigin="anonymous" />
```

```js
const el = document.getElementById("el");
console.log(el.integrity); // 输出：“sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLScriptElement.integrity")}}
- [子资源完整性](/zh-CN/docs/Web/Security/Defenses/Subresource_Integrity)
