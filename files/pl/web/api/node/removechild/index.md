---
title: element.removeChild
slug: Web/API/Node/removeChild
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Node/removeChild
original_slug: Web/API/Element/removeChild
---
{{ ApiRef() }}

### Podsumowanie

Metoda **removeChild** usuwa węzeł potomny elementu.

### Składnia

    stareDziecko =element.removeChild(dziecko)

### Parametry

- `dziecko` jest usuwanym węzłem potomnym.
- `element` jest węzłem nadrzędnym węzła `dziecko`.
- `stareDziecko` jest referencją do usuwanego węzła `dziecko`. `stareDziecko == dziecko.`

### Przykład

    // <div id="nadrzedny" align="center">
    //   <div id="zagniezdzony"></div>
    // </div>
    d = document.getElementById("nadrzedny");
    d_zagniezdzony = document.getElementById("zagniezdzony");
    usuwany_wezel = d.removeChild(d_zagniezdzony);



### Specyfikacja

[removeChild](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-1734834066)



{{ languages( { "en": "en/DOM/element.removeChild", "fr": "fr/DOM/element.removeChild", "ja": "ja/DOM/element.removeChild" } ) }}
