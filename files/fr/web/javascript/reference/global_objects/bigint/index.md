---
title: BigInt
slug: Web/JavaScript/Reference/Global_Objects/BigInt
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`BigInt`** représente des valeurs entières qui sont [trop élevées](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) ou [trop faibles](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER) pour être représentées par le type {{Glossary("Primitive", "primitif")}} `number`.

## Description

Une **valeur BigInt**, parfois simplement appelée **BigInt**, est un `bigint` {{Glossary("Primitive", "primitif")}}, créée en ajoutant un `n` à la fin d'un littéral d'entier, ou en appelant la fonction {{JSxRef("BigInt/BigInt", "BigInt()")}} (sans l'opérateur `new`) et en lui fournissant une valeur entière ou une chaîne de caractères.

```js
const plusGrandEntier = 9007199254740991n;

const grandNombre = BigInt(9007199254740991);
// 9007199254740991n

const grandNombreEnChaîne = BigInt("9007199254740991");
// 9007199254740991n

const grandeNombreHexa = BigInt("0x1fffffffffffff");
// 9007199254740991n

const grandNombreOctal = BigInt("0o377777777777777777");
// 9007199254740991n

const grandeNombreBinaire = BigInt(
  "0b11111111111111111111111111111111111111111111111111111",
);
// 9007199254740991n
```

Les valeurs `BigInt` sont similaires aux valeurs `Number` sur certains aspects, mais diffèrent aussi sur quelques points clés&nbsp;: les valeurs `BigInt` ne peuvent pas être utilisées avec les méthodes de l'objet natif {{JSxRef("Math")}} et ne peuvent pas être mélangées avec des valeurs `Number` dans des opérations&nbsp;; elles doivent être coercées au même type. Faites toutefois attention lors de la coercition entre ces types, car la précision d'une valeur `BigInt` peut être perdue lorsqu'elle est convertie en valeur `Number`.

### Information de type

Lorsqu'on utilise `typeof` sur une valeur `BigInt`, cet opérateur donnera `"bigint"`&nbsp;:

```js
typeof 1n === "bigint"; // true
typeof BigInt("1") === "bigint"; // true
```

Un `BigInt` peut être également «&nbsp;enveloppé&nbsp;» dans un `Object`&nbsp;:

```js
typeof Object(1n) === "object"; // true
```

### Opérateurs

La plupart des opérateurs prennent en charge les `BigInt`, toutefois la plupart n'autorisent pas des opérandes de types mixtes — les deux opérandes doivent être des `BigInt` ou aucun ne doit l'être&nbsp;:

- [Opérateurs arithmétiques](/fr/docs/Web/JavaScript/Reference/Operators#opérateurs_arithmétiques)&nbsp;: `+`, `-`, `*`, `/`, `%`, `**`
- [Opérateurs binaires](/fr/docs/Web/JavaScript/Reference/Operators#opérateurs_de_décalage_binaires)&nbsp;: `>>`, `<<`, `&`, `|`, `^`, `~`
- [Négation unaire (`-`)](/fr/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Incrémentation/décrémentation](/fr/docs/Web/JavaScript/Reference/Operators#incrémentation_et_décrémentation)&nbsp;: `++`, `--`

Les opérateurs qui retournent un booléen permettent de mélanger des valeurs `Number` et `BigInt` comme opérandes&nbsp;:

- [Opérateurs relationnels](/fr/docs/Web/JavaScript/Reference/Operators#opérateurs_relationnels) et [opérateurs d'égalité](/fr/docs/Web/JavaScript/Reference/Operators#opérateurs_dégalité)&nbsp;: `>`, `<`, `>=`, `<=`, `==`, `!=`, `===`, `!==`
- [Opérateurs logiques](/fr/docs/Web/JavaScript/Reference/Operators#opérateurs_logiques) ne se basent que sur l'[équivalent à vrai](/fr/docs/Glossary/Truthy) des opérandes

Quelques opérateurs ne prennent pas du tout en charge `BigInt`&nbsp;:

- [Plus unaire (`+`)](/fr/docs/Web/JavaScript/Reference/Operators/Unary_plus) ne peut pas être pris en charge en raison d'un usage conflictuel dans asm.js, il a donc été laissé de côté [pour ne pas casser asm.js <sup>(angl.)</sup>](https://github.com/tc39/proposal-bigint/blob/master/ADVANCED.md#dont-break-asmjs).
- [Décalage à droite non signé (`>>>`)](/fr/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift) est le seul opérateur binaire non pris en charge, car toute valeur BigInt est signée.

Cas particuliers&nbsp;:

- L'addition (`+`) impliquant une chaîne et un BigInt retourne une chaîne de caractères.
- La division (`/`) tronque les composantes fractionnaires vers zéro, car BigInt ne peut pas représenter de quantités fractionnaires.

```js
const previousMaxSafe = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
const maxPlusOne = previousMaxSafe + 1n; // 9007199254740992n
const theFuture = previousMaxSafe + 2n; // 9007199254740993n, cela fonctionne désormais !
const prod = previousMaxSafe * 2n; // 18014398509481982n
const diff = prod - 10n; // 18014398509481972n
const mod = prod % 10n; // 2n
const bigN = 2n ** 54n; // 18014398509481984n
bigN * -1n; // -18014398509481984n
const expected = 4n / 2n; // 2n
const truncated = 5n / 2n; // 2n, pas 2.5n
```

### Comparaisons

Une valeur `BigInt` n'est pas strictement égal à une valeur `Number`, mais elle _l'est_ vaguement&nbsp;:

```js
0n === 0; // false
0n == 0; // true
```

Une valeur `Number` et une valeur `BigInt` peuvent être comparées comme en temps normal&nbsp;:

```js
1n < 2; // true
2n > 1; // true
2 > 2; // false
2n > 2; // false
2n >= 2; // true
```

On peut également mélanger ces valeurs au sein de tableaux&nbsp;:

```js
const mixed = [4n, 6, -12n, 10, 4, 0, 0n];
//  [4n, 6, -12n, 10, 4, 0, 0n]

mixed.sort();
// [-12n, 0, 0n, 10, 4n, 4, 6]

mixed.sort((a, b) => a - b);
// ne fonctionnera pas car la soustraction ne
// fonctionne pas sur des types mixtes
// TypeError: can't convert BigInt value to Number value

// On peut trier avec un comparateur numérique approprié
mixed.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
// [ -12n, 0, 0n, 4n, 4, 6, 10 ]
```

On notera que les comparaisons entre les valeurs `BigInt` et les mêmes valeurs, passées dans le constructeur `Object()`, ne seront pas équivalentes au sens strict&nbsp;:

```js
Object(0n) === 0n; // false
Object(0n) === Object(0n); // false

const o = Object(0n);
o === o; // true
```

Parce que la coercition entre des valeurs `Number` et des valeurs `BigInt` peut entraîner une perte de précision, il est recommandé&nbsp;:

- Utiliser uniquement `BigInt` lorsque des valeurs supérieures à 2<sup>53</sup> sont raisonnablement attendues.
- Ne pas effectuer de coercition entre des valeurs `BigInt` et des valeurs `Number`.

### Opérations conditionnelles

Une valeur `BigInt` suit les mêmes règles de conversion que les valeurs `Number` dans les cas suivants&nbsp;:

- lorsqu'elle est convertie en {{JSxRef("Boolean")}}&nbsp;: via la fonction {{JSxRef("Boolean")}}&nbsp;;
- lorsqu'elle est utilisée avec les [opérateurs logiques](/fr/docs/Web/JavaScript/Reference/Operators) `||`, `&&` et `!`&nbsp;; ou
- dans un test conditionnel comme une instruction [`if`](/fr/docs/Web/JavaScript/Reference/Statements/if...else).

Autrement dit, seule la valeur `0n` est {{Glossary("Falsy", "équivalent à faux")}}&nbsp;; toutes les autres sont {{Glossary("Truthy", "équivalent à vrai")}}.

```js
if (0n) {
  console.log("Nous voici dans le if !");
} else {
  console.log("Et nous voilà dans le else !");
}
// "Et nous voilà dans le else !"

0n || 12n; // 12n
0n && 12n; // 0n
Boolean(0n); // false
Boolean(12n); // true
!12n; // false
!0n; // true
```

### Cryptographie

Les opérations prises en charge pour les valeurs `BigInt` ne s'effectuent pas à temps constant et sont donc sujettes à des [attaques temporelles](https://fr.wikipedia.org/wiki/Attaque_temporelle). Aussi, `BigInt` ne saurait être utilisé à des fins cryptographiques.

### Utilisation avec JSON

L'utilisation de {{JSxRef("JSON.stringify()")}} avec une valeur `BigInt` entraînera une exception `TypeError`, car ces valeurs ne sont pas sérialisées en JSON par défaut. Toutefois, `JSON.stringify()` laisse spécifiquement une porte dérobée pour les valeurs `BigInt`&nbsp;: il essaierait d'appeler la méthode `toJSON()` de `BigInt`. (Il ne le fait pas pour d'autres valeurs primitives.) Par conséquent, vous pouvez implémenter votre propre méthode `toJSON()` (ce qui est l'un des rares cas où la modification des objets intégrés n'est pas explicitement déconseillée)&nbsp;:

```js
BigInt.prototype.toJSON = function () {
  return { $bigint: this.toString() };
};
```

À la place de lever une exception, `JSON.stringify()` produit maintenant une chaîne de caractères comme celle-ci&nbsp;:

```js
console.log(JSON.stringify({ a: 1n }));
// {"a":{"$bigint":"1"}}
```

Si vous ne souhaitez pas modifier `BigInt.prototype`, vous pouvez utiliser le paramètre [`replacer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#largument_remplaçant) de `JSON.stringify` pour sérialiser les valeurs `BigInt`&nbsp;:

```js
function replacer(cle, valeur) {
  if (cle === "big") {
    return valeur.toString();
  }
  return valeur;
}

const donnee = {
  number: 1,
  big: BigInt("18014398509481982"),
};
const chaine = JSON.stringify(donnee, replacer);

console.log(chaine);
// '{"number":1,"big":"18014398509481982"}'
```

Si vous avez des données JSON contenant des valeurs dont vous savez qu'il s'agit de grands entiers, vous pouvez utiliser [le paramètre `reviver`](/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#utiliser_le_paramètre_reviver) de la méthode `JSON.parse()` pour les désérialiser&nbsp;:

```js
function reviver(cle, value) {
  if (cle === "big") {
    return BigInt(value);
  }
  return value;
}

const donnee = '{"number":1,"big":"18014398509481982"}';
const deserialise = JSON.parse(donnee, reviver);

console.log(deserialise);
// {number: 1, big: 18014398509481982n}
```

> [!NOTE]
> Bien qu'il soit possible de rendre le replacer de `JSON.stringify()` générique et de sérialiser correctement les valeurs `BigInt` pour tous les objets comme montré ci‑dessus, le reviver de `JSON.parse()` doit être utilisé avec prudence, car la sérialisation est _irréversible_&nbsp;: il n'est pas possible de distinguer entre un objet qui possède fortuitement une propriété appelée `$bigint` et un véritable `BigInt`.
>
> De plus, l'exemple ci‑dessus crée un objet entier lors du remplacement et de la reconstitution, ce qui peut avoir des implications en matière de performance ou de stockage pour des objets plus volumineux contenant de nombreux `BigInt`. Si vous connaissez la structure de la charge utile, il peut être préférable de simplement les sérialiser sous forme de chaînes de caractères et de les reconstituer en fonction du nom de la clé de propriété.

En fait, JSON permet d'utiliser des nombres de longueur arbitraire&nbsp;; mais ils ne peuvent pas être analysés avec une précision totale en JavaScript. Si vous communiquez avec un autre programme dans un langage qui prend en charge des entiers plus longs (comme les entiers 64 bits) et que vous souhaitez transmettre le `BigInt` sous la forme d'un nombre JSON plutôt que d'une chaîne de caractères JSON, voir [Sérialisation des nombres sans perte](/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON#utiliser_des_nombres_json).

## Constructeur

- {{JSxRef("BigInt/BigInt", "BigInt()")}}
  - : Crée une nouvelle valeur `BigInt`.

## Méthodes statiques

- {{JSxRef("BigInt.asIntN()")}}
  - : Écrête une valeur `BigInt` en une valeur entière signée et renvoie cette valeur.
- {{JSxRef("BigInt.asUintN()")}}
  - : Écrête une valeur `BigInt` en une valeur entière non-signée et renvoie cette valeur.

## Propriétés d'instance

Ces propriétés sont définies sur `BigInt.prototype` et sont partagées par toutes les instances de `BigInt`.

- {{JSxRef("Object/constructor", "BigInt.prototype.constructor")}}
  - : La fonction constructeur qui a créé une instance de l'objet. Pour les instances `BigInt`, la valeur initiale est le constructeur {{JSxRef("BigInt/BigInt", "BigInt")}}.
- `BigInt.prototype[Symbol.toStringTag]`
  - : La valeur initiale de la propriété [`[Symbol.toStringTag]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) est la chaîne de caractères `"BigInt"`. Cette propriété est utilisée dans {{JSxRef("Object.prototype.toString()")}}. Cependant, comme `BigInt` possède également sa propre méthode [`toString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString), cette propriété n'est utilisée que si vous appelez [`Object.prototype.toString.call()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/call) avec un BigInt comme `thisArg`.

## Méthodes d'instance

- {{JSxRef("BigInt.prototype.toLocaleString()")}}
  - : Renvoie une chaîne de caractères avec une représentation localisée de la valeur `BigInt`. Il s'agit d'une surcharge de la méthode [`Object.prototype.toLocaleString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString).
- {{JSxRef("BigInt.prototype.toString()")}}
  - : Renvoie une chaîne de caractères avec une représentation de la valeur `BigInt` dans la base donnée. Il s'agit d'une surcharge de la méthode [`Object.prototype.toString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/toString).
- {{JSxRef("BigInt.prototype.valueOf()")}}
  - : Renvoie la valeur `BigInt`. Il s'agit d'une surcharge de la méthode [`Object.prototype.valueOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf).

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
// 73n
```

> [!NOTE]
> L'implémentation de `isPrime()` est uniquement destinée à la démonstration. Pour une application réelle, vous voudriez utiliser un algorithme fortement mémorisé tel que le [Crible d'Ératosthène](https://fr.wikipedia.org/wiki/Crible_d%27%C3%89ratosth%C3%A8ne) pour éviter les calculs répétés.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Number")}}
- La propriété statique {{JSxRef("Number.MAX_SAFE_INTEGER")}}
