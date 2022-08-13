---
title: Document.createTreeWalker()
slug: Web/API/Document/createTreeWalker
tags:
  - API
  - DOM
  - DOM-Referenz
  - Document
  - Dokument
  - Méthode
translation_of: Web/API/Document/createTreeWalker
---
{{ApiRef("Document")}}

Die Methode **`Document.createTreeWalker()`** erzeugt ein neues {{domxref("TreeWalker")}} Objekt und gibt dieses zurück.

## Syntax

    treeWalker = document.createTreeWalker(wurzel, anzeigeFilter, filter, entityReferenceExpansion);

### Parameter

- _wurzel_
  - : Ist der Ursprungs- oder Wurzelknoten {{domxref("Node")}} des {{domxref("TreeWalker")}}-Durchlaufens. Normalerweise ist dies ein Element, das zum Dokument gehört.
- _anzeigeFilter {{optional_inline}}_
  - | : Optionale `unsigned long`Bitmaske, erstellt durch bitweise ODER-Verknüpfung der Konstanten von [`NodeFilter`](http://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html#Traversal-NodeFilter). Erlaubt eine bequeme Filterung auf bestimmte Knotentypen. Der Standardwert ist `0xFFFFFFFF`, auch repräsentiert durch die `SHOW_ALL`-Konstante. | Konstante                              | numerischer Wert                                                                                                                                                                                                                                                                                                                                                                                                                   | Beschreibung |
    | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
    | `NodeFilter.SHOW_ALL`                                                                                                                                                                                                                                                                                                                                  | `-1` (Maximalwert von `unsigned long`) | Zeigt alle Knoten.                                                                                                                                                                                                                                                                                                                                                                                                                 |
    | `NodeFilter.SHOW_ATTRIBUTE` {{deprecated_inline}}                                                                                                                                                                                                                                                                                               | `2`                                    | Zeigt Attribut-Knoten {{domxref("Attr")}}. Das ist nur sinnvoll, wenn der {{domxref("TreeWalker")}} mit einem {{domxref("Attr")}}-Knoten als Wurzel erzeugt wird. In diesem Fall erscheint der Attribut-Knoten an der ersten Position bei der Durchquerung. Da Attribute nie Kind-Knoten anderer Knoten sind, erscheinen sie nicht, wenn der Dokumentenbaum durchlaufen wird.                                     |
    | `NodeFilter.SHOW_CDATA_SECTION` {{deprecated_inline}}                                                                                                                                                                                                                                                                                           | `8`                                    | Zeigt {{domxref("CDATASection")}}-Knoten.                                                                                                                                                                                                                                                                                                                                                                                 |
    | `NodeFilter.SHOW_COMMENT`                                                                                                                                                                                                                                                                                                                              | `128`                                  | Zeigt {{domxref("Comment")}}-Knoten.                                                                                                                                                                                                                                                                                                                                                                                         |
    | `NodeFilter.SHOW_DOCUMENT`                                                                                                                                                                                                                                                                                                                             | `256`                                  | Zeigt {{domxref("Document")}}-Knoten.                                                                                                                                                                                                                                                                                                                                                                                     |
    | `NodeFilter.SHOW_DOCUMENT_FRAGMENT`                                                                                                                                                                                                                                                                                                                    | `1024`                                 | Zeigt {{domxref("DocumentFragment")}}-Knoten.                                                                                                                                                                                                                                                                                                                                                                             |
    | `NodeFilter.SHOW_DOCUMENT_TYPE`                                                                                                                                                                                                                                                                                                                        | `512`                                  | Zeigt {{domxref("DocumentType")}}-Knoten.                                                                                                                                                                                                                                                                                                                                                                                 |
    | `NodeFilter.SHOW_ELEMENT`                                                                                                                                                                                                                                                                                                                              | `1`                                    | Zeigt {{domxref("Element")}}-Knoten.                                                                                                                                                                                                                                                                                                                                                                                         |
    | `NodeFilter.SHOW_ENTITY` {{deprecated_inline}}                                                                                                                                                                                                                                                                                                  | `32`                                   | Zeigt {{domxref("Entity")}}-Knoten. Dies ist nur sinnvoll, wenn ein {{domxref("TreeWalker")}} mit einem {{domxref("Entity")}}-Knoten als Wurzel erzeugt wird. In diesem Fall erscheint der {{domxref("Entity")}}-Knoten an der ersten Position bei der Durchquerung. Da Entity-Knoten nie Kind-Knoten anderer Knoten sind, erscheinen sie nicht, wenn der Dokumentenbaum durchlaufen wird.             |
    | `NodeFilter.SHOW_ENTITY_REFERENCE` {{deprecated_inline}}                                                                                                                                                                                                                                                                                        | `16`                                   | Shows {{domxref("EntityReference")}} nodes.                                                                                                                                                                                                                                                                                                                                                                              |
    | `NodeFilter.SHOW_NOTATION` {{deprecated_inline}}                                                                                                                                                                                                                                                                                                | `2048`                                 | Zeigt {{domxref("Notation")}}-Knoten. Dies ist nur sinnvoll, wenn ein {{domxref("TreeWalker")}} mit einem {{domxref("Notation")}}-Knoten als Wurzel erzeugt wird. In diesem Fall erscheint der {{domxref("Notation")}}-Knoten an der ersten Position bei der Durchquerung. Da Entity-Knoten nie Kind-Knoten anderer Knoten sind, erscheinen sie nicht, wenn der Dokumentenbaum durchlaufen wird. |
    | `NodeFilter.SHOW_PROCESSING_INSTRUCTION`                                                                                                                                                                                                                                                                                                               | `64`                                   | Zeigt {{domxref("ProcessingInstruction")}}-Knoten.                                                                                                                                                                                                                                                                                                                                                                     |
    | `NodeFilter.SHOW_TEXT`                                                                                                                                                                                                                                                                                                                                 | `4`                                    | Zeigt {{domxref("Text")}}-Knoten.                                                                                                                                                                                                                                                                                                                                                                                             |
- _filter _{{optional_inline}}\_\_
  - : Ein optionaler {{domxref("NodeFilter")}}. Muss ein ein Objekt mit einer Methode namens `acceptNode` sein, die vom {{domxref("TreeWalker")}} aufgerufen wird. Diese Methode entscheidet, ob ein übergebener Knoten, der schon von `anzeigeFilter` durchgelassen wurde, ausgegeben wird oder nicht.
- _entityReferenceExpansion _{{optional_inline}}\_\_ _{{obsolete_inline}}_
  - : Optionaler {{domxref("Boolean")}}-Schalter. Entscheidet, ob der Teilbaum unter einer {{domxref("EntityReference")}} ausgelassen werden soll, wenn das Element ausgelassen wird.

## Beispiel

Das folgende Beispiel läuft über alle Knoten im `body`, filtert die Menge auf Elementknoten und gibt im `filter` jeden Knoten als durchlässig an (die Filterung auf die Elementknoten hätte auch in der `acceptNode()`-Methode erfolgen können).
Mithilfe des `treeWalker` werden alle durchgelassenen Knoten in ein Array gesammelt.

```js
var treeWalker = document.createTreeWalker(
  document.body,
  NodeFilter.SHOW_ELEMENT,
  { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
  false
);

var nodeList = [];

while(treeWalker.nextNode()) nodeList.push(treeWalker.currentNode);
```

## Spezfikationen

| Spezfikation                                                                                                                                                     | Status                                       | Bemerkung                                                                                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('DOM WHATWG', '#dom-document-createtreewalker', 'Document.createTreeWalker')}}                                         | {{Spec2('DOM WHATWG')}}             | `expandEntityReferences`-Parameter wurde entfernt. `whatToShow`- und `filter`-Parameter wurden als optional markiert. |
| {{SpecName('DOM2 Traversal_Range', 'traversal.html#NodeIteratorFactory-createTreeWalker', 'Document.createTreeWalker')}} | {{Spec2('DOM2 Traversal_Range')}} | Initiale Definition                                                                                                   |

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Schnittstelle des Ergebnis-Objekts: {{domxref("TreeWalker")}}.
- [createTreeWalker auf MSDN](<http://msdn.microsoft.com/en-us/library/ie/ff975302(v=vs.85).aspx>)
