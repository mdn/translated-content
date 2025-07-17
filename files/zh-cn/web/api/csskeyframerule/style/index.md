---
title: CSSKeyframeRule：style 属性
slug: Web/API/CSSKeyframeRule/style
l10n:
  sourceCommit: e488eba036b2fee56444fd579c3759ef45ff2ca8
---

{{ APIRef("CSSOM") }}

{{ domxref("CSSKeyframeRule") }} 的只读属性 **`CSSKeyframeRule.style`** 表示 {{ domxref("CSSStyleDeclaration") }} 接口。

## 值

{{domxref("CSSStyleDeclaration")}} 对象，具有以下属性：

- 计算标志
  - : 未设置。
- 声明
  - : 规则中的声明，按指定顺序排列，简写属性已展开为长格式。
- 父 CSS 规则
  - : 上下文对象，是 [`this`](https://heycam.github.io/webidl/#this) 的别名。
- 所属节点
  - : 空值。

## 示例

以下 CSS 包含一个 {{cssxref("@keyframes")}} 规则。这将是 `document.styleSheets[0].cssRules` 返回的第一个 {{domxref("CSSRule")}}。`myRules[0]` 返回一个 {{domxref("CSSKeyframesRule")}} 对象，其中包含每个关键帧的 {{domxref("CSSKeyFrameRule")}} 对象。

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
console.log(keyframes[0].style); // CSSStyleDeclaration
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
