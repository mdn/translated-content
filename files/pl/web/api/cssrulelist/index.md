---
title: stylesheet.cssRules
slug: Web/API/CSSRuleList
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/CSSRuleList
original_slug: Web/API/Stylesheet/cssRules
---
{{ ApiRef() }}

### Podsumowanie

Zwraca wszystkie reguły/zasady CSS w arkuszu stylów jako {{domxref("CSSRuleList")}}, tablico-podobny obiekt.

### Składnia

    rules = stylesheet.cssRules

`rules` jest tablicą {{domxref("CSSRuleList")}} indywidualnych obiektów `cssRule`. Pojedynczy obiekt `cssRule` może odwołać się do jednego z następujących obiektów:

- {{domxref("CSSStyleRule") }}
- {{domxref("CSSMediaRule") }}
- {{domxref("CSSFontFaceRule") }}
- {{domxref("CSSPageRule") }}
- {{domxref("CSSImportRule") }}
- {{domxref("CSSCharsetRule") }}
- {{domxref("CSSUnknownRule") }}

### Przykład

    // pobiera pierwszą zasadę
    first_rule = document.styleSheets[0].cssRules[0];

### Uwagi

Zobacz obiekt DOM {{domxref("cssRule")}}.

### Specyfikacja

[DOM Level 2 Style: CSSStyleSheet.cssRules](http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleSheet-cssRules)
