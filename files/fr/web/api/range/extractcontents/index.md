---
title: Range.extractContents()
slug: Web/API/Range/extractContents
translation_of: Web/API/Range/extractContents
---
{{ApiRef("DOM")}}

La méthode **`Range.extractContents()`** déplace le contenu du {{ domxref("Range") }} depuis l’arbre du document dans un {{ domxref("DocumentFragment") }}.

Les gestionnaires d’évènements ajoutés en utilisant les méthodes du DOM ne sont pas conservés lors de l’extraction. les attributs HTML d’évènements sont conservés ou dupliqués comme ils le seraient avec la méthode {{domxref("Node.cloneNode()")}}. Les attributs HTML id sont également clonés, ce qui peut mener à un document invalide si un nœud partiellement sélectionné est extrait et ajouté au document.

Les nœuds partiellement sélectionnés sont clonés pour inclure les balises parentes nécessaires pour rendre le fragment de document valide.

## Syntaxe

    documentFragment = range.extractContents();

## Exemples

```js
var range = document.createRange();
range.selectNode(document.getElementsByTagName("div").item(0));
var documentFragment = range.extractContents();
document.body.appendChild(documentFragment);
```

## Spécifications

| Spécification                                                                                                                                            | Statut                                       | Commentaire             |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ----------------------- |
| {{SpecName('DOM WHATWG', '#dom-range-extractcontents', 'Range.extractContents()')}}                                         | {{Spec2('DOM WHATWG')}}             | Pas de changement.      |
| {{SpecName('DOM2 Traversal_Range', 'ranges.html#Level2-Range-method-extractContents', 'Range.extractContents()')}} | {{Spec2('DOM2 Traversal_Range')}} | Spécification initiale. |

## Compatibilité des navigateurs

{{Compat("api.Range.extractContents")}}

## Voir aussi

- [L’index des interfaces DOM](/fr/docs/Web/API/Document_Object_Model)
