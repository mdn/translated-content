---
title: "Atomics : méthode statique isLockFree()"
short-title: isLockFree()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/isLockFree
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`isLockFree()`** de l'objet {{JSxRef("Atomics")}} est utilisée afin de déterminer si on doit utiliser des verrous (<i lang="en">locks</i> en anglais) ou des opérations atomiques. Elle sert de primitive d'optimisation, afin que des algorithmes hautement performants puissent déterminer s'ils doivent utiliser des verrous ou des opérations atomiques dans les sections critiques. Si une primitive atomique n'est pas sans verrou, il est souvent plus efficace qu'un algorithme mette en œuvre son propre mécanisme de verrouillage.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Atomics.isLockFree()")}}

```js interactive-example
console.log(Atomics.isLockFree(3));
// 3 n'est pas l'une des valeurs BYTES_PER_ELEMENT
// Résultat attendu : false

console.log(Atomics.isLockFree(4));
// 4 est l'une des valeurs BYTES_PER_ELEMENT
// Résultat attendu : true
```

## Syntaxe

```js-nolint
Atomics.isLockFree(size)
```

### Paramètres

- `size`
  - : La taille en octets qu'on souhaite vérifier.

### Valeur de retour

Une valeur `true` ou `false` indiquant si l'opération s'exécute sans verrou.

- Toujours `true` si `size` vaut 4, car toutes les plateformes connues prennent en charge les opérations atomiques sur 4 octets.
- Toujours `false` si la taille fournie ne figure pas parmi les valeurs de la propriété [`BYTES_PER_ELEMENT`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT) des types `TypedArray` entiers.

## Exemples

### Utilisation de `isLockFree()`

```js
Atomics.isLockFree(1); // true (dépend de la plateforme)
Atomics.isLockFree(2); // true (dépend de la plateforme)
Atomics.isLockFree(3); // false
Atomics.isLockFree(4); // true
Atomics.isLockFree(5); // false
Atomics.isLockFree(6); // false
Atomics.isLockFree(7); // false
Atomics.isLockFree(8); // true (dépend de la plateforme)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Atomics")}}
