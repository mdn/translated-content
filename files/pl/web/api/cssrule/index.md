---
title: cssRule
slug: Web/API/CSSRule
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/CSSRule
---
{{ ApiRef() }}

Obiekt `CSSRule` reprezentuje pojedynczy arkusz stylu CSS. To może być pojedyncza reguła arkusza stylów CSS. Może być częścią listy [stylesheet](pl/DOM/stylesheet) [cssRules](pl/DOM/stylesheet.cssRules).

Jest tu kilka rodzajów reguł. Wszystkie one dzielą kilka wspólnych własności interfejsu [CSSRule](#cssrule) i większość posiada pewne specyficzne własności oraz typy reguł.

| Typ                      | Interfejs związany z regułą         | Opis |
| ------------------------ | ----------------------------------- | ---- |
| `CSSRule.STYLE_RULE`     | [CSSStyleRule](#cssstylerule)       |      |
| `CSSRule.MEDIA_RULE`     | [CSSMediaRule](#cssmediarule)       |      |
| `CSSRule.FONT_FACE_RULE` | [CSSFontFaceRule](#cssfontfacerule) |      |
| `CSSRule.PAGE_RULE`      | [CSSPageRule](#csspagerule)         |      |
| `CSSRule.IMPORT_RULE`    | [CSSImportRule](#cssimportrule)     |      |
| `CSSRule.CHARSET_RULE`   | [CSSCharsetRule](#csscharsetrule)   |      |
| `CSSRule.UNKNOWN_RULE`   | [CSSUnknownRule](#cssunknownrule)   |      |

### CSSRule

- [cssText](pl/DOM/cssRule.cssText)
  - : Zwraca tekstową reprezentację reguły, np. "h1,h2 { font-size: 16pt }".
- [parentRule](pl/DOM/cssRule.parentRule)
  - : Zwraca regule zawarta w treści jeśli takowa istnieje, np. regułę stylu znajdującą sie wewnątrz bloku @media.
- [parentStyleSheet](pl/DOM/cssRule.parentStyleSheet)
  - : Zwraca obiekt [stylesheet](pl/DOM/stylesheet), którego reguła jest częścią.
- [type](pl/DOM/cssRule.type)
  - : Zwraca typ reguły, np. `CSSRule.CHARSET_RULE` lub `CSSRule.IMPORT_RULE`.

### CSSStyleRule

- [selectorText](pl/DOM/cssRule.selectorText)
  - : Pobiera/ustawia tekstową reprezentację selektora dla reguły, np.: "h1,h2".
- [style](pl/DOM/cssRule.style)
  - : Zwraca obiekt [CSSStyleDeclaration](http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration) dla reguły [deklaracji bloku](http://www.w3.org/TR/1998/REC-CSS2-19980512/syndata.html#block).

### CSSStyleRule

### CSSMediaRule

### CSSFontFaceRule

### CSSPageRule

### CSSImportRule

### CSSCharsetRule

### CSSUnknownRule

### Specyfikacja

[DOM Level 2 CSS: CSSRule](http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSRule)

{{ languages( { "en": "en/DOM/cssRule" } ) }}
