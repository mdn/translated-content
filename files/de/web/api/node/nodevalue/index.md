---
title: Node.nodeValue
slug: Web/API/Node/nodeValue
tags:
  - API DOM Gecko Property
translation_of: Web/API/Node/nodeValue
---
{{APIRef("DOM")}}

Die **`Node.nodeValue`** Eigenschaft gibt den Wert der aktuellen Node zurück oder setzt ihn.

## Syntax

    value = node.nodeValue;

`value` ist ein string der den Inhalt, falls es ihn gibt, der aktuellen node enthält.

## Notizen

Für das Dokument selbst, gibt `nodeValue` `null` zurück. Für Text, Kommentar, und CDATA nodes, gibt `nodeValue` den Inhalt der node zurück. Für attribute nodes, wird der Inhalt des Attributes zurückgegeben.

Die folgende Tabelle zeigt die return Werte der unterschiedlichen Elemente:

| Attr                  | value of attribute                      |
| --------------------- | --------------------------------------- |
| CDATASection          | Inhalt der CDATA Section                |
| Comment               | Inhalt des comments                     |
| Document              | null                                    |
| DocumentFragment      | null                                    |
| DocumentType          | null                                    |
| Element               | null                                    |
| NamedNodeMap          | null                                    |
| EntityReference       | null                                    |
| Notation              | null                                    |
| ProcessingInstruction | Gesamter Inhalt, ausgenommen des target |
| Text                  | Inhalt der text node                    |

Wenn `nodeValue` als `null` definiert wird, hat das null setzen keine Auswirkung.

## Spezifikation

- [DOM Level 2 Core: Node.nodeValue](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-F68D080)
