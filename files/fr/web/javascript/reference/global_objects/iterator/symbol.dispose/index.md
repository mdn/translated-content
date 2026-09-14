---
title: "Iterator : méthode [Symbol.dispose]()"
short-title: "[Symbol.dispose]()"
slug: Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.dispose
l10n:
  sourceCommit: 99e4e41ce89ef69db3d08766296699f342c5a8ff
---

La méthode **`[Symbol.dispose]()`** des instances de {{JSxRef("Iterator")}} implémente le _protocole de disposition_ et permet de disposer de l'itérateur lorsqu'il est utilisé avec {{JSxRef("Statements/using", "using")}}. Elle appelle la méthode `return()` de `this`, si elle existe.

## Syntaxe

```js-nolint
iterator[Symbol.dispose]()
```

### Paramètres

Aucun.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

### Déclarer un itérateur avec `using`

La méthode `Symbol.dispose` est destinée à être appelée automatiquement dans une déclaration `using`. Cela est utile si vous avez un itérateur que vous parcourez manuellement en appelant sa méthode `next()`&nbsp;; si vous l'itérer avec {{JSxRef("Statements/for...of", "for...of")}} ou quelque chose de similaire, alors la gestion des erreurs et le nettoyage sont effectués automatiquement.

```js
function* genererNombres() {
  try {
    yield 1;
    yield 2;
    yield 3;
  } finally {
    console.log("Nettoyage");
  }
}

function faireQuelqueChose() {
  using numbers = genererNombres();
  const res1 = numbers.next();
  // Ne pas iterer le reste des nombres
  // Avant la fin de la fonction, l'iterateur asynchrone est dispose
  // Affiche "Nettoyage"
}

faireQuelqueChose();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Iterator.prototype[Symbol.dispose]` dans `core-js`](https://github.com/zloirock/core-js#explicit-resource-management)
- [Gestion des ressources en JavaScript](/fr/docs/Web/JavaScript/Guide/Resource_management)
- La propriété statique {{JSxRef("Symbol.dispose")}}
- La déclaration {{JSxRef("Statements/using", "using")}}
