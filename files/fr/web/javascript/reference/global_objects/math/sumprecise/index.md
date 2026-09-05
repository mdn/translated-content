---
title: "Math : méthode statique sumPrecise()"
short-title: sumPrecise()
slug: Web/JavaScript/Reference/Global_Objects/Math/sumPrecise
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`Math.sumPrecise()`** prend un itérable de nombres et retourne leur somme. Elle est plus précise que de les additionner dans une boucle, car elle évite la perte de précision des nombres à virgule flottante dans les résultats intermédiaires.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Math.sumPrecise()")}}

```js interactive-example
console.log(Math.sumPrecise([1, 2]));
// Résultat attendu : 3

console.log(Math.sumPrecise([1e20, 0.1, -1e20]));
// Résultat attendu : 0.1
```

## Syntaxe

```js-nolint
Math.sumPrecise(numbers)
```

### Paramètres

- `numbers`
  - : Un [itérable](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#le_protocole_«_itérable_») (tel qu'un tableau ({{JSxRef("Array")}})) de nombres.

### Valeur de retour

Un nombre qui est la somme des nombres dans l'itérable `numbers`. Si l'itérable est vide, la valeur de retour est `-0` (_et non_ `0`).

### Exceptions

- {{JSxRef("TypeError")}}
  - : Si `numbers` n'est pas un itérable, ou si l'un des nombres dans l'itérable n'est pas du type nombre.

## Description

Puisque `sumPrecise()` est une méthode statique de `Math`, vous devez toujours l'utiliser comme `Math.sumPrecise()`, plutôt que comme une méthode d'un objet `Math` que vous avez créé (`Math` n'est pas un constructeur).

La méthode s'appelle `Math.sumPrecise()`, car elle est plus précise que de sommer naïvement les nombres dans une boucle. Considérez l'exemple suivant&nbsp;:

```js
let somme = 0;
const nombres = [1e20, 0.1, -1e20];
for (const nombre of nombres) {
  somme += nombre;
}
console.log(somme); // 0
```

La sortie est 0. Cela est dû au fait que `1e20 + 0.1` ne peut pas être représenté précisément dans les flottants 64 bits, donc le résultat intermédiaire est arrondi à `1e20`. Ensuite, la somme de `1e20` et `-1e20` est `0`, donc le résultat final est `0`.

`Math.sumPrecise()` évite ce problème en utilisant un algorithme de sommation spécialisé. Cela fonctionne comme si les nombres à virgule flottante sont additionnés en utilisant leurs valeurs mathématiques précises, et le résultat final est ensuite converti en le flottant 64 bits représentable le plus proche. Cela ne peut toujours pas éviter le problème de précision de `0.1 + 0.2`&nbsp;:

```js
console.log(Math.sumPrecise([0.1, 0.2])); // 0.30000000000000004
```

Parce que les littéraux à virgule flottante `0.1` et `0.2` représentent déjà des valeurs mathématiques supérieures à `0.1` et `0.2`, et que la représentation en flottant 64 bits la plus proche de leur somme est en réalité `0.30000000000000004`.

## Exemples

### Utiliser `Math.sumPrecise()`

```js
console.log(Math.sumPrecise([1, 2, 3])); // 6
console.log(Math.sumPrecise([1e20, 0.1, -1e20])); // 0.1
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Math.sumPrecise` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#mathsumprecise)
- [Prothèse d'émulation es-shims de `Math.sumPrecise` <sup>(angl.)</sup>](https://www.npmjs.com/package/math.sumprecise)
- La méthode {{JSxRef("Array.prototype.reduce()")}}
