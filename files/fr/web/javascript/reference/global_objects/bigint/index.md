---
title: BigInt
slug: Web/JavaScript/Reference/Global_Objects/BigInt
tags:
  - BigInt
  - Experimental
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/BigInt
original_slug: Web/JavaScript/Reference/Objets_globaux/BigInt
---
{{JSRef}}

**`BigInt`** est un objet natif qui permet de représenter des nombres entiers supérieurs à 2^53 (la plus grande valeur entière qui puisse être représentée par le type primitif {{jsxref("Number")}}). `BigInt` peut être utilisé afin de représenter de grands entiers de n'importe quelle taille.

> **Note :** BigInt est actuellement une **proposition de niveau 3** pour la [spécification](#Spécifications) ECMAScript.
>
> Lorsque cette proposition atteindra le niveau 4 (soit la spécification finale), BigInt sera le deuxième type natif disponible en JavaScript pour représenter des valeurs numériques.
>
> **`BigInt`** sera ainsi le prochain type primitif ajouté à JavaScript depuis {{JSxRef("Symbol")}} avec ES2015

## Syntaxe

    BigInt(valeur);

### Paramètres

- `valeur`
  - : La valeur numérique de l'objet qu'on souhaite créer. Cet argument peut être une chaîne de caractères ou un entier.

> **Note :** `BigInt()` n'est pas censé être utilisé avec l'opérateur {{jsxref("Opérateurs/L_opérateur_new", "new")}}.

## Description

Un objet `BigInt` est créé en ajoutant un `n` à la fin d'un littéral d'entier — `10n` par exemple — ou en appelant la fonction `BigInt()`.

```js
const plusGrandEntier = 9007199254740991n;

const grandNombre = BigInt(9007199254740991);
// ↪ 9007199254740991n

const grandNombreEnChaîne = BigInt('9007199254740991');
// ↪ 9007199254740991n

const grandeNombreHexa = BigInt("0x1fffffffffffff");
// ↪ 9007199254740991n

const grandeNombreBinaire = BigInt("0b11111111111111111111111111111111111111111111111111111");
// ↪ 9007199254740991n
```

Les objets `BigInt` sont semblables aux objets {{jsxref("Number")}} selon certains aspects mais avec quelques différences clés. Les objets `BigInt` ne peuvent pas êre utilisés avec l'objet {{jsxref("Math")}} et ne peuvent pas être manipulés avec des opérations qui impliquent des objets {{jsxref("Number")}}.

> **Attention :** Il est nécessaire de convertir des valeurs {{jsxref("Number")}} ou `BigInt` dans les opérations qui les combinent.
>
> Attention lors de ces conversions car la précision d'une valeur `BigInt` peut être perdue lorsque ce dernier est converti en {{jsxref("Number")}}.

### Type

Lorsqu'on utilise `typeof` sur une valeur `BigInt`, cet opérateur renverra `"bigint"` :

```js
typeof 1n === "bigint"; // true
typeof BigInt("1") === "bigint"; // true
```

Lorsqu'on « enveloppe » la valeur dans un objet, on aura alors un type `"object"` (comme pour les autres valeurs primitives lorsqu'on les enveloppe dans le constructeur objet) :

```js
typeof Object(1n) === "object"; // true
```

### Opérateurs

On peut utiliser les opérateurs suivants avec les objets `BigInt` : `+`, \``*`\`, \``-`\`, \``**`\`, \``%`\` , [les opérateurs binaires](/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_binaires) (à l'exception de `>>>` / décalage à droite avec des zéros) car les grands entiers sont signés. Le `+` unaire n'est pas non plus pris en charge (afin de [ne pas casser asm.js](https://github.com/tc39/proposal-bigint/blob/master/ADVANCED.md#dont-break-asmjs)).

```js
const nombreSain = BigInt(Number.MAX_SAFE_INTEGER);
// ↪ 9007199254740991

const maxPlusUn = nombreSain + 1n;
// ↪ 9007199254740992n

const leFutur = nombreSain + 2n;
// ↪ 9007199254740993n, cela fonctionne désormais !

const multi = nombreSain * 2n;
// ↪ 18014398509481982n

const subtr = multi – 10n;
// ↪ 18014398509481972n

const mod = multi % 10n;
// ↪ 2n

const bigN = 2n ** 54n;
// ↪ 18014398509481984n

bigN * -1n
// ↪ –18014398509481984n
```

L'opérateur `/` fonctionne de façon analogue aux nombres classiques. Toutefois, les objets `BigInt` permettent uniquement de représenter des entiers et non des nombres décimaux. Aussi, la division ne produira pas de partie décimale pour les `BigInt`.

```js
const attendu = 4n / 2n;
// ↪ 2n

