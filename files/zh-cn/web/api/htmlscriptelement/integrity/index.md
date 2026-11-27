---
title: HTMLScriptElement：integrity 属性
short-title: integrity
slug: Web/API/HTMLScriptElement/integrity
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLScriptElement")}} 接口的 **`integrity`** 属性是一个字符串，其包含了浏览器可以用来验证所获取资源是否未经意外篡改的内联元数据。

它反映 {{HTMLElement("script")}} 元素的 `integrity` 属性。

## 值

一个字符串。

## 示例

```html
<script
  id="el"
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

```js
const el = document.getElementById("el");
console.log(el.integrity); // 输出：“sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLLinkElement.integrity")}}
- [子资源完整性](/zh-CN/docs/Web/Security/Defenses/Subresource_Integrity)
