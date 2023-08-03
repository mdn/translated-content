---
title: Number
slug: Web/JavaScript/Reference/Global_Objects/Number
---

{{JSRef}}

L'objet **`Number`** est une enveloppe objet (_wrapper_) autour du [type primitif numérique](/fr/docs/Web/JavaScript/Structures_de_données#Le_type_nombre). Autrement dit, il est utilisé pour manipuler les nombres comme des objets. Pour créer un objet `Number`, on utilise le constructeur `Number()`.

Le type JavaScript `Number` utilise [une représentation binaire à précision double sur 64 bits telle que décrite par le standard IEEE 754](https://fr.wikipedia.org/wiki/IEEE_754). Les implémentations plus récentes offrent un nouveau type : {{jsxref("BigInt")}} qui permet de représenter des entiers avec une précision arbitraire.

## Syntaxe

```js
new Number(valeur);
var a = new Number("123"); // a === 123 donnera false
var b = Number("123"); // b === 123 donnera true
a instanceof Number; // donnera true
b instanceof Number; // donnera false
```

### Paramètres

- `valeur`
  - : La valeur numérique pour l'objet qu'on souhaite créer.

## Description

L'objet `Number` est principalement utilisé dans les cas de figure suivants :

- Si l'argument ne peut pas être converti en un nombre, il renverra {{jsxref("NaN")}}.
- Dans un contexte de fonction simple (quand il n'est pas utilisé comme un constructeur avec l'opérateur {{jsxref("Opérateurs/L_opérateur_new", "new")}}), `Number` peut être utilisé afin d'effectuer des conversions.

## Propriétés

- {{jsxref("Number.EPSILON")}}
  - : Le plus petit intervalle entre deux valeurs qu'il est possible de représenter en JavaScript.
- {{jsxref("Number.MAX_SAFE_INTEGER")}}
  - : La valeur entière maximale qu'on peut représenter en JavaScript (`2^53 - 1`).
- {{jsxref("Number.MAX_VALUE")}}
  - : La valeur numérique maximale qu'on peut représenter en JavaScript.
- {{jsxref("Number.MIN_SAFE_INTEGER")}}
  - : La valeur entière minimale qu'on peut représenter en JavaScript (`-(2^53 - 1)`).
- {{jsxref("Number.MIN_VALUE")}}
  - : La plus petite valeur qu'on peut représenter en JavaScript, c'est-à-dire le plus petit nombre positif (le nombre le plus près de zéro qui n'est pas égal à zéro et qu'on peut représenter en JavaScript).
- {{jsxref("Number.NaN")}}
  - : Une valeur spéciale pour représenter les valeurs non-numériques (**NaN** correspond à «&nbsp;<i lang="en">**N**ot **a** **N**umber</i>&nbsp;» en anglais, qui signifie «&nbsp;n'est pas un nombre&nbsp;»).
- {{jsxref("Number.NEGATIVE_INFINITY")}}
  - : Une valeur spéciale pour représenter l'infini négatif.
- {{jsxref("Number.POSITIVE_INFINITY")}}
  - : Une valeur spéciale pour représenter l'infini (positif).
- {{jsxref("Number.prototype")}}
  - : Cet objet permet d'ajouter des propriétés aux instances de `Number`.

## Méthodes

- {{jsxref("Number.isNaN()")}}
  - : Cette méthode permet de déterminer si la valeur passée en argument vaut `NaN`.
- {{jsxref("Number.isFinite()")}}
  - : Cette méthode permet de déterminer si la valeur numérique passée en argument est un nombre fini.
- {{jsxref("Number.isInteger()")}}
  - : Cette méthode permet de déterminer si la valeur passée en argument est un entier.
- {{jsxref("Number.isSafeInteger()")}}
  - : Cette méthode permet de déterminer si la valeur passée en argument peut correctement être représentée comme un entier en JavaScript (savoir si elle est comprise entre `-(2^53 - 1)` et `2^53 - 1`).
- {{jsxref("Number.toInteger()")}} {{deprecated_inline}}
  - : Cette méthode est utilisée afin d'évaluer et de convertir la valeur passée en argument en entier (ou en l'{{jsxref("Infinity", "infini","",1)}}). Cette méthode a été supprimée.
- {{jsxref("Number.parseFloat()", "Number.parseFloat(<var>string</var>)")}}
  - : Cette méthode correspond à la méthode {{jsxref("parseFloat", "parseFloat()")}} de l'objet global.
- {{jsxref("Number.parseInt()", "Number.parseInt(<var>string</var>, [<var>radix</var>])")}}
  - : Cette méthode correspond à la méthode {{jsxref("parseInt", "parseInt()")}} de l'objet global.

## Les instances de `Number`

Toutes les instances de `Number` héritent de {{jsxref("Number.prototype")}}. Il est possible de modifier le prototype du constructeur `Number` pour affecter toutes les instances de `Number`.

### Méthodes

- {{jsxref("Number.prototype.toExponential()" ,"Number.prototype.toExponential(<var>fractionDigits</var>)")}}
  - : Retourne une chaîne représentant le nombre en notation exponentielle.
- {{jsxref("Number.prototype.toFixed()", "Number.prototype.toFixed(<var>digits</var>)")}}
  - : Retourne une chaîne représentant le nombre avec la notation virgule fixe.
- {{jsxref("Number.prototype.toLocaleString()", "Number.prototype.toLocaleString([<var>locales</var> [, <var>options</var>]])")}}
  - : Retourne une chaîne avec une représentation sensible à la langue de ce nombre. Surcharge la méthode {{jsxref("Object.prototype.toLocaleString()")}}.
- {{jsxref("Number.prototype.toPrecision()", "Number.prototype.toPrecision(<var>precision</var>)")}}
  - : Retourne une chaîne représentant le nombre avec une précision donnée en notation virgule fixe ou exponentielle.
- {{jsxref("Number.prototype.toString()", "Number.prototype.toString([<var>radix</var>])")}}
  - : Retourne une chaîne représentant le nombre dans une base numérique (radix) donnée. Surcharge la méthode {{jsxref("Object.prototype.toString()")}}.
- {{jsxref("Number.prototype.valueOf()")}}
  - : Retourne la valeur primitive de l'objet spécifié. Surcharge la méthode {{jsxref("Object.prototype.valueOf()")}}.

## Exemples

### Utiliser l'objet `Number` pour affecter des valeurs numériques à des variables

Dans l'exemple suivant, on utilise les propriétés de l'objet `Number` pour affecter des valeurs à des variables numériques :

```js
var plusGrandNombre = Number.MAX_VALUE;
var plusPetitNombre = Number.MIN_VALUE;
var infini = Number.POSITIVE_INFINITY;
var infiniNégatif = Number.NEGATIVE_INFINITY;
var nonNumérique = Number.NaN;
```

### Intervalle entier pour `Number`

Dans l'exemple suivant, on illustre les valeurs numériques maximales et minimales (exclues) qu'on peut représenter avec un nombre en JavaScript (pour plus de détails, [voir le chapitre 6.1.6 du standard ECMAScript](https://tc39.github.io/ecma262/#sec-ecmascript-language-types-number-type)) :

```js
var biggestInt = 9007199254740992; //Number.MAX_SAFE_INTEGER+1 (2^53-1)
var smallestInt = -9007199254740992; //Number.MIN_SAFE_INTEGER-1 -(2^53-1)
```

Lorsqu'on analyse et convertit des données JSON, les valeurs en dehors de cet intervalle peuvent entraîner des erreurs ou des corruptions de valeurs lors de leurs conversions. Selon les objets qu'on souhaite représenter, on peut utiliser {{jsxref("String")}} dans certains cas pour représenter certaines valeurs.

### Utiliser `Number` pour convertir un objet `Date`

Dans l'exemple suivant, on convertit un objet {{jsxref("Date")}} en une valeur numérique grâce à la fonction `Number` :

```js
var d = new Date("December 17, 1995 03:24:00");
console.log(Number(d));
```

Ceci affichera "819167040000".

### Convertir une chaîne représentant une valeur numérique en un nombre

```js
Number("123"); // 123
Number("12.3"); // 12.3
Number("12.00"); // 12
Number("123e-1"); // 12.3
Number(""); // 0
Number("0x11"); // 17
Number("0b11"); // 3
Number("0o11"); // 9
Number("toto"); // NaN
Number("100a"); // NaN
Number("-Infinity"); // -Infinity
```

> **Note :** On pourra également convertir `null` en `0` grâce à `Number` : `Number(null)` donnera `0`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("NaN")}}
- L'objet global {{jsxref("Math")}}
- [Les types de données en JavaScript](/fr/docs/Web/JavaScript/Structures_de_données#Le_type_nombre)
- [Un billet sur le type `Number` (en anglais)](https://medium.com/@maximus.koretskyi/javascripts-number-type-8d59199db1b6#.9whwe88tz)
- Représenter de grands entiers avec une précision arbitraire : {{jsxref("BigInt")}}
