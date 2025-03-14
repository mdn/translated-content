---
title: Number
slug: Web/JavaScript/Reference/Global_Objects/Number
l10n:
  sourceCommit: b2a5f62d66b4e3d71704017d0fab7ad710e68057
---

{{JSRef}}

Les valeurs **`Number`** représentent les nombres décimaux comme `37` ou `-9.25`.

Le constructeur `Number()` contient des constantes et des méthodes pour manipuler les nombres. Les valeurs des autres types peuvent être converties en nombre à l'aide de la fonction `Number()`.

## Description

Les nombres sont généralement exprimés sous leur forme littérale comme `255` ou `3.14159`. La [grammaire lexicale](/fr/docs/Web/JavaScript/Reference/Lexical_grammar#littéraux_numériques) contient une référence plus détaillée à ce sujet.

```js
255; // deux cent cinquante-cinq
255.0; // le même nombre
255 === 255.0; // true
255 === 0xff; // true (notation hexadécimale)
255 === 0b11111111; // true (notation binaire)
255 === 0.255e3; // true (notation scientifique)
```

En JavaScript, un littéral numérique comme `37` est bien une valeur décimale et pas particulièrement entière. Il n'existe pas de type entier distinct pour un usage courant (le type [`BigInt`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt) existe mais sert à représenter les très grandes valeurs entières et pas les nombres courants comme `37`).

Quand on utilise `Number(valeur)` comme fonction, elle permet de convertir une chaîne de caractères ou une valeur d'un autre type en valeur de type `Number`. Si la valeur ne peut pas être convertie, elle renvoie [`NaN`](/fr/docs/Web/JavaScript/Reference/Global_Objects/NaN)

```js
Number("123"); // renvoie le nombre 123
Number("123") === 123; // true

Number("licorne"); // NaN
Number(undefined); // NaN
```

### Encodage des valeurs numériques

Le type JavaScript `Number` utilise [une représentation binaire à précision double sur 64 bits telle que décrite par le standard IEEE 754](https://fr.wikipedia.org/wiki/IEEE_754). Cela signifie que les valeurs décimales peuvent être représentées, avec certaines limites sur l'amplitude et la précision. En résumé, un nombre à précision double IEEE 754 utilise 64 bits pour représenter trois fragments&nbsp;:

- 1 bit pour _le signe_ (indiquant si le nombre est positif ou négatif)
- 11 bits pour _l'exposant_ (pouvant aller de -1022 à 1023)
- 52 bits pour _la mantisse_ (représentant un nombre entre 0 et 1)

La mantisse est la partie qui représente la valeur effective (les chiffres significatifs). L'exposant indique la puissance de deux par laquelle la mantisse devrait être multipliée. On peut écrire la formule suivante (proche de la notation scientifique)&nbsp;:

<math display="block"><semantics><mrow><mtext>Nombre</mtext><mo>=</mo><mo stretchy="false">(</mo><mrow><mo>−</mo><mn>1</mn></mrow><msup><mo stretchy="false">)</mo><mtext>signe</mtext></msup><mo>⋅</mo><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mtext>mantisse</mtext><mo stretchy="false">)</mo><mo>⋅</mo><msup><mn>2</mn><mtext>exposant</mtext></msup></mrow><annotation encoding="TeX">\text{Number} = ({-1})^{\text{signe}} \cdot (1 + \text{mantisse}) \cdot 2^{\text{exposant}}</annotation></semantics></math>

La mantisse est stockée sur 52 bits, interprétés comme les chiffres de la partie fractionnaire de `1.…` en binaire. La précision de la mantisse est donc 2<sup>-52</sup> (valeur qu'on peut obtenir via [`Number.EPSILON`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON)), soit entre 15 et 17 chiffres en écriture décimale. Les valeurs arithmétiques au-delà de cette précision seront [arrondies](https://fr.wikipedia.org/wiki/IEEE_754#Arrondir_les_nombres_flottants).

La valeur la plus grande qui puisse être représentée par un nombre en JavaScript est 2<sup>1024</sup> - 1 (ici l'exposant vaut 1023 et la mantisse vaut 0.1111… en base 2), valeur qu'on peut obtenir avec [`Number.MAX_VALUE`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE). Les valeurs supérieures à celle-ci sont remplacées par la constante spéciale [`Infinity`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Infinity).

Les entiers peuvent uniquement être représentés sans perte de précision dans l'intervalle -2<sup>53</sup> + 1 à 2<sup>53</sup> - 1 inclus (valeurs qu'on peut obtenir avec [`Number.MIN_SAFE_INTEGER`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER) et [`Number.MAX_SAFE_INTEGER`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)), car la mantisse ne peut contenir que 53 bits (en comptant le 1).

De plus amples précisions sont disponibles dans [le standard ECMAScript](https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html#sec-ecmascript-language-types-number-type).

### Conversion numérique

De nombreuses opérations natives qui s'attendent à manipuler des nombres appliquent d'abord une conversion à leurs arguments pour les transformer en nombre (ce qui explique pourquoi les objets `Number` se comportent généralement comme des valeurs numériques primitives). [Cette opération de conversion](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tonumber) peut être résumée ainsi&nbsp;:

- Les nombres sont renvoyés tels quels.
- [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) est transformé en [`NaN`](/fr/docs/Web/JavaScript/Reference/Global_Objects/NaN).
- [`null`](/fr/docs/Web/JavaScript/Reference/Operators/null) est transformé en `0`.
- `true` est transformé en `1`, et `false` est transformé en `0`.
- Les chaînes de caractères sont converties en les analysant comme si elles contenaient [un littéral numérique](/fr/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals). Toute erreur d'analyse produira `NaN`. Il y a quelques différences mineures par rapport à littéral numérique&nbsp;:
  - Les blancs et fins de lignes au début ou à la fin sont ignorés.
  - Un chiffre `0` en début de chaîne n'indique pas un littéral en base octale (et n'est pas rejeté en mode strict).
  - `+` et `-` sont autorisés au début de la chaîne pour indiquer le signe. Dans du code littéral, ils semblent faire partie du littéral, mais sont en réalité des opérateurs unaires distincts. Toutefois, le signe ne peut apparaître qu'une seule fois et ne pas être suivi par des blancs.
  - `Infinity` et `-Infinity` sont reconnus comme des valeurs littérales. Dans du code réel, il s'agit de variables globales.
  - Les chaînes de caractères vides ou qui ne contiennent que des blancs sont converties en `0`.
  - [Les séparateurs numériques](/fr/docs/Web/JavaScript/Reference/Lexical_grammar#séparateurs_numériques) (le tiret bas dans `1_050.95`) ne sont pas autorisés.
- [Les grands entiers (<i lang="en">BigInts</i>)](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt) déclenchent une exception [`TypeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypeError) pour empêcher une perte de précision involontaire lors de la conversion implicite.
- [Les symboles](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol) déclenchent une exception [`TypeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
- Les objets sont d'abord [convertis en une valeur primitive](/fr/docs/Web/JavaScript/Data_structures#primitive_coercion) à l'aide de leurs méthodes [`[@@toPrimitive]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (où `"number"` est fourni comme indication), `valueOf()`, et `toString()`, selon cet ordre. La valeur primitive obtenue est alors convertie en nombre.

Il existe deux méthodes qui permettent de déclencher cette conversion (ou presque) en JavaScript&nbsp;:

- [Le plus unaire](/fr/docs/Web/JavaScript/Reference/Operators/Unary_plus)&nbsp;: `+x` applique l'algorithme explicité avant pour convertir `x`.
- [La fonction `Number()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)&nbsp;: `Number(x)` utilise le même algorithme pour convertir `x`, sauf que [les grands entiers (<i lang="en">BigInts</i>)](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt) ne déclenchent pas d'exception [`TypeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypeError) mais renvoient la valeur numérique correspondante, quitte à ce qu'il y ait une perte de précision.

[`Number.parseFloat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat) et [`Number.parseInt()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt) sont semblables à `Number()` mais servent uniquement à convertir des chaînes de caractères, en suivant des règles légèrement différentes. Par exemple, `parseInt()` ne reconnaît pas le point décimal et `parseFloat()` ne reconnaît pas le préfixe `0x`.

#### Conversion entière

Certaines opérations s'attendent à manipuler des entiers, notamment celles qui fonctionnent avec des indices de tableaux ou de chaînes de caractères, des composantes temporelles et des bases numériques. Après la conversion numérique décrite ci-avant, le résultat est [tronqué](/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc) en un nombre entier (la partie fractionnaire est ignorée). Si le nombre est `±Infinity`, il est renvoyé tel quel. Si le nombre est `NaN` ou `-0`, c'est `0` qui est renvoyé. Le résultat est donc toujours un entier (qui n'est pas `-0`) ou `±Infinity`.

On notera que, pour la conversion entière, `undefined` et `null` deviennent `0`, car `undefined` est d'abord converti en `NaN` lors de la conversion numérique, puis en `0` lors de la conversion entière qui suit.

#### Conversion en nombre à longueur fixe

Certaines fonctions JavaScript «&nbsp;bas-niveau&nbsp;» permettent de manipuler l'encodage binaire des nombres entiers, notamment [les opérateurs binaires](/fr/docs/Web/JavaScript/Reference/Operators#opérateurs_de_décalage_binaires) et les objets [`TypedArray`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray). Les opérateurs binaires convertissent toujours leurs opérandes en entiers sur 32 bits. Dans ces cas, après la conversion numérique décrite avant, le nombre est normalisé à la largeur souhaitée en [tronquant](/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc) la partie fractionnaire, puis en considérant les bits les plus faibles de la représentation de l'entier en complément à deux.

```js
new Int32Array([1.1, 1.9, -1.1, -1.9]); // Int32Array(4) [ 1, 1, -1, -1 ]

new Int8Array([257, -257]); // Int8Array(2) [ 1, -1 ]
// 257 = 0001 0000 0001
//     =      0000 0001 (mod 2^8)
//     = 1
// -257 = 1110 1111 1111
//      =      1111 1111 (mod 2^8)
//      = -1 (comme entier signé)

new Uint8Array([257, -257]); // Uint8Array(2) [ 1, 255 ]
// -257 = 1110 1111 1111
//      =      1111 1111 (mod 2^8)
//      = 255 (comme entier non-signé)
```

## Constructeur

- [`Number()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)
  - : Crée une nouvelle valeur `Number`.

Lorsque `Number` est appelé comme constructeur (avec le mot-clé `new`), il crée un objet `Number` qui **n'est pas** une valeur primitive. Par exemple, on aura `typeof new Number(42) === "object"`, et `new Number(42) !== 42` (même si `new Number(42) == 42`).

> [!WARNING]
> Il est plutôt rare de devoir utiliser `Number` comme constructeur.

## Propriétés statiques

- [`Number.EPSILON`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON)
  - : Le plus petit intervalle entre deux valeurs qu'il est possible de représenter en JavaScript.
- [`Number.MAX_SAFE_INTEGER`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)
  - : La valeur entière maximale qu'on peut représenter en JavaScript (2<sup>53</sup> - 1).
- [`Number.MAX_VALUE`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE)
  - : La valeur numérique maximale qu'on peut représenter en JavaScript.
- [`Number.MIN_SAFE_INTEGER`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER)
  - : La valeur entière minimale qu'on peut représenter en JavaScript (-(2<sup>53</sup> - 1)).
- [`Number.MIN_VALUE`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE)
  - : La plus petite valeur positive qu'on peut représenter en JavaScript, c'est-à-dire le nombre le plus près de zéro qui n'est pas égal à zéro et qu'on peut représenter en JavaScript.
- [`Number.NaN`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/NaN)
  - : Une valeur spéciale pour représenter les valeurs non-numériques (**NaN** correspond à «&nbsp;<i lang="en">**N**ot **a** **N**umber</i>&nbsp;» en anglais, qui signifie «&nbsp;n'est pas un nombre&nbsp;»).
- [`Number.NEGATIVE_INFINITY`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY)
  - : Une valeur spéciale pour représenter l'infini négatif. Cette valeur est renvoyée quand on dépasse les valeurs représentables.
- [`Number.POSITIVE_INFINITY`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY)
  - : Une valeur spéciale pour représenter l'infini (positif). Cette valeur est renvoyée quand on dépasse les valeurs représentables.

## Méthodes statiques

- [`Number.isFinite()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite)
  - : Cette méthode permet de déterminer si la valeur numérique passée en argument est un nombre fini.
- [`Number.isInteger()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)
  - : Cette méthode permet de déterminer si la valeur passée en argument est un entier.
- [`Number.isNaN()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN)
  - : Cette méthode permet de déterminer si la valeur passée en argument vaut `NaN`.
- [`Number.isSafeInteger()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger)
  - : Cette méthode permet de déterminer si la valeur passée en argument peut correctement être représentée comme un entier en JavaScript (savoir si elle est comprise entre -(2<sup>53</sup> - 1) et 2<sup>53</sup> - 1).
- [`Number.parseFloat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat)
  - : Cette méthode correspond à la méthode [`parseFloat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) de l'objet global.
- [`Number.parseInt()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt)
  - : Cette méthode correspond à la méthode [`parseInt()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/parseInt) de l'objet global.

## Propriétés des instances

Ces propriétés sont définies sur `Number.prototype` et partagées par l'ensemble des instances de `Number`.

- [`Number.prototype.constructor`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)
  - : La fonction utilisée comme constructeur pour créer l'instance objet. Pour les instances `Number`, la valeur initiale est le constructeur [`Number()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/Number).

### Méthodes des instances

- [`Number.prototype.toExponential()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential)
  - : Retourne une chaîne représentant le nombre en notation exponentielle.
- [`Number.prototype.toFixed()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)
  - : Retourne une chaîne représentant le nombre avec la notation en virgule fixe.
- [`Number.prototype.toLocaleString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString)
  - : Retourne une chaîne avec une représentation du nombre tenant compte de la locale. Surcharge la méthode [`Object.prototype.toLocaleString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString).
- [`Number.prototype.toPrecision()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision)
  - : Retourne une chaîne représentant le nombre avec une précision donnée en notation en virgule fixe ou exponentielle.
- [`Number.prototype.toString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)
  - : Retourne une chaîne représentant le nombre dans une base numérique donnée. Surcharge la méthode [`Object.prototype.toString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/toString).
- [`Number.prototype.valueOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/valueOf)
  - : Retourne la valeur primitive de l'objet spécifié. Surcharge la méthode [`Object.prototype.valueOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf).

## Exemples

### Utiliser l'objet `Number` pour affecter des valeurs numériques à des variables

Dans l'exemple suivant, on utilise les propriétés de l'objet `Number` pour affecter des valeurs à des variables numériques&nbsp;:

```js
const plusGrandNombre = Number.MAX_VALUE;
const plusPetitNombre = Number.MIN_VALUE;
const infini = Number.POSITIVE_INFINITY;
const infiniNégatif = Number.NEGATIVE_INFINITY;
const nonNumérique = Number.NaN;
```

### Intervalle entier pour `Number`

Dans l'exemple suivant, on illustre les valeurs numériques entières maximales et minimales qu'on peut représenter avec une valeur `Number`&nbsp;:

```js
const biggestInt = Number.MAX_SAFE_INTEGER; // (2**53 - 1) => 9007199254740991
const smallestInt = Number.MIN_SAFE_INTEGER; // -(2**53 - 1) => -9007199254740991
```

Lorsqu'on analyse et convertit des données JSON, les valeurs en dehors de cet intervalle peuvent entraîner des erreurs ou des corruptions de valeurs lors de leurs conversions.

Selon les objets qu'on souhaite représenter, on peut utiliser [`String`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) dans certains cas pour représenter certaines valeurs.

Pour les plus grands nombres, on pourra utiliser le type [`BigInt`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt).

### Utiliser `Number()` pour convertir un objet `Date`

Dans l'exemple suivant, on convertit un objet [`Date`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date) en une valeur numérique grâce à la fonction `Number()`&nbsp;:

```js
const d = new Date("1995-12-17T03:24:00");
console.log(Number(d));
```

Ceci affichera `819199440000`.

### Convertir une chaîne de caractères représentant une valeur numérique, ou `null` en un nombre

```js
Number("123"); // 123
Number("123") === 123; // true
Number("12.3"); // 12.3
Number("12.00"); // 12
Number("123e-1"); // 12.3
Number(""); // 0
Number(null); // 0
Number("0x11"); // 17
Number("0b11"); // 3
Number("0o11"); // 9
Number("toto"); // NaN
Number("100a"); // NaN
Number("-Infinity"); // -Infinity
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Une prothèse d'émulation (<i lang="en">polyfill</i>) du comportement moderne de `Number` (dont la prise en charge des littéraux binaires et octaux) dans la bibliothèque `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- [`NaN`](/fr/docs/Web/JavaScript/Reference/Global_Objects/NaN)
- [Les opérateurs arithmétiques](/fr/docs/Web/JavaScript/Reference/Operators#opérateurs_arithmétiques)
- [`Math`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Math)
- [`BigInt`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
