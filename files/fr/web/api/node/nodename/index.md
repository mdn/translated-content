---
title: element.nodeName
slug: Web/API/Node/nodeName
tags:
  - API
  - DOM
  - Noeuds
  - Nom
  - Propriété
translation_of: Web/API/Node/nodeName
---
{{APIRef("DOM")}}

La propriété en lecture seule **`Node.nodeName`** renvoie le nom du nœud courant dans une chaîne.

Les valeurs retournées pour les différents types de noeuds sont :

| Interface                                        | Valeur nodeName                                                       |
| ------------------------------------------------ | --------------------------------------------------------------------- |
| {{domxref("Attr")}}                         | La valeur de {{domxref("Attr.name")}}                         |
| {{domxref("CDATASection")}}             | `"#cdata-section"`                                                    |
| {{domxref("Comment")}}                     | `"#comment"`                                                          |
| {{domxref("Document")}}                 | `"#document"`                                                         |
| {{domxref("DocumentFragment")}}         | `"#document-fragment"`                                                |
| {{domxref("DocumentType")}}             | La valeur de {{domxref("DocumentType.name")}}             |
| {{domxref("Element")}}                     | La valeur de {{domxref("Element.tagName")}}                 |
| {{domxref("Entity")}}                     | Le nom de l'entité                                                    |
| {{domxref("EntityReference")}}         | Le nom de la référence d'entité                                       |
| {{domxref("Notation")}}                 | Le nom de notation                                                    |
| {{domxref("ProcessingInstruction")}} | La valeur de {{domxref("ProcessingInstruction.target")}} |
| {{domxref("Text")}}                         | `"#text"`                                                             |

## Syntaxe

    var str = node.nodeName;

## Exemple

Avec le balisage suivant&nbsp;:

    <div id="d1">hello world</div>
    <input type="text" id="t"/>

et le script suivant&nbsp;:

    var div1 = document.getElementById("d1");
    var text_field = document.getElementById("t");
    text_field.value = div1.nodeName;

En XHTML (ou tout autre format XML), la valeur de `text_field` sera «&nbsp;div&nbsp;». Cependant, en HTML, la valeur de `text_field` sera «&nbsp;DIV&nbsp;», parce que `nodeName` et `tagName` renvoient en casse majuscule sur les éléments HTML dans les DOM marqués comme des documents HTML. En lire plus [détails sur la sensibilité à la casse de nodeName dans différents navigateurs](http://ejohn.org/blog/nodename-case-sensitivity/) (en).

Notez que la propriété [`tagName`](fr/DOM/element.tagName) aurait pu être uilisée à la place, puisque `nodeName` a la même valeur que `tagName` pour un élément. Souvenez vous cependant que `nodeName` renverra `#text` pour les nœuds texte tandis que `tagName` renverra `undefined`.

## Spécification

- [DOM Level 2 Core: Node.nodeName](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-F68D095) — [traduction](http://www.yoyodesign.org/doc/w3c/dom2-core/core.html#ID-F68D095) (non normative)
- [DOM Level 3 Core: Node.nodeName](http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-F68D095)
- [HTML 5: APIs in HTML documents](http://www.whatwg.org/specs/web-apps/current-work/multipage/dom.html#apis-in-html-documents)

## Compatibilité des navigateurs

{{Compat("api.Node.nodeName")}}
