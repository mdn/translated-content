---
title: "@namespace"
slug: Web/CSS/@namespace
---

{{CSSRef}}

**`@namespace`** 是一個 [at-rule](/zh-TW/docs/Web/CSS/At-rule)，它決定要在 [CSS](/zh-TW/docs/Glossary/CSS) [樣式表](/zh-TW/docs/Web/API/StyleSheet)中要使用的 XML [命名空間](/zh-TW/docs/Glossary/Namespaces)。

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

`@namespace` 可以用来限制樣式的選擇器（包含[通用的](/zh-TW/docs/Web/CSS/Universal_selectors)、[元素選擇器](/zh-TW/docs/Web/CSS/Type_selectors)和[屬性](/zh-TW/docs/Web/CSS/Attribute_selectors)[選擇器](/zh-TW/docs/Learn/CSS/Building_blocks/Selectors)）僅套用於指定的命名空間。`@namespace` 通常在處理有多個命名空間的檔案時很有用——例如有內嵌 SVG 或 MathML 的 HTML、混和多個命名空間的 XML 等。

`@namespace` 必须放在 {{cssxref("@charset")}} 和 {{cssxref("@import")}} 規則之後，在其他 at-rule 及 [Style Declaration](/zh-TW/docs/Web/API/CSSStyleDeclaration) 之前。

`@namespace` 可以用來定義**默認命名空間**或是**有前綴的命名空間**的樣式。所有在指定命名空間下的通用、元素選擇器都會套用該樣式，屬性選擇器則只適用於「有前綴的命名空間」（詳見下方註釋）。

在 [HTML5](/zh-TW/docs/Glossary/HTML5)，已知的[外部元素](https://html.spec.whatwg.org/#foreign-elements)會自動為其分配命名空間。舉例來說，即使沒有設置 `xmlns` 屬性，所有的 HTML 元素都會自動視為 XHTML 命名空間（`http://www.w3.org/1999/xhtml`）；[\<svg>](/zh-TW/docs/Web/SVG/Element/svg) 和 [\<math>](/zh-TW/docs/Web/MathML/Element/math) 則會自動分配屬於他們的命名空間（`http://www.w3.org/2000/svg` 和 `http://www.w3.org/1998/Math/MathML`）。

> **備註：** 在 XML，屬性若沒有前綴（例如 `xlink:href`），該屬性就不會繼承元素的命名空間（亦即 `link`的命名空間可能是 `http://www.w3.org/1999/xhtml` 而不是 `http://www.w3.org/2000/svg`）。因此，CSS 的「默認的命名空間」並不適用於屬性

## 形式語法

{{csssyntax}}

## 範例

### 指定默認及前缀的命名空間

```css
@namespace url(http://www.w3.org/1999/xhtml);
@namespace svg url(http://www.w3.org/2000/svg);

/* 在文檔裡面所有使用 XHTML 命名空間的 <a> 元素都會套用以下樣式 */
a {
}

/* 以下則是會套用所有「命名空間為 http://www.w3.org/2000/svg 的 svg」底下的所有 <a> 元素 */
svg|a {
}

/* 無論是 XHTML 還是 SVG 的 <a> 元素都會套用以下樣式 */
*|a {
}
```

## 瀏覽器相容性

{{Compat}}

## 參見

- [命名空間速成班](/zh-TW/docs/Web/SVG/Namespaces_Crash_Course)
