---
title: Stylesheet
slug: Web/API/CSSStyleSheet
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/CSSStyleSheet
original_slug: Web/API/Stylesheet
---
{{ ApiRef() }}

Ten dział opisuje obiekt [CSSStyleSheet](http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleSheet), który opisuje pojedynczy arkusz stylów css.

Arkusz stylów CSS składa się z reguł CSS, każda z nich może być manipulowana bezpośrednio przez obiekt [CSSRule](pl/DOM/cssRule). Obiekt arkusza stylów pozwala ci kontrolować i modyfikować arkusze stylów,włączając jego listę reguł.

Możesz pobrać listę arkuszy stylów dla bieżącego dokumentu używając własności [document.styleSheets](pl/DOM/document.styleSheets).

### Własności

- [stylesheet.cssRules](pl/DOM/stylesheet.cssRules)
  - : Zwraca wszystkie reguły/zasady CSS w arkuszu stylów jako tablicę.
- [stylesheet.disabled](pl/DOM/stylesheet.disabled)
  - : Ta własność sygnalizuje, czy bieżący arkusz stylów jest używany lub nie.
- [stylesheet.href](pl/DOM/stylesheet.href)
  - : Zwraca położenie zewnętrznego arkusza stylów.
- [stylesheet.media](pl/DOM/stylesheet.media)
  - : SpeObiekt media określa zamierzony nośnik docelowy dla stylu informacji.
- [stylesheet.ownerNode](pl/DOM/stylesheet.ownerNode)
  - : Zwraca węzeł łączący arkusz stylów z dokumentem.
- [stylesheet.ownerRule](pl/DOM/stylesheet.ownerRule)
  - : Jeżeli arkusz stylów pochodzi z reguły @import, własność ownerRule będzie zawierać CSSImportRule.
- [stylesheet.parentStyleSheet](pl/DOM/stylesheet.parentStyleSheet)
  - : Zwraca arkusz stylów, który włącza obecny arkusz (jeśli istnieje).
- [stylesheet.title](pl/DOM/stylesheet.title)
  - : Zwraca doradczy tytuł bieżącego arkusza stylów.
- [stylesheet.type](pl/DOM/stylesheet.type)
  - : Określa język arkusza stylów dla tego arkusza stylów.

### Metody

- [stylesheet.deleteRule](pl/DOM/stylesheet.deleteRule)
  - : Usuwa reguły z arkusza stylów.
- [stylesheet.insertRule](pl/DOM/stylesheet.insertRule)
  - : Umieszcza nową regułę stylu dla bieżącego arkusza stylów.

### Specyfikacja

[DOM Level 2 Style Sheets: StyleSheet](http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-StyleSheet)

[DOM Level 2 CSS: CSSStyleSheet](http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleSheet)

{{ languages( { "en": "en/DOM/stylesheet" } ) }}
