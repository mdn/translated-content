---
title: "Number : méthode toFixed()"
short-title: toFixed()
slug: Web/JavaScript/Reference/Global_Objects/Number/toFixed
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`toFixed()`** de {{JSxRef("Number")}} retourne une chaîne de caractères représentant ce nombre en utilisant la [notation à point fixe <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Fixed-point_arithmetic) avec le nombre de décimales défini.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Number.toFixed()")}}

```js interactive-example
function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}

console.log(financial(123.456));
// Résultat attendu : "123.46"

console.log(financial(0.004));
// Résultat attendu : "0.00"

console.log(financial("1.23e+5"));
// Résultat attendu : "123000.00"
```

## Syntaxe

```js-nolint
toFixed()
toFixed(digits)
```

### Paramètres

- `digits` {{Optional_Inline}}
  - : Le nombre de chiffres à afficher après le point décimal&nbsp;; doit être une valeur comprise entre `0` et `100`, inclus. Si cet argument est omis, il est traité comme `0`.

### Valeur de retour

Une chaîne de caractères représentant le nombre donné en utilisant la notation à point fixe. La notation scientifique est utilisée si la magnitude du nombre (en ignorant le signe) est supérieure ou égale à 10<sup>21</sup> (même valeur de retour que {{JSxRef("Number.prototype.toString()")}}).

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si `digits` n'est pas entre `0` et `100` (inclus).
- {{JSxRef("TypeError")}}
  - : Levée si la méthode est invoquée sur un object qui n'est pas {{JSxRef("Number")}}.

## Description

La méthode `toFixed()` retourne une représentation sous forme de chaîne de caractères d'un nombre sans utiliser la [notation exponentielle](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential) et avec exactement `digits` chiffres après le point décimal. Le nombre est arrondi si nécessaire, et la partie fractionnaire est complétée par des zéros si nécessaire pour atteindre la longueur définie.

Si la valeur absolue du nombre est supérieure ou égale à 10<sup>21</sup>, cette méthode utilise le même algorithme que {{JSxRef("Number.prototype.toString()")}} et retourne une chaîne de caractères en notation exponentielle. `toFixed()` retourne `"Infinity"`, `"NaN"`, ou `"-Infinity"` si la valeur du nombre n'est pas finie.

La sortie de `toFixed()` peut être plus précise que {{JSxRef("Number.prototype.toString()", "toString()")}} pour certaines valeurs, car `toString()` n'affiche que suffisamment de chiffres significatifs pour distinguer le nombre des valeurs numériques adjacentes. Par exemple&nbsp;:

```js
(1000000000000000128).toString(); // '1000000000000000100'
(1000000000000000128).toFixed(0); // '1000000000000000128'
```

Cependant, choisir une précision `digits` trop élevée peut donner des résultats inattendus, car les nombres fractionnaires décimaux ne peuvent pas être représentés avec précision en virgule flottante. Par exemple&nbsp;:

```js
(0.3).toFixed(50); // '0.29999999999999998889776975374843459576368331909180'
```

## Exemples

### Utiliser `toFixed()`

```js
const numObj = 12345.6789;

numObj.toFixed(); // '12346' ; arrondi, aucune partie fractionnaire
numObj.toFixed(1); // '12345.7' ; arrondi ici aussi
numObj.toFixed(6); // '12345.678900' ; des zéros sont ajoutés
(1.23e20).toFixed(2); // '123000000000000000000.00'
(1.23e-10).toFixed(2); // '0.00'
(2.34).toFixed(1); // '2.3'
(2.35).toFixed(1); // '2.4' ; arrondi supérieur
(2.55).toFixed(1); // '2.5'
// il arrondit vers le bas, car il ne peut pas être représenté exactement
// par un nombre à virgule et le nombre à virgule représentable le plus
// proche est inférieur
(2.449999999999999999).toFixed(1); // '2.5'
// il arrondit vers le haut, car il est à moins de Number.EPSILON de 2.45.
// Ce littéral encode en fait la même valeur numérique que 2.45

(6.02 * 10 ** 23).toFixed(50); // '6.019999999999999e+23' ; les grands nombres utilisent toujours la notation exponentielle
```

### Utiliser `toFixed()` avec des nombres négatifs

Comme l'accès aux membres a une [priorité](/fr/docs/Web/JavaScript/Reference/Operators/Operator_precedence) plus élevée que l'opérateur unaire moins, vous devez regrouper l'expression du nombre négatif pour obtenir une chaîne de caractères.

```js-nolint
-2.34.toFixed(1); // -2.3 ; un nombre
(-2.34).toFixed(1); // '-2.3'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Number.prototype.toExponential()")}}
- La méthode {{JSxRef("Number.prototype.toPrecision()")}}
- La méthode {{JSxRef("Number.prototype.toString()")}}
- La propriété statique {{JSxRef("Number.EPSILON")}}
