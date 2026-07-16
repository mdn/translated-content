---
title: "Iterator : méthode reduce()"
short-title: reduce()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/reduce
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`reduce()`** des instances de {{JSxRef("Iterator")}} est similaire à {{JSxRef("Array.prototype.reduce")}}&nbsp;: elle exécute une fonction de rappel «&nbsp;réductrice&nbsp;» fournie par l'utilisateur·ice sur chaque élément produit par l'itérateur, en passant la valeur de retour du calcul sur l'élément précédent. Le résultat final de l'exécution de la fonction réductrice sur tous les éléments est une seule valeur.

## Syntaxe

```js-nolint
reduce(callbackFn)
reduce(callbackFn, initialValue)
```

### Paramètres

- `callbackFn`
  - : Une fonction à exécuter pour chaque élément produit par l'itérateur. Sa valeur de retour devient la valeur du paramètre `accumulator` lors de l'appel suivant de `callbackFn`. Lors du dernier appel, la valeur de retour devient la valeur de retour de `reduce()`. La fonction est appelée avec les arguments suivants&nbsp;:
    - `accumulator`
      - : La valeur résultant de l'appel précédent à `callbackFn`. Lors du premier appel, sa valeur est `initialValue` si ce dernier est défini&nbsp;; sinon, sa valeur est le premier élément de l'itérateur.
    - `currentValue`
      - : La valeur de l'élément actuel. Lors du premier appel, sa valeur est le premier élément de l'itérateur si `initialValue` est défini&nbsp;; sinon, sa valeur est le deuxième élément.
    - `currentIndex`
      - : La position de l'index de `currentValue`. Lors du premier appel, sa valeur est `0` si `initialValue` est défini, sinon `1`.
- `initialValue` {{Optional_Inline}}
  - : Une valeur à laquelle `accumulator` est initialisé lors du premier appel de la fonction de rappel. Si `initialValue` est défini, `callbackFn` commence à s'exécuter avec le premier élément comme `currentValue`. Si `initialValue` n'est pas spécifié, `accumulator` est initialisé au premier élément, et `callbackFn` commence à s'exécuter avec le deuxième élément comme `currentValue`. Dans ce cas, si l'itérateur est vide (de sorte qu'il n'y a pas de première valeur à retourner comme `accumulator`), une erreur est levée.

### Valeur de retour

La valeur résultant de l'exécution complète de la fonction de rappel «&nbsp;réductrice&nbsp;» sur l'ensemble de l'itérateur.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si l'itérateur ne contient aucun élément et que `initialValue` n'est pas fourni.

## Description

Voir {{JSxRef("Array.prototype.reduce()")}} pour plus de détails sur le fonctionnement de `reduce()`. Contrairement à la plupart des autres méthodes d'aide à l'itérateur, elle ne fonctionne pas bien avec les itérateurs infinis, car elle n'est pas paresseuse.

## Exemples

### Utiliser la méthode `reduce()`

L'exemple suivant crée un itérateur qui produit les termes de la suite de Fibonacci, puis additionne les dix premiers termes&nbsp;:

```js
function* fibonacci() {
  let actuel = 1;
  let suivant = 1;
  while (true) {
    yield actuel;
    [actuel, suivant] = [suivant, actuel + suivant];
  }
}

console.log(
  fibonacci()
    .take(10)
    .reduce((a, b) => a + b),
); // 143
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Iterator.prototype.reduce` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#iterator-helpers)
- [Prothèse d'émulation es-shims de `Iterator.prototype.reduce` <sup>(angl.)</sup>](https://www.npmjs.com/package/es-iterator-helpers)
- L'objet {{JSxRef("Iterator")}}
- La méthode {{JSxRef("Iterator.prototype.map()")}}
- La méthode {{JSxRef("Iterator.prototype.flatMap()")}}
- La méthode {{JSxRef("Array.prototype.reduce()")}}
