---
title: NodeList.keys()
slug: Web/API/NodeList/keys
tags:
  - API
  - DOM
  - Liste
  - Méthodes
  - Noeuds
translation_of: Web/API/NodeList/keys
---
{{APIRef("DOM")}}

La méthode **`NodeList.keys()`** renvoie un {{jsxref("Les_protocoles_iteration",'itérateur')}} permettant de parcourir toutes les clés contenues dans cet objet. Les clés sont des `unsigned integer` (_entier non signé_).

## Syntaxe

    nodeList.keys();

### Valeur retournée

Renvoie un {{jsxref("Les_protocoles_iteration","itérateur")}}.

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

// Utilisation de for..of
for(var key of list.keys()) {
   console.log(key);
}
```

Le résultat est :

    0
    1
    2

## Spécifications

| Spécification                                                                                    | Statut                           | Commentaire          |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName('DOM WHATWG','#interface-nodelist','keys() (as iterable)')}} | {{Spec2('DOM WHATWG')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.NodeList.keys")}}

## Voir aussi

- {{domxref("Node")}}
- {{domxref("NodeList")}}
