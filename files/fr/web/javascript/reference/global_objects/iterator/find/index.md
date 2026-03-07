---
title: "Iterator : méthode find()"
short-title: find()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/find
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`find()`** des instances de {{JSxRef("Iterator")}} est similaire à {{JSxRef("Array.prototype.find()")}}&nbsp;: elle retourne le premier élément produit par l'itérateur qui satisfait la fonction de test fournie. Si aucune valeur ne satisfait la fonction de test, {{JSxRef("undefined")}} est retourné.

## Syntaxe

```js-nolint
find(callbackFn)
```

### Paramètres

- `callbackFn`
  - : Une fonction à exécuter pour chaque élément produit par l'itérateur. Elle doit retourner une valeur {{Glossary("truthy", "équivalente à vrai")}} pour indiquer qu'un élément correspondant a été trouvé, et une valeur {{Glossary("falsy", "équivalente à faux")}} sinon. La fonction est appelée avec les arguments suivants&nbsp;:
    - `element`
      - : L'élément courant en cours de traitement.
    - `index`
      - : L'indice de l'élément courant en cours de traitement.

### Valeur de retour

Le premier élément produit par l'itérateur qui satisfait la fonction de test fournie. Sinon, {{JSxRef("undefined")}} est retourné.

## Description

`find()` parcourt l'itérateur et invoque la fonction `callbackFn` une fois pour chaque élément. Elle retourne immédiatement l'élément si la fonction de rappel retourne une valeur équivalente à vrai. Sinon, elle parcourt jusqu'à la fin de l'itérateur et retourne `undefined`. Si `find()` retourne un élément, l'itérateur sous-jacent est fermé en appelant sa méthode `return()`.

L'avantage principal des aides d'itérateur par rapport aux méthodes de tableau est qu'elles sont paresseuses, c'est-à-dire qu'elles ne produisent la valeur suivante que lorsqu'elle est demandée. Cela évite des calculs inutiles et permet également de les utiliser avec des itérateurs infinis. Avec des itérateurs infinis, `find()` retourne le premier élément correspondant dès qu'il est trouvé. Si `callbackFn` retourne toujours une valeur équivalente à faux, la méthode ne retourne jamais.

## Exemples

### Utiliser la méthode `find()`

```js
function* fibonacci() {
  let actuel = 1;
  let suivant = 1;
  while (true) {
    yield actuel;
    [actuel, suivant] = [suivant, actuel + suivant];
  }
}

const estPair = (x) => x % 2 === 0;
console.log(fibonacci().find(estPair)); // 2

const estNegatif = (x) => x < 0;
console.log(fibonacci().take(10).find(estNegatif)); // undefined
console.log(fibonacci().find(estNegatif)); // Ne se termine jamais
```

Appeler `find()` ferme toujours l'itérateur sous-jacent, même si la méthode retourne prématurément. L'itérateur n'est jamais laissé dans un état intermédiaire.

```js
const seq = fibonacci();
console.log(seq.find(estPair)); // 2
console.log(seq.next()); // { value: undefined, done: true }
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Iterator.prototype.find` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#iterator-helpers)
- [Prothèse d'émulation es-shims de `Iterator.prototype.find` <sup>(angl.)</sup>](https://www.npmjs.com/package/es-iterator-helpers)
- L'objet {{JSxRef("Iterator")}}
- La méthode {{JSxRef("Iterator.prototype.every()")}}
- La méthode {{JSxRef("Iterator.prototype.some()")}}
- La méthode {{JSxRef("Array.prototype.find()")}}
