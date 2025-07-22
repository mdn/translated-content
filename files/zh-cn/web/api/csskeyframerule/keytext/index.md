---
title: CSSKeyframeRule：keyText 属性
slug: Web/API/CSSKeyframeRule/keyText
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{APIRef("CSSOM") }}

{{domxref("CSSKeyframeRule")}} 接口的 **`keyText`** 属性表示关键帧选择器，以逗号分隔的百分比值列表形式呈现。关键字 `from` 和 `to` 分别映射到 0% 和 100%。

## 值

一个字符串。

### 异常

- {{jsxref("SyntaxError")}}
  - : 如果 `keyText` 被更新为无效的关键帧选择器，则会抛出此异常，这种情况下 `keyText` 将保持不变。

## 示例

以下 CSS 包含一个关键帧规则。其会是 `document.styleSheets[0].cssRules` 返回的第一个 {{domxref("CSSRule")}}。`myRules[0]` 返回一个 {{domxref("CSSKeyframesRule")}} 对象，其中包含每个关键帧的 {{domxref("CSSKeyFrameRule")}} 对象。

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
console.log(keyframes[0].keyText); // 包含 0% 的字符串
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
