---
title: Node.nodeValue
slug: Web/API/Node/nodeValue
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Node/nodeValue
original_slug: Web/API/Element/nodeValue
---
{{APIRef}} Podsumowanie

Zwraca wartość bieżącego węzła.

## Składnia

    wartość = document.nodeValue

`wartość` to ciąg znaków reprezentujący wartość elementu, jeśli taka istnieje.

## Uwagi

Dla dokumentu `nodeValue` zwraca `null`. Dla węzłów tekstowych, komentarzy i CDATA `nodeValue` zwraca zawartość węzła. Dla węzłów atrybutów, zwracana jest wartość atrybutu.

Poniższa tabela przedstawia wartości zwracane dla różnych interfejsów:

| Interfejs             | nodeValue                  |
| --------------------- | -------------------------- |
| Attr                  | wartość atrybutu           |
| CDATASection          | treść sekcji CDATA         |
| Comment               | treść komentarza           |
| Document              | null                       |
| DocumentFragment      | null                       |
| DocumentType          | null                       |
| Element               | null                       |
| NamedNodeMap          | null                       |
| EntityReference       | null                       |
| Notation              | null                       |
| ProcessingInstruction | cała treść, wyłączając cel |
| Text                  | treść węzła tekstowego     |

Jeśli `nodeValue` z definicji ma wartość `null`, ustawianie tej właściwości nie będzie mieć efektu.

## Specyfikacja

- [nodeValue](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-F68D080)
