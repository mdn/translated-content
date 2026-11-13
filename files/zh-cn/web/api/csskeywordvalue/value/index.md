---
title: CSSKeywordValue：value 属性
slug: Web/API/CSSKeywordValue/value
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSS Typed Object Model API")}}

{{domxref("CSSKeywordValue")}} 接口的 **`value`** 属性返回或设置 `CSSKeywordValue` 的值。

## 值

字符串。

### 异常

- {{jsxref("TypeError")}}
  - : 如果 `value` 属性被设置为空字符串则抛出此异常。

## 示例

以下示例重设 CSS 的 {{cssxref('display')}} 属性为其默认值

```js
let indicator = document.getElementById("indicator");
indicator.attributeStyleMap.set("display", new CSSKeywordValue("initial"));
indicator.attributeStyleMap.get("display").value; // 'initial'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
