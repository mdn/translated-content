---
title: element.removeAttributeNode
slug: Web/API/Element/removeAttributeNode
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Element/removeAttributeNode
---
{{ ApiRef() }}

### Podsumowanie

`removeAttributeNode` usuwa określony atrybut z bieżącego elementu.

### Składnia

    usuniętyAtr =element.removeAttributeNode(węzełAtrybutu)

- `węzełAtrybutu` to węzeł typu `Attr`, który ma zostać usunięty
- `removedAttr` to usunięty węzeł `Attr`.

### Przykład

    // <div id="top" align="center" />
    var d = document.getElementById("top");
    var d_align = d.getAttributeNode("align");
    d.removeAttributeNode(d_align);
    // align ma wartość domyślną - center,
    // więc usunięty atrybut jest od razu zastępowany:
    // <div id="top" align="center" />

### Uwagi

Jeśli usuwany atrybut ma wartość domyślną, od razu zostanie nią zastąpiony. Zastępujący atrybut ma - jeśli mają tu one zastosowanie - taki sam URI przestrzeni nazw, nazwę lokalną oraz prefiks jak oryginalny węzeł.

{{ DOMAttributeMethods() }}

### Specyfikacja

[DOM Level 2 Core: removeAttributeNode](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-D589198) (wprowadzono w [DOM Level 1 Core](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-removeAttributeNode))



{{ languages( { "en": "en/DOM/element.removeAttributeNode", "fr": "fr/DOM/element.removeAttributeNode", "ja": "ja/DOM/element.removeAttributeNode" } ) }}
