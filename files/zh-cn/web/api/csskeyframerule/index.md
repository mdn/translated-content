---
title: CSSKeyframeRule
slug: Web/API/CSSKeyframeRule
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{APIRef("CSSOM")}}

**`CSSKeyframeRule`** 接口表示给定关键帧的样式集的对象。它对应一个 {{cssxref("@keyframes")}} [at 规则](/zh-CN/docs/Web/CSS/Guides/Syntax/At-rules)的单个关键帧的内容。

{{InheritanceDiagram}}

## 实例属性

_继承其祖先 {{domxref("CSSRule")}} 属性。_

- {{domxref("CSSKeyframeRule.keyText")}}
  - : 表示关键帧的键，例如 `'10%'`、`'75%'`。`from` 关键字映射到 `'0%'`，`to` 关键字映射到 `'100%'`。
- {{domxref("CSSKeyframeRule.style")}} {{ReadOnlyInline}}
  - : 返回与关键帧关联的 CSS 样式的 {{domxref("CSSStyleDeclaration")}}。

## 实例方法

_没有特定方法，继承其祖先 {{domxref("CSSRule")}} 方法。_

## 示例

以下 CSS 包括一个关键帧规则。这将是 `document.styleSheets[0].cssRules` 返回的第一个 {{domxref("CSSRule")}}。
`myRules[0]` 返回一个 {{domxref("CSSKeyframesRule")}} 对象，该对象包含每个关键帧的对应的 `CSSKeyFrameRule` 对象。

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
console.log(keyframes[0]); // 表示单个关键帧的 CSSKeyframeRule。
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("@keyframes")}}
- {{domxref("CSSKeyFramesRule")}}
