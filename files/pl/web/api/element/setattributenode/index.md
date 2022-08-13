---
title: element.setAttributeNode
slug: Web/API/Element/setAttributeNode
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Element/setAttributeNode
---
{{ ApiRef() }}

### Podsumowanie

`setAttributeNode` dodaje do elementu nowy węzeł typu `Attr`.

### Składnia

    zastąpionyAtr = element.setAttributeNode(atrybut)

### Parametry

- `atrybut` jest węzłem typu `Attr`
- `zastąpionyAtr` jest węzłem zastąpionego atrybutu - jeśli był taki - zwróconym przez tę metodę

### Przykład

    // <div id="raz" align="left">raz</div>
    // <div id="dwa">dwa</div>
    d1 = document.getElementById("raz");
    d2 = document.getElementById("dwa");
    a = d1.getAttributeNode("align");
    d2.setAttributeNode(a);
    alert(d2.attributes[1].value)
    // wypisze: "left"

### Uwagi

Jeżeli istnieje już atrybut o danej nazwie, zostanie on zastąpiony nowym atrybutem i zwrócony jako wynik funkcji.

Tej metody używa się rzadko - do zmiany atrybutów elementu zwykle wykorzystywana jest metoda [setAttribute](pl/DOM/element.setAttribute).

{{ DOMAttributeMethods() }}

### Specyfikacja

[DOM Level 2 Core: setAttributeNode](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-887236154) (wprowadzono w [DOM Level 1 Core](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-setAttributeNode)



{{ languages( { "en": "en/DOM/element.setAttributeNode", "fr": "fr/DOM/element.setAttributeNode", "ja": "ja/DOM/element.setAttributeNode" } ) }}
