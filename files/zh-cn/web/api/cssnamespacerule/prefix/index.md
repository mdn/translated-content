---
title: CSSNamespaceRule：prefix 属性
short-title: prefix
slug: Web/API/CSSNamespaceRule/prefix
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{ APIRef("CSSOM") }}

{{domxref("CSSNamespaceRule")}} 的只读属性 **`prefix`** 返回表示与此命名空间关联的前缀名称的字符串。如果没有这样的前缀，则返回空字符串。

## 值

包含与此命名空间关联的前缀的字符串。如果没有前缀，则返回空字符串。

## 示例

样式表包含两个命名空间规则。第一个没有前缀，第二个有前缀 `svg`。将返回两个 `CSSNamespaceRule` 对象。第一个对象的 `prefix` 属性值为空字符串，第二个为 `svg`。

```css
@namespace url(http://www.w3.org/1999/xhtml);
@namespace svg url(http://www.w3.org/2000/svg);
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].namespaceURI); // 空字符串“”
console.log(myRules[1].namespaceURI); // “svg”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
