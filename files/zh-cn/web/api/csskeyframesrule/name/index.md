---
title: CSSKeyframesRule：name 属性
slug: Web/API/CSSKeyframesRule/name
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{APIRef("CSSOM") }}

{{domxref("CSSKeyframeRule")}} 接口的 **`name`** 属性用于获取和设置动画的名称，该名称被 {{cssxref("animation-name")}} 属性使用。

## 值

字符串。

## 示例

以下 CSS 包含一个关键帧 at 规则。这将是 `document.styleSheets[0].cssRules` 返回的第一个 {{domxref("CSSRule")}}。
`myRules[0]` 返回一个 {{domxref("CSSKeyframesRule")}} 对象，其 `name` 属性设置为 `"slide-in"`。

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
console.log(keyframes.name); // "slide-in"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
