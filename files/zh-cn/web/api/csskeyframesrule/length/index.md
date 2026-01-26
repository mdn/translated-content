---
title: CSSKeyframesRule：length 属性
slug: Web/API/CSSKeyframesRule/length
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{APIRef("CSSOM") }}

{{domxref("CSSKeyframeRule")}} 接口的只读属性 **`length`** 返回其列表中 {{domxref("CSSKeyframeRule")}} 对象的数量。你可以通过索引直接在 `CSSKeyframeRule` 对象上访问每个关键帧规则。

## 值

非负整数。它的值应与 {{domxref("CSSKeyframesRule.cssRules", "cssRules")}} 属性的 `length` 相同。

## 示例

以下 CSS 包含一个关键帧 at 规则。这将是 `document.styleSheets[0].cssRules` 返回的第一个 {{domxref("CSSRule")}}。
`myRules[0]` 返回一个 {{domxref("CSSKeyframesRule")}} 对象。`cssRules` 属性返回一个包含两个规则的 {{domxref("CSSRuleList")}}。

```css
@keyframes slide-in {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(100%);
  }
}
```

```js
const myRules = document.styleSheets[0].cssRules;
const keyframes = myRules[0]; // CSSKeyframesRule
console.log(keyframes.length); // 2
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
