---
title: CSSKeyframesRule：findRule() 方法
slug: Web/API/CSSKeyframesRule/findRule
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("CSSOM") }}

{{domxref("CSSKeyframeRule")}} 接口的 **`findRule()`** 方法用于查找与关键帧选择器匹配的 {{domxref("CSSKeyFrameRule")}}。

## 语法

```js-nolint
findRule(select)
```

### 参数

- `select`
  - : 包含要查找规则的关键帧选择器的字符串，必须是以下之一：
    - 0% 到 100% 之间的百分比值的逗号分隔列表；
    - 关键字 `from` 或 `to`。

    注意，指定关键帧选择器中的值的数量和顺序必须与目标关键帧规则的值匹配。空白字符会被忽略。

### 返回值

最后一个匹配的 {{domxref("CSSKeyframeRule")}}。如果未找到规则，则返回 `undefined`。

## 示例

以下 CSS 包含一个关键帧 at 规则。这将是 `document.styleSheets[0].cssRules` 返回的第一个 {{domxref("CSSRule")}}。
`myRules[0]` 返回一个 {{domxref("CSSKeyframesRule")}} 对象。调用 `findRule("to")` 返回一个表示第二条规则的 {{domxref("CSSKeyframeRule")}}。

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
console.log(keyframes.findRule("to")); // CSSKeyframeRule 对象
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
