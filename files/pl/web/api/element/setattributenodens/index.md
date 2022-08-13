---
title: element.setAttributeNodeNS
slug: Web/API/Element/setAttributeNodeNS
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Element/setAttributeNodeNS
---
{{ ApiRef() }}

### Podsumowanie

`setAttributeNodeNS` dodaje nowy węzeł atrybutu z określoną nazwą i przestrzenią nazw.

### Składnia

    replacedAttr = element.setAttributeNodeNS(namespace,attributeNode)

- `replacedAttr` jest zastąpionym węzłem atrybutu (jeśli istnieje), zwracanym przez tę funkcję.
- `attributeNode` jest węzłem `Attr`.

### Przykład

    // <div id="one" special-align="utterleft">one</div>
    // <div id="two">two</div>

    var myns = "http://www.mozilla.org/ns/specialspace";
    var d1 = document.getElementById("one");
    var d2 = document.getElementById("two");
    var a = d1.getAttributeNodeNS(myns, "special-align");
    var d2.setAttributeNodeNS(myns, a);

    alert(d2.attributes[1].value) // zwraca: `utterleft'

### Uwagi

Jeśli określony atrybut istnieje dla elementu, to jest on zastępowany nowym i zwracany.

{{ DOMAttributeMethods() }}

### Specyfikacja

[DOM Level 2 Core: setAttributeNodeNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElSetAtNodeNS)





{{ languages( { "en": "en/DOM/element.setAttributeNodeNS", "fr": "fr/DOM/element.setAttributeNodeNS", "ja": "ja/DOM/element.setAttributeNodeNS" } ) }}
