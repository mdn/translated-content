---
title: CSSRule：parentStyleSheet 属性
slug: Web/API/CSSRule/parentStyleSheet
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{ APIRef("CSSOM") }}

{{domxref("CSSRule")}} 接口的 **`parentStyleSheet`** 属性返回定义当前规则的 {{domxref("StyleSheet")}} 对象。

## 值

{{domxref("StyleSheet")}} 对象。

## 示例

```js
const docRules = document.styleSheets[0].cssRules;
console.log(docRules[0].parentStyleSheet == document.styleSheets[0]); // 返回 true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
