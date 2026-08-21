---
title: Number
slug: Web/JavaScript/Reference/Global_Objects/Number
l10n:
  sourceCommit: 56b4064cda33205f7fb9dd9826665fbf75508cdf
---

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

En JavaScript, un littéral numérique comme `37` est bien une valeur décimale et pas particulièrement entière. Il n'existe pas de type entier distinct pour un usage courant (le type {{JSxRef("BigInt")}} existe, mais sert à représenter les très grandes valeurs entières et pas les nombres courants comme `37`).

Quand on utilise `Number(valeur)` comme fonction, elle permet de convertir une chaîne de caractères ou une valeur d'un autre type en valeur de type `Number`. Si la valeur ne peut pas être convertie, elle retourne {{JSxRef("NaN")}}.

```js
Number("123"); // retourne le nombre 123
Number("123") === 123; // true

Number("licorne"); // NaN
Number(undefined); // NaN
```

### Encodage des valeurs numériques

Le type JavaScript `Number` utilise [une représentation binaire à précision double sur 64 bits telle que décrite par le standard IEEE 754](https://fr.wikipedia.org/wiki/IEEE_754). Cela signifie que les valeurs décimales peuvent être représentées, avec certaines limites sur l'amplitude et la précision. En résumé, un nombre à précision double IEEE 754 utilise 64 bits pour représenter trois fragments&nbsp;:

- 1 bit pour _le signe_ (indiquant si le nombre est positif ou négatif)
- 11 bits pour _l'exposant_ (pouvant aller de -1022 à 1023)
- 52 bits pour _la mantisse_ (représentant un nombre entre 0 et 1)

La mantisse est la partie qui représente la valeur effective (les chiffres significatifs). L'exposant indique la puissance de deux par laquelle la mantisse doit être multipliée. On peut écrire la formule suivante (proche de la notation scientifique)&nbsp;:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mtext>Number</mtext><mo>=</mo><mo stretchy="false">(</mo><mrow><mo>−</mo><mn>1</mn></mrow><msup><mo stretchy="false">)</mo><mtext>sign</mtext></msup><mo>⋅</mo><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mtext>mantissa</mtext><mo stretchy="false">)</mo><mo>⋅</mo><msup><mn>2</mn><mtext>exponent</mtext></msup></mrow><annotation encoding="TeX">\text{Number} = ({-1})^{\text{sign}} \cdot (1 + \text{mantissa}) \cdot 2^{\text{exponent}}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

La mantisse est stockée sur 52 bits, interprétés comme les chiffres de la partie fractionnaire de `1.…` en binaire. La précision de la mantisse est donc 2<sup>-52</sup> (valeur qu'on peut obtenir avec {{JSxRef("Number.EPSILON")}}), soit entre 15 et 17 chiffres en écriture décimale. Les valeurs arithmétiques au-delà de cette précision sont [arrondies](https://fr.wikipedia.org/wiki/IEEE_754#Arrondir_les_nombres_flottants).

La valeur la plus grande qui puisse être représentée par un nombre en JavaScript est 2<sup>1024</sup> - 1 (ici l'exposant vaut 1023 et la mantisse vaut 0.1111… en base 2), valeur qu'on peut obtenir avec {{JSxRef("Number.MAX_VALUE")}}. Les valeurs supérieures à celle-ci sont remplacées par la constante spéciale {{JSxRef("Infinity")}}.

Les entiers peuvent uniquement être représentés sans perte de précision dans l'intervalle -2<sup>53</sup> + 1 à 2<sup>53</sup> - 1 inclus (valeurs qu'on peut obtenir avec {{JSxRef("Number.MIN_SAFE_INTEGER")}} et {{JSxRef("Number.MAX_SAFE_INTEGER")}}), car la mantisse ne peut contenir que 53 bits (en comptant le 1).

De plus amples précisions sont disponibles dans [le standard ECMAScript <sup>(angl.)</sup>](https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html#sec-ecmascript-language-types-number-type).

### Conversion numérique

De nombreuses opérations natives qui s'attendent à manipuler des nombres appliquent d'abord une conversion à leurs arguments pour les transformer en nombre (ce qui explique pourquoi les objets `Number` se comportent généralement comme des valeurs numériques primitives). [Cette opération de conversion <sup>(angl.)</sup>](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tonumber) peut être résumée ainsi&nbsp;:

- Les nombres sont retournés tels quels.
- {{JSxRef("undefined")}} est transformé en {{JSxRef("NaN")}}.
- {{JSxRef("null")}} est transformé en `0`.
- `true` est transformé en `1`, et `false` est transformé en `0`.
- Les chaînes de caractères sont converties en les analysant comme si elles contiennent [un littéral numérique](/fr/docs/Web/JavaScript/Reference/Lexical_grammar#littéreux_numériques). Toute erreur d'analyse produit `NaN`. Il y a quelques différences mineures par rapport à littéral numérique&nbsp;:
  - Les espaces et les caractères de fin de ligne en début et en fin de chaîne de caractères sont ignorés.
  - Un chiffre `0` en début de nombre ne transforme pas celui-ci en littéral en base huit (ni ne le fait rejeter en mode strict).
  - Les signes `+` et `-` sont autorisés au début de la chaîne de caractères pour indiquer son signe. (Dans le code réel, ils «&nbsp;ressemblent&nbsp;» à une partie du littéral, mais sont en réalité des opérateurs unaires distincts.) Cependant, le signe ne peut apparaître qu'une seule fois et ne doit pas être suivi d'un espace.
  - `Infinity` et `-Infinity` sont reconnus comme des valeurs littérales. Dans du code réel, il s'agit de variables globales.
  - Les chaînes de caractères vides ou qui ne contiennent que des blancs sont converties en `0`.
  - [Les séparateurs numériques](/fr/docs/Web/JavaScript/Reference/Lexical_grammar#séparateurs_numériques) (le tiret bas dans `1_050.95`) ne sont pas autorisés.
- [Les grands entiers (<i lang="en">BigInts</i>)](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt) déclenchent une exception {{JSxRef("TypeError")}} pour empêcher une perte de précision involontaire lors de la conversion implicite.
- [Les symboles](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol) déclenchent une exception {{JSxRef("TypeError")}}
- Les objets sont d'abord [convertis en une valeur primitive](/fr/docs/Web/JavaScript/Guide/Data_structures#convertir_en_primitive) à l'aide de leurs méthodes [`[Symbol.toPrimitive]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (où `"number"` est fourni comme indication), `valueOf()`, et `toString()`, selon cet ordre. La valeur primitive obtenue est alors convertie en nombre.

Il existe deux méthodes qui permettent de déclencher cette conversion (ou presque) en JavaScript&nbsp;:

- [Le plus unaire](/fr/docs/Web/JavaScript/Reference/Operators/Unary_plus)&nbsp;: `+x` applique l'algorithme explicité avant pour convertir `x`.
- [La fonction `Number()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)&nbsp;: `Number(x)` utilise le même algorithme pour convertir `x`, sauf que [les grands entiers (<i lang="en">BigInts</i>)](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt) ne déclenchent pas d'exception {{JSxRef("TypeError")}} mais retournent la valeur numérique correspondante, quitte à ce qu'il y ait une perte de précision.

{{JSxRef("Number.parseFloat()")}} et {{JSxRef("Number.parseInt()")}} sont semblables à `Number()` mais servent uniquement à convertir des chaînes de caractères, en suivant des règles légèrement différentes. Par exemple, `parseInt()` ne reconnaît pas le point décimal et `parseFloat()` ne reconnaît pas le préfixe `0x`.

#### Conversion entière

Certaines opérations s'attendent à manipuler des entiers, notamment celles qui fonctionnent avec des indices de tableaux ou de chaînes de caractères, des composantes temporelles et des bases numériques. Après la conversion numérique décrite ci-avant, le résultat est [tronqué](/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc) en un nombre entier (la partie fractionnaire est ignorée). Si le nombre est `±Infinity`, il est retourné tel quel. Si le nombre est `NaN` ou `-0`, c'est `0` qui est retourné. Le résultat est donc toujours un entier (qui n'est pas `-0`) ou `±Infinity`.

Notamment, lorsqu'ils sont convertis en nombres entiers, `undefined` et `null` deviennent tous deux `0`, car `undefined` est converti en `NaN`, qui devient lui aussi `0`.

#### Conversion en nombre à longueur fixe

Certaines fonctions JavaScript «&nbsp;bas-niveau&nbsp;» permettent de manipuler l'encodage binaire des nombres entiers, notamment [les opérateurs binaires](/fr/docs/Web/JavaScript/Reference/Operators#opérateurs_de_décalage_binaires) et les objets {{JSxRef("TypedArray")}}. Les opérateurs binaires convertissent toujours leurs opérandes en entiers sur 32 bits. Dans ces cas, après la conversion numérique décrite avant, le nombre est normalisé à la largeur souhaitée en [tronquant](/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc) la partie fractionnaire, puis en considérant les bits les plus faibles de la représentation de l'entier en complément à deux.

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

- {{JSxRef("Number/Number", "Number()")}}
  - : Crée des objets `Number`. Lorsqu'il est appelé comme fonction, il retourne des valeurs primitives de type `Number`.

## Propriétés statiques

- {{JSxRef("Number.EPSILON")}}
  - : Le plus petit intervalle entre deux nombres représentables.
- {{JSxRef("Number.MAX_SAFE_INTEGER")}}
  - : Le plus grand entier sûr en JavaScript (2<sup>53</sup> - 1).
- {{JSxRef("Number.MAX_VALUE")}}
  - : Le plus grand nombre positif représentable.
- {{JSxRef("Number.MIN_SAFE_INTEGER")}}
  - : Le plus petit entier sûr en JavaScript (-(2<sup>53</sup> - 1)).
- {{JSxRef("Number.MIN_VALUE")}}
  - : Le plus petit nombre positif représentable, c'est-à-dire le nombre positif le plus proche de zéro (sans être zéro).
- {{JSxRef("Number.NaN")}}
  - : Une valeur spéciale «&nbsp;<i lang="en">**N**ot **a** **N**umber</i>&nbsp;» (qui signifie «&nbsp;pas un nombre&nbsp;»).
- {{JSxRef("Number.NEGATIVE_INFINITY")}}
  - : Une valeur spéciale représentant l'infini négatif. Retournée en cas de débordement.
- {{JSxRef("Number.POSITIVE_INFINITY")}}
  - : Une valeur spéciale représentant l'infini. Retournée en cas de débordement.

## Méthodes statiques

- {{JSxRef("Number.isFinite()")}}
  - : Détermine si la valeur passée est un nombre fini.
- {{JSxRef("Number.isInteger()")}}
  - : Détermine si la valeur passée est un entier.
- {{JSxRef("Number.isNaN()")}}
  - : Détermine si la valeur passée vaut `NaN`.
- {{JSxRef("Number.isSafeInteger()")}}
  - : Détermine si la valeur passée est un entier sûr (nombre compris entre -(2<sup>53</sup> - 1) et 2<sup>53</sup> - 1).
- {{JSxRef("Number.parseFloat()")}}
  - : C'est la même chose que la fonction native {{JSxRef("parseFloat()")}}.
- {{JSxRef("Number.parseInt()")}}
  - : C'est la même chose que la fonction native {{JSxRef("parseInt()")}}.

## Propriétés des instances

Ces propriétés sont définies sur `Number.prototype` et partagées par l'ensemble des instances de `Number`.

- {{JSxRef("Object/constructor", "Number.prototype.constructor")}}
  - : La fonction utilisée comme constructeur pour créer l'instance objet. Pour les instances `Number`, la valeur initiale est le constructeur {{JSxRef("Number/Number", "Number()")}}.

### Méthodes des instances

- {{JSxRef("Number.prototype.toExponential()")}}
  - : Retourne une chaîne de caractères représentant le nombre en notation exponentielle.
- {{JSxRef("Number.prototype.toFixed()")}}
  - : Retourne une chaîne de caractères représentant le nombre en notation à virgule fixe.
- {{JSxRef("Number.prototype.toLocaleString()")}}
  - : Retourne une chaîne de caractères avec une représentation sensible à la langue de ce nombre. Remplace la méthode {{JSxRef("Object.prototype.toLocaleString()")}}.
- {{JSxRef("Number.prototype.toPrecision()")}}
  - : Retourne une chaîne de caractères représentant le nombre avec une précision définie en notation à virgule fixe ou exponentielle.
- {{JSxRef("Number.prototype.toString()")}}
  - : Retourne une chaîne de caractères représentant l'objet défini dans la base («&nbsp;_radix_&nbsp;») définie. Remplace la méthode {{JSxRef("Object.prototype.toString()")}}.
- {{JSxRef("Number.prototype.valueOf()")}}
  - : Retourne la valeur primitive de l'objet défini. Remplace la méthode {{JSxRef("Object.prototype.valueOf()")}}.

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
const plusGrandNombre = Number.MAX_SAFE_INTEGER; // (2**53 - 1) => 9007199254740991
const plusPetitNombre = Number.MIN_SAFE_INTEGER; // -(2**53 - 1) => -9007199254740991
```

Lors de l'analyse de données sérialisées au format JSON, les valeurs entières en dehors de cet intervalle peuvent être corrompues lorsque le parseur JSON les convertit en type `Number`.

Une solution possible consiste à utiliser {{JSxRef("String")}} à la place.

Les nombres plus grands peuvent être représentés en utilisant le type {{JSxRef("BigInt")}}.

### Utiliser `Number()` pour convertir un objet `Date`

Dans l'exemple suivant, on convertit un objet {{JSxRef("Date")}} en une valeur numérique grâce à la fonction `Number()`&nbsp;:

```js
const d = new Date("1995-12-17T03:24:00");
console.log(Number(d));
```

Ceci affiche `819199440000`.

### Convertir une chaîne de caractères et `null` en nombres

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

- [Une prothèse d'émulation du comportement moderne de `Number` (dont la prise en charge des littéraux binaires et octaux) dans la bibliothèque `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-number)
- La propriété native {{JSxRef("NaN")}}
- [Les opérateurs arithmétiques](/fr/docs/Web/JavaScript/Reference/Operators#opérateurs_arithmétiques)
- L'objet {{JSxRef("Math")}}
- L'objet {{JSxRef("BigInt")}}
