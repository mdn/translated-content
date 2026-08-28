---
title: "Iterator : méthode chunks()"
short-title: chunks()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/chunks
l10n:
  sourceCommit: d43ba33e72afa135ce782e2c0ca19fe32a93bb13
---

{{SeeCompatTable}}

La méthode **`chunks()`** des instances de {{JSxRef("Iterator")}} retourne un nouvel [objet d'aide à l'itérateur](/fr/docs/Web/JavaScript/Reference/Global_Objects/Iterator#objets_daide_à_litérateur) qui divise les éléments de l'itérateur original en morceaux consécutifs sous forme de tableau. Chaque fois que l'aide à l'itérateur est itérée, elle obtient le nombre défini d'éléments de l'itérateur sous-jacent et les retourne ensemble.

Pour obtenir des séquences qui se chevauchent (c'est-à-dire une fenêtre glissante), voir {{JSxRef("Iterator.prototype.windows()")}}.

## Syntaxe

```js-nolint
chunks(chunkSize)
```

### Paramètres

- `chunkSize`
  - : Le nombre d'éléments dans chaque morceau. Doit être un entier positif inférieur à 2<sup>32</sup> (la longueur maximale d'un tableau).

### Valeur de retour

Un nouvel [objet d'aide à l'itérateur](/fr/docs/Web/JavaScript/Reference/Global_Objects/Iterator#objets_daide_à_litérateur). Chaque fois que la méthode `next()` de l'aide à l'itérateur retourné est appelée, l'itérateur original avance de `chunkSize` éléments, et ces éléments sont retournés ensemble sous forme de tableau.

Si l'itérateur original a encore quelques éléments mais moins que `chunkSize`, ces éléments sont toujours retournés sous forme de tableau (donc la longueur est inférieure à `chunkSize`), et l'aide à l'itérateur est immédiatement terminée la prochaine fois que `next()` est appelée.

Si l'itérateur original n'a plus d'éléments, l'aide à l'itérateur est immédiatement terminée sans retourner de tableau vide.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si `chunkSize` n'est pas un entier.
- {{JSxRef("RangeError")}}
  - : Levée si `chunkSize` est inférieur à 1 ou supérieur à 2<sup>32</sup>－1.

## Examples

### Imprimer les éléments dans une grille

L'exemple suivant crée un itérateur qui produit les termes de la suite de Fibonacci. Ensuite, ils sont imprimés dans une disposition en grille en récupérant 5 éléments à la fois.

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const lignes = fibonacci().chunks(5);

for (const ligne of lignes.take(5)) {
  console.log(ligne.join("\t"));
}
```

Sortie&nbsp;:

```plain
1       1       2       3       5
8       13      21      34      55
89      144     233     377     610
987     1597    2584    4181    6765
10946   17711   28657   46368   75025
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `Iterator.prototype.chunks` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#iterator-chunking)
- [La prothèse d'émulation es-shims de `Iterator.prototype.chunks` <sup>(angl.)</sup>](https://www.npmjs.com/package/es-iterator-helpers)
- L'objet {{JSxRef("Iterator")}}
- La méthode {{JSxRef("Iterator.prototype.windows()")}}
