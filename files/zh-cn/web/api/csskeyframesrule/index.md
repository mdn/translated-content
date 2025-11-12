---
title: CSSKeyframesRule
slug: Web/API/CSSKeyframesRule
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{APIRef("CSSOM")}}

**`CSSKeyframesRule`** 接口表示 CSS 动画的完整关键帧集合的对象。它对应于整个 {{cssxref("@keyframes")}} [at 规则](/zh-CN/docs/Web/CSS/Guides/Syntax/At-rules)的内容。

{{InheritanceDiagram}}

## 实例属性

_继承其祖先 {{domxref("CSSRule")}} 的属性。_

- {{domxref("CSSKeyframesRule.name")}}
  - : 表示关键帧的名称，被用于 {{cssxref("animation-name")}} 属性。
- {{domxref("CSSKeyframesRule.cssRules")}} {{ReadOnlyInline}}
  - : 返回关键帧列表 {{domxref("CSSRuleList")}}。
- {{domxref("CSSKeyframesRule.length")}} {{ReadOnlyInline}}
  - : 返回列表中关键帧的数量。

## 实例方法

_继承其祖先 {{domxref("CSSRule")}} 的方法。_

- {{domxref("CSSKeyframesRule.appendRule()")}}
  - : 将新的关键帧规则插入到当前 CSSKeyframesRule 中。参数是一个字符串，包含与 {{cssxref("@keyframes")}} at 规则条目格式相同的关键帧。如果包含多个关键帧规则，则会抛出带有 `SYNTAX_ERR` 的 {{domxref("DOMException")}}。
- {{domxref("CSSKeyframesRule.deleteRule()")}}
  - : 从当前 CSSKeyframesRule 中删除关键帧规则。参数是要删除的关键帧的索引，表示为解析为 `0%` 到 `100%` 之间数字的字符串。
- {{domxref("CSSKeyframesRule.findRule()")}}
  - : 返回与给定键对应的关键帧规则。键是一个字符串，包含要返回的关键帧的索引，解析为 `0%` 到 `100%` 之间的百分比。如果不存在这样的关键帧，`findRule` 返回 `null`。

## 示例

### 使用 CSSKeyframesRule

CSS 包含一个关键帧 at 规则。这将是 `document.styleSheets[0].cssRules` 返回的第一个 {{domxref("CSSRule")}}。`myRules[0]` 返回一个 `CSSKeyframesRule` 对象。

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
```

### 访问索引

`CSSKeyframesRule` 可以像数组一样被索引，并且功能类似于其 {{domxref("CSSKeyframesRule.cssRules", "cssRules")}} 属性。

```js
const keyframes = document.styleSheets[0].cssRules[0];

for (let i = 0; i < keyframes.length; i++) {
  console.log(keyframes[i].keyText);
}

// 输出：
// 0%
// 100%
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("@keyframes")}}
- {{domxref("CSSKeyFrameRule")}}
