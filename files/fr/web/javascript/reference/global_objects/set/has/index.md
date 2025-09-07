---
title: Set.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/Set/has
---

{{JSRef}}

La méthode **`has()`** renvoie un booléen qui indique s'il existe un élément de l'ensemble `Set` avec une certaine valeur.

{{InteractiveExample("JavaScript Demo: Set.prototype.has()")}}

```js interactive-example
const set1 = new Set([1, 2, 3, 4, 5]);

console.log(set1.has(1));
// Expected output: true

console.log(set1.has(5));
// Expected output: true

console.log(set1.has(6));
// Expected output: false
```

## Syntaxe

```js
monSet.has(valeur);
```

### Paramètres

- `valeur`
  - : Ce paramètre est obligatoire. C'est la valeur dont on souhaite savoir si elle est présente ou non dans l'objet `Set`.

### Valeur de retour

Un booléen : `true` s'il existe un élément avec la valeur donnée au sein du `Set`, `false` sinon.

> [!NOTE]
> L'existence d'un élément avec la valeur testée est vérifiée avec [l'algorithme d'égalité des valeurs nulles (`sameValueZero`)](/fr/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#égalité_de_valeurs_nulles).

## Exemples

```js
var monSet = new Set();
monSet.add("toto");

monSet.has("toto"); // renvoie true
monSet.has("truc"); // renvoie false

var set1 = new Set();
var obj1 = { cle1: 1 };
set1.add(obj1);

set1.has(obj1); // renvoie true
set1.has({ cle1: 1 }); // renvoie false car ce sont deux objets distincts
set1.add({ cle1: 1 }); // set1 contient désormais 2 éléments
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.add()")}}
- {{jsxref("Set.prototype.delete()")}}
