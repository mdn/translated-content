---
title: element.nodeName
slug: Web/API/Node/nodeName
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Node/nodeName
original_slug: Web/API/Element/nodeName
---
{{ ApiRef() }}

### Podsumowanie

Zwraca nazwę węzła jako ciąg znaków.

### Składnia

    nazwa = element.nodeName

_nazwa_
to ciąg znaków reprezentujący nazwę bieżącego elementu. `nodeName` to atrybut tylko do odczytu.

### Uwagi

Poniżej przedstawione są wartości zwracane dla różnych typów węzłów:

| Interfejs                                             | nodeName                                                                           |
| ----------------------------------------------------- | ---------------------------------------------------------------------------------- |
| [Attr](pl/DOM/Attr)                                   | tak samo jak [`Attr.name`](pl/DOM/Attr.name)                                       |
| [CDATASection](pl/DOM/CDATASection)                   | "#cdata-section"                                                                   |
| [Comment](pl/DOM/Comment)                             | "#comment"                                                                         |
| [Document](pl/DOM/Document)                           | "#document"                                                                        |
| [DocumentFragment](pl/DOM/DocumentFragment)           | "#document-fragment"                                                               |
| [DocumentType](pl/DOM/DocumentType)                   | tak samo jak [`DocumentType.name`](pl/DOM/DocumentType.name)                       |
| [Element](pl/DOM/Element)                             | tak samo jak [`Element.tagName`](pl/DOM/element.tagName)                           |
| [Entity](pl/DOM/Entity)                               | nazwa encji                                                                        |
| [EntityReference](pl/DOM/EntityReference)             | nazwa refernecji do encji                                                          |
| [Notation](pl/DOM/Notation)                           | nazwa notacji                                                                      |
| [ProcessingInstruction](pl/DOM/ProcessingInstruction) | tak samo jak [`ProcessingInstruction.target`](pl/DOM/ProcessingInstruction.target) |
| Text                                                  | "#text"                                                                            |

### Przykład

Dane są poniższe znaczniki

    <div id="d1">hello world</div>
    <input type="text" id="t"/>

i taki skrypt:

    var div1 = document.getElementById("d1");
    var poleTekstowe = document.getElementById("t");
    poleTekstowe.value = div1.nodeName;

W XHTML-u (lub innym formacie XML) wartość pola tekstowego to "div". W HTML wartość ta to "DIV".

Zauważ, że można było użyć właściwości [`tagName`](pl/DOM/element.tagName), ponieważ dla elementów `nodeName` ma taką samą wartość jak `tagName`.

### Specyfikacja

[W3C DOM Level 2 Core: nodeName](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-F68D095)

[W3C DOM Level 3 Core: nodeName](http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-F68D095)







{{ languages( { "en": "en/DOM/element.nodeName", "es": "es/DOM/element.nodeName", "fr": "fr/DOM/element.nodeName", "it": "it/DOM/element.nodeName", "ja": "ja/DOM/element.nodeName" } ) }}
