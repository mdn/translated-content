---
title: "Iterator : méthode some()"
short-title: some()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/some
l10n:
  sourceCommit: dd88a6eb2176fa31f5b744d8964efecf3f1f425b
---

La méthode **`some()`** des instances de {{JSxRef("Iterator")}} est similaire à {{JSxRef("Array.prototype.some()")}}&nbsp;: elle retourne `true` si elle trouve un élément qui satisfait la fonction de test fournie. Sinon, si l'itérateur est épuisé sans trouver un tel élément, elle retourne `false`.

## Syntaxe

```js-nolint
some(callbackFn)
```

### Paramètres

- `callbackFn`
  - : Une fonction à exécuter pour chaque élément produit par l'itérateur. Elle doit retourner une valeur {{Glossary("truthy", "équivalente à vrai")}} pour indiquer que l'élément passe le test, et une valeur {{Glossary("falsy", "équivalente à faux")}} sinon. La fonction est appelée avec les arguments suivants&nbsp;:
    - `element`
      - : L'élément courant en cours de traitement.
    - `index`
      - : L'indice de l'élément courant en cours de traitement.

### Valeur de retour

`true` si la fonction de rappel retourne une valeur {{Glossary("truthy", "équivalente à vrai")}} pour au moins un élément. Sinon, `false`.

## Description

`some()` parcourt l'itérateur et invoque la fonction `callbackFn` une fois pour chaque élément. Elle retourne `true` immédiatement si la fonction de rappel retourne une valeur équivalente à vrai. Sinon, elle itère jusqu'à la fin de l'itérateur et retourne `false`. Si `some()` retourne `true`, l'itérateur sous-jacent est fermé en appelant sa méthode `return()`.

L'avantage principal des objets d'aide à l'itérateur par rapport aux méthodes de tableau est qu'ils sont paresseux, ce qui signifie qu'ils ne produisent la valeur suivante que lorsqu'elle est demandée. Cela évite les calculs inutiles et permet également de les utiliser avec des itérateurs infinis. Avec des itérateurs infinis, `some()` retourne `true` dès que la première valeur équivalente à vrai est trouvée. Si `callbackFn` retourne toujours une valeur équivalente à faux, la méthode ne se termine jamais.

## Exemples

### Utiliser la méthode `some()`

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
console.log(fibonacci().some(estPair)); // true

const estNegatif = (x) => x < 0;
console.log(fibonacci().take(10).some(estNegatif)); // false
console.log(fibonacci().some(estNegatif)); // Ne se termine jamais
```

L'appel à `some()` ferme toujours l'itérateur sous-jacent, même si la méthode retourne tôt. L'itérateur ne reste jamais dans un état intermédiaire.

```js
const seq = fibonacci();
console.log(seq.some(estPair)); // true
console.log(seq.next()); // { value: undefined, done: true }
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Iterator.prototype.some` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#iterator-helpers)
- [Prothèse d'émulation es-shims de `Iterator.prototype.some` <sup>(angl.)</sup>](https://www.npmjs.com/package/es-iterator-helpers)
- L'objet {{JSxRef("Iterator")}}
- La méthode {{JSxRef("Iterator.prototype.every()")}}
- La méthode {{JSxRef("Iterator.prototype.find()")}}
- La méthode {{JSxRef("Array.prototype.some()")}}
