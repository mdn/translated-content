---
title: CSSKeyframesRule：appendRule() 方法
slug: Web/API/CSSKeyframesRule/appendRule
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{APIRef("CSSOM") }}

{{domxref("CSSKeyframeRule")}} 接口的 **`appendRule()`** 方法用于将一个 {{domxref("CSSKeyFrameRule")}} 追加到规则列表的末尾。

## 语法

```js-nolint
appendRule(rule)
```

### 参数

- `rule`
  - : 一个包含关键帧规则的字符串。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

以下 CSS 中包含一个关键帧 at 规则。这将是 `document.styleSheets[0].cssRules` 返回的第一个 {{domxref("CSSRule")}}。`myRules[0]` 返回一个 {{domxref("CSSKeyframesRule")}} 对象。其 `cssRules` 属性会返回一个包含一条规则的 {{domxref("CSSRuleList")}}。

使用 `appendRule` 追加另一条规则后，`cssRules` 属性会返回一个包含两条规则的 {{domxref("CSSRuleList")}}。

```css
@keyframes slide-in {
  from {
    transform: translateX(0%);
  }
}
```

```js
let myRules = document.styleSheets[0].cssRules;
let keyframes = myRules[0]; // CSSKeyframesRule
keyframes.appendRule("to {transform: translateX(100%);}");
console.log(keyframes.cssRules); // 包含两条规则的 CSSRuleList
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
