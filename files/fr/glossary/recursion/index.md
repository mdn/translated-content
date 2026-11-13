---
title: Récursion
slug: Glossary/Recursion
l10n:
  sourceCommit: edcc5310efdcf36ca408ab3df5d5d4ba2f21cd4a
---

Une fonction qui agit en s'appelant elle-même. Une récursion est utilisée pour résoudre des problèmes qui contiennent des sous-problèmes plus petits. Une fonction récursive peut prendre deux entrées&nbsp;: un cas de base (qui met fin à la récursion) ou un cas de propagation (qui poursuit la récursion).

## Exemples

### Fonction récursive qui s'appelle elle-même jusqu'à ce qu'une condition soit remplie

Le code Python suivant définit une fonction qui prend un nombre, l'affiche, puis s'appelle à nouveau avec la valeur du nombre moins 1. Elle continue tant que le nombre n'est pas égal à 0, auquel cas elle s'arrête.

```python
def recurse(x):
   if x > 0:
       print(x)
       recurse(x - 1)

recurse(10)
```

Le résultat sera le suivant&nbsp;:

```plain
10
9
8
7
6
5
4
3
2
1
```

### La récursion est limitée par la taille de la pile d'appels

Le code suivant définit une fonction qui retourne la taille maximale de la pile d'appels disponible dans l'environnement d'exécution JavaScript où le code est exécuté.

```js
const getMaxCallStackSize = (i) => {
  try {
    return getMaxCallStackSize(++i);
  } catch {
    return i;
  }
};

console.log(getMaxCallStackSize(0));
```

### Exemples d'utilisation courants

#### Factorielle

```js
const factorial = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};
console.log(factorial(10));
// 3628800
```

#### Suite de Fibonacci

```js
const fibonacci = (n) => (n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));
console.log(fibonacci(10));
// 55
```

#### Réduction

```js
const reduce = (fn, acc, [cur, ...rest]) =>
  cur === undefined ? acc : reduce(fn, fn(acc, cur), rest);
console.log(reduce((a, b) => a + b, 0, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
// 45
```

## Voir aussi

- [Algorithme récursif](https://fr.wikipedia.org/wiki/Algorithme_récursif) sur Wikipédia
- [Plus de détails sur la récursion en JavaScript](/fr/docs/Web/JavaScript/Guide/Functions#la_récursivité)
