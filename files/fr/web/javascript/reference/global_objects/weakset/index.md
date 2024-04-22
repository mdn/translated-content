---
title: WeakSet
slug: Web/JavaScript/Reference/Global_Objects/WeakSet
---

{{JSRef}}

Un objet **`WeakSet`** permet de créer un ensemble dont les _objets_ sont contenus avec des références faibles.

## Description

Les `WeakSet` sont des ensembles d'objets. À l'instar de [`Set`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Set) objet présent dans un objet `WeakSet` ne peut apparaître qu'une seule fois, il est unique pour un `WeakSet` donné.

Les principales différences avec l'objet [`Set`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Set) sont les suivantes&nbsp;:

- Contrairement aux `Sets`, les `WeakSets` sont des **ensembles uniquement constitués d'objets** et ne peuvent pas contenir des valeurs de n'importe quel type.
- L'objet `WeakSet` est _faible_&nbsp;: les références vers les objets de l'ensemble sont des références faibles. Si aucune autre référence vers l'objet n'est présente en dehors du `WeakSet`, l'objet pourra alors être nettoyé par le ramasse-miette.

  > **Note :** Cela signifie également qu'on ne peut pas lister les objets contenus à un instant donné dans l'ensemble. Les objets `WeakSets` ne sont pas énumérables.

### Cas d'usage&nbsp;: détecter les références circulaires

Les fonctions récursives doivent faire attention aux structures de données circulaires qu'elles consommeraient. Les objets `WeakSets` peuvent être utilisés pour ça&nbsp;:

```js
// Appeler un callback sur ce qui est stocké dans un objet
function execRecursively(fn, subject, _refs = null) {
  if (!_refs) _refs = new WeakSet();

  // On évite une récursion infinie
  if (_refs.has(subject)) return;

  fn(subject);
  if ("object" === typeof subject) {
    _refs.add(subject);
    for (let key in subject) execRecursively(fn, subject[key], _refs);
  }
}

const toto = {
  toto: "Toto",
  truc: {
    truc: "Truc",
  },
};

toto.truc.machin = toto; // Référence circulaire !
execRecursively((obj) => console.log(obj), toto);
```

Ici, on a un objet `WeakSet` qui est créé lors de la première exécution et qui est passé ensuite à chaque appel qui suit (via l'argument interne `_refs`).

Le nombre d'objets ou l'ordre de parcours n'a pas d'importance et un objet `WeakSet` est donc plus adapté (y compris en termes de performances) qu'un [`Set`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Set), notamment si un grand nombre d'objets sont concernés.

## Constructeur

- [`WeakSet()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/WeakSet)
  - : Crée un nouvel objet `WeakSet`.

## Méthodes des instances

- [`WeakSet.prototype.add(<var>valeur</var>)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/add)
  - : Ajoute `valeur` à l'ensemble `WeakSet`.
- [`WeakSet.prototype.delete(<var>valeur</var>)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/delete)
  - : Retire `valeur` de l'ensemble `WeakSet`. Suite à cette opération, `WeakSet.prototype.has(valeur)` renverra `false`.
- [`WeakSet.prototype.has(<var>valeur</var>)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/has)
  - : Renvoie un booléen indiquant si `valeur` est présente au sein de l'ensemble `WeakSet`.

## Exemples

### Utiliser un objet `WeakSet`

```js
const ws = new WeakSet();
const toto = {};
const truc = {};

ws.add(toto);
ws.add(truc);

ws.has(toto); // true
ws.has(truc); // true

ws.delete(toto); // retire toto de l'ensemble
ws.has(toto); // false, toto a été enlevé
ws.has(truc); // toujours true
```

On notera que `toto !== truc`. Bien que ce soient des objets similaires, ce ne sont pas _**les mêmes objets**_. Aussi, les deux sont ajoutés à l'ensemble.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Une prothèse d'émulation pour `WeakSet` avec la bibliothèque `core-js`](https://github.com/zloirock/core-js#weakset)
- [`Map`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [`Set`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [`WeakMap`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)
