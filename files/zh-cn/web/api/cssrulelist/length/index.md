---
title: CSSRuleList：length 属性
short-title: length
slug: Web/API/CSSRuleList/length
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{ APIRef("CSSOM") }}

{{domxref("CSSRuleList")}} 接口的 **`length`** 属性返回列表中 {{domxref("CSSRule")}} 对象的数量。

## 值

整型。

## 示例

以下示例将名为 `myRules` 的 {{domxref("CSSRuleList")}} 中的项目数量打印到控制台。

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules.length);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
