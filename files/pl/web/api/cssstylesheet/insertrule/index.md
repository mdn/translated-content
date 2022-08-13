---
title: stylesheet.insertRule
slug: Web/API/CSSStyleSheet/insertRule
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Strony_wymagające_dopracowania
  - Wszystkie_kategorie
translation_of: Web/API/CSSStyleSheet/insertRule
original_slug: Web/API/Stylesheet/insertRule
---
{{APIRef("CSSOM")}}

### Podsumowanie

Metoda **insertRule** dodaje nową regułę stylu do aktualnego arkuszu stylu.

### Składnia

    stylesheet.insertRule(rule, index)

### Parametry

- `rule` jest ciągiem zawierającym regułę do dodania (selector i declaration).
- `index` jest liczbą reprezentującą pozycję do dodania.

### Przykład

     // push a new rule onto the top of my stylesheet
     myStyle.insertRule("#blanc { color: white }", 0);

### Uwagi

For rule sets this contains both the selector and the style declaration. For at-rules, this specifies both the at-identifier and the rule content.

### Specyfikacja

[insertRule ](http://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/css.html#CSS-CSSStyleSheet-insertRule)
