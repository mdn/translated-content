---
title: DocumentType
slug: Web/API/DocumentType
---

{{APIRef("DOM")}}

L'interface **`DocumentType`** représente un nœud ({{domxref("Node")}}) contenant un _doctype_.

{{InheritanceDiagram}}

## Propriétés

_Cette interface hérite de propriétés de la part de son parent, {{domxref("Node")}}, et implémente l'interface {{domxref("ChildNode")}}._

- ...

  {{domxref("DocumentType.entities")}} {{readonlyInline}} {{deprecated_inline}}

  - : Une {{domxref ("NamedNodeMap")}} des entités déclarées dans la DTD. Chaque noeud de cette carte implémente l'interface {{domxref ("Entity")}}.

- {{domxref("DocumentType.internalSubset")}} {{readonlyInline}} {{deprecated_inline}}
  - : Un {{domxref ("DOMString")}} du sous-ensemble interne, ou null s'il n'y en a pas. Par exemple "\<! ELEMENT foo (bar)">
- {{domxref("DocumentType.name")}} {{readonlyInline}}
  - : une {{domxref("DOMString")}}, par exemple, `"html"` pour `<!DOCTYPE HTML>`.
- {{domxref("DocumentType.notations")}} {{readonlyInline}} {{deprecated_inline}}
  - : une {{domxref ("NamedNodeMap")}} avec les notations déclarées dans la DTD. Chaque nœud de cette carte implémente l'interface {{domxref ("Notation")}}.
- {{domxref("DocumentType.publicId")}} {{readonlyInline}}
  - : une {{domxref("DOMString")}}, par exemple `"-//W3C//DTD HTML 4.01//EN"`, chaîne vide pour HTML5.
- {{domxref("DocumentType.systemId")}} {{readonlyInline}}
  - : une {{domxref("DOMString")}}, par exemple, `"http://www.w3.org/TR/html4/strict.dtd"`, chaîne vide pour HTML5.

## Méthodes

_Cette interface hérite de méthodes de la part de son parent, {{domxref("Node")}}, et implémente l'interface {{domxref("ChildNode")}}._

- {{domxref("ChildNode.remove()")}} {{experimental_inline}}
  - : Cette méthode retire l'objet de la liste des enfants de son élément parent.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'index des interfaces du DOM](/fr/docs/Web/API/Document_Object_Model)
- {{domxref("Entity")}}
- {{domxref("Notation")}}
