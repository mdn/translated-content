---
title: CSSLayerBlockRule
slug: Web/API/CSSLayerBlockRule
l10n:
  sourceCommit: 91830b19375f5cc2416302f044d37c58d241de5d
---

{{APIRef("CSSOM")}}

**`CSSLayerBlockRule`** 表示一个 {{cssxref("@layer")}} 块规则。

{{InheritanceDiagram}}

## 实例属性

_继承其祖先 {{domxref("CSSGroupingRule")}} 和 {{domxref("CSSRule")}} 的属性。_

- {{DOMxRef("CSSLayerBlockRule.name")}} {{ReadOnlyInline}}
  - : 包含关联级联层名称的字符串。

## 实例方法

_继承其祖先 {{domxref("CSSGroupingRule")}} 和 {{domxref("CSSRule")}} 的方法。_

## 示例

### HTML

```html
<p>我以 <code>color: rebeccapurple</code> 显示。</p>
```

### CSS

```css
@layer special {
  p {
    color: rebeccapurple;
  }
}
```

### JavaScript

```js
const item = document.getElementsByTagName("p")[0];
const rules = document.styleSheets[1].cssRules;
// 注意，样式表 #1 是与此嵌入示例关联的样式表，
// 而样式表 #0 是与整个 MDN 页面关联的样式表

const layer = rules[0]; // CSSLayerBlockRule 对象

item.textContent = `CSSLayerBlockRule 是用于“${layer.name}”层的规则`;
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("@layer")}}
- {{DOMxRef("CSSLayerStatementRule")}}
- [学习 CSS 层叠层](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
