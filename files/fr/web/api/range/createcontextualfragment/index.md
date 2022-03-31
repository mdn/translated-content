---
title: Range.createContextualFragment()
slug: Web/API/Range/createContextualFragment
translation_of: Web/API/Range/createContextualFragment
---
La méthode **`Range.createContextualFragment()`** retourne un {{domxref("DocumentFragment")}} en invoquant l’algorithme d’analyse de fragment HTML ou l’algorithme d’analyse de fragment XML, avec le début du `range` (le _parent_ du nœud sélectionné) comme nœud de contexte. L’algorithme d’analyse de fragment HTML est utilisé si le `range` appartient à un `Document` dont le bit «&nbsp;HTMLness&nbsp;» est défini. Dans le cas du HTML, si le nœud de contexte est censé être `html`, pour des raisons historiques l’algorithme d’analyse de fragment est invoqué avec `body` pour contexte à la place.

## Syntaxe

    documentFragment = range.createContextualFragment( chaineHTML )

### Paramètres

- _chaineHTML_
  - : Une chaîne contenant du texte et des balises à convertir en un fragment de document.

## Exemple

```js
var chaineHTML = "<div>Je suis un nœud div<div>";
var range = document.createRange();
// fait que le parent de la première div du document devient le nœud de contexte
range.selectNode(document.getElementsByTagName("div").item(0));
var documentFragment = range.createContextualFragment(chaineHTML);
document.body.appendChild(documentFragment);
```

## Spécification

| Spécification                                                                                                                                                | Statut                           | Commentaire          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName('DOM Parsing', '#idl-def-range-createcontextualfragment(domstring)', 'Range.createContextualFragment()')}} | {{Spec2('DOM Parsing')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.Range.createContextualFragment")}}

## Voir aussi

- [Index des interfaces DOM](/fr/docs/DOM/DOM_Reference)
