---
title: DocumentType
slug: Web/API/DocumentType
tags:
  - API
  - DOM
  - DocumentType
  - Interface
translation_of: Web/API/DocumentType
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

| Spécification                                                                                    | État                             | Commentaires                                                                                                                          |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('DOM WHATWG', '#documenttype', 'DocumentType')}}                 | {{Spec2('DOM WHATWG')}} | Implémente désormais l'interface {{domxref("ChildNode")}}. Retrait des propriétés `internalSubset`, `entities` et `notation`. |
| {{SpecName('DOM3 Core', 'core.html#ID-412266927', 'DocumentType')}}         | {{Spec2('DOM3 Core')}}     | Aucune modification depuis {{SpecName('DOM2 Core')}}.                                                                          |
| {{SpecName('DOM2 Core', 'core.html#ID-412266927', 'CharacterData')}}     | {{Spec2('DOM2 Core')}}     | Ajout des propriétés `publicID`, `systemID`  et `internalSubset`.                                                                     |
| {{SpecName('DOM1', 'level-one-core.html#ID-412266927', 'CharacterData')}} | {{Spec2('DOM1')}}         | Définition initiale.                                                                                                                  |

## Compatibilité des navigateurs

{{Compat("api.DocumentType")}}

## Voir aussi

- [L'index des interfaces du DOM](/fr/docs/Web/API/Document_Object_Model)
- {{domxref("Entity")}}
- {{domxref("Notation")}}
