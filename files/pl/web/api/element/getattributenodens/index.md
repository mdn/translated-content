---
title: element.getAttributeNodeNS
slug: Web/API/Element/getAttributeNodeNS
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Strony_wymagające_dopracowania
  - Wszystkie_kategorie
translation_of: Web/API/Element/getAttributeNodeNS
---
{{ ApiRef() }}

### Podsumowanie

Zwraca węzeł `Attr` dla atrybutu z daną przestrzenią nazw i nazwą.

### Składnia

    attributeNode = element.getAttributeNodeNS(namespace,nodeName)

- `attributeNode` jest węzłem określonego atrybutu.
- `namespace` jest łańcuchem znaków określającym przestrzeń nazw atrybutu.
- `nodeName` jest łańcuchem znaków określającym nazwę atrybutu.

\== Przykład == TBD The example needs to be fixed pre> // html: \<div id="top" /> t = document.getElementById("top"); specialNode = t.getAttributeNodeNS( "<http://www.mozilla.org/ns/specialspace>", "id"); // iNode.value = "full-top" \</pre

### Uwagi

`getAttributeNodeNS` is more specific than [getAttributeNode](pl/DOM/element.getAttributeNode) in that it allows you to specify attributes that are part of a particular namespace. The corresponding setter method is [setAttributeNodeNS](pl/DOM/element.setAttributeNodeNS).

{{ DOMAttributeMethods() }}

### Specyfikacja

[DOM Level 2 Core: getAttributeNodeNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElGetAtNodeNS)
