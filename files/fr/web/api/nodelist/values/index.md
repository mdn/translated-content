---
title: NodeList.values()
slug: Web/API/NodeList/values
tags:
  - API
  - DOM
  - Itérateur
  - Liste
  - Méthodes
  - Noeuds
translation_of: Web/API/NodeList/values
---
{{APIRef("DOM")}}

La méthode **`NodeList.values()`** renvoie un {{jsxref("Les_protocoles_iteration",'itérateur')}} permettant de parcourir toutes les valeurs contenues dans cet objet. Les valeurs sont des objets {{domxref("Node")}} (_noeud_).

## Syntaxe

    nodeList.values();

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
for(var value of list.values()) {
  console.log(value);
}
```

Le résultat est :

    <p>
    #text "hey"
    <span>

## Spécifications

| Spécification                                                                                                    | Statut                           | Commentaire         |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName('DOM WHATWG','#interface-nodelist','values() (as iterable&lt;Node&gt;)')}} | {{Spec2('DOM WHATWG')}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.NodeList.values")}}

## Voir aussi

- {{domxref("Node")}}
- {{domxref("NodeList")}}
