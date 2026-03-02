---
title: "Iterator : méthode forEach()"
short-title: forEach()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/forEach
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`forEach()`** des instances de {{JSxRef("Iterator")}} est similaire à {{JSxRef("Array.prototype.forEach()")}}&nbsp;: elle exécute une fonction fournie une fois pour chaque élément produit par l'itérateur.

## Syntaxe

```js-nolint
forEach(callbackFn)
```

### Paramètres

- `callbackFn`
  - : Une fonction à exécuter pour chaque élément produit par l'itérateur. Sa valeur de retour est ignorée. La fonction est appelée avec les arguments suivants&nbsp;:
    - `element`
      - : L'élément courant en cours de traitement.
    - `index`
      - : L'indice de l'élément courant en cours de traitement.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Description

`forEach()` itère sur l'itérateur et invoque la fonction `callbackFn` une fois pour chaque élément. Contrairement à la plupart des autres méthodes d'aide aux itérateurs, elle ne fonctionne pas avec les itérateurs infinis, car elle n'est pas paresseuse.

## Exemples

### Utiliser la méthode `forEach()`

```js
new Set([1, 2, 3]).values().forEach((v) => console.log(v));

// Affiche :
// 1
// 2
// 3
```

Ceci est équivalent à&nbsp;:

```js
for (const v of new Set([1, 2, 3]).values()) {
  console.log(v);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Iterator.prototype.forEach` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#iterator-helpers)
- [Prothèse d'émulation es-shims de `Iterator.prototype.forEach` <sup>(angl.)</sup>](https://www.npmjs.com/package/es-iterator-helpers)
- L'objet {{JSxRef("Iterator")}}
- La méthode {{JSxRef("Iterator.prototype.find()")}}
- La méthode {{JSxRef("Iterator.prototype.map()")}}
- La méthode {{JSxRef("Iterator.prototype.filter()")}}
- La méthode {{JSxRef("Iterator.prototype.every()")}}
- La méthode {{JSxRef("Iterator.prototype.some()")}}
- La méthode {{JSxRef("Array.prototype.forEach()")}}
