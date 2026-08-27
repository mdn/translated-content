---
title: "Math : méthode statique floor()"
short-title: floor()
slug: Web/JavaScript/Reference/Global_Objects/Math/floor
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`Math.floor()`** arrondit toujours à l'entier inférieur et retourne le plus grand entier inférieur ou égal à un nombre donné.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Math.floor()")}}

```js interactive-example
console.log(Math.floor(5.95));
// Sortie attendue : 5

console.log(Math.floor(5.05));
// Sortie attendue : 5

console.log(Math.floor(5));
// Sortie attendue : 5

console.log(Math.floor(-5.05));
// Sortie attendue : -6
```

## Syntaxe

```js-nolint
Math.floor(x)
```

### Paramètres

- `x`
  - : Un nombre.

### Valeur de retour

Le plus grand entier inférieur ou égal à `x`. C'est la même valeur que {{JSxRef("Math/ceil","-Math.ceil(-x)")}}.

## Description

Puisque `floor()` est une méthode statique de `Math`, vous l'utilisez toujours sous la forme `Math.floor()`, plutôt que comme une méthode d'un objet `Math` que vous avez créé (`Math` n'est pas un constructeur).

## Exemples

### Utiliser `Math.floor()`

```js
Math.floor(-Infinity); // -Infinity
Math.floor(-45.95); // -46
Math.floor(-45.05); // -46
Math.floor(-0); // -0
Math.floor(0); // 0
Math.floor(4); // 4
Math.floor(45.05); // 45
Math.floor(45.95); // 45
Math.floor(Infinity); // Infinity
```

### Ajuster la décimale

Dans cet exemple, nous implémentons une méthode appelée `ajusterDecimal()` qui est une extension des méthodes `Math.floor()`, {{JSxRef("Math.ceil()")}} et {{JSxRef("Math.round()")}}. Alors que les trois fonctions `Math` arrondissent toujours la valeur d'entrée au chiffre des unités, `ajusterDecimal` accepte un paramètre `exp` qui définit le nombre de chiffres à gauche de la virgule de décimale auquel le nombre doit être ajusté. Par exemple, `-1` signifie qu'il reste un chiffre après la virgule décimale (comme dans «&nbsp;× 10<sup>-1</sup>&nbsp;»). De plus, elle vous permet de choisir le mode d'ajustement — `round`, `floor` ou `ceil` — grâce au paramètre `type`.

Elle le fait en multipliant le nombre par une puissance de 10, puis en arrondissant le résultat à l'entier le plus proche, avant de le diviser par cette puissance de 10. Pour mieux préserver la précision, elle utilise la méthode {{JSxRef("Number.prototype.toString", "toString()")}}, qui représente les grands ou petits nombres en notation scientifique (comme `6.02e23`).

```js
/**
 * Ajuste un nombre au chiffre défini.
 *
 * @param {"round" | "floor" | "ceil"} type Le type d'ajustement.
 * @param {number} valeur Le nombre.
 * @param {number} exp L'exposant (le logarithme en base 10 de la base d'ajustement).
 * @returns {number} La valeur ajustée.
 */
function ajusterDecimal(type, valeur, exp) {
  type = String(type);
  if (!["round", "floor", "ceil"].includes(type)) {
    throw new TypeError(
      "Le type d'ajustement décimal doit être l'un de 'round', 'floor' ou 'ceil'.",
    );
  }
  exp = Number(exp);
  valeur = Number(valeur);
  if (exp % 1 !== 0 || Number.isNaN(valeur)) {
    return NaN;
  } else if (exp === 0) {
    return Math[type](valeur);
  }
  const [magnitude, exponent = 0] = valeur.toString().split("e");
  const valeurAjustee = Math[type](`${magnitude}e${exponent - exp}`);
  // Décalage en arrière
  const [nouvelleMagnitude, nouvelExposant = 0] = valeurAjustee
    .toString()
    .split("e");
  return Number(`${nouvelleMagnitude}e${Number(nouvelExposant) + exp}`);
}

// Arrondi décimal
const round10 = (value, exp) => ajusterDecimal("round", value, exp);
// Plancher décimal
const floor10 = (value, exp) => ajusterDecimal("floor", value, exp);
// Plafond décimal
const ceil10 = (value, exp) => ajusterDecimal("ceil", value, exp);

// Arrondi
round10(55.55, -1); // 55.6
round10(55.549, -1); // 55.5
round10(55, 1); // 60
round10(54.9, 1); // 50
round10(-55.55, -1); // -55.5
round10(-55.551, -1); // -55.6
round10(-55, 1); // -50
round10(-55.1, 1); // -60
// Plancher
floor10(55.59, -1); // 55.5
floor10(59, 1); // 50
floor10(-55.51, -1); // -55.6
floor10(-51, 1); // -60
// Plafond
ceil10(55.51, -1); // 55.6
ceil10(51, 1); // 60
ceil10(-55.59, -1); // -55.5
ceil10(-59, 1); // -50
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode statique {{JSxRef("Math.abs()")}}
- La méthode statique {{JSxRef("Math.ceil()")}}
- La méthode statique {{JSxRef("Math.round()")}}
- La méthode statique {{JSxRef("Math.sign()")}}
- La méthode statique {{JSxRef("Math.trunc()")}}
