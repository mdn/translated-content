---
title: element.getAttributeNode
slug: Web/API/Element/getAttributeNode
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Element/getAttributeNode
---
{{ ApiRef() }}

### Podsumowanie

Zwraca określony atrybut elementu jako węzeł typu `Attr`.

### Składnia

    węzełAtrybutu = element.getAttributeNode(nazwaAtrybutu)

- `nazwaAtrybutu` jest ciągiem zawierającym nazwę atrybutu
- `węzełAtrybutu` jest osobnym węzłem typu `Attr`

### Przykład

    // html: <div id="top" />
    t = document.getElementById("top");
    iNode = t.getAttributeNode("id");
    // iNode.value = "top"

### Uwagi

Interfejs węzła `Attr` dziedziczy ze wspólnego interfejsu węzłów `Node`, ale węzły atrybutów nie stanowią części drzewa dokumentu. Wpólne atrybuty wszystkich węzłów, takie jak [parentNode](pl/DOM/element.parentNode), [previousSibling](pl/DOM/element.previousSibling) i [nextSibling](pl/DOM/element.nextSibling) mają w przypadku węzłów `Attr` wartość `null`.

Do elementu, do którego należy atrybut, możesz odnosić się wykorzystując właściwość `ownerElement`.

Do pobrania wartości atrybutu używa się raczej metody [getAttribute](pl/DOM/element.getAttribute) niż `getAttributeNode`.

{{ DOMAttributeMethods() }}

### Specyfikacja

[getAttributeNode](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-217A91B8)



{{ languages( { "en": "en/DOM/element.getAttributeNode", "fr": "fr/DOM/element.getAttributeNode", "ja": "ja/DOM/element.getAttributeNode" } ) }}
