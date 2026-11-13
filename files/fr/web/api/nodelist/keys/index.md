---
title: "NodeList : méthode keys()"
short-title: keys()
slug: Web/API/NodeList/keys
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

{{APIRef("DOM")}}

La méthode **`keys()`** de l'interface {{DOMxRef("NodeList")}} retourne un {{JSxRef("Iteration_protocols", "itérateur",,1)}} permettant de parcourir toutes les clés contenues dans cet objet. Les clés sont des `unsigned integer` (_entier non signé_).

## Syntaxe

```js-nolint
keys()
```

### Paramètres

Aucun.

### Valeur de retour

Retourne un {{JSxRef("Iteration_protocols", "itérateur",,1)}}.

## Exemples

```js
const noeud = document.createElement("div");
const enfant1 = document.createElement("p");
const enfant2 = document.createTextNode("hey");
const enfant3 = document.createElement("span");

noeud.appendChild(enfant1);
noeud.appendChild(enfant2);
noeud.appendChild(enfant3);

let liste = noeud.childNodes;

// Utiliser for...of
for (const cle of liste.keys()) {
  console.log(cle);
}
```

Le résultat est&nbsp;:

```plain
0
1
2
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `NodeList.prototype.entries` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#iterable-dom-collections)
- L'interface {{DOMxRef("Node")}}
- L'interface {{DOMxRef("NodeList")}}
