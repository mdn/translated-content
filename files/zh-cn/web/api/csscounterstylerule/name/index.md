---
title: CSSCounterStyleRule：name 属性
slug: Web/API/CSSCounterStyleRule/name
l10n:
  sourceCommit: 9840d330e75b5fa4eec7034859a7d96e5d6ae07b
---

{{APIRef("CSSOM")}}

{{domxref("CSSCounterStyleRule")}} 接口的 **`name`** 属性用于获取或设置 {{CSSxRef("&lt;custom-ident&gt;")}} 为关联规则定义的 `name`。

## 值

字符串。

## 示例

以下示例展示了 {{cssxref("@counter-style")}} 样式的规则。在 JavaScript 中，`myRules[0]` 为 `@counter-style` 规则，`name` 返回值为自定义标识“box-corner”。

```css
@counter-style box-corner {
  system: fixed;
  symbols: ◰ ◳ ◲ ◱;
  suffix: ": ";
  fallback: disc;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].name); // "box-corner"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
