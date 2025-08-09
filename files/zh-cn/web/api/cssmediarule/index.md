---
title: CSSMediaRule
slug: Web/API/CSSMediaRule
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{ APIRef("CSSOM") }}

**`CSSMediaRule`** 接口表示一个单独的 CSS {{cssxref("@media")}} 规则。

{{InheritanceDiagram}}

## 实例属性

_继承其父接口 {{domxref("CSSConditionRule")}}、{{domxref("CSSGroupingRule")}} 和 {{domxref("CSSRule")}} 的属性。_

- {{domxref("CSSMediaRule.media")}} {{ReadOnlyInline}}
  - : 返回一个表示样式信息所针对的目标媒介的 {{domxref("MediaList")}} 对象。

## 实例方法

_没有特定的方法；它继承其父接口 {{domxref("CSSConditionRule")}}、{{domxref("CSSGroupingRule")}} 和 {{domxref("CSSRule")}} 的方法。_

## 示例

下面的 CSS 包含一个带有样式规则的媒体查询。由于该规则存在于文档中最后添加的样式表中，所以它会成为文档中最后一个样式表返回的第一个
CSSRule（即 `document.styleSheets[document.styleSheets.length-1].cssRules` 的第一个）。`myRules[0]` 返回一个 `CSSMediaRule`
对象，我们可以从中获取 `mediaText`。

```html
<p id="log"></p>
```

```css
@media (width >= 500px) {
  body {
    color: blue;
  }
}
```

```js
const log = document.getElementById("log");
const myRules = document.styleSheets[document.styleSheets.length - 1].cssRules;
const mediaList = myRules[0]; // 一个表示该媒体查询的 CSSMediaRule 对象。
log.textContent += ` ${mediaList.media.mediaText}`;
```

{{EmbedLiveSample("示例","100%","50px")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
