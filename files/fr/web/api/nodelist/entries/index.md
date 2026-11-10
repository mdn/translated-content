---
title: "NodeList : méthode entries()"
short-title: entries()
slug: Web/API/NodeList/entries
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

{{APIRef("DOM")}}

La méthode **`entries()`** de l'interface {{DOMxRef("NodeList")}} retourne un {{JSxRef("Iteration_protocols", "itérateur",,1)}} permettant de parcourir toutes les paires clé/valeur contenues dans cet objet. Les valeurs sont des objets {{DOMxRef("Node")}}.

## Syntaxe

```js-nolint
entries()
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

const liste = noeud.childNodes;

// Utiliser for...of
for (const entree of liste.entries()) {
  console.log(entree);
}
```

donne en résultat&nbsp;:

```plain
Array [ 0, <p> ]
Array [ 1, #text "hey" ]
Array [ 2, <span> ]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `NodeList.prototype.entries` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#iterable-dom-collections)
- L'interface {{DOMxRef("Node")}}
- L'interface {{DOMxRef("NodeList")}}
