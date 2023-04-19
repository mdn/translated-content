---
title: "@namespace"
slug: Web/CSS/@namespace
---

{{CSSRef}}

**`@namespace`**是一個[at-rule](/zh-TW/docs/Web/CSS/At-rule)，它決定要在[CSS](/zh-TW/docs/Glossary/CSS)[樣式表](/zh-TW/docs/Web/API/StyleSheet)中要使用的[XML命名空間](/zh-TW/docs/Namespaces)。

{{EmbedInteractiveExample("pages/tabbed/at-rule-namespace.html", "tabbed-shorter")}}

## 語法

```css
/* 默認的命名空間 */
@namespace url(XML-namespace-URL);
@namespace "XML-namespace-URL";
/* 有前綴的命名空間 */
@namespace prefix url(XML-namespace-URL);
@namespace prefix "XML-namespace-URL";
```

## 說明

`@namespace`可以用来限制樣式的選擇器（包含[通用的](/zh-TW/docs/Web/CSS/Universal_selectors)、[元素選擇器](/zh-TW/docs/Web/CSS/Type_selectors)和[属性選擇器](/zh-TW/docs/Web/CSS/Attribute_selectors) [选择器](/en-US/docs/Learn/CSS/Building_blocks/Selectors) ）僅套用於指定的命名空間。
`@namespace`通常在處理有多個命名空間的檔案時很有用——例如有內嵌 SVG 或 MathML 的HTML、混和多個命名空間的XML等。

`@namespace`必须放在{{cssxref("@charset")}}和{{cssxref("@import")}}規則之後，在其他 at-rules 及[Style Declaration](/zh-TW/docs/Web/API/CSSStyleDeclaration)之前。

<!--
`@namespace` can be used to define the **default namespace** for the style sheet. When a default namespace is defined, all universal and type selectors (but not attribute selectors, see note below) apply only to elements in that namespace.

The `@namespace` rule can also be used to define a **namespace prefix**. When a universal, type, or attribute selector is prefixed with a namespace prefix, then that selector only matches if the namespace _and_ name of the element or attribute matches.

In [HTML5](/en-US/docs/Glossary/HTML5), known [foreign elements](https://html.spec.whatwg.org/#foreign-elements) will automatically be assigned namespaces. This means that HTML elements will act as though they are in the XHTML namespace (`http://www.w3.org/1999/xhtml`), even if there is no `xmlns` attribute anywhere in the document, and the [\<svg>](/en-US/docs/Web/SVG/Element/svg) and [\<math>](/en-US/docs/Web/MathML/Element/math) elements will be assigned their proper namespaces (`http://www.w3.org/2000/svg` and `http://www.w3.org/1998/Math/MathML`).

> **Note:** In XML, unless a prefix is defined directly on an attribute (_e.g._, `xlink:href`), that attribute has no namespace. In other words, attributes do not inherit the namespace of the element they're on. To match this behavior, the default namespace in CSS does not apply to attribute selectors.
-->

## 語法格式文件

{{csssyntax}}

## 範例

### 指定默認及前缀的命名空間

```css
@namespace url(http://www.w3.org/1999/xhtml);
@namespace svg url(http://www.w3.org/2000/svg);
/* 在文檔裡面所有使用默認命名空間的 <a> 元素都會套用以下樣式 */
a {
}
/* 以下則是會套用所有「命名空間為 http://www.w3.org/2000/svg 的 svg」底下的所有 <a> 元素 */
svg|a {
}
/* 這會套用所有符合上述 @namespace 設定的 <a> 元素 */
*|a {
}
```

## 瀏覽器支援度

{{Compat}}

## 延伸閱讀

- [命名空間速成班](/zh-TW/docs/Web/SVG/Namespaces_Crash_Course)
