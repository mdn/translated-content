---
title: Constructeur Set()
slug: Web/JavaScript/Reference/Global_Objects/Set/Set
---

{{JSRef}}

Le **constructeur `Set()`** permet de créer des objets `Set` qui sont des ensembles de valeurs uniques de n'importe quel type ([des valeurs primitives](/fr/docs/Glossary/Primitive) ou des objets).

{{EmbedInteractiveExample("pages/js/set-prototype-constructor.html")}}

## Syntaxe

```js
new Set();
new Set(iterable);
```

### Paramètres

- `iterable` {{optional_inline}}

  - : Si un [objet itérable](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#le_protocole_«_itérable_») est passé en argument, ses différents éléments seront ajoutés au nouvel objet `Set` créé.

    Si ce paramètre est absent ou s'il vaut `null`, le nouvel ensemble créé sera vide.

### Valeur de retour

Un nouvel objet `Set`.

## Exemples

### Utiliser `Set()`

```js
let monSet = new Set();

monSet.add(1); // Set [ 1 ]
monSet.add(5); // Set [ 1, 5 ]
monSet.add(5); // Set [ 1, 5 ]
monSet.add("du texte"); // Set [ 1, 5, 'du texte' ]
let o = { a: 1, b: 2 };
monSet.add(o);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Une prothèse d'émulation pour `Set` avec la bibliothèque `core-js`](https://github.com/zloirock/core-js#set)
- [`Set`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Set)
