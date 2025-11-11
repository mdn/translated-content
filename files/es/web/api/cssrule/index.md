---
title: CssRule
slug: Web/API/CSSRule
---

{{ ApiRef("CSSOM") }}

El objeto **`CSSRule`** representa una única regla de estilo CSS. Puede ser parte de una lista [cssRules](/es/docs/Web/API/CSSStyleSheet/insertRule) de hojas de estilo ([stylesheet](/es/docs/Web/API/StyleSheet)).

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

- [cssText](/es/docs/Web/API/CSSRule/cssText)
  - : Devuelve la representación en forma de texto, de la regla. Ejem.: "h1,h2 { font-size: 16pt }".
- [parentRule](/es/docs/DOM/cssRule.parentRule)
  - : Devuelve la regla contenedora, si existe. Ejem.: una regla de estilo dentro de un bloque @media.
- [parentStyleSheet](/es/docs/Web/API/CSSRule/parentStyleSheet)
  - : Devuelve el objeto [stylesheet](/es/docs/Web/API/StyleSheet) del que esta regla es parte.
- [type](/es/docs/DOM/cssRule.type)
  - : El tipo de regla. ejem.: `CSSRule.CHARSET_RULE` o `CSSRule.IMPORT_RULE`.

### CSSStyleRule

- [selectorText](/es/docs/Web/API/CSSStyleRule/selectorText)
  - : Recoje/Establece la representación en forma de texto, del selector de la regle. Ejem.: "h1,h2".
- [style](/es/docs/Web/API/CSSStyleRule/style)
  - : Devuelve el objeto [CSSStyleDeclaration](https://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration) para el bloque [declaration block](https://www.w3.org/TR/1998/REC-CSS2-19980512/syndata.html#block) de la regla.

### CSSMediaRule

### CSSFontFaceRule

### CSSPageRule

### CSSImportRule

### CSSCharsetRule

### CSSUnknownRule

### Specification

[DOM Level 2 CSS: CSSRule](https://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSRule)
