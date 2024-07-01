---
title: NodeList.values()
slug: Web/API/NodeList/values
---

{{APIRef("DOM")}}

La méthode **`NodeList.values()`** renvoie un {{jsxref("Les_protocoles_iteration",'itérateur')}} permettant de parcourir toutes les valeurs contenues dans cet objet. Les valeurs sont des objets {{domxref("Node")}} (_noeud_).

## Syntaxe

```js
nodeList.values();
```

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
for (var value of list.values()) {
  console.log(value);
}
```

Le résultat est :

```
<p>
#text "hey"
<span>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("Node")}}
- {{domxref("NodeList")}}
