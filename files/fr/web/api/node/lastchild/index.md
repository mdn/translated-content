---
title: element.lastChild
slug: Web/API/Node/lastChild
tags:
  - API
  - DOM
  - Enfant
  - Noeuds
  - Propriétés
translation_of: Web/API/Node/lastChild
---
{{APIRef("DOM")}}

La propriété en lecture seule **`Node.lastChild`** renvoie le dernier enfant du noeud. Si son parent est un élément, l'enfant est généralement un noeud élément, texte ou commentaire. Elle renvoie `null` s'il n'y a aucun enfant.

## Syntaxe

    var childNode = node.lastChild;



## Exemple



```js
var tr = document.getElementById("row1");
var corner_td = tr.lastChild;
```

## Spécification

| Spécification                                                                                    | Statut                           | Commentaire         |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------- |
| {{SpecName('DOM WHATWG', '#dom-node-lastchild', 'Node.lastChild')}}         | {{Spec2('DOM WHATWG')}} | Pas de changement   |
| {{SpecName('DOM3 Core', 'core.html#ID-61AD09FB', 'Node.lastChild')}}     | {{Spec2('DOM3 Core')}}     | Pas de changement   |
| {{SpecName('DOM2 Core', 'core.html#ID-61AD09FB', 'Node.lastChild')}}     | {{Spec2('DOM2 Core')}}     | Pas de changement   |
| {{SpecName('DOM1', 'level-one-core.html#ID-61AD09FB', 'Node.lastChild')}} | {{Spec2('DOM1')}}         | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.Node.lastChild")}}
