---
title: CSSStyleSheet
slug: Web/API/CSSStyleSheet
---

{{ APIRef("CSSOM") }}

**`CSSStyleSheet`** 接口代表一个 [CSS](/zh-CN/docs/Web/CSS) 样式表，并允许检查和编辑样式表中的规则列表。它从父类型 {{domxref("StyleSheet")}} 继承属性和方法。

一个 CSS 样式表包含了一组表示规则的 {{domxref("CSSRule")}} 对象。每条 CSS 规则可以通过与之相关联的对象进行操作，这些规则被包含在 {{domxref("CSSRuleList")}} 内，可以通过样式表的 {{domxref("CSSStyleSheet.cssRules", "cssRules")}} 属性获取。

例如，{{domxref("CSSStyleRule")}} 对象中的一条规则可能包含这样的样式：

```css
h1,
h2 {
  font-size: 16pt;
}
```

另一条规则可能是一条“@”规则（_at-rule_），例如 {{cssxref("@import")}} 或 {{cssxref("@media")}} 等等。

在[说明](#说明)部分中查看 `CSSStyleSheet` 对象的多种获取方式。

## 属性

继承自 _{{domxref("StyleSheet")}}。_

- {{domxref("CSSStyleSheet.cssRules", "cssRules")}} {{ReadOnlyInline}}

  - : 返回一个实时的 {{domxref("CSSRuleList")}}，其中包含组成样式表的 {{domxref("CSSRule")}} 对象的一个最新列表。

    这一般用于获取单条规则，如下：

    ```plain
    styleSheet.cssRules[i] // where i = 0..cssRules.length-1
    ```

    使用`CSSStyleSheet` 的 {{domxref("CSSStyleSheet.insertRule", "insertRule()")}} 和 {{domxref("CSSStyleSheet.deleteRule", "deleteRule()")}} 方法以在 `cssRules` 中添加或移除规则。

- {{domxref("CSSStyleSheet.ownerRule", "ownerRule")}} {{ReadOnlyInline}}
  - : 如果一个样式表示通过{{cssxref("@import")}} 规则引入文档，那么 `ownerRule` 属性会返回相应的{{domxref("CSSImportRule")}}对象，否则返回 `null`。

## 方法

继承自 _{{domxref("StyleSheet")}}。_

- {{domxref("CSSStyleSheet.deleteRule", "deleteRule()")}}
  - : 从样式表中删除特定位置的一条规则。
- {{domxref("CSSStyleSheet.insertRule", "insertRule()")}}
  - : 向样式表的特定位置插入一条新规则，需要提供新规则的完整文本。

## 遗留属性

_这些遗留属性是很久以前由微软提出的，不应该再使用，但这些属性短期内不会被移除。_

- {{domxref("CSSStyleSheet.rules", "rules")}} {{ReadOnlyInline}}
  - : `rules` 属性的功能与标准的{{domxref("CSSStyleSheet.cssRules", "cssRules")}}属性相同；它返回一个实时的 {{domxref("CSSRuleList")}}，其中包含样式表中所有规则的一个最新列表。

## 遗留方法

_这些遗留方法是很久以前由微软提出的，应尽量避免使用，但这些方法短期内不会被移除。_

- {{domxref("CSSStyleSheet.addRule", "addRule()")}}

  - : 向样式表添加一条新规则，需要提供应用样式的选择器和应用在匹配元素上的样式块。

    这和 {{domxref("CSSStyleSheet.insertRule", "insertRule()")}} 不同，后者只是简单地将整个传入的规则文本当作一个字符串。

- {{domxref("CSSStyleSheet.removeRule", "removeRule()")}}
  - : 与{{domxref("CSSStyleSheet.deleteRule", "deleteRule()")}}功能相同；从样式表的规则列表的特定位置中移除规则。

## 说明

在一些浏览器中，如果一个样式表加载自不同的域，访问 `cssRules` 属性时会抛出 `SecurityError`。

一个样式表最多与一个{{domxref("Document")}}链接，即所应用的那个{{domxref("Document")}}（除非{{domxref("StyleSheet.disabled", "disabled")}}）。一个特定文档的 `CSSStyleSheet` 对象列表可用 {{domxref("document.styleSheets")}} 属性获取。一个特定的样式表也可以通过其所在对象（`Node` 或 `CSSImportRule`）获取，如果有的话。

在文档的样式表加载时，一个 `CSSStyleSheet` 对象由浏览器自动创建并插入至文档的{{domxref("Document.styleSheets")}}列表中。由于样式表列表不能直接修改，我们没有什么有效的手段取手动创建一个新的 `CSSStyleSheet` 对象（不过[Constructable Stylesheet Objects](https://wicg.github.io/construct-stylesheets/)很快会来到 web 平台，而且 Blink 早已支持）。需要创建新的样式表就直接在文档中插入{{HTMLElement("style")}} 或 {{HTMLElement("link")}} 元素吧。

以下是将样式表链接到文档的一些方式（可能不完整）：

| 样式表与文档链接的原因                                                  | 是否出现在`document. styleSheets` 列表中 | 获取样式表对象所在的元素/规则                        | 所在对象的接口                                                                                     | 从所在对象获取 CSSStyleSheet 对象                      |
| ----------------------------------------------------------------------- | ---------------------------------------- | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 文档中的{{HTMLElement("style")}} 和{{HTMLElement("link")}} 元素         | 是                                       | {{domxref("StyleSheet.ownerNode", ".ownerNode")}}    | {{domxref("HTMLLinkElement")}}, {{domxref("HTMLStyleElement")}}, 或 {{domxref("SVGStyleElement")}} | {{domxref("LinkStyle.sheet", ".sheet")}}               |
| 使用 CSS {{cssxref("@import")}} 从其他样式表导入并应用到文档的规则      | 是                                       | {{domxref("CSSStyleSheet.ownerRule", ".ownerRule")}} | {{domxref("CSSImportRule")}}                                                                       | {{domxref("CSSImportRule.styleSheet", ".styleSheet")}} |
| `<?xml-stylesheet ?>` processing instruction in the (non-HTML) document | 是                                       | {{domxref("StyleSheet.ownerNode", ".ownerNode")}}    | {{domxref("ProcessingInstruction")}}                                                               | {{domxref("LinkStyle.sheet", ".sheet")}}               |
| HTTP 链接头部                                                           | 是                                       | _N/A_                                                | N/A                                                                                                | N/A                                                    |
| 用户代理（默认）样式表                                                  | 否                                       | N/A                                                  | N/A                                                                                                | N/A                                                    |

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS Object Model](/zh-CN/docs/Web/API/CSS_Object_Model)
- [Using dynamic styling information](/zh-CN/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
