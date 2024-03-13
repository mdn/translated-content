---
title: DocumentFragment
slug: Web/API/DocumentFragment
---

{{ ApiRef("DOM") }}

L'interface **`DocumentFragment`** représente un objet document minimal qui n'a pas de parent. Il est utilisé comme une version légère de {{domxref("Document")}} pour stocker un segment de structure de document composé de nœuds, tout comme un document standard. La différence fondamentale est que, comme le fragment de document ne fait pas réellement partie de la structure du DOM, les changements faits au fragment n'affectent pas le document, ne causent pas de {{Glossary("Reflow")}} , et ne provoquent pas les éventuels impacts de performance qui peuvent avoir lieu quand des changements sont faits.

Un usage courant de `DocumentFragment` est de créer un fragment, assembler un sous-arbre DOM au sein de celui-ci, puis ajouter ou insérer le fragment dans le DOM en utilisant les méthodes de l'interface {{domxref("Node")}} (telles que {{domxref("Node.appendChild", "appendChild()")}} ou {{domxref("Node.insertBefore", "insertBefore()")}}). En faisant ainsi, on place les nœuds du fragment dans le DOM, en laissant derrière un `DocumentFragment` vide. Comme tous les nœuds sont insérés dans le document en une seule fois, un seul _reflow_ et un seul rendu sont déclenchés, au lieu de potentiellement un pour chaque nœud inséré s'ils avaient été insérés séparément.

Cette interface est également beaucoup utilisée avec les Web components : les éléments {{HTMLElement("template")}} contiennent un `DocumentFragment` dans leur propriété {{domxref("HTMLTemplateElement.content")}}.

Un `DocumentFragment` vide peut être créé en utilisant la méthode {{domxref("document.createDocumentFragment()")}} ou le constructeur.

{{InheritanceDiagram}}

## Propriétés

_Cette interface n'a pas de propriétés spécifiques, mais hérite de celles de son parent,_ _{{domxref("Node")}}, et implémente celles de l'interface {{domxref("ParentNode")}}._

- {{ domxref("ParentNode.children") }} {{readonlyInline}}{{experimental_inline}}
  - : Retourne une {{domxref("HTMLCollection")}} dynamique contenant tous les objets de type {{domxref("Element")}} enfants de l'objet `DocumentFragment`.
- {{ domxref("ParentNode.firstElementChild") }} {{readonlyInline}}{{experimental_inline}}
  - : Retourne un {{domxref("Element")}} qui est le premier enfant de l'objet `DocumentFragment`, ou `null` s'il n'y en a aucun.
- {{ domxref("ParentNode.lastElementChild") }} {{readonlyInline}}{{experimental_inline}}
  - : Retourne un {{domxref("Element")}} qui est le dernier enfant de l'objet `DocumentFragment`, ou `null` s'il n'y en a aucun.
- {{ domxref("ParentNode.childElementCount") }} {{readonlyInline}}{{experimental_inline}}
  - : Retourne un `unsigned long` indiquant le nomble d'enfants que le `DocumentFragment` possède.

## Constructeur

- {{ domxref("DocumentFragment.DocumentFragment()", "DocumentFragment()") }} {{experimental_inline}}
  - : Retourne un objet `DocumentFragment` vide.

## Méthodes

_Cette interface hérite des méthodes de son parent, {{domxref("Node")}}_, et implémente celles de l'interface {{domxref("ParentNode")}}.

- {{domxref("DocumentFragment.querySelector()")}}
  - : Retourne le premier nœud {{domxref("Element")}} du `DocumentFragment`, dans l'ordre du document, correspondant aux sélécteurs spécifiés.
- {{domxref("DocumentFragment.querySelectorAll()")}}
  - : Retourne une {{domxref("NodeList")}} de tous les nœuds {{domxref("Element")}} du `DocumentFragment` qui correspondent aux sélecteurs spécifiés.
- {{domxref("DocumentFragment.getElementById()")}}
  - : Retourne le premier nœud {{domxref("Element")}} du `DocumentFragment`, dans l'ordre du document, qui correspond à l'ID spécifié.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Index des interfaces DOM](/fr/docs/DOM/DOM_Reference)
