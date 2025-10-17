---
title: CSSNamespaceRule：namespaceURI 属性
short-title: namespaceURI
slug: Web/API/CSSNamespaceRule/namespaceURI
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

{{ APIRef("CSSOM") }}

{{domxref("CSSNamespaceRule")}} 的只读属性 **`namespaceURI`** 返回包含给定命名空间的 URI 文本的字符串。

## 值

包含 URI 的字符串。

## 示例

样式表包含一个命名空间作为唯一规则。因此返回的第一个 {{domxref("CSSRule")}} 将是一个 `CSSNamespaceRule`。`namespaceURI` 属性的值将是 `http://www.w3.org/1999/xhtml`。

```css
@namespace url("http://www.w3.org/1999/xhtml");
```

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].namespaceURI); // “http://www.w3.org/1999/xhtml”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
