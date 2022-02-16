---
title: NodeList.entries()
slug: Web/API/NodeList/entries
tags:
  - API
  - DOM
  - Iteration
  - Liste
  - Méthodes
  - Node
  - NodeList
  - Noeuds
translation_of: Web/API/NodeList/entries
---
{{APIRef("DOM")}}

La méthode **`NodeList.entries()`** renvoie un {{jsxref("Les_protocoles_iteration",'itérateur')}} permettant de parcourir toutes les paires clé / valeur contenues dans cet objet . Les valeurs sont des objets {{domxref("Node")}}.

## Syntaxe

    list.entries();

### Valeur retournée

renvoie un {{jsxref("Les_protocoles_iteration","itérateur")}}.

## Exemple

```js
var node = document.createElement("div");
var kid1 = document.createElement("p");
var kid2 = document.createTextNode("hey");
var kid3 = document.createElement("span");
node.appendChild(kid1);
node.appendChild(kid2);
node.appendChild(kid3);

var list = node.childNodes;

// Utiliser for..of
for (var entry of list.entries()) {
  console.log(entry);
}
```

résultat :

    Array [ 0, <p> ]
    Array [ 1, #text "hey" ]
    Array [ 2, <span> ]

## Spécifications

| Spécification                                                                                                        | Statut                           | Commentaire          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('DOM WHATWG','#interface-nodelist','entries() (as iterable&lt;Node&gt;)')}} | {{Spec2('DOM WHATWG')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.NodeList.entries")}}

## Voir aussi

- {{domxref("Node")}}
- {{domxref("NodeList")}}
