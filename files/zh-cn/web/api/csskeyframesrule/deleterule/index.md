---
title: CSSKeyframesRule：deleteRule() 方法
slug: Web/API/CSSKeyframesRule/deleteRule
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("CSSOM") }}

{{domxref("CSSKeyframeRule")}} 接口的 **`deleteRule()`** 方法用于删除与指定关键帧选择器匹配的 {{domxref("CSSKeyFrameRule")}}。

## 语法

```js-nolint
deleteRule(select)
```

### 参数

- `select`
  - : 一个字符串，包含要删除规则的关键帧选择器，必须是：
    - 0% 到 100% 之间的百分比值的逗号分隔列表；
    - 关键字 `from` 或 `to`。

    注意，指定关键帧选择器中的值的数量和顺序必须与目标关键帧规则的值匹配。空白字符会被忽略。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

以下 CSS 包含一个关键帧 at 规则。这将是 `document.styleSheets[0].cssRules` 返回的第一个 {{domxref("CSSRule")}}。`myRules[0]` 返回一个 {{domxref("CSSKeyframesRule")}} 对象。其 `cssRules` 属性会得到包含两个规则的 {{domxref("CSSRuleList")}}。

使用 `deleteRule()` 删除规则后，`cssRules` 属性返回的 {{domxref("CSSRuleList")}} 只会包含一个规则。

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
keyframes.deleteRule("to");
console.log(keyframes.cssRules); // 只包含一个规则的 CSSRuleList 对象
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
