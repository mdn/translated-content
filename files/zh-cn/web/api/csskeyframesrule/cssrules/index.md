---
title: CSSKeyframesRule：cssRules 属性
slug: Web/API/CSSKeyframesRule/cssRules
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{APIRef("CSSOM") }}

{{domxref("CSSKeyframeRule")}} 接口的只读属性 **`cssRules`** 返回包含关键帧 [at 规则](/zh-CN/docs/Web/CSS/Guides/Syntax/At-rules)的 {{domxref("CSSRuleList")}}。

> [!NOTE]
> `CSSKeyframeRule` 本身可以像数组一样通过索引访问，并且其行为类似于 `cssRules` 属性。

## 值

一个 {{domxref('CSSRuleList')}}。

## 示例

以下 CSS 中包含一个关键帧 at 规则。这将是 `document.styleSheets[0].cssRules` 返回的第一个 {{domxref("CSSRule")}}。`myRules[0]` 返回一个 {{domxref("CSSKeyframesRule")}} 对象。其 `cssRules` 属性返回一个包含两个规则的 {{domxref("CSSRuleList")}}。

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
let myRules = document.styleSheets[0].cssRules;
let keyframes = myRules[0]; // CSSKeyframesRule
console.log(keyframes.cssRules); // 包含两个规则的 CSSRuleList 对象
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
