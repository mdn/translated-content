---
title: "Iterator : méthode [Symbol.iterator]()"
short-title: "[Symbol.iterator]()"
slug: Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.iterator
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`[Symbol.iterator]()`** des instances de {{JSxRef("Iterator")}} implémente le [protocole itérable](/fr/docs/Web/JavaScript/Reference/Iteration_protocols) et permet aux itérateurs intégrés d'être consommés par la plupart des syntaxes s'attendant à des objets itérables, comme la [syntaxe de décomposition](/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax) et les boucles {{JSxRef("Statements/for...of", "for...of")}}. Elle retourne la valeur de {{JSxRef("Operators/this", "this")}}, qui est l'objet itérateur lui-même.

## Syntaxe

```js-nolint
iterator[Symbol.iterator]()
```

### Paramètres

Aucun.

### Valeur de retour

La valeur de {{JSxRef("Operators/this", "this")}}, qui est l'objet itérateur lui-même.

## Exemples

### Itérer avec une boucle `for...of`

Notez que vous avez rarement besoin d'appeler cette méthode directement. L'existence de la méthode `[Symbol.iterator]()` rend les itérateurs intégrés [itérables](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#le_protocole_«_itérable_»), et les syntaxes d'itération comme la boucle `for...of` appellent automatiquement cette méthode pour obtenir l'itérateur à parcourir.

```js
const tableauIterateur = [1, 2, 3].values();
for (const valeur of tableauIterateur) {
  console.log(valeur);
}
// Affiche : 1, 2, 3
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Iterator")}}
- La propriété statique {{JSxRef("Symbol.iterator")}}
- [Protocole d'itération](/fr/docs/Web/JavaScript/Reference/Iteration_protocols)
