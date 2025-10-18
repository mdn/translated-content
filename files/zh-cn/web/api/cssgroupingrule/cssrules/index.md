---
title: CSSGroupingRule：cssRules 属性
short-title: cssRules
slug: Web/API/CSSGroupingRule/cssRules
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{ APIRef("CSSOM") }}

{{domxref("CSSGroupingRule")}} 接口的 **`cssRules`** 属性返回包含 {{domxref("CSSRule")}} 对象集合的 {{domxref("CSSRuleList")}}。

## 值

{{domxref("CSSRuleList")}}。

## 示例

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