const tronque = 5n / 2n;
// ↪ 2n et pas 2.5n
```

### Comparaisons

Un objet `BigInt` n'est pas strictement égal à {{jsxref( "Number")}} mais peut l'être au sens de l'égalité faible.

```js
0n === 0
// ↪ false

0n == 0
// ↪ true
```

On peut toutefois comparer des objets {{jsxref("Number")}} et `BigInt` :

```js
1n < 2
// ↪ true

2n > 1
// ↪ true

2 > 2
// ↪ false

2n > 2
// ↪ false

2n >= 2
// ↪ true
```

On peut également mélanger ces valeurs au sein de tableaux :

```js
const mixed = [4n, 6, -12n, 10, 4, 0, 0n];
// ↪  [4n, 6, -12n, 10, 4, 0, 0n]

mixed.sort();
// ↪ [-12n, 0, 0n, 10, 4n, 4, 6]
```

On notera que les comparaisons entre les valeurs `BigInt` et les mêmes valeurs, passées dans le constructeur `Object()` ne seront pas équivalentes au sens strict :

```js
0n === Object(0n); // false
Object(0n) === Object(0n); // false

const o = Object(0n);
o === o; // true
```

### Opérations conditionnelles

Un objet `BigInt` se comporte comme un objet {{jsxref("Number")}} lorsqu'il est utilisé dans un contexte booléen : comme argument pour le constructeur {{jsxref("Boolean")}}, comme opérandes pour les opérateurs logiques `||`, \``&&`\` et `!` ou avec les instructions conditonnelles telles que [`if`](/fr/docs/Web/JavaScript/Reference/Instructions/if...else).

```js
if (0n) {
  console.log('Nous voici dans le if !');
} else {
  console.log('Et nous voilà dans le else !');
}

// ↪ "Et nous voilà dans le else !"

0n || 12n
// ↪ 12n

0n && 12n
// ↪ 0n

Boolean(0n)
// ↪ false

Boolean(12n)
// ↪ true

!12n
// ↪ false

!0n
// ↪ true
```

## Méthodes

- **`BigInt.asIntN()`**
  - : Écrète un objet `BigInt` pour obtenir un entier signé entre -2^(largeur-1) et 2^(largeur-1)-1
- `BigInt.asUintN()`
  - : Écrète un objet `BigInt` pour obtenir un entier non-signé entre 0 et 2^(largeur)-1

## Propriétés

- {{jsxref("BigInt.prototype")}}
  - : Cette propriété permet d'ajouter des propriétés aux objets `BigInt`.

## Instances de `BigInt`

L'ensemble des instances de `BigInt` héritent de `BigInt.prototype`. Le prototype du constructeur `BigInt` peut être modifié afin de modifier l'ensemble des instances de `BigInt`.

### Méthodes

{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/BigInt/prototype', 'Méthodes')}}

## Recommandations

### Coercition en `Number`

Lorsqu'on convertit une valeur `BigInt` en {{jsxref("Objets_globaux/Number","Number")}}, on perd en précision. Si on effectue des allers-retours entre ces deux types, on ne conservera pas la même valeur. Aussi, il est recommandé d'utiliser uniquement `BigInt` lorsque les valeurs qu'on manipule seront supérieures à 2^53 et qu'il ne sera pas nécessaire de passer d'un type à l'autre.

### Cryptographie

Les opérations prises en charge pour les valeurs `BigInt` ne s'effectuent pas à temps constant. Aussi, `BigInt` ne serait être utilisé à [des fins cryptographiques](https://www.chosenplaintext.ca/articles/beginners-guide-constant-time-cryptography.html).

## Exemples

### Calculer des nombres premiers

```js
function isPrime(p) {
  for (let i = 2n; i * i <= p; i++) {
    if (p % i === 0n) return false;
  }
  return true;
}

// Takes a BigInt as an argument and returns a BigInt
function nthPrime(nth) {
  let maybePrime = 2n;
  let prime = 0n;

  while (nth >= 0n) {
    if (isPrime(maybePrime)) {
      nth -= 1n;
      prime = maybePrime;
    }
    maybePrime += 1n;
  }

  return prime;
}

nthPrime(20n)
// ↪ 73n
```

## Spécifications

| Spécification                                                   | État                  |
| --------------------------------------------------------------- | --------------------- |
| [`BigInt`](https://tc39.es/proposal-bigint/#sec-bigint-objects) | Brouillon de niveau 3 |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.BigInt")}}

## Voir aussi

- {{jsxref("Number")}}
