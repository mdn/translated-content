---
title: CssRule
slug: Web/API/CSSRule
---

{{ ApiRef("CSSOM") }}

El objeto **`CSSRule`** representa una única regla de estilo CSS. Puede ser parte de una lista [cssRules](/Es/DOM/Stylesheet.cssRules) de hojas de estilo ([stylesheet](/Es/DOM/Stylesheet)).

Existen varias clases de reglas y todas ellas comparten unas cuantas propiedades comunes en el interface [CSSRule](#cssrule) y la mayor parte de ellas son propiedades específicas de un tipo particular de reglas.

| Tipo                     | interface específico de la regla    | Descripción |
| ------------------------ | ----------------------------------- | ----------- |
| `CSSRule.STYLE_RULE`     | [CSSStyleRule](#cssstylerule)       |             |
| `CSSRule.MEDIA_RULE`     | [CSSMediaRule](#cssmediarule)       |             |
| `CSSRule.FONT_FACE_RULE` | [CSSFontFaceRule](#cssfontfacerule) |             |
| `CSSRule.PAGE_RULE`      | [CSSPageRule](#csspagerule)         |             |
| `CSSRule.IMPORT_RULE`    | [CSSImportRule](#cssimportrule)     |             |
| `CSSRule.CHARSET_RULE`   | [CSSCharsetRule](#csscharsetrule)   |             |
| `CSSRule.UNKNOWN_RULE`   | [CSSUnknownRule](#cssunknownrule)   |             |

### CSSRule

- [cssText](/Es/DOM/CssRule.cssText)
  - : Devuelve la representación en forma de texto, de la regla. Ejem.: "h1,h2 { font-size: 16pt }".
- [parentRule](/es/DOM/cssRule.parentRule)
  - : Devuelve la regla contenedora, si existe. Ejem.: una regla de estilo dentro de un bloque @media.
- [parentStyleSheet](/Es/DOM/CssRule.parentStyleSheet)
  - : Devuelve el objeto [stylesheet](/Es/DOM/Stylesheet) del que esta regla es parte.
- [type](/es/DOM/cssRule.type)
  - : El tipo de regla. ejem.: `CSSRule.CHARSET_RULE` o `CSSRule.IMPORT_RULE`.

### CSSStyleRule

- [selectorText](/Es/DOM/CssRule.selectorText)
  - : Recoje/Establece la representación en forma de texto, del selector de la regle. Ejem.: "h1,h2".
- [style](/Es/DOM/CssRule.style)
  - : Devuelve el objeto [CSSStyleDeclaration](http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration) para el bloque [declaration block](http://www.w3.org/TR/1998/REC-CSS2-19980512/syndata.html#block) de la regla.

### CSSStyleRule

### CSSMediaRule

### CSSFontFaceRule

### CSSPageRule

### CSSImportRule

### CSSCharsetRule

### CSSUnknownRule

### Specification

[DOM Level 2 CSS: CSSRule](http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSRule)
