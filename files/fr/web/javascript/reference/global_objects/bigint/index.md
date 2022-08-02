---
title: BigInt
slug: Web/JavaScript/Reference/Global_Objects/BigInt
translation_of: Web/JavaScript/Reference/Global_Objects/BigInt
original_slug: Web/JavaScript/Reference/Objets_globaux/BigInt
browser-compat: javascript.builtins.BigInt
---
{{JSRef}}

**`BigInt`** est [une enveloppe objet](/fr/docs/Glossary/Primitive#primitives_javascript_encapsulées_dans_des_objets) utilisée pour représenter et manipuler les valeurs [primitives](/fr/docs/Glossary/Primitive) `bigint` (grands entiers) qui permettent de représenter des valeurs [plus grandes que celles correctement représentables](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) par une valeur primitive numérique (`number`).

## Description

Un **grand entier**, aussi appelé **BigInt**, est une valeur primitive `bigint`, créée en ajoutant un `n` à la fin d'un littéral d'entier — `10n` par exemple, ou en appelant le constructeur [`BigInt()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) (sans utiliser l'opérateur `new`) en lui fournissant un entier ou une chaîne de caractères en argument.

```js
const plusGrandEntier = 9007199254740991n;

const grandNombre = BigInt(9007199254740991);
// ↪ 9007199254740991n

const grandNombreEnChaîne = BigInt('9007199254740991');
// ↪ 9007199254740991n

const grandeNombreHexa = BigInt('0x1fffffffffffff');
// ↪ 9007199254740991n

const grandNombreOctal = BigInt('0o377777777777777777');
// ↪ 9007199254740991n

const grandeNombreBinaire = BigInt('0b11111111111111111111111111111111111111111111111111111');
// ↪ 9007199254740991n
```

Les objets `BigInt` sont semblables aux objets [`Number`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number) selon certains aspects mais avec quelques différences clés. Les objets `BigInt` ne peuvent pas être utilisés avec les méthodes de l'objet [`Math`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Math) et ne peuvent pas être manipulés avec des opérations qui impliquent des objets [`Number`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number). Il est donc nécessaire de convertir des valeurs [`Number`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number) ou `BigInt` dans les opérations qui les combinent, mais attention lors de ces conversions car la précision d'une valeur `BigInt` peut être perdue lorsque ce dernier est converti en [`Number`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number).

### Information de type

Lorsqu'on utilise `typeof` sur une valeur `BigInt`, cet opérateur renverra `"bigint"`&nbsp;:

```js
typeof 1n === 'bigint';           // true
typeof BigInt('1') === 'bigint';  // true
```

Lorsqu'on «&nbsp;enveloppe&nbsp;» la valeur primitive dans un objet, on aura alors un type `"object"` (comme pour les autres valeurs primitives lorsqu'on les enveloppe dans le constructeur objet)&nbsp;:

```js
typeof Object(1n) === 'object'; // true
```

### Opérateurs

On peut utiliser les opérateurs suivants avec les objets `BigInt`&nbsp;:

```
+ * - % **
```

[Les opérateurs binaires](/fr/docs/Web/JavaScript/Reference/Operators) sont également pris en charge (à l'exception de `>>>` / décalage à droite avec des zéros) car les grands entiers sont signés.

Le `+` unaire n'est pas non plus pris en charge (afin de [ne pas casser `asm.js`](https://github.com/tc39/proposal-bigint/blob/master/ADVANCED.md#dont-break-asmjs)).

```js
const nombreSain = BigInt(Number.MAX_SAFE_INTEGER);
// ↪ 9007199254740991

const maxPlusUn = nombreSain + 1n;
// ↪ 9007199254740992n

const leFutur = nombreSain + 2n;
// ↪ 9007199254740993n, cela fonctionne désormais !

const multi = nombreSain * 2n;
// ↪ 18014398509481982n

const subtr = multi - 10n;
// ↪ 18014398509481972n

const mod = multi % 10n;
// ↪ 2n

const bigN = 2n ** 54n;
// ↪ 18014398509481984n

bigN * -1n;
// ↪ -18014398509481984n
```

L'opérateur `/` fonctionne de façon analogue aux nombres classiques. Toutefois, les objets `BigInt` permettent uniquement de représenter des entiers et non des nombres décimaux. Aussi, la division ne produira pas de partie décimale pour les `BigInt`.

```js
const attendu = 4n / 2n;
// ↪ 2n

const tronque = 5n / 2n;
// ↪ 2n et pas 2.5n
```

### Comparaisons

Un objet `BigInt` n'est pas strictement égal à [`Number`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number) mais peut l'être au sens de l'égalité faible.

```js
0n === 0;
// ↪ false

0n == 0;
// ↪ true
```

On peut toutefois comparer des objets [`Number`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number) et `BigInt`&nbsp;:

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

On peut également mélanger ces valeurs au sein de tableaux&nbsp;:

```js
const mixed = [4n, 6, -12n, 10, 4, 0, 0n];
// ↪  [4n, 6, -12n, 10, 4, 0, 0n]

mixed.sort();
// ↪ [-12n, 0, 0n, 10, 4n, 4, 6]

mixed.sort((a, b) => a - b);
// ne fonctionnera pas car la soustraction ne 
// fonctionne pas sur des types mixtes
// TypeError: can't convert BigInt value to Number value

// On peut trier avec un comparateur numérique approprié
mixed.sort((a, b) => (a < b) ? -1 : ((a > b) ? 1 : 0));
// ↪ [ -12n, 0, 0n, 4n, 4, 6, 10 ]
```

On notera que les comparaisons entre les valeurs `BigInt` et les mêmes valeurs, passées dans le constructeur `Object()`, ne seront pas équivalentes au sens strict&nbsp;:

```js
0n === Object(0n);          // false
Object(0n) === Object(0n);  // false

const o = Object(0n);
o === o;                    // true
```

### Opérations conditionnelles

Une valeur `BigInt` se comporte comme une valeur [`Number`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number) lorsqu'elle est utilisée dans un contexte booléen&nbsp;: comme argument pour le constructeur [`Boolean`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean), comme opérandes pour les [opérateurs logiques](/fr/docs/Web/JavaScript/Reference/Operators) `||`, `&&` et `!` ou avec les instructions conditionnelles telles que [`if`](/fr/docs/Web/JavaScript/Reference/Statements/if...else).

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

## Constructeur

- [`BigInt()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)
  - : Crée une nouvelle valeur `BigInt`.

## Méthodes statiques

- [`BigInt.asIntN()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt/asIntN)
  - : Écrête une valeur `BigInt` en une valeur entière signée et renvoie cette valeur.
- [`BigInt.asUintN()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt/asUintN)
  - : Écrête une valeur `BigInt` en une valeur entière non-signée et renvoie cette valeur.

## Méthodes d'instance

- [`BigInt.prototype.toLocaleString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toLocaleString)
  - : Renvoie une chaîne de caractères avec une représentation localisée de la valeur `BigInt`. Il s'agit d'une surcharge de la méthode [`Object.prototype.toLocaleString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString).
- [`BigInt.prototype.toString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString)
  - : Renvoie une chaîne de caractères avec une représentation de la valeur `BigInt` dans la base donnée. Il s'agit d'une surcharge de la méthode [`Object.prototype.toString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/toString).
- [`BigInt.prototype.valueOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt/valueOf)
  - : Renvoie la valeur `BigInt`. Il s'agit d'une surcharge de la méthode [`Object.prototype.valueOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf).

## Recommandations d'usage

### Coercition en `Number`

Lorsqu'on convertit une valeur `BigInt` en [`Number`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number), on perd en précision. Si on effectue des allers-retours entre ces deux types, on ne conservera pas la même valeur. Aussi, il est recommandé&nbsp;:

- D'utiliser uniquement `BigInt` lorsque les valeurs qu'on manipule seront supérieures à `2^53` et qu'il ne sera pas nécessaire de passer d'un type à l'autre
- De ne pas passer d'un type à l'autre (`BigInt` à `Number` et vice versa)

### Cryptographie

Les opérations prises en charge pour les valeurs `BigInt` ne s'effectuent pas à temps constant et sont donc sujettes à des [attaques temporelles](https://fr.wikipedia.org/wiki/Attaque_temporelle). Aussi, `BigInt` ne saurait être utilisé à des fins cryptographiques.

### Utilisation avec JSON

L'utilisation de [`JSON.stringify()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) avec une valeur `BigInt` entraînera une exception `TypeError`, car ces valeurs ne sont pas sérialisées en JSON par défaut. Toutefois, il est possible d'utiliser [le paramètre de remplacement](/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#largument_remplaçant) de `JSON.stringify` pour sérialiser les propriétés `BigInt` sans erreur&nbsp;:

```js
function remplacement(cle, valeur) {
  if (cle === 'big') {
    return valeur.toString();
  }
  return valeur;
}

const donnee = {
  number: 1,
  big: BigInt('18014398509481982'),
};
const chaine = JSON.stringify(donnee, remplacement);

console.log(chaine);
// ↪ '{"number":1,"big":"18014398509481982"}'
```

Si vous avez des données JSON contenant des valeurs dont vous savez qu'il s'agit de grands entiers, vous pouvez utiliser [le paramètre `reviver`](/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#utiliser_le_paramètre_reviver) de la méthode `JSON.parse()` pour les désérialiser&nbsp;:

```js
function reviver(cle, value) {
  if (cle === 'big') {
    return BigInt(value);
  }
  return value;
}

const donnee = '{"number":1,"big":"18014398509481982"}';
const deserialise = JSON.parse(donnee, reviver);

console.log(deserialise);
// ↪ {number: 1, big: 18014398509481982n}
```

## Exemples

### Calculer des nombres premiers

```js
function isPrime(p) {
  for (let i = 2n; i * i <= p; i++) {
    if (p % i === 0n) return false;
  }
  return true;
}

// Prend une valeur BigInt comme argument
// Renvoie une valeur BigInt
function nthPrime(nth) {
  let maybePrime = 2n;
  let prime = 0n;

  while (nth >= 0n) {
    if (isPrime(maybePrime)) {
      nth--;
      prime = maybePrime;
    }
    maybePrime++;
  }

  return prime;
}

nthPrime(20n);
// ↪ 73n
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Number`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [`Number.MAX_SAFE_INTEGER`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)
